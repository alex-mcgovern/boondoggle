import { faEye, faEyeSlash } from "@fortawesome/pro-solid-svg-icons";

import { FieldActionButton } from "../field_action_button";
import { Icon } from "../icon";

import type { FieldActionButtonProps } from "../field_action_button";

export type FieldActionButtonVisibilityProps = {
    /**
     * Whether the value of the field is visible or not.
     */
    isVisible?: boolean;

    /**
     * The tooltip text to display when the button is hovered when value is hidden.
     */
    strHide: string;

    /**
     * The tooltip text to display when the button is hovered when value is visible.
     */
    strShow: string;
} & Omit<FieldActionButtonProps, "name" | "slot">;

/**
 * A button to toggle the visiblity of a field value.
 */
export function FieldActionButtonVisibility({
    isVisible,
    onClick,
    size,
    strHide,
    strShow,
}: FieldActionButtonVisibilityProps) {
    return (
        <FieldActionButton
            name="visibility"
            onClick={onClick}
            size={size}
            slot={<Icon icon={isVisible ? faEyeSlash : faEye} />}
            strTooltip={isVisible ? strHide : strShow}
        />
    );
}
