import {useRouter, useSearchParams} from "next/navigation";
import {useFilterIngredients} from "@/hooks/use-filter-ingredients";


interface PriceProps {
    priceFrom?: number;
    priceTo?: number;
}

interface QueryFilters extends PriceProps {
    pizzaTypes: string;
    sizes: string;
    ingredients: string;
}


export const useFilters = () => {
    const router = useRouter();

    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

    const { ingredients, loading, onAddId, selectedIngredients } = useFilterIngredients(
        searchParams.get('ingredients')?.split(',')
    );
}







