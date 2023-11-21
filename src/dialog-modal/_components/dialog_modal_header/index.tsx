import type { useDialogModalState } from "../../../_lib/use-dialog-modal-state";
import { Box } from "../../../box";
import { DialogModalCloseButton } from "../dialog_modal_close_button";
import { dialogHeaderStyle, dialogTitleStyle } from "./styles.css";

type DialogModalHeaderProps = {
	/**
	 * Callback to close the dialog.
	 */
	closeDialog: ReturnType<typeof useDialogModalState>["closeDialog"];
	/**
	 * Title shown at the top of the dialog.
	 */
	title: string;
};

/**
 * Renders the header for a dialog, consisting of the title & dialog close button.
 */
export function DialogModalHeader({
	closeDialog,
	title,
}: DialogModalHeaderProps) {
	return (
		<Box className={dialogHeaderStyle}>
			<Box as="h3" className={dialogTitleStyle} fontStyle="bodyLg">
				{title}
			</Box>

			<DialogModalCloseButton closeDialog={closeDialog} />
		</Box>
	);
}
