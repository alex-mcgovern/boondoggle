import type { ComponentProps } from "react";

import { useController, useFormContext } from "react-hook-form";

import { FieldError } from "../../field-error";
import { FileTrigger } from "../../file-trigger";

/**
 * A FileTrigger allows a user to access the file system with any
 * pressable React Aria or React Spectrum component, or custom
 * components built with usePress.
 */
export function FormFileTrigger(
    props: { name: string } & ComponentProps<typeof FileTrigger>,
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
                    if (props.onSelect) {
                        props.onSelect(e);
                    }
                    onChange(e?.item(0));
                }}
                ref={ref}
            />
            <FieldError>{error?.message}</FieldError>
        </>
    );
}
