import axios from "axios";
import { PaymentData } from "@/@types/youkassa";

export async function creatPayment(details: any) {
    const { data } = await axios.post<PaymentData>(
        'https://api.yookassa.ru/v3/payments',
        {
            amount: {
                value: details.amount,
                currency: 'RUB'
            },
            capture: true,
            description: details.description,
            metadata: {
                order_id: details.orderId,
            },
            confirmation: {
                type: 'redirect',
                return_url: 'https://localhost:3000/?paid',
            },
        },
        {
            auth: {
                username: process.env.
            }
        }
    );
    return data;
}