import { faEye, faEyeSlash } from "@fortawesome/sharp-regular-svg-icons";

import { FieldActionButton } from "../field_action_button";
import { Icon } from "../icon";

import type { FieldActionButtonProps } from "../field_action_button";

export type FieldActionButtonVisibilityProps = {
    /**
     * Whether the value of the field is visible or not.
     */
    isVisible?: boolean;
} & Omit<FieldActionButtonProps, "name" | "slot">;

/**
 * A button to toggle the visiblity of a field value.
 */
export function FieldActionButtonVisibility({
    isVisible,
    onClick,
    size,
}: FieldActionButtonVisibilityProps) {
    return (
        <FieldActionButton
            name="visibility"
            onClick={onClick}
            size={size}
            slot={<Icon icon={isVisible ? faEyeSlash : faEye} />}
        />
    );
}
