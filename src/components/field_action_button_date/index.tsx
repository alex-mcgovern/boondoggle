import { faArrowDown } from "@fortawesome/pro-solid-svg-icons";

import { FieldActionButton } from "../field_action_button";
import { Icon } from "../icon";

import type { FieldActionButtonProps } from "../field_action_button";

export type FieldActionButtonDateProps = Omit<FieldActionButtonProps, "name" | "slot">;

/**
 * A button to open a date picker.
 */
export function FieldActionButtonDate({ onClick, size }: FieldActionButtonDateProps) {
    return (
        <FieldActionButton
            name="date"
            onClick={onClick}
            size={size}
            slot={[<Icon icon={faArrowDown} />]}
        />
    );
}
