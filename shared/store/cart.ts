import {create} from "zustand";
import {Api} from "@/shared/services/api-client";
import { getCartDetails } from "@/shared/lib";
import { CartStateItem } from "@/shared/lib/get-cart-details";
import { removeCartItem } from "@/shared/services/cart";
import {CreateCartItemValues} from "../services/dto/cart.dto";

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
    addCartItem: (value: CreateCartItemValues) => Promise<void>;

    /* Запрос на удаление товара из корзины */
    removeCartItem: (id: number) => Promise<void>;
};

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    error: false,
    loading: true,
    totalAmount: 0,

    fetchCartItems: async () => {
        try {
            set({loading: true, error: false});
            const data = await Api.cart.getCart();
            set(getCartDetails(data));
        } catch (error) {
            console.error(error);
            set({error: true})
        } finally {
            set({loading: false});
        }
    },
    updateItemQuantity: async (id: number, quantity: number) => {
        try {
            set({loading: true, error: false});
            const data = await Api.cart.updateItemQuantity(id, quantity);
            set(getCartDetails(data));
        } catch (error) {
            console.error(error);
            set({error: true})
        } finally {
            set({loading: false});
        }
    },

    removeCartItem: async (id: number) => {
        try {
            set({loading: true, error: false});
            const data = await Api.cart.removeCartItem(id);
            set(getCartDetails(data));
        } catch (error) {
            console.error(error);
            set({error: true})
        } finally {
            set({loading: false});
        }
    },
    addCartItem: async (value: CreateCartItemValues) => {
        try {
            set({loading: true, error: false});
            const data = await Api.cart.addCartItem(value);
            set(getCartDetails(data));
        } catch (error) {
            console.error(error);
            set({error: true})
        } finally {
            set({loading: false});
        }
    },
}));





