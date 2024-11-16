import React from 'react';
import {WhiteBlock} from "@/shared/components/shared";

interface Props {
    className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({className}) => {
    return (
        <WhiteBlock title="3. Адрес доставки" className={className}>
            <div className="flex flex-col gap-5">

            </div>
        </WhiteBlock>
    );
};
