import { forwardRef } from "react";

import { Button } from "../button";
import { getActionButtonSize } from "./lib/get_action_button_size";
import { fieldActionButtonStyle } from "./styles.css";

import type { Slot } from "../../common-types";
import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { ButtonProps } from "../button";

export type FieldActionButtonProps = {
    /**
     * The name of the button.
     */
    name: string;

    /**
     * The function to call when the button is clicked.
     */
    onClick: () => void;

    /**
     * The size of the field the button is embedded within.
     */
    size?: ElementSizeEnum;

    /**
     * The slot to render on the button.
     */
    slot: Slot;
} & Omit<ButtonProps, "appearance" | "className" | "slotLeft" | "slotRight" | "type" | "size">;

/**
 * A configurable button for use within a field.
 */
export const FieldActionButton = forwardRef<HTMLButtonElement, FieldActionButtonProps>(
    ({ name, onClick, size = "md", slot, ...rest }, ref) => {
        return (
            <Button
                appearance="ghost"
                className={fieldActionButtonStyle}
                name={name}
                onClick={onClick}
                ref={ref}
                size={getActionButtonSize(size)}
                slotLeft={slot}
                type="button"
                {...rest}
            />
        );
    }
);
