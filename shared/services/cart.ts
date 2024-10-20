import {axiosInstance} from "@/shared/services/instance";
import {ApiRoutes} from "@/shared/services/constants";
import {CartDTO} from "@/shared/services/dto/cart.dto";

export const fetchCart = async (): Promise<CartDTO> => {
    const {data} = await axiosInstance.get<CartDTO>(ApiRoutes.CART);

    return data;
}