import { FieldActionButtonClear } from "../../../field-action-button-clear";

import type { ReactNode } from "react";

type GetSlotRightArgs = {
	/**
	 * Whether the user can clear the input.
	 */
	isClearable: boolean;

	/**
	 * Callback to reset the select state.
	 */
	reset: () => void;

	/**
	 * The slotRight node.
	 */
	slotRight: ReactNode;

	/**
	 * The tooltip text to display when the button is hovered.
	 */
	strClear?: string;
};

/**
 * Get the slotRight node.
 */
export const getSlotRight = ({
	isClearable,
	reset,
	slotRight,
	strClear,
}: GetSlotRightArgs): ReactNode => {
	if (isClearable && strClear) {
		return <FieldActionButtonClear onClick={reset} strClear={strClear} />;
	}

	return slotRight;
};
