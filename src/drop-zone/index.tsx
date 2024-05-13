import type {
    DropZoneProps as AriaDropZoneProps,
    FileDropItem,
} from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { FieldError } from "react-aria-components";
import { DropZone as AriaDropZone } from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";

import "./styles.css";

/**
 * A drop zone is an area into which one or multiple objects can be dragged and dropped.
 */
export const DropZone = forwardRef<HTMLDivElement, AriaDropZoneProps>(
    (props, ref) => {
        return (
            <AriaDropZone
                ref={ref}
                {...props}
                className={clsx(props.className, "drop-zone")}
            >
                {(rp) => {
                    return typeof props.children === "function"
                        ? props.children(rp)
                        : props.children;
                }}
            </AriaDropZone>
        );
    },
);

/**
 *
 */
export function FormDropZone(props: AriaDropZoneProps & { name: string }) {
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
                onDrop={(e) => {
                    const files = e.items.filter(
                        (file) => file.kind === "file",
                    ) as FileDropItem[];
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
