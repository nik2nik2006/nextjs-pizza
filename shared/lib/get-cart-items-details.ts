import {mapPizzaType, PizzaSize, PizzaType} from "@/shared/constants/pizza";
import {Ingredient} from "@prisma/client";

export const getCartItemsDetails = (
    pizzaType: PizzaType,
    pizzaSize: PizzaSize,
    ingredients: Ingredient[]
): string => {
    const details = [];

    if (pizzaSize && pizzaType) {
        const typeName = mapPizzaType[pizzaType];
        details.push(`${pizzaSize} см`);
    }

    if (ingredients) {
        details.push(...ingredients.map((ingredient) => ingredient.name))
    }

    return details.join(', ');
}