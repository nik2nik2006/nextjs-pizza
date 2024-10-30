import React from 'react';
import {cn} from "@/shared/lib/utils";
import {PizzaImage, Title} from "@/shared/components/shared/index";
import {Button} from "@/shared/components/ui";

interface Props {
    imageUrl: string;
    name: string;
    price: number;
    loading?: boolean;
    onSubmit?: VoidFunction;
    className?: string;
};

/** Форма выбора продукта  */
export const ChooseProductForm: React.FC<Props> = ({
    name,
    imageUrl,
    price,
    loading,
    onSubmit,
    className
    }) => {

    return (
        <div className={cn('flex flex-1' , className)}>
            <div className='flex items-center justify-center flex-1 relative w-full' >
                <img
                    src={imageUrl}
                    alt={name}
                    className='relative left-2 top-2 transition-all z-10 duration-300 w-[350px] h-[350px]'
                />
            </div>

            <div className='w-[490px] bg-[#f7f6f5] p-7'>
                <Title text={name} size='md' className='font-extrabold mb-1' />

                <Button
                    loading={loading}
                    onClick={() => onSubmit?.()}
                    className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
                    Добавить в корзину за {price} р.
                </Button>
            </div>
        </div>
    );
};