import React from 'react';
import {cn} from "@/shared/lib/utils";
import {PizzaImage, Title} from "@/shared/components/shared/index";
import {Button} from "@/shared/components/ui";
import {GroupVariants} from "@/shared/components/shared/group-variants";
import {pizzaSizes} from "@/shared/constants/pizza";

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
    const size = 20

    return (
        <div className={cn('flex flex-1' , className)}>
            <PizzaImage imageUrl={imageUrl} size={size} />
            <div className='w-[490px] bg-[#f7f6f5] p-7'>
                <Title text={name} size='md' className='font-extrabold mb-1' />
                <p className='text-gray-400'>{textDetails}</p>
                <GroupVariants items={pizzaSizes} />
                <Button className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
                    Добавить в корзину за {totalPrice} р.
                </Button>
            </div>
        </div>
    );
};