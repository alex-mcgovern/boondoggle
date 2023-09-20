import { FormProvider, useForm } from "@alex-mcgovern/react-hook-form";

import { handleHookFormErrors } from "../../lib/handle_hook_form_errors";
import { Box } from "../box";

import type { BoxProps } from "../box";
import type { FieldErrors, FieldValues, Resolver } from "@alex-mcgovern/react-hook-form";
import type { ReactNode } from "react";

export type FormProps<TFieldValues extends FieldValues = FieldValues> = Omit<
    BoxProps,
    "children"
> & {
    /**
     * Form field components & form submit button. They will be able to access `@alex-mcgovern/react-hook-form`'s form context.
     */
    children: ReactNode | ReactNode[];

    /**
     * Function that will be called when form validation errors occur.
     */
    handleErrors?: ((errors: FieldErrors) => Promise<void>) | ((errors: FieldErrors) => void);

    /**
     * Function that will be called when the form is submitted.
     */
    handleSubmit:
        | ((fieldValues: TFieldValues) => Promise<void>)
        | ((fieldValues: TFieldValues) => void);

    /**
     * Name of the form.
     */
    name: string;

    /**
     * Custom resolver for `@alex-mcgovern/react-hook-form`.
     */
    resolver?: Resolver<TFieldValues, any>;
};

/**
 * Form component that wraps `@alex-mcgovern/react-hook-form`'s `FormProvider` and `useForm` hooks.
 */
export function Form<TFieldValues extends FieldValues>({
    children,
    handleErrors = handleHookFormErrors,
    handleSubmit,
    name,
    resolver,
}: FormProps<TFieldValues>) {
    const formMethods = useForm<TFieldValues>({ resolver });

    return (
        <FormProvider {...formMethods}>
            <Box
                as="form"
                name={name}
                onSubmit={formMethods.handleSubmit(handleSubmit, handleErrors)}
            >
                {children}
            </Box>
        </FormProvider>
    );
}
