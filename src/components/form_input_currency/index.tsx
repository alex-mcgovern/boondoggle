import { useController, useFormContext } from "react-hook-form";

import { InputCurrency } from "../input_currency";

import type { WithFormFieldProps } from "../../common-types";
import type { InputCurrencyProps } from "../input_currency";

/**
 * React Hook Form connected version of Boondoggle's `InputCurrency`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export type FormInputCurrencyProps<TCurrency extends string = string> =
    InputCurrencyProps<TCurrency> & WithFormFieldProps;

export function FormInputCurrency<TCurrency extends string = string>({
    defaultValue,
    invalid,
    name,
    onChange,
    wrapperProps,
    ...rest
}: FormInputCurrencyProps<TCurrency>) {
    const { control } = useFormContext();

    const {
        field: {
            onBlur,
            onChange: reactHookFormOnChange,
            ref,
            value: controlledValue = "",
        },
        fieldState: { error },
    } = useController({
        control,
        defaultValue,
        name,
    });

    return (
        <InputCurrency
            errorMessage={error?.message}
            invalid={invalid || !!error}
            name={name}
            onBlur={onBlur}
            onChange={(e) => {
                onChange?.(e);

                reactHookFormOnChange(e);
            }}
            ref={ref}
            value={controlledValue}
            wrapperProps={wrapperProps}
            {...rest}
        />
    );
}
