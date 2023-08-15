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
import { Box } from "../box";
import { DialogModalActions } from "../dialog_modal_actions";
import { DialogModalContent } from "../dialog_modal_content";
import { DialogModalHeader } from "../dialog_modal_header";
import { DialogModalInner } from "../dialog_modal_inner";
import { DialogModalOuter } from "../dialog_modal_outer";
import { FormSubmitButton } from "../form_submit_button";

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
  /** Custom resolver for `react-hook-form`. */
  resolver?: Resolver<FieldValues, any>;
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
      resolver,
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
        <Box position="relative" {...wrapperProps}>
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
              <DialogModalContent alert={alert}>{children}</DialogModalContent>
              <DialogModalActions
                actions={
                  <FormSubmitButton>{formSubmitButtonText}</FormSubmitButton>
                }
                closeDialog={closeDialog}
                shouldCloseOnAction={false}
              />
            </DialogModalInner>
          </DialogModalOuter>
        </Box>
      </FormProvider>
    );
  }
);
