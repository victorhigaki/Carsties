'use client'

import { useParamsStore } from "@/hooks/useParamsStore";
import Heading from "./Heading";
import { Button } from "flowbite-react";
import { signIn } from "next-auth/react";

type Props = {
    title?: string
    subtitle?: string
    showReset?: boolean
    showLogin?: boolean
    callbackUrl?: string
}

export default function EmptyFilter({
    title = 'No matches for this filter',
    subtitle = 'Try changing the fitler or search term',
    showReset,
    showLogin,
    callbackUrl
}: Props) {
    const reset = useParamsStore(state => state.reset);

    return (
        <div className="flex flex-col gap-2 items-center justify-center h-[40vh] shadow-lg">
            <Heading title={title} subtitle={subtitle} center />
            <div className="mt-4">
                {showReset && (
                    <Button outline onClick={reset}>Remove filters</Button>
                )}
                {showLogin && (
                    <Button outline onClick={() => signIn('id-server', { redirectTo: callbackUrl })}>
                        Login
                    </Button>
                )}
            </div>
        </div>
    )
}
