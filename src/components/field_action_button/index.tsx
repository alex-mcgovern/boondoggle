import clsx from "clsx";
import { forwardRef, useCallback } from "react";

import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip_comp";
import { fieldActionButtonStyle } from "./styles.css";

import type { MouseEvent, MouseEventHandler, ReactNode } from "react";

type BaseButtonProps = {
    /**
     * Custom CSS class to apply to the button.
     */
    className: string | undefined;
    /**
     * The name of the button.
     */
    name: string;
    /**
     * The function to call when the button is clicked.
     */
    onClick: MouseEventHandler<HTMLButtonElement>;
    /**
     * The slot to render on the button.
     */
    slot: ReactNode;
};

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
    ({ className, name, onClick, slot }, ref) => {
        return (
            <button
                className={clsx(fieldActionButtonStyle, className)}
                name={name}
                onClick={onClick}
                ref={ref}
                type="button"
            >
                {slot}
            </button>
        );
    }
);

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
    onClick: MouseEventHandler<HTMLButtonElement>;

    /**
     * The slot to render on the button.
     */
    slot: ReactNode;

    /**
     * The tooltip text to display when the button is hovered.
     */
    strTooltip?: string;
};

/**
 * A configurable button for use within a field.
 */
export const FieldActionButton = forwardRef<
    HTMLButtonElement,
    FieldActionButtonProps
>(({ className, name, onClick, slot, strTooltip }, ref) => {
    const handleClick = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
            onClick(e);
            // Prevent the click event from bubbling up to the parent element.
            e.stopPropagation();
        },
        [onClick]
    );

    if (!strTooltip) {
        return (
            <BaseButton
                className={className}
                name={name}
                onClick={handleClick}
                ref={ref}
                slot={slot}
            />
        );
    }

    return (
        <Tooltip placement="top">
            <TooltipTrigger asChild>
                <BaseButton
                    className={className}
                    name={name}
                    onClick={handleClick}
                    ref={ref}
                    slot={slot}
                />
            </TooltipTrigger>
            <TooltipContent>{strTooltip}</TooltipContent>
        </Tooltip>
    );
});
