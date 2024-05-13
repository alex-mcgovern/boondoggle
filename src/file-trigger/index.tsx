import type { ComponentProps } from "react";
import type { FileTriggerProps as AriaFileTriggerProps } from "react-aria-components";

import { forwardRef } from "react";
import { FileTrigger as AriaFileTrigger } from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";

import { FieldError } from "../field-error";

/**
 * A FileTrigger allows a user to access the file system with any pressable React Aria or React Spectrum component, or custom components built with usePress.
 */
export const FileTrigger = forwardRef<HTMLInputElement, AriaFileTriggerProps>(
    (props, ref) => {
        return (
            <AriaFileTrigger
                {...props}
                ref={ref}
            >
                {props.children}
            </AriaFileTrigger>
        );
    },
);

/**
 *
 */
export function FormFileTrigger(
    props: ComponentProps<typeof FileTrigger> & { name: string },
) {
    const { control } = useFormContext();

    const {
        field: { onChange, ref },
        fieldState: { error },
    } = useController({
        control,
        name: props.name,
    });

    return (
        <>
            <FileTrigger
                {...props}
                onSelect={(e) => {
                    console.debug("debug  e:", e);
                    if (props.onSelect) {
                        props.onSelect(e);
                    }
                    const files = e ? Array.from(e) : [];

                    if (files[0]) {
                        onChange(files[0]);
                    } else {
                        onChange(null);
                    }
                }}
                ref={ref}
            />
            <FieldError>{error?.message}</FieldError>
        </>
    );
}
