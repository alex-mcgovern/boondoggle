import type { DropZoneProps as AriaDropZoneProps } from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { DropZone as AriaDropZone } from "react-aria-components";

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
