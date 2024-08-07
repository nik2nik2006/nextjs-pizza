import {Container, Filters, ProductsGroupList, Title, TopBar} from "@/components/shared";

export default function Home() {
    return <>
        <Container className='mt-10'>
            <Title text='Все пиццы' size='lg' className='font-extrabold' />
        </Container>

        <TopBar />

        <Container className='mt-10 pb-14'>
            <div className='flex gap-[80px]'>
                {/* Фильтрация */}
                <div className='w-[250px]'>
                    <Filters />
                </div>

                {/* Список товаров */}
                <div className='flex-1'>
                    <div className='flex flex-col gap-16'>
                        Список товаров
                        {/*<ProductsGroupList title='Пиццы' items={[1, 2, 3, 4, 5]} />*/}
                            <ProductsGroupList
                                title='Пиццы'
                                categoryId='1'
                                items={[
                                    {
                                        id: 1,
                                        name: 'Чизбургер-пицца',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 2,
                                        name: 'Чизбургер-пицца',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 3,
                                        name: 'Чизбургер-пицца',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 4,
                                        name: 'Чизбургер-пицца',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 5,
                                        name: 'Чизбургер-пицца',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 6,
                                        name: 'Чизбургер-пицца',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 7,
                                        name: 'Чизбургер-пицца',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 8,
                                        name: 'Чизбургер-пицца',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 9,
                                        name: 'Чизбургер-пицца',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },

                                ]}
                            />
                            <ProductsGroupList
                                title='Завтрак'
                                categoryId='2'
                                items={[
                                    {
                                        id: 1,
                                        name: 'Чизбургер-пицца',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 2,
                                        name: 'Чизбургер-пицца',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 3,
                                        name: 'Чизбургер-пицца',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 4,
                                        name: 'Чизбургер-пицца',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 5,
                                        name: 'Чизбургер-пицца',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 6,
                                        name: 'Чизбургер-пицца',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 7,
                                        name: 'Чизбургер-пицца',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 8,
                                        name: 'Чизбургер-пицца',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },
                                    {
                                        id: 9,
                                        name: 'Чизбургер-пицца',
                                        imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif',
                                        price: 550,
                                        items: [{price: 550}]
                                    },

                                ]}
                            />
                        {/*<ProductsGroupList title='Комбо' items={[1, 2, 3, 4, 5]} />*/}
                    </div>
                </div>
            </div>
        </Container>
    </>
}
