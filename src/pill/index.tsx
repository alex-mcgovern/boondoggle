import clsx from "clsx";
import { type HTMLProps, forwardRef } from "react";

import type { Color } from "../types";

import "./styles.css";

/**
 * Pill component
 */
export const Pill = forwardRef(
    ({
        children,
        className,
        color,
        ...props
    }: {
        color?: Color;
    } & HTMLProps<HTMLDivElement>) => {
        return (
            <div
                className={clsx(className, "pill", color)}
                {...props}
            >
                {children}
            </div>
        );
    },
);
