import type { ComponentProps, ReactNode } from "react";

import clsx from "clsx";
import { type HTMLProps, forwardRef } from "react";
import { Button } from "react-aria-components";

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

/**
 * Pill button component
 */
export const PillButton = forwardRef<
    HTMLButtonElement,
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
    } & ComponentProps<typeof Button>
>(({ children, className, color, slotLeft, slotRight, ...props }, ref) => {
    return (
        <Button
            {...props}
            className={clsx(className, "pill", "pill-button", color)}
            ref={ref}
        >
            {(rp) => {
                return (
                    <>
                        {slotLeft ? (
                            <div className="slot-left">{slotLeft}</div>
                        ) : null}

                        {typeof children === "function"
                            ? children(rp)
                            : children}

                        {slotRight ? (
                            <div className="slot-right">{slotRight}</div>
                        ) : null}
                    </>
                );
            }}
        </Button>
    );
});
