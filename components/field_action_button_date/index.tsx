import { faCalendar } from "@fortawesome/pro-solid-svg-icons";
import { forwardRef } from "react";

import { FieldActionButton } from "../field_action_button";
import { Icon } from "../icon";

import type { FieldActionButtonProps } from "../field_action_button";

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
