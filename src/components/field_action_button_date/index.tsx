import { faCopy } from "@fortawesome/pro-solid-svg-icons";

import { FieldActionButton } from "../field_action_button";
import { Icon } from "../icon";

import type { FieldActionButtonProps } from "../field_action_button";

export type FieldActionButtonCopyProps = {
    /**
     * Whether the user has just copied tha value of the field or not.
     */
    isDateType?: boolean;
} & Omit<FieldActionButtonProps, "name" | "slot">;

/**
 * A button to open a date picker.
 */
export function FieldActionButtonDate({ isDateType, onClick, size }: FieldActionButtonCopyProps) {
    return (
        <FieldActionButton
            // colorOverlay={isCopied ? "green" : undefined}
            name="date"
            onClick={onClick}
            size={size}
            slot={[<Icon icon={faCopy} />]}
            type={isDateType}
        />
    );
}
