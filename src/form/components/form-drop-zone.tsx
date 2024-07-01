import type { ComponentProps } from "react";
import type { FileDropItem } from "react-aria-components";

import { useController, useFormContext } from "react-hook-form";

import { DropZone } from "../../drop-zone";
import { FieldError } from "../../field-error";

/**
 * A drop zone is an area into which one or multiple objects can be dragged and dropped.
 */
export function FormDropZone(
    props: ComponentProps<typeof DropZone> & { name: string },
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
            <DropZone
                {...props}
                onDrop={(e) => {
                    if (props.onDrop) {
                        props.onDrop(e);
                    }
                    const files = e.items.filter(
                        (file) => file.kind === "file",
                    ) as FileDropItem[];
                    if (files[0]) {
                        onChange(files[0].getFile());
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
