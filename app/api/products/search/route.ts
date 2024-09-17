import { prisma } from '/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

// export async function GET(req: NextRequest) {
export async function GET(query) {
    console.log('req= ', req)
    // const query = req.nextUrl.searchParams.get('query') || '';
    console.log('query= ', query);

    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: query,
                mode: 'insensitive',
            },
        },
        take: 5,
    });

    return NextResponse.json(products);
}



