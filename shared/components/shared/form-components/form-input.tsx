import {RequiredSimbol} from "@/shared/components/shared";
import {Input} from "@/shared/components/ui";


interface Props {
    name: string;
    label?: string;
    required?: boolean;
    className?: string;
}

export const FormInput: React.FC<Props> = (
    {
        className,
        name,
        label,
        required,
        ...props
    }) => {

    return (
        <div className={className} >
            {label && (
                <p className='font-medium mb-2'>
                    {label} {required && <RequiredSimbol/>}
                </p>
            )}
            <div className='relative' >
                <Input className='h-12 text-md' {...props} />
            </div>

        </div>
    )
}