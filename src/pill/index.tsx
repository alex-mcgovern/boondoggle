import clsx from "clsx";
import { type HTMLProps, forwardRef } from "react";

import type { Color } from "../types";

import "./styles.css";

/**
 * Pill component
 */
export const Pill = forwardRef<
    HTMLDivElement,
    {
        color?: Color;
    } & HTMLProps<HTMLDivElement>
>(({ children, className, color, ...props }, ref) => {
    return (
        <div
            {...props}
            className={clsx(className, "pill", color)}
            ref={ref}
        >
            {children}
        </div>
    );
});
