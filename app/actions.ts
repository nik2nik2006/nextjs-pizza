'use server';


import {CheckoutFormValues} from "@/shared/components/shared/checkout/checkout-form-schema";
import {prisma} from "@/prisma/prisma-client";
import {OrderStatus} from '@prisma/client';
import {cookies} from "next/headers";
import {sendEmail} from "@/shared/lib";
import {PayOrderTemplate} from "@/shared/components/shared/email-templates/pay-order";

export async function createOrder(data: CheckoutFormValues) {
    try {
        const cookieStore = cookies();
        const cartToken = cookieStore.get('cartToken')?.value;

        if (!cartToken) {
            throw new Error('Cart token not found');
        }

        const userCart = await prisma.cart.findFirst({
            include: {
                user: true,
                items: {
                    include: {
                        ingredients: true,
                        productItem: {
                            include: {
                                product: true,
                            },
                        },
                    },
                },
            },
            where: {
                token: cartToken,
            },
        });

        if (!userCart) {
            throw new Error('Cart not found');
        }

        if (userCart?.totalAmount === 0) {
            throw new Error('Cart is empty');
        }

        const order = await prisma.order.create({
            data: {
                token: cartToken,
                fullName: data.firstName + ' ' + data.lastName,
                email: data.email,
                phone: data.phone,
                address: data.address,
                comment: data.comment,
                totalAmount: userCart.totalAmount,
                status: OrderStatus.PENDING,
                items: JSON.stringify(userCart.items),
            }
        })

        await prisma.cart.update({
            where: {
                id: userCart.id,
            },
            data: {
                totalAmount: 0,
            }
        });

        await prisma.cartItem.deleteMany({
            where: {
                cartId: userCart.id,
            },
        })

        // TODO: Сделать создание ссылки оплаты

        await sendEmail(
            data.email,
            'Next Pizza / Оплатите заказ №' + order.id,
            PayOrderTemplate({
                orderId: order.id,
                totalAmount: order.totalAmount,
                paymentUrl: 'https://resend.com/docs/send-with-nextjs#1-install',
            }),
        );
        console.log('OK!')

    } catch (err) {
        console.log('[CreateOrder] Server error', err);
    }


    // console.log()
    //
    // const token = '123';
    //

    // });

}