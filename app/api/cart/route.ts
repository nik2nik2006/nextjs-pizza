import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/prisma/prisma-client";
import * as crypto from "crypto";
import {findOrCreateCart} from "@/shared/lib";

export async function GET(req: NextRequest) {
    try {
        const token = req.cookies.get('cartToken')?.value;

        if (!token) {
            return NextResponse.json({ error: 'Cart token not found', totalAmount: 0, items: []});
        }

        const userCart = await prisma.cart.findFirst({
            where: {
                OR: [
                    {
                        token,
                    }
                ]
            },
            include: {
                items: {
                    orderBy: {
                        createdAt: 'desc',
                    },
                    include: {
                        productItem: {
                            include: {
                                product: true,
                            }
                        },
                        ingredients: true,
                    }
                }
            }
        })

        return NextResponse.json(userCart);
    } catch (error) {
        console.log('[CART_GET] Server error', error);
        return NextResponse.json({ message: 'Не удалось получить корзину'}, { status: 500})
    }
}

export async function POST(req: NextRequest) {
    try {
        let token = req.cookies.get('cartToken')?.value;

        if (!token) {
            token = crypto.randomUUID();
        }
        const userCart = await findOrCreateCart(token)

        const findCartItem = await prisma.cartItem.findFirst({

        })
    } catch (error) {
        console.log('[CART_POST] Server error', error);
        return NextResponse.json({ message: 'Не удалось создать корзину'}, { status: 500})
    }
}




