import { faEye } from "@fortawesome/pro-solid-svg-icons/faEye";
import { faEyeSlash } from "@fortawesome/pro-solid-svg-icons/faEyeSlash";
import { Icon } from "../icon";
import { FieldActionButton } from "../field-action-button";
import type { FieldActionButtonProps } from "../field-action-button";

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
	strHide,
	strShow,
}: FieldActionButtonVisibilityProps) {
	return (
		<FieldActionButton
			name="visibility"
			onClick={onClick}
			slot={<Icon icon={isVisible ? faEyeSlash : faEye} />}
			strTooltip={isVisible ? strHide : strShow}
		/>
	);
}
