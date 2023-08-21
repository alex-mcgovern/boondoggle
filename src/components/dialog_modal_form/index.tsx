import { Slot } from "@radix-ui/react-slot";
import { forwardRef, useCallback } from "react";
import {
  type FieldValues,
  FormProvider,
  type Resolver,
  useForm,
} from "react-hook-form";

import { handleHookFormErrors } from "../../lib/handle_hook_form_errors";
import { useDialogModalState } from "../../lib/use_dialog_modal_state";
import { variantColorOverlay } from "../../styles/color_palette.css";
import { Box } from "../box";
import { DialogModalActions } from "../dialog_modal_actions";
import { DialogModalContent } from "../dialog_modal_content";
import { DialogModalErrorMessage } from "../dialog_modal_error_message";
import { DialogModalHeader } from "../dialog_modal_header";
import { DialogModalInner } from "../dialog_modal_inner";
import { DialogModalOuter } from "../dialog_modal_outer";
import { FormSubmitButton } from "../form_submit_button";
import { LoaderFullScreen } from "../loader_full_screen";

import type { BoxProps } from "../box";
import type { DialogModalInnerWidth } from "../dialog_modal_inner/styles.css";
import type { ReactNode } from "react";

export type DialogModalFormProps = {
  /** Alert component that will be rendered above the form. */
  alert?: ReactNode;
  /** Form field components. They will be able to access `react-hook-form`'s form context. */
  children: ReactNode | Array<ReactNode>;
  /** Text that will be rendered inside the form submit button. */
  formSubmitButtonText: string;
  /** Function that will be called when the form is submitted. */
  handleFormSubmission: (fieldValues: FieldValues) => Promise<void>;
  /** Whether the dialog modal is in an error state. */
  isError?: boolean;
  /** Whether the dialog modal is loading. */
  isLoading?: boolean;
  /** Function to call when the "Try again" button is clicked. */
  onClickTryAgain?: (() => unknown) | (() => Promise<unknown>) | undefined;
  /** Custom resolver for `react-hook-form`. */
  resolver?: Resolver<FieldValues, any>;
  /** Description of the error. */
  strErrorDescription?: string;
  /** Title of the error. */
  strErrorTitle?: string;
  /** Text for the "Try again" button. */
  strTryAgain?: string | undefined;
  /** Title of the dialog modal. */
  title: string;
  /** Node that will trigger the dialog modal when clicked. */
  triggerNode?: ReactNode;
  /** Width of the dialog modal. */
  width?: DialogModalInnerWidth;
  /** Props that will be passed to the wrapper `Box` component. */
  wrapperProps?: BoxProps;
};

export const DialogModalForm = forwardRef<
  HTMLDialogElement,
  DialogModalFormProps
>(
  (
    {
      alert,
      children,
      formSubmitButtonText,
      handleFormSubmission: initialHandleFormSubmission,
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
    },
    ref
  ) => {
    const { closeDialog, dialogRef, toggleIsOpen, triggerRef } =
      useDialogModalState({ ref });

    /** --------------------------------------------- */

    const formMethods = useForm({ resolver });

    /** --------------------------------------------- */

    const handleFormSubmission = useCallback(
      async (fieldValues: FieldValues) => {
        return initialHandleFormSubmission(fieldValues).then(() => {
          closeDialog();
        });
      },
      [closeDialog, initialHandleFormSubmission]
    );

    /** --------------------------------------------- */

    return (
      <FormProvider {...formMethods}>
        <Box
          className={variantColorOverlay.default}
          position="relative"
          {...wrapperProps}
        >
          {triggerNode && (
            <Slot onClick={toggleIsOpen} ref={triggerRef}>
              {triggerNode}
            </Slot>
          )}

          <DialogModalOuter dialogRef={dialogRef}>
            <DialogModalInner
              as="form"
              onSubmit={formMethods.handleSubmit(
                handleFormSubmission,
                handleHookFormErrors
              )}
              width={width}
            >
              <DialogModalHeader closeDialog={closeDialog} title={title} />

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

              <DialogModalActions
                actions={
                  <FormSubmitButton>{formSubmitButtonText}</FormSubmitButton>
                }
                closeDialog={closeDialog}
                isError={isError}
                isLoading={isLoading}
                onClickTryAgain={onClickTryAgain}
                shouldCloseOnAction={false}
                strTryAgain={strTryAgain}
              />
            </DialogModalInner>
          </DialogModalOuter>
        </Box>
      </FormProvider>
    );
  }
);
