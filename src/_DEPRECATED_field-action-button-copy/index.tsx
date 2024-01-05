import { faCheck } from "@fortawesome/pro-solid-svg-icons/faCheck";
import { faCopy } from "@fortawesome/pro-solid-svg-icons/faCopy";
import { Icon } from "../icon";
import { FieldActionButton } from "../_DEPRECATED_field-action-button";
import type { FieldActionButtonProps } from "../_DEPRECATED_field-action-button";

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
