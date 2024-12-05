import { NextRequest, NextResponse } from "next/server";
import {PaymentCallbackData} from "@/@types/youkassa";
import {prisma} from "@/prisma/prisma-client";
import {OrderStatus} from "@prisma/client";
import {CartItemDTO} from "@/shared/services/dto/cart.dto";
import {sendEmail} from "@/shared/lib";
import {OrderSuccessTemplate} from "@/shared/components/shared/email-templates/order-success";

export async function POST(req: NextRequest) {
    try {
        const body = (await req.json()) as PaymentCallbackData;

        const order = await prisma.order.findFirst({
            where:{
                id: Number(body.object.metadata.order.order_id),
            },
        })

        if (!order) {
            return NextResponse.json({ error: 'Order not found' });
        }

        const isSucceeded = body.object.status === 'succeeded';

        await prisma.order.update({
            where: {
                id: order.id,
            },
            data: {
                status: isSucceeded ? OrderStatus.SUCCEEDED : OrderStatus.CANCELLED,
            }
        })

        const items = order?.items as unknown as CartItemDTO[];

        if (isSucceeded) {
            await sendEmail(
                order.email,
                'Next Pizza | Ваш заказ оформлен',
                OrderSuccessTemplate({orderId: order.id, items})
            )
        } else {
            // Письмо о неуспешном прохождении платежа
        }
    }
    catch (error) {
        console.log('[Checkout Callback] Error:', error)
        return NextResponse.json('Error', { status: 500});
    }
}