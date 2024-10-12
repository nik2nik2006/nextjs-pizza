import React from "react";
import {Api} from "@/shared/services/api-client";
import { Ingredient } from "@prisma/client";

export const useIngredients = () => {
    const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
    const [loading, setLoading] = React.useState(true);


    React.useEffect(() => {
        async function fetchIngredients() {
            try {
                setLoading(true);
                const ingredients = await Api.ingredients.getAll();
                setIngredients(
                    ingredients.map((ingredient) => ({ id: ingredient.id, name: ingredient.name}))
                );
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchIngredients();
    }, []);

    return {
        ingredients,
        loading
    };
}