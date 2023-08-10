import { Slot } from "@radix-ui/react-slot";
import { forwardRef, useCallback } from "react";
import {
  type FieldErrors,
  type FieldValues,
  FormProvider,
  type Resolver,
  useForm,
} from "react-hook-form";

import { useDialogModalState } from "../../lib/useDialogModalState";
import { Box } from "../Box";
import { DialogModalActions } from "../DialogModalActions";
import { DialogModalContent } from "../DialogModalContent";
import { DialogModalHeader } from "../DialogModalHeader";
import { DialogModalInner } from "../DialogModalInner";
import { DialogModalOuter } from "../DialogModalOuter";
import { FormSubmitButton } from "../FormSubmitButton";

import type { BoxProps } from "../Box";
import type { DialogModalInnerWidth } from "../DialogModalInner/styles.css";
import type { ReactNode } from "react";

export type DialogModalFormProps = {
  alert?: ReactNode;
  children: ReactNode | Array<ReactNode>;
  formSubmitButtonText: string;
  handleErrors?: (errors: FieldErrors) => void;
  handleFormSubmission: (fieldValues: FieldValues) => Promise<void>;
  resolver?: Resolver<FieldValues, any>;
  title: string;
  triggerNode: ReactNode;
  width?: DialogModalInnerWidth;
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
      handleErrors,
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
          <Slot onClick={toggleIsOpen} ref={triggerRef}>
            {triggerNode}
          </Slot>

          <DialogModalOuter dialogRef={dialogRef}>
            <DialogModalInner
              as="form"
              onSubmit={formMethods.handleSubmit(
                handleFormSubmission,
                handleErrors
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
