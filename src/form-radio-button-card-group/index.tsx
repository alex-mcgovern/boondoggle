import { useController, useFormContext } from "react-hook-form";

import type { RadioButtonCardGroupProps } from "../radio-button-card-group";
import type { WithFormFieldProps } from "../types";

import { RadioButtonCardGroup } from "../radio-button-card-group";

export type FormRadioButtonCardGroupProps = RadioButtonCardGroupProps &
    WithFormFieldProps & {
        defaultValue?: number | string;
    };

export function FormRadioButtonCardGroup({
    defaultValue,
    invalid,
    name,
    onChange: onChangeParent,
    wrapperProps = { marginBottom: "space_6" },
    ...rest
}: FormRadioButtonCardGroupProps) {
    const { control } = useFormContext();

    const {
        field: { onBlur, onChange, ref, value: controlledValue = "" },
        fieldState: { error },
    } = useController({
        control,
        defaultValue,
        name,
    });

    return (
        <RadioButtonCardGroup
            defaultValue={defaultValue}
            errorMessage={error?.message}
            inputProps={{
                onBlur,
            }}
            invalid={invalid || !!error}
            name={name}
            onChange={(k: string) => {
                onChange(k);
                onChangeParent?.(k);
            }}
            ref={ref}
            value={controlledValue}
            wrapperProps={wrapperProps}
            {...rest}
        />
    );
}
