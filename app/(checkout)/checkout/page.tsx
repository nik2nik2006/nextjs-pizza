'use client';

import { useForm, FormProvider, SubmitHandler } from "react-hook-form"

import {
    CheckoutSidebar,
    Container,
    Title,
} from "@/shared/components/shared";
import {useCart} from "@/shared/hooks";
import {zodResolver} from "@hookform/resolvers/zod";
import {CheckoutAddressForm, CheckoutCart, CheckoutPersonalForm} from "@/shared/components/shared/checkout";
import {checkoutFormSchema, CheckoutFormValues} from "@/shared/components/shared/checkout/checkout-form-schema";


export default function CheckoutPage() {
    const {totalAmount, updateItemQuantity, items, removeCartItem} = useCart();

    const form = useForm<CheckoutFormValues>({
        resolver: zodResolver(checkoutFormSchema),
        defaultValues: {
            email: '',
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            comment: '',
        }
    })

    const onSubmit: SubmitHandler<CheckoutFormValues> = (data) => {
        console.log(data);
    }

    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, newQuantity);
    }

    return <Container className="mt-10">
        <Title text="Оформление заказа" size="xl" className="font-extrabold mb-8 text-[36px]"/>

        <FormProvider {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} >
                <div className='flex gap-10'>
                    {/* Левая часть */}
                    <div className='flex flex-col gap-10 flex-1 mb-20'>
                        <CheckoutCart items={items} removeCartItem={removeCartItem} onClickCountButton={onClickCountButton}/>

                        <CheckoutPersonalForm />

                        <CheckoutAddressForm />
                    </div>

                    {/* Правая часть */}
                    <div className='w-[450px]'>
                        <CheckoutSidebar totalAmount={totalAmount} />
                    </div>
                </div>
            </form>
        </FormProvider>
    </Container>
}


















