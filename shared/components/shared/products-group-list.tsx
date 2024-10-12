"use client";

import React from 'react';
import {useIntersection} from "react-use";
import {useCategoryStore} from "@/shared/store/category";

import {Title} from "@/shared/components/shared/title";
import {cn} from "@/shared/lib/utils";
import {ProductCard} from "@/shared/components/shared/product-card";

interface Props {
    title: string;
    items: any[];
    categoryId: number;
    className?: string;
    listClassName: string;
}

export const ProductsGroupList: React.FC<Props> = ({
                                                       title,
                                                       items,
                                                       categoryId,
                                                       className,
                                                       listClassName
}) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);

    const intersectionRef = React.useRef(null)
    const intersection = useIntersection(intersectionRef, {
        root: null,
        rootMargin: '0px',
        threshold: 1,
    })
    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(categoryId);
        }
    }, [intersection?.isIntersecting])

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size='lg' className='font-extrabold mb-5'  />
            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {items.map((product, i) =>
                    <ProductCard
                        key={i}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price}
                    />
                )
                }
            </div>
        </div>
    );
};
