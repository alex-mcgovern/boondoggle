import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons";

import { FieldActionButton } from "../field_action_button";
import { Icon } from "../icon";

import type { FieldActionButtonProps } from "../field_action_button";

type FieldActionButtonClearProps = Omit<FieldActionButtonProps, "name" | "slot">;

/**
 * A button to clear the contents of a field.
 */
export function FieldActionButtonClear({ onClick, size }: FieldActionButtonClearProps) {
    return (
        <FieldActionButton
            name="clear"
            onClick={onClick}
            size={size}
            slot={[<Icon icon={faTimesCircle} />]}
        />
    );
}
