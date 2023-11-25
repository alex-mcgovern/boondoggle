import { faExclamationCircle } from "@fortawesome/pro-solid-svg-icons/faExclamationCircle";
import * as RadixSlot from "@radix-ui/react-slot";
import { forwardRef } from "react";
import type { ReactNode } from "react";
import { useDialogModalState } from "../_lib/use-dialog-modal-state";
import { Box } from "../box";
import type { BoxProps } from "../box";
import { Icon } from "../icon";
import { variantColorOverlay } from "../index.css";
import { LoaderFullScreen } from "../loader-full-screen";
import { DialogModalActions } from "./_components/dialog_modal_actions";
import type { DialogModalActionsProps } from "./_components/dialog_modal_actions";
import { DialogModalContent } from "./_components/dialog_modal_content";
import { DialogModalHeader } from "./_components/dialog_modal_header";
import { DialogModalInner } from "./_components/dialog_modal_inner";
import type { DialogModalInnerWidth } from "./_components/dialog_modal_inner/styles.css";
import { DialogModalOuter } from "./_components/dialog_modal_outer";

/** -----------------------------------------------------------------------------
 * DIALOG ERROR MESSAGE
 * ------------------------------------------------------------------------------- */

/**
 * Renders an error message inside a dialog modal.
 */
export function DialogModalErrorMessage({
	description,

	title,
}: {
	/**
	 * Text that will be rendered inside the dialog modal.
	 */
	description: string | undefined;

	/**
	 * Text that will be rendered inside the dialog modal.
	 */
	title: string;
}) {
	return (
		<Box
			alignItems="center"
			display="flex"
			flexDirection="column"
			justifyContent="center"
			padding="space_5"
			textAlign="center"
		>
			<Icon
				className={variantColorOverlay.red}
				color="text_low_contrast"
				icon={faExclamationCircle}
				marginBottom="space_4"
				size="3x"
			/>

			{title && (
				<Box as="h3" fontStyle="h5">
					{title}
				</Box>
			)}
			{description && (
				<Box as="p" color="text_low_contrast">
					{description}
				</Box>
			)}
		</Box>
	);
}

/** -----------------------------------------------------------------------------
 * DIALOG ACTION CONFIRMATION
 * ------------------------------------------------------------------------------- */

export type DialogModalProps = {
	/**
	 * Actions shown at the bottom of the dialog modal.
	 */
	actions?: DialogModalActionsProps["actions"];

	/**
	 * Alert shown at the top of the dialog modal.
	 */
	alert?: ReactNode;

	/**
	 * Content shown in the dialog modal.
	 */
	children: ReactNode | Array<ReactNode>;

	/**
	 * Whether the dialog modal is in an error state.
	 */
	isError?: boolean;

	/**
	 * Whether the dialog modal is loading.
	 */
	isLoading?: boolean;

	/**
	 * Function to call when the "Try again" button is clicked.
	 */
	onClickTryAgain?: (() => unknown) | (() => Promise<unknown>) | undefined;

	/**
	 * Whether the dialog modal should close when an action is clicked.
	 */
	shouldCloseOnAction?: boolean;

	/**
	 * Description of the error.
	 */
	strErrorDescription?: string;

	/**
	 * Title of the error.
	 */
	strErrorTitle?: string;

	/**
	 * Text for the "Try again" button.
	 */
	strTryAgain?: string | undefined;

	/**
	 * Title shown at the top of the dialog modal.
	 */
	title: string;

	/**
	 * Trigger node shown to open the dialog modal.
	 */
	triggerNode?: ReactNode;

	/**
	 * Width of the dialog modal.
	 */
	width: DialogModalInnerWidth;

	/**
	 * Props to pass to the wrapper.
	 */
	wrapperProps?: BoxProps;

	/**
	 * Whether the dialog modal is open or not.
	 */
	isOpen?: boolean;
};

export const DialogModal = forwardRef<HTMLDialogElement, DialogModalProps>(
	(
		{
			actions,
			alert,
			children,
			isError,
			isLoading,
			onClickTryAgain,
			shouldCloseOnAction,
			strErrorDescription,
			strErrorTitle,
			strTryAgain,
			title,
			isOpen,
			triggerNode,
			width,
			wrapperProps,
		},
		ref,
	) => {
		const { closeDialog, dialogRef, toggleIsOpen, triggerRef } =
			useDialogModalState({ ref });

		return (
			<Box
				className={variantColorOverlay.default}
				position="relative"
				{...wrapperProps}
			>
				{triggerNode && (
					<RadixSlot.Slot onClick={toggleIsOpen} ref={triggerRef}>
						{triggerNode}
					</RadixSlot.Slot>
				)}

				<DialogModalOuter isOpen={isOpen} dialogRef={dialogRef}>
					<DialogModalInner width={width}>
						<DialogModalHeader
							closeDialog={closeDialog}
							title={title}
						/>

						{!isLoading &&
							isError &&
							strErrorDescription &&
							strErrorTitle && (
								<DialogModalErrorMessage
									description={strErrorDescription}
									title={strErrorTitle}
								/>
							)}

						{!isError && isLoading && <LoaderFullScreen />}

						{!isError && !isLoading && (
							<DialogModalContent alert={alert}>
								{children}
							</DialogModalContent>
						)}
						{!isLoading && actions && (
							<DialogModalActions
								actions={actions}
								closeDialog={closeDialog}
								isError={isError}
								onClickTryAgain={onClickTryAgain}
								shouldCloseOnAction={shouldCloseOnAction}
								strTryAgain={strTryAgain}
							/>
						)}
					</DialogModalInner>
				</DialogModalOuter>
			</Box>
		);
	},
);
