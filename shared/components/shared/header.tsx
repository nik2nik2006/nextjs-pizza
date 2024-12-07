'use client';

import React from "react";
import {cn} from "@/shared/lib/utils";
import Image from "next/image";
import Logo from '../../../public/logo.png'
import {Button} from "@/shared/components/ui";
import {CartButton, Container, SearchInput} from "@/shared/components/shared/index";
import {ArrowRight, ShoppingCart, User} from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";
import {  useSearchParams } from 'next/navigation';

interface Props {
    hasSearch: boolean;
    hasCart: boolean;
    className: string;
}

export const Header: React.FC<Props> = ({hasSearch= true, hasCart = true, className}) => {
    const searchParams = useSearchParams();

    React.useEffect(() => {
        if (searchParams.has('paid')) {
            setTimeout(() => {
                // router.replace('/');
                toast.success('Заказ успешно оплачен! Информация отправлена на почту...', {
                    duration: 3000,
                });
            }, 1000);
        }
    }, [])

    return (
        <header className={cn('border-b', className)}>
            <Container className='flex items-center justify-between py-8'>
                {/*  Левая часть Header*/}
                <Link href="/">
                    <div className='flex items-center gap-4'>
                        <Image src={Logo} alt='Logo' width={35} height={35}/>
                        <div>
                            <h1 className='text-2xl uppercase font-black'>Next Pizza</h1>
                            <p className='text-sm text-gray-400 leading-3'>вкусней уже некуда</p>
                        </div>
                    </div>
                </Link>
                {hasSearch && <div className="mx-10 flex-1">
                    < SearchInput/>
                </div>}
                {/*    Правая часть Header*/}
                <div className='flex items-center gap-3'>
                    <Button variant="outline" className='flex items-center gap-1'>
                        <User size={16}/>
                        Войти
                    </Button>
                    {hasCart && <CartButton/>}
                </div>
            </Container>
        </header>
    )
}
