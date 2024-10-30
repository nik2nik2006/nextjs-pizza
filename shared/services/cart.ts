import {axiosInstance} from "@/shared/services/instance";
import {ApiRoutes} from "@/shared/services/constants";
import {CartDTO, CreateCartItemValues} from "@/shared/services/dto/cart.dto";

export const getCart = async (): Promise<CartDTO> => {
    return (await axiosInstance.get<CartDTO>(ApiRoutes.CART)).data;
}

export const updateItemQuantity = async (itemId: number, quantity: number): Promise<CartDTO> => {
    return (await axiosInstance.patch<CartDTO>(ApiRoutes.CART + '/' + itemId, { quantity })).data;
}

export const removeCartItem = async (id: number): Promise<CartDTO> => {
    return (await axiosInstance.delete<CartDTO>(ApiRoutes.CART + '/' + id)).data;
}

export const addCartItem = async (values: CreateCartItemValues): Promise<CartDTO> => {
    return (await axiosInstance.post<CartDTO>(ApiRoutes.CART, values)).data as CartDTO;
}



