import { useController, useFormContext } from "react-hook-form";

import { FieldInput } from "../input/FieldInput";

import type { WithFormFieldProps } from "../../common-types";
import type { FieldInputProps } from "../input/FieldInput";

/**
 * React Hook Form connected version of Boondoggle's `FieldInput`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export type FormInputProps = FieldInputProps & WithFormFieldProps;

export function FormInput({
    defaultValue,
    invalid,
    name,
    onChange,
    wrapperProps,
    ...rest
}: FormInputProps) {
    const { control } = useFormContext();

    const {
        field: { onBlur, onChange: reactHookFormOnChange, ref, value: controlledValue = "" },
        fieldState: { error },
    } = useController({
        control,
        defaultValue,
        name,
    });

    return (
        <FieldInput
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
