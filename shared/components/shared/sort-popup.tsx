import React from 'react';
import {cn} from "@/shared/lib/utils";
import {ArrowDown} from "lucide-react";

interface Props {
    className?: string;
}

export const SortPopup: React.FC<Props> = ({className}) => {
    return (
        <div className={cn('inline-flex items-center gap-1 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer',
            className)}>
            <ArrowDown size={16} />
            <b>Сортировка:</b>
            <b className='text-primary'>популярное</b>
        </div>
    );
};

