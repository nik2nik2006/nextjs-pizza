import {mapPizzaType, PizzaSize, PizzaType} from "@/shared/constants/pizza";
import {Ingredient} from "@prisma/client";
import {CartStateItem} from "@/shared/lib/get-cart-details";

export const getCartItemDetails = (
    ingredients: CartStateItem['ingredients'],
    pizzaType?: number,
    pizzaSize?: number,
): string => {
    const details = [];

    if (pizzaSize && pizzaType) {
        const typeName = mapPizzaType[pizzaType];
        details.push(`${typeName} ${pizzaSize} см`);
    }

    if (ingredients) {
        details.push(...ingredients.map((ingredient) => ingredient.name))
    }

    return details.join(', ');
}