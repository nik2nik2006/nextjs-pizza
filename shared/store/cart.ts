import {create} from "zustand";
import {Api} from "@/shared/services/api-client";
import {getCartDetails} from "@/shared/lib";
import { CartStateItem } from "@/shared/lib/get-cart-details";

export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    items: CartStateItem[];

    /* Получение товаров из карзины */
    fetchCartItems: () => Promise<void>;

    /* Запрос на обновление количества товаров */
    updateItemQuantity: (id: number, quantity: number) => Promise<void>;

    /* Запрос на добавление товара в корзину */
    addCartItem: (value: any) => Promise<void>;

    /* Запрос на удаление товара из корзины */
    remoteCartItem: (id: number) => Promise<void>;
};

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    error: false,
    loading: true,
    totalAmount: 0,

    fetchCartItems: async () => {
        try {
            set({loading: true, error: false});
            const data = await Api.cart.fetchCart();
            set(getCartDetails(data));
        } catch (error) {
            console.error(error);
            set({error: true})
        } finally {
            set({loading: false});
        }
    },
    remoteCartItem: async (id: number) => {},
    updateItemQuantity: async (id: number, quantity: number) => {},
    addCartItem: async (value: any) => {},
}));





