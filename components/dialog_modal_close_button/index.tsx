import { faTimes } from "@fortawesome/pro-solid-svg-icons";

import { Button } from "../button/Button";
import { Icon } from "../icon";

export type DialogModalCloseButtonProps = {
	/**
	 * Callback to close the dialog component.
	 */
	closeDialog: () => void;
};

/**
 * Renders a square close button for a modal dialog.
 */
export function DialogModalCloseButton({
	closeDialog,
}: DialogModalCloseButtonProps) {
	return (
		<Button
			variant="ghost"
			aria-label="Close"
			marginLeft="auto"
			name="close"
			onClick={closeDialog}
			size="square_md"
			slotLeft={<Icon icon={faTimes} />}
			type="button"
		/>
	);
}
