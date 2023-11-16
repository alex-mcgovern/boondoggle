import * as RadixSlot from "@radix-ui/react-slot";
import { Children } from "react";

import { Box } from "../../../box/_components/Box";
import { Button } from "../../../button";
import { dialogModalActionsWrapperStyle } from "./styles.css";

import type { ReactNode } from "react";
import type { useDialogModalState } from "../../../../lib/use-dialog-modal-state";

export type DialogModalActionsProps = {
	/**
	 * Actions shown at the bottom of the dialog modal.
	 */
	actions: ReactNode | [ReactNode?, ReactNode?];

	/**
	 * Closes the dialog modal.
	 */
	closeDialog: ReturnType<typeof useDialogModalState>["closeDialog"];

	/**
	 * Whether the dialog modal is in an error state.
	 */
	isError: boolean | undefined;

	/**
	 * Function to call when the "Try again" button is clicked.
	 */
	onClickTryAgain: (() => unknown) | (() => Promise<unknown>) | undefined;

	/**
	 * Whether the dialog modal should close when an action is clicked.
	 */
	shouldCloseOnAction: boolean | undefined;

	/**
	 * Text for the "Try again" button.
	 */
	strTryAgain: string | undefined;
};

/**
 * Wraps actions for a dialog modal.
 */
export function DialogModalActions({
	actions,
	closeDialog,
	isError,
	onClickTryAgain,
	shouldCloseOnAction = true,
	strTryAgain,
}: DialogModalActionsProps) {
	if (!actions) {
		return null;
	}

	if (isError && strTryAgain && onClickTryAgain) {
		return (
			<Box className={dialogModalActionsWrapperStyle}>
				<Button name="try_again" onClick={onClickTryAgain}>
					{strTryAgain}
				</Button>
			</Box>
		);
	}

	return (
		<Box
			__gridTemplateColumns={`repeat(${Children.count(actions)}, 1fr)`}
			className={dialogModalActionsWrapperStyle}
		>
			{Children.map(actions, (action) => {
				return (
					<RadixSlot.Slot
						onClick={() => {
							if (shouldCloseOnAction) {
								closeDialog();
							}
						}}
					>
						{action}
					</RadixSlot.Slot>
				);
			})}
		</Box>
	);
}
