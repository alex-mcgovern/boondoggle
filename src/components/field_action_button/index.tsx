import clsx from "clsx";
import { forwardRef } from "react";

import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip_comp";
import { fieldActionButtonStyle } from "./styles.css";

import type { ButtonProps } from "../button";
import type { ReactNode } from "react";

export type FieldActionButtonProps = {
    /**
     * Custom CSS class to apply to the button.
     */
    className?: string;

    /**
     * The name of the button.
     */
    name: string;

    /**
     * The function to call when the button is clicked.
     */
    onClick: () => void;

    /**
     * The slot to render on the button.
     */
    slot: ReactNode;

    /**
     * The tooltip text to display when the button is hovered.
     */
    strTooltip?: string;
} & Omit<
    ButtonProps,
    "appearance" | "className" | "slotLeft" | "slotRight" | "type" | "size"
>;

/**
 * A configurable button for use within a field.
 */
export const FieldActionButton = forwardRef<
    HTMLButtonElement,
    FieldActionButtonProps
>(({ className, name, onClick, slot, strTooltip, ...rest }, ref) => {
    if (!strTooltip) {
        return (
            <button
                className={clsx(fieldActionButtonStyle, className)}
                name={name}
                onClick={onClick}
                ref={ref}
                type="button"
                {...rest}
            >
                {slot}
            </button>
        );
    }

    return (
        <Tooltip placement="top">
            <TooltipTrigger asChild>
                <button
                    className={clsx(fieldActionButtonStyle, className)}
                    name={name}
                    onClick={onClick}
                    ref={ref}
                    type="button"
                    {...rest}
                >
                    {slot}
                </button>
            </TooltipTrigger>
            <TooltipContent>{strTooltip}</TooltipContent>
        </Tooltip>
    );
});
