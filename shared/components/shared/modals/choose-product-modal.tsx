'use client'

import React from 'react';
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/shared/components/ui";
import { ChooseProductForm } from "@/shared/components/shared";
import {cn} from "@/shared/lib/utils";
import {useRouter} from "next/navigation";
import {ProductWithRelations} from "@/@types/prisma";
import {ChoosePizzaForm} from "@/shared/components/shared/choose-pizza-form";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";

interface Props {
    product: ProductWithRelations;
    className?: string;
};

export const ChooseProductModal: React.FC<Props> = ({ product, className}) =>{
    const router = useRouter();
    const isPizzaForm = Boolean(product.items[0].pizzaType);

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
                        />
                    ) : (
                        <ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
                    )
                }
            </DialogContent>
        </Dialog>
    );
};





