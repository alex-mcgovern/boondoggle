import { useEffect, useMemo } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Box } from "../box";
import { Button } from "../button";
import { Icon } from "../icon";
import { getSubmitButtonIcon } from "./utils/get_form_button_icon";

import type { FormInputProps } from "./sub_components/form_input.comp";
import type { FormSelectSingleProps } from "./sub_components/form_select_single.comp";
import type { FormEvent, ReactElement } from "react";

/**
 * Main form component, wraps `react-hook-form` and provides a consistent interface for
 * composing forms. Allows only a selection of connected form input elements.
 */ type PermittedFormElements =
  | ReactElement<FormInputProps>
  | ReactElement<FormSelectSingleProps>
  | Array<ReactElement<FormInputProps> | ReactElement<FormSelectSingleProps>>;
export interface FormProps {
  children: PermittedFormElements;
  disabled?: boolean;
  handleFormSubmission: () => Promise<unknown>;
  onSubmission: () => void;
  submitButtonText: string;
}

export function Form({
  children,
  onSubmission,
  handleFormSubmission,
  submitButtonText,
  disabled,
}: FormProps) {
  /**
   * Initialise react-hook-form and subscribe to form state proxy
   * https://react-hook-form.com/api/useform/formstate
   */
  const formMethods = useForm();

  const { buttonIcon, buttonIconProps } = useMemo(() => {
    return getSubmitButtonIcon(formMethods.formState);
  }, [formMethods.formState]);

  const onSubmit = async (event: FormEvent) => {
    return formMethods.handleSubmit(handleFormSubmission)(event);
  };

  /**
   * If the function passed to and called with `formMethods.handleSubmit` resolves, `isSubmitSuccessful`
   * will trigger the `useEffect` and we can notify the parent component about the form submission.
   *
   * Note: because of the way react-hook-form batches updates to `formMethods.formState`,
   * it is better to attach `formMethods` as a dependency to a `useEffect`, rather than
   * chain a `.then()` off the form handler.
   */
  useEffect(() => {
    if (formMethods.formState.isSubmitSuccessful) {
      formMethods.reset();
      if (onSubmission) {
        onSubmission();
      }
    }
  }, [onSubmission, formMethods]);

  return (
    <FormProvider {...formMethods}>
      <Box as="form" onSubmit={onSubmit}>
        {children}

        <Button
          aria-label={submitButtonText}
          size="lg"
          width="100%"
          name="submit"
          type="submit"
          slotLeft={
            buttonIcon ? <Icon icon={buttonIcon} {...buttonIconProps} /> : null
          }
          disabled={disabled}
        >
          {submitButtonText}
        </Button>
      </Box>
    </FormProvider>
  );
}
