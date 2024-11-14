'use client';

import {
    CheckoutItem,
    CheckoutItemDetails,
    CheckoutSidebar,
    Container,
    Title,
    WhiteBlock
} from "@/shared/components/shared";
import {Button, Input, Textarea} from "@/shared/components/ui";
import {ArrowRight, Package, Percent, Truck} from "lucide-react";
import {useCart} from "@/shared/hooks";
import {getCartItemDetails} from "@/shared/lib";


export default function CheckoutPage() {
    const {totalAmount, updateItemQuantity, items, removeCartItem} = useCart();

    const onClickCountButton = (id: number, quantity: number, type: 'plus' | 'minus') => {
        const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1;
        updateItemQuantity(id, newQuantity);
    }

    return <Container className="mt-10">
        <Title text="Оформление заказа" size="xl" className="font-extrabold mb-8 text-[36px]"/>

        <div className='flex gap-10'>
            {/* Левая часть */}
            <div className='flex flex-col gap-10 flex-1 mb-20'>
                <WhiteBlock title='1. Корзина'>
                    <div className='flex flex-col gap-5'>
                        {
                            items.map((item) => (
                                <CheckoutItem
                                    key={item.id}
                                    id={item.id}
                                    imageUrl={item.imageUrl}
                                    details={
                                        getCartItemDetails(
                                            item.ingredients,
                                            item.pizzaType,
                                            item.pizzaSize,
                                        )
                                    }
                                    name={item.name}
                                    price={item.price}
                                    quantity={item.quantity}
                                    disabled={item.disabled}
                                    onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)}
                                    onClickRemove={() => removeCartItem(item.id)}
                                />
                            ))
                        }

                    </div>
                </WhiteBlock>

                <WhiteBlock title='2. Персональные данные'>
                    <div className='grid grid-cols-2 gap-5'>
                        <Input name='firstName' className='text-base' placeholder='Имя'/>
                        <Input name='lastName' className='text-base' placeholder='Фамилия'/>
                        <Input name='email' className='text-base' placeholder='E-Mail'/>
                        <Input name='phone' className='text-base' placeholder='Телефон'/>
                    </div>
                </WhiteBlock>

                <WhiteBlock title='3. Адрес доставки'>
                    <div className='flex flex-col gap-5'>
                        <Input name='firstName' className='text-base' placeholder='Введите адрес...'/>
                        <Textarea
                            className='text-base'
                            placeholder='Комментарий к заказу'
                            rows={5}
                        />
                    </div>
                </WhiteBlock>
            </div>

            {/* Правая часть */}
            <div className='w-[450px]'>
                <CheckoutSidebar totalAmount={totalAmount} />
            </div>
        </div>
    </Container>
}


















