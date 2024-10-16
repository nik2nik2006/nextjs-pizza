import {calcTotalPizzaPrices} from "@/shared/lib/calc-total-pizza-prices";
import {mapPizzaType, PizzaSize, PizzaType} from "@/shared/constants/pizza";
import {Ingredient, ProductItem} from "@prisma/client";

export const getPizzaDetails = (
    type: PizzaType,
    size: PizzaSize,
    items: ProductItem[],
    ingredients: Ingredient[],
    selectedIngredients: Set<number>
) => {
    const totalPrice = calcTotalPizzaPrices(
        type,
        size,
        items,
        ingredients,
        selectedIngredients
    );
    const textDetails = `${size} см, ${mapPizzaType[type]} пицца`;

    return {totalPrice, textDetails};
}
