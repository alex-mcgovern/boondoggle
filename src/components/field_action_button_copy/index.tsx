import { faCheck, faCopy } from "@fortawesome/pro-solid-svg-icons";

import { FieldActionButton } from "../field_action_button";
import { Icon } from "../icon";

import type { FieldActionButtonProps } from "../field_action_button";

export type FieldActionButtonCopyProps = {
    /**
     * Whether the user has just copied tha value of the field or not.
     */
    isCopied?: boolean;

    /**
     * The tooltip text to display when the button is hovered after copying.
     */
    strCopied: string;
    /**
     * The tooltip text to display when the button is hovered before copying.
     */
    strCopy: string;
} & Omit<FieldActionButtonProps, "name" | "slot">;

/**
 * A button to copy the contents of a field.
 */
export function FieldActionButtonCopy({
    isCopied,
    onClick,
    strCopied,
    strCopy,
}: FieldActionButtonCopyProps) {
    return (
        <FieldActionButton
            name="copy"
            onClick={onClick}
            slot={<Icon icon={isCopied ? faCheck : faCopy} />}
            strTooltip={isCopied ? strCopied : strCopy}
        />
    );
}
