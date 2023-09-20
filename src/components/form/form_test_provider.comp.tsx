import { FormProvider, useForm } from "@alex-mcgovern/react-hook-form";
import { cloneElement } from "react";

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
