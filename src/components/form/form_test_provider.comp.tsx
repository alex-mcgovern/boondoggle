import { cloneElement } from "react";
import { useForm } from "react-hook-form";

import { FormProvider } from ".";

import type { JSXElementConstructor, ReactElement } from "react";

export function FormTestProvider({
    children,
    ...rest
}: {
    children: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
}) {
    const reactHookFormMethods = useForm({});

    return (
        <FormProvider {...reactHookFormMethods}>
            {cloneElement(children, {
                ...rest,
            })}
        </FormProvider>
    );
}
