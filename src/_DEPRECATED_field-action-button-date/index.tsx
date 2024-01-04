import { faCalendar } from "@fortawesome/pro-solid-svg-icons/faCalendar";
import { forwardRef } from "react";
import { Icon } from "../__DONE__icon";
import { FieldActionButton } from "../_DEPRECATED_field-action-button";
import type { FieldActionButtonProps } from "../_DEPRECATED_field-action-button";

type FieldActionButtonDateProps = Omit<FieldActionButtonProps, "name" | "slot">;

/**
 * A button to open a date picker.
 */
export const FieldActionButtonDate = forwardRef<
	HTMLButtonElement,
	FieldActionButtonDateProps
>(({ onClick }, ref) => {
	return (
		<FieldActionButton
			data-testid="field-action-button-date"
			name="date"
			onClick={onClick}
			ref={ref}
			slot={<Icon icon={faCalendar} />}
		/>
	);
});
