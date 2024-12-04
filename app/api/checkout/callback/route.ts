import { NextRequest, NextResponse } from "next/server";
import {PaymentCallbackData} from "@/@types/youkassa";
import {prisma} from "@/prisma/prisma-client";
import {OrderStatus} from "@prisma/client";
import {CartItemDTO} from "@/shared/services/dto/cart.dto";

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

        await prisma.order.update({
            where: {
                id: order.id,
            },
            data: {
                status: OrderStatus.SUCCEEDED,
            }
        })

        const items = order?.items as unknown as CartItemDTO[];
    }
    catch (error) {
        console.log('[Checkout Callback] Error:', error)
        return NextResponse.json('Error', { status: 500});
    }
}