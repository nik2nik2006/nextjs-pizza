import React from 'react';
import {Button} from "@/shared/components/ui";
import {cn} from "@/shared/lib/utils";
import {ArrowRight, ShoppingCart} from "lucide-react";
import {CartDrawer} from "@/shared/components/shared";

interface Props {
    className?: string;
};
export const CartButton: React.FC<Props> = ({className}) => {
    return (
        <CartDrawer>
            <Button className={cn('group relative', className)}>
                <p>520 ₽</p>
                <span className='h-full w-[1px] bg-white/30 mx-3'></span>
                <div className='flex items-center gap-1 transition duration-300 group-hover:opacity-0'>
                    <ShoppingCart size={16} className='relative' strokeWidth={2}/>
                    <b>3</b>
                </div>
                <ArrowRight size={20} className='absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:-translate-x-0'/>
            </Button>
        </CartDrawer>
    );
};