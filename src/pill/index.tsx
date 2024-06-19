import type { HTMLProps } from "react";

import clsx from "clsx";

import type { Color } from "../types";

import "./styles.css";

/**
 * Pill component
 */
export function Pill({
    children,
    className,
    color,
    ...props
}: {
    color?: Color;
} & HTMLProps<HTMLDivElement>) {
    return (
        <div
            className={clsx(className, "pill", color)}
            {...props}
        >
            {children}
        </div>
    );
}
