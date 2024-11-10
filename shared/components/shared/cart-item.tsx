'use client';

import React from "react";
import { cn } from '@/shared/lib/utils';
import { x } from 'lucide-react';
import { CartItemProps} from "@/shared/components/shared/cart-item-details/cart-item-details.types";
import * as CartItemDetails from './cart-item-details'
import {Ingredient} from "@prisma/client";

interface Props extends CartItemProps {
    onClickCountButton?: (type: 'plus' | 'minus') => void;
    onClickRemove?: () => void;
    ingredients?: Ingredient[];
    className?: string;
}

export const CartItem: React.FC<Props> = ({
    name,
    price,
    imageUrl,
    quantity,
    className,
    onClickCountButton,
    onClickRemove,
}) => {
    return (
        <div className={cn('flex items-center justify-between', className)}>
            <div className='flex items-center gap-5 flex-1'>
                <CartItemDetails.Image src={imageUrl} />
                <CartItemDetails.Info name={name} />
            </div>

            <CartItemDetails.Price value={price} />
        </div>
    )
}