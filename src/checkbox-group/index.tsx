import type { CheckboxGroupProps as RACCheckboxGroupProps } from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { FieldError } from "react-aria-components";
import { CheckboxGroup as RACCheckboxGroup } from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";

import { checkboxGroupCSS } from "./styles.css";

/** -----------------------------------------------------------------------------
 * CheckboxGroup
 * ------------------------------------------------------------------------------- */

export type CheckboxGroupProps = RACCheckboxGroupProps;

export const CheckboxGroup = forwardRef<HTMLDivElement, RACCheckboxGroupProps>(
    (props, ref) => {
        return (
            <RACCheckboxGroup
                {...props}
                className={({
                    isDisabled,
                    isInvalid,
                    isReadOnly,
                    isRequired,
                }) =>
                    clsx(
                        props.className,
                        checkboxGroupCSS({
                            isDisabled,
                            isInvalid,
                            isReadOnly,
                            isRequired,
                        }),
                    )
                }
                ref={ref}
            />
        );
    },
);

/** -----------------------------------------------------------------------------
 * FormCheckboxGroup
 * ------------------------------------------------------------------------------- */

/**
 * A form text field connects a `CheckboxGroup` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/CheckboxGroup.html)
 */
export function FormCheckboxGroup({ children, ...props }: CheckboxGroupProps) {
    if (!props.name) {
        throw new Error("FormCheckboxGroup requires a name prop");
    }

    const { control } = useFormContext();

    const {
        field: { disabled: isDisabled, onChange, ref, value = "", ...field },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue: props.defaultValue,
        name: props.name,
    });

    return (
        <CheckboxGroup
            {...props}
            {...field}
            defaultValue={value}
            isDisabled={isDisabled}
            isInvalid={invalid}
            onChange={(v) => {
                onChange(v);
                props.onChange?.(v);
            }}
            ref={ref}
            validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
            value={value}
        >
            {() => {
                return (
                    <>
                        {children}
                        <FieldError>{error?.message}</FieldError>
                    </>
                );
            }}
        </CheckboxGroup>
    );
}
