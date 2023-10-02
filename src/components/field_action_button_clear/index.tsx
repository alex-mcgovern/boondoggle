import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons";

import { FieldActionButton } from "../field_action_button";
import { Icon } from "../icon";

import type { FieldActionButtonProps } from "../field_action_button";

type FieldActionButtonClearProps = Omit<
    FieldActionButtonProps,
    "name" | "slot"
> & {
    /**
     * The tooltip text to display when the button is hovered.
     */
    strClear: string;
};

/**
 * A button to clear the contents of a field.
 */
export function FieldActionButtonClear({
    onClick,
    size,
    strClear,
}: FieldActionButtonClearProps) {
    return (
        <FieldActionButton
            name="clear"
            onClick={onClick}
            size={size}
            slot={<Icon icon={faTimesCircle} />}
            strTooltip={strClear}
        />
    );
}
