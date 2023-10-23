import { Box } from "../../box/Box";
import { dialogHeaderStyle, dialogTitleStyle } from "./DialogModalHeader.css";
import type { useDialogModalState } from "../../../src/lib/use_dialog_modal_state";
import { faTimes } from "@fortawesome/pro-solid-svg-icons";
import { Button } from "../../button";
import { Icon } from "../../icon";

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
			<Box as="h3" className={dialogTitleStyle} fontStyle="h5">
				{title}
			</Box>

			<Button
				variant="ghost"
				aria-label="Close"
				// marginLeft="auto"
				name="close"
				onClick={closeDialog}
				size="square_md"
				slotLeft={<Icon icon={faTimes} />}
				type="button"
			/>
		</Box>
	);
}
