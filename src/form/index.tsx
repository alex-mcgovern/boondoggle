import type { ReactNode } from "react";
import type {
    DefaultValues,
    FieldErrors,
    FieldValues,
    Resolver,
    WatchObserver,
} from "react-hook-form";

import { useEffect } from "react";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

const debugFormErrors = (errors: FieldErrors) => {
    if (process.env.NODE_ENV === "production") {
        return;
    }

    for (const [field, error] of Object.entries(errors)) {
        console.error(`[${field}] ${error?.message as string}`);
    }
};

export type FormProps<TFieldValues extends FieldValues = FieldValues> = {
    /**
     * Form field components & form submit button. They will be able to access `react-hook-form`'s form context.
     */
    children: ((values: Partial<TFieldValues>) => ReactNode) | ReactNode;

    /**
     * Class name for the form.
     */
    className?: string;

    /**
     * Default values for the form fields.
     */
    defaultValues?: DefaultValues<TFieldValues> | undefined;

    /**
     * Function that will be called when form validation errors occur.
     */
    handleErrors?:
        | ((errors: FieldErrors) => Promise<void>)
        | ((errors: FieldErrors) => void);

    /**
     * Function that will be called when the form is submitted.
     */
    handleSubmit:
        | ((fieldValues: TFieldValues) => Promise<void>)
        | ((fieldValues: TFieldValues) => void);

    /**
     * Custom resolver for `react-hook-form`.
     */
    /**
     * Whether the form is disabled or not.
     */
    isDisabled?: boolean;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any, jsdoc/require-jsdoc
    resolver?: Resolver<TFieldValues, any>;

    /**
     * Whether the form should reset after it is submitted.
     */
    shouldResetOnSubmit?: boolean;

    /**
     * Function that will be called when a field value changes.
     */
    watchCallback?: WatchObserver<TFieldValues>;
};

/**
 * Form component that wraps `react-hook-form`'s `FormProvider` and `useForm` hooks.
 */
export function Form<TFieldValues extends FieldValues>({
    children,
    className,
    defaultValues,
    handleErrors = debugFormErrors,
    handleSubmit,
    isDisabled,
    resolver,
    shouldResetOnSubmit = false,
    watchCallback,
}: FormProps<TFieldValues>) {
    const formMethods = useForm<TFieldValues>({
        defaultValues,
        disabled: isDisabled,
        resolver,
    });

    if (watchCallback) {
        formMethods.watch(watchCallback);
    }

    const [formState, setFormState] = useState<Partial<TFieldValues>>({});

    useEffect(() => {
        const subscription = formMethods.watch((v) => {
            setFormState(v);
        });
        return () => subscription.unsubscribe();
    }, [formMethods]);

    return (
        <FormProvider {...formMethods}>
            <form
                className={className}
                onSubmit={formMethods.handleSubmit((fieldValues) => {
                    handleSubmit(fieldValues);
                    if (shouldResetOnSubmit) {
                        formMethods.reset(defaultValues);
                    }
                }, handleErrors)}
            >
                {typeof children === "function"
                    ? children(formState)
                    : children}
            </form>
        </FormProvider>
    );
}
