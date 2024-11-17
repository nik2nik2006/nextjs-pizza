'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
    onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
    return (
        <AddressSuggestions
            token='10109ace994b18e7057dedf8ceb899d5ad83e4b4'
            onChange={ (data) => onChange?.(data?.value)}
        />
    );
}
