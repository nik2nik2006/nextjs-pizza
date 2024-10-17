import React from 'react';
import {cn} from "@/shared/lib/utils";

import * as CartItem from "./cart-item-details/index"
import {CartItemProps} from "@/shared/components/shared/cart-item-details/cart-item-details.types";

interface Props extends CartItemProps {
    className?: string;
};
export const CartDrawerItem: React.FC<Props> = ({
    id,
    imageUrl,
    name,
    price,
    quantity,
    className
}) => {
    return (
        <div className={cn('flex bg-white p-5 gap-6', className)}>
            <CartItem.Image src={imageUrl} />

            <div className='flex-1' >

            </div>
        </div>
    );
};