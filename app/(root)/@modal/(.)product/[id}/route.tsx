import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {Container, ProductImage, Title} from "@/components/shared";
import {GroupVariants} from "@/components/shared/group-variants";

export default async function ProductModalPage({ params: {id} }: {params: {id: string}}) {
    const product = await prisma.product.findFirst({ where: { id: Number(id) } });

    if (!product) {
        return notFound();
    }
    return <Container className="flex flex-col my-10">
        <div className='flex flex-1'>
            <ProductImage imageUrl={product.imageUrl} size={40}/>
            <div className="w-[490px] bg-[#f7f6f5] p-7">
                <Title text={product.name} size="md" className="font-extrabold mb-1"/>
                <p className="text-gray-400">Lorem ipsum dfgdf dfgfdg fdfg dffggggdg</p>
                <GroupVariants
                    selectedValue="2"
                    items={[
                        {
                            name: "Маленькая",
                            value: '1'
                        },
                        {
                            name: "Средняя",
                            value: '2'
                        },
                        {
                            name: "Большая",
                            value: '3',
                            disabled: true,
                        }
                    ]}/>
            </div>
        </div>
    </Container>
}


