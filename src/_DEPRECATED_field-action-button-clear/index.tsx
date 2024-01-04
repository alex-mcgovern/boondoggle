import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons/faTimesCircle";
import { Icon } from "../__DONE__icon";
import { FieldActionButton } from "../_DEPRECATED_field-action-button";
import type { FieldActionButtonProps } from "../_DEPRECATED_field-action-button";

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
	className,
	onClick,
	strClear,
}: FieldActionButtonClearProps) {
	return (
		<FieldActionButton
			className={className}
			data-testid="clear"
			name="clear"
			onClick={onClick}
			slot={<Icon icon={faTimesCircle} />}
			strTooltip={strClear}
		/>
	);
}
