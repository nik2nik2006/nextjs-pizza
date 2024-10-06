import type {Metadata} from "next";

import {Header} from "@/components/shared";
import React from "react";

export const metadata: Metadata = {
    title: "Next Pizza | Главная",
    description: "Супер-пупер приложение заказа сумашедшей пиццы",
};

export default function HomeLayout({
    children,
    modal
}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode
}>) {
    return (
      <main className='min-h-screen'>
          <Header />
          {children}
          {modal}
      </main>
    );
}
