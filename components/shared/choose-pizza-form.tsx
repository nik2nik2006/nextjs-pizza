import React from 'react';
import {cn} from "@/lib/utils";
import {ProductImage, Title} from "@/components/shared";
import {Button} from "@/components/ui";

interface Props {
    imageUrl: string;
    name: string;
    ingredients: any[];
    items?: any[];
    onClickAdd?: VoidFunction;
    className?: string;
};
export const ChoosePizzaForm: React.FC<Props> = ({
    name,
    items,
    imageUrl,
    ingredients,
    onClickAdd,
    className
    }) => {
    const textDetails = '30 см, традиционное тесто 30';
    const totalPrice = 350;

    return (
        <div className={cn('flex flex-1' , className)}>
            <ProductImage imageUrl={imageUrl} size={30} />
            <div className='w-[490px] bg-[#f7f6f5] p-7'>
                <Title text={name} size='md' className='font-extrabold mb-1' />
                <p className='text-gray-400'>{textDetails}</p>
                <Button className='h-[55px] px-10 text-base rounded-[18px] w-full'>
                    Добавить в корзину за {totalPrice} р.
                </Button>
            </div>
        </div>
    );
};