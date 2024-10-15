import React from "react";
import {PizzaSize, PizzaType} from "@/shared/constants/pizza";
import {Variant} from "@/shared/components/shared/group-variants";
import {useSet} from "react-use";

interface ReturnProps {
    size: PizzaSize;
    type: PizzaType;
    selectedIngredients: Set<number>;
    setSize: (size: PizzaSize) => void;
    setType: (type: PizzaType) => void;
    addIngredient: (id: number) => void;
}

export const usePizzaOptions = (availableSizes: Variant[]): ReturnProps => {
    const [size, setSize] = React.useState<PizzaSize>(20);
    const [type, setType] = React.useState<PizzaType>(1);
    const [selectedIngredients, { toggle: addIngredient }] = useSet(new Set<Number>());

    React.useEffect(() => {
        const isAvailableSize = availableSizes?.find(
            (item) => Number(item.value) === size && !item.disabled
        );
        const availableSize = availableSizes?.find((item) => !item.disabled);

        if (!isAvailableSize && availableSize) {
            setSize(Number(availableSize.value) as PizzaSize)
        }
    }, [type]);

    return {
        size,
        type,
        selectedIngredients,
        setSize,
        setType,
        addIngredient
    }
}