import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";

import { handleHookFormErrors } from "../../lib/handle_hook_form_errors";
import { Box } from "../box";

import type { BoxProps } from "../box";
import type { ReactNode } from "react";
import type {
    FieldErrors,
    FieldValues,
    FormProviderProps,
    Resolver,
    UseFormReturn,
} from "react-hook-form";

/**
 * Re-export of `react-hook-form`'s `HookFormContext` context.
 */
export const HookFormContext = createContext<UseFormReturn | null>(null);

/**
 * Re-export of `react-hook-form`'s `useFormContext` hook.
 */
export const useFormContext = <
    TFieldValues extends FieldValues,
    TContext = any,
    TransformedValues extends FieldValues | undefined = undefined
>(): UseFormReturn<TFieldValues, TContext, TransformedValues> => {
    return useContext(HookFormContext) as UseFormReturn<TFieldValues, TContext, TransformedValues>;
};

/**
 * Re-export of `react-hook-form`'s `FormProvider` context provider.
 */
export function FormProvider<
    TFieldValues extends FieldValues,
    TContext = any,
    TTransformedValues extends FieldValues | undefined = undefined
>({ children, ...data }: FormProviderProps<TFieldValues, TContext, TTransformedValues>) {
    return (
        <HookFormContext.Provider value={data as unknown as UseFormReturn}>
            {children}
        </HookFormContext.Provider>
    );
}

export type FormProps<TFieldValues extends FieldValues = FieldValues> = Omit<
    BoxProps,
    "children"
> & {
    /**
     * Form field components & form submit button. They will be able to access `react-hook-form`'s form context.
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
     * Custom resolver for `react-hook-form`.
     */
    resolver?: Resolver<TFieldValues, any>;
};

/**
 * Form component that wraps `react-hook-form`'s `FormProvider` and `useForm` hooks.
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
