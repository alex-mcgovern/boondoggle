import type { ForwardedRef, ReactNode } from "react";
import type {
    ButtonProps as AriaButtonProps,
    LinkProps as AriaLinkProps,
} from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { Button as AriaButton, Link as AriaLink } from "react-aria-components";

import type { Color } from "../types";

import "./styles.css";

/**
 * A button allows a user to perform an action, with mouse, touch, and keyboard interactions.
 * [Built with React Aria Button](https://react-spectrum.adobe.com/react-aria/Button.html)
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * ```ts
 * import { Button } from "boondoggle";
 * ```
 */
export const Button = forwardRef<
    HTMLButtonElement,
    {
        /**
         * Alignment for the LinkButton.
         */
        align?: "center" | "start";
        /**
         * The appearance of the button.
         */
        appearance?: "ghost" | "primary" | "secondary";
        /**
         * The color of the button.
         */
        color?: Color;
        /**
         * React ref for the button element.
         */
        ref?: ForwardedRef<HTMLButtonElement>;
        /**
         * The size of the button.
         */
        size?: "lg" | "md" | "sm";
        /**
         * Element to render on the left side of the button.
         */
        slotLeft?: ReactNode;
        /**
         * Element to render on the right side of the button.
         */
        slotRight?: ReactNode;
        /**
         * Whether the button is square.
         */
        square?: boolean;
    } & AriaButtonProps
>(
    (
        {
            align,
            appearance = "primary",
            children,
            className,
            color,
            size,
            slotLeft,
            slotRight,
            square,
            ...props
        },
        ref: ForwardedRef<HTMLButtonElement>,
    ) => {
        return (
            <AriaButton
                {...props}
                className={clsx(
                    "btn",
                    className,
                    appearance,
                    size,
                    align,
                    color,
                    {
                        square: !!square,
                    },
                )}
                ref={ref}
            >
                {(rp) => (
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
                )}
            </AriaButton>
        );
    },
);

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 *
 * [Built with React Aria Link](https://react-spectrum.adobe.com/react-aria/Link.html)
 */
export function LinkButton({
    align,
    appearance = "primary",
    children,
    className,
    color,
    isCurrent,
    size,
    slotLeft,
    slotRight,
    ...props
}: {
    /**
     * Alignment for the LinkButton.
     */
    align?: "center" | "start";
    /**
     * The appearance of the button.
     */
    appearance?: "ghost" | "primary" | "secondary";
    /**
     * The color of the button.
     */
    color?: Color;
    /**
     * Whether the link points to the current page or resource.
     */
    isCurrent?: boolean;
    /**
     * The size of the button.
     */
    size?: "lg" | "md" | "sm";
    /**
     * Element to render on the left side of the button.
     */
    slotLeft?: ReactNode;
    /**
     * Element to render on the right side of the button.
     */
    slotRight?: ReactNode;
    /**
     * Whether the button is square.
     */
    square?: boolean;
} & AriaLinkProps) {
    return (
        <AriaLink
            data-is-current={isCurrent}
            {...props}
            className={clsx("btn", className, appearance, size, align, color, {
                square: props.square,
            })}
        >
            {(rp) => (
                <>
                    {slotLeft ? (
                        <div className="slot-left">{slotLeft}</div>
                    ) : null}

                    {typeof children === "function" ? children(rp) : children}

                    {slotRight ? (
                        <div className="slot-right">{slotRight}</div>
                    ) : null}
                </>
            )}
        </AriaLink>
    );
}
