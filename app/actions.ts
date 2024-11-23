'use server';

import {CheckoutFormValues} from "@/shared/components/shared/checkout/checkout-form-schema";
import {prisma} from "@/prisma/prisma-client";
import { OrderStatus} from '@prisma/client';
import {cookies} from "next/headers";

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
                    ingredients: true,
                    productItem: {
                        include: {
                            product: true,
                        }
                    }
                }
            }
            where: {
                token: cartToken,
            }
        })

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
            },
        )}

    } catch (err) {
        
    }
    
    
    // console.log()
    //
    // const token = '123';
    //

    // });

    return 'https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations';
}