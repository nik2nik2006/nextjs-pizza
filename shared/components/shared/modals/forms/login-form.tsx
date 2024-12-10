import React from 'react';
import { FormProvider, useForm} from "react-hook-form";
import {formLoginSchema, TFormloginValues} from "@/shared/components/shared/modals/forms/schemas";
import {zodResolver} from "@hookform/resolvers/zod";

interface Props {
    onClose?: VoidFunction
}

export const LoginForm: React.FC<Props> = () => {
    const form = useForm<TFormloginValues>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    })

    const onSubmit = (data: TFormloginValues) => {
        console.log(data);
    }

    return (
        <FormProvider {...form}>
            <form className="flex flex-col gap-5" onSubmit={form.handleSubmit(onSubmit)} >

            </form>
        </FormProvider>
    );
};





