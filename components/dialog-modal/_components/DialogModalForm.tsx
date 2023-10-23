import * as RadixSlot from "@radix-ui/react-slot";
import { forwardRef, useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { handleHookFormErrors } from "../../../src/lib/handle_hook_form_errors";
import { useDialogModalState } from "../../../src/lib/use_dialog_modal_state";
import { variantColorOverlay } from "../../../src/styles/color_palette.css";
import { Box } from "../../box/Box";
import { DialogModalActions } from "./DialogModalActions";
import { DialogModalContent } from "./DialogModalContent";
import { DialogModalErrorMessage } from "./DialogModalErrorMessage";
import { DialogModalHeader } from "./DialogModalHeader";
import { DialogModalInner } from "./DialogModalInner";
import { DialogModalOuter } from "./DialogModalOuter";
import { FormSubmitButton } from "../../form-submit-button/FormSubmitButton";

import type { ReactNode } from "react";
import type { FieldValues, Resolver } from "react-hook-form";
import type { BoxProps } from "../../box/Box";
import type { DialogModalInnerWidth } from "./DialogModalInner.css";

export type DialogModalFormProps<
	TFieldValues extends FieldValues = FieldValues,
> = {
	/**
	 * Alert component that will be rendered above the form.
	 */
	alert?: ReactNode;

	/**
	 * Form field components. They will be able to access `react-hook-form`'s form context.
	 */
	children: ReactNode | Array<ReactNode>;

	/**
	 * Text that will be rendered inside the form submit button.
	 */
	formSubmitButtonText: string;

	/**
	 * Function that will be called when the form is submitted.
	 */
	handleSubmit:
		| ((fieldValues: TFieldValues) => Promise<void>)
		| ((fieldValues: TFieldValues) => void);

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
	 * Custom resolver for `react-hook-form`.
	 */

	// biome-ignore lint/suspicious/noExplicitAny: any is needed here because of the `react-hook-form` types.
	resolver?: Resolver<TFieldValues, any>;

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
	 * Title of the dialog modal.
	 */
	title: string;

	/**
	 * Node that will trigger the dialog modal when clicked.
	 */
	triggerNode?: ReactNode;

	/**
	 * Width of the dialog modal.
	 */
	width: DialogModalInnerWidth;

	/**
	 * Props that will be passed to the wrapper `Box` component.
	 */
	wrapperProps?: BoxProps;
};

function BaseDialogModalForm<TFieldValues extends FieldValues = FieldValues>(
	{
		alert,
		children,
		formSubmitButtonText,
		handleSubmit: initHandleSubmission,
		isError,
		isLoading,
		onClickTryAgain,
		resolver,
		strErrorDescription,
		strErrorTitle,
		strTryAgain,
		title,
		triggerNode,
		width,
		wrapperProps,
	}: DialogModalFormProps<TFieldValues>,
	ref: React.ForwardedRef<HTMLDialogElement>,
) {
	const { closeDialog, dialogRef, toggleIsOpen, triggerRef } =
		useDialogModalState({ ref });

	const formMethods = useForm<TFieldValues>({ resolver });

	const { reset } = formMethods;

	const handleSubmit = useCallback(
		async (fieldValues: TFieldValues) => {
			Promise.resolve(initHandleSubmission(fieldValues)).then(() => {
				reset();

				// closeDialog();
			});
		},
		[initHandleSubmission, reset],
	);

	return (
		<FormProvider {...formMethods}>
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

				<DialogModalOuter dialogRef={dialogRef}>
					<DialogModalInner
						as="form"
						onSubmit={formMethods.handleSubmit(
							handleSubmit,
							handleHookFormErrors,
						)}
						width={width}
					>
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

						{!isError && (
							<DialogModalContent alert={alert}>
								{children}
							</DialogModalContent>
						)}

						{!isError && (
							<DialogModalActions
								actions={
									<FormSubmitButton isLoading={isLoading}>
										{formSubmitButtonText}
									</FormSubmitButton>
								}
								closeDialog={closeDialog}
								isError={isError}
								onClickTryAgain={onClickTryAgain}
								shouldCloseOnAction={false}
								strTryAgain={strTryAgain}
							/>
						)}
					</DialogModalInner>
				</DialogModalOuter>
			</Box>
		</FormProvider>
	);
}

export const DialogModalForm = forwardRef(BaseDialogModalForm);
