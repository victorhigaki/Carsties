'use client'

import { Button, Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../components/Input";
import { useEffect } from "react";

export default function AuctionForm() {
    const router = useRouter();
    const { control, handleSubmit, setFocus,
        formState: { isSubmitting, isValid, isDirty } } = useForm();

    useEffect(() => {
        setFocus('make')
    }, [setFocus])

    function onSubmit(data: FieldValues) {
        console.log(data);
    }

    return (
        <form className="flex flex-col mt-3" onSubmit={handleSubmit(onSubmit)}>
            <Input name="make" label="Make" control={control}
                rules={{ required: 'Make is required' }} />
            <Input name="model" label="Model" control={control}
                rules={{ required: 'Model is required' }} />


            <div className="flex justify-between">
                <Button color='alternative' onClick={() => router.push('/')}>Cancel</Button>
                <Button
                    outline
                    color='green'
                    type="submit"
                    disabled={!isValid || !isDirty}
                >
                    {isSubmitting && <Spinner size="sm" />}
                    Submit
                </Button>
            </div>
        </form>
    )
}
