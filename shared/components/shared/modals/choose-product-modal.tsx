'use client'

import React from 'react';
import {Dialog, DialogContent} from "@/shared/components/ui";
import { ChooseProductForm } from "@/shared/components/shared";
import {cn} from "@/shared/lib/utils";
import {useRouter} from "next/navigation";
import {ProductWithRelations} from "@/@types/prisma";
import {ChoosePizzaForm} from "@/shared/components/shared/choose-pizza-form";
import {useCartStore} from "@/shared/store";
import toast from "react-hot-toast";

interface Props {
    product: ProductWithRelations;
    className?: string;
};

export const ChooseProductModal: React.FC<Props> = ({ product, className}) =>{
    const router = useRouter();
    const firstItem = product.items[0]
    const isPizzaForm = Boolean(firstItem.pizzaType);
    const [addCartItem, loading] = useCartStore(state => [state.addCartItem, state.loading]);

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
        try {
            const itemId = productItemId ?? firstItem.id

            await addCartItem({
                productItemId: itemId,
                ingredients
            });

            toast.success(product.name + ' добавлена в козину')
            router.back();
        } catch (err) {
            toast.error('Не удалось добавить товар в корзину');
            console.error(err);
        }
    }

    return (
        <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
            <DialogContent
                className={cn(
                "p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
                className
            )}>
                {
                    isPizzaForm ? (
                        <ChoosePizzaForm
                            imageUrl={product.imageUrl}
                            name={product.name}
                            ingredients={product.ingredients}
                            items={product.items}
                            onSubmit={onSubmit}
                            loading={loading}
                        />
                    ) : (
                        <ChooseProductForm
                            imageUrl={product.imageUrl}
                            name={product.name}
                            onSubmit={onSubmit}
                            price={firstItem.price}
                            loading={loading}
                        />
                    )
                }
            </DialogContent>
        </Dialog>
    );
};





