import type { ReactNode } from "react";

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
        /**
         * The color of the pill.
         */
        color?: Color;
        /**
         * Element to render on the left side of the button.
         */
        slotLeft?: ReactNode;
        /**
         * Element to render on the right side of the button.
         */
        slotRight?: ReactNode;
    } & HTMLProps<HTMLDivElement>
>(({ children, className, color, slotLeft, slotRight, ...props }, ref) => {
    return (
        <div
            {...props}
            className={clsx(className, "pill", color)}
            ref={ref}
        >
            {slotLeft ? <div className="slot-left">{slotLeft}</div> : null}

            {children}

            {slotRight ? <div className="slot-right">{slotRight}</div> : null}
        </div>
    );
});
