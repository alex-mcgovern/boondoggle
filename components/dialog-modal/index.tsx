import * as RadixSlot from "@radix-ui/react-slot"; import { forwardRef } from "react"; import { useDialogModalState } from "../../src/lib/use_dialog_modal_state"; import { Box } from "../box/Box"; import { DialogModalActions } from "./_components/DialogModalActions"; import { DialogModalContent } from "./_components/DialogModalContent"; import { DialogModalErrorMessage } from "./_components/DialogModalErrorMessage"; import { DialogModalHeader } from "./_components/DialogModalHeader"; import { DialogModalInner } from "./_components/DialogModalInner"; import { DialogModalOuter } from "./_components/DialogModalOuter"; import { LoaderFullScreen } from "../loader-full-screen"; import type { ReactNode } from "react"; import type { BoxProps } from "../box/Box"; import type { DialogModalActionsProps } from "./_components/DialogModalActions"; import type { DialogModalInnerWidth } from "./_components/DialogModalInner.css"; import { theme } from "../../style.css";

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
				className={theme.default}
				position="relative"
				{...wrapperProps}
			>
				{triggerNode && (
					<RadixSlot.Slot onClick={toggleIsOpen} ref={triggerRef}>
						{triggerNode}
					</RadixSlot.Slot>
				)}

				<DialogModalOuter dialogRef={dialogRef}>
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
