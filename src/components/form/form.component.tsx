import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { Box } from "../box_component";
import { Button } from "../button/button.component";
import { Icon } from "../icon";
import { getHookFormIconProps } from "./util.get_hook_form_icon_props";

import type { FormInputProps } from "./form_input.component";
import type { FormSingleSelectProps } from "./form_single_select.component";

export interface FormProps {
  callbackOnSuccessfulFormSubmission: () => void;
  children:
    | React.ReactElement<FormInputProps>
    | React.ReactElement<FormSingleSelectProps>
    | Array<
        | React.ReactElement<FormInputProps>
        | React.ReactElement<FormSingleSelectProps>
      >;
  /** ToDo(react-hook-form): Fix submission handler types */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handleFormSubmission: (...args: Array<any>) => Promise<unknown>;
  submitButtonText: string;
  disabled?: boolean;
}

export function Form({
  children,
  callbackOnSuccessfulFormSubmission,
  handleFormSubmission,
  submitButtonText,
  disabled,
}: FormProps) {
  /** ---------------------------------------------
   * Initialise react-hook-form and subscribe to form state proxy
   * https://react-hook-form.com/api/useform/formstate
   * ----------------------------------------------- */

  const reactHookFormMethods = useForm();

  const { formState, handleSubmit, reset } = reactHookFormMethods;

  const {
    isDirty,
    isSubmitSuccessful,
    isSubmitted,
    isSubmitting,
    isValid,
    isValidating,
    errors,
  } = formState;

  /** ---------------------------------------------
   * Update icon based on form state. (Add a bit of ✨fun✨)
   * ----------------------------------------------- */

  const { buttonIcon, buttonIconProps } = React.useMemo(() => {
    return getHookFormIconProps({
      isValid,
      isValidating,
      isSubmitting,
      isSubmitSuccessful,
      isSubmitted,
      isDirty,
      errors,
    });
  }, [
    isDirty,
    isSubmitSuccessful,
    isSubmitted,
    isSubmitting,
    isValid,
    isValidating,
    errors,
  ]);

  /** ---------------------------------------------
   * Handlers for submission
   * ----------------------------------------------- */

  /**
   * Submission handler passed from parent scope
   */
  const onSubmit = async (event: React.FormEvent) => {
    return handleSubmit(handleFormSubmission)(event);
  };

  /**
   * If the function passed to and called with `handleSubmit` resolves, `isSubmitSuccessful`
   * will trigger the `useEffect` and we can notify the parent component about the form submission.
   *
   * Note: because of the way react-hook-form batches updates to `formState`, it is  better to attach
   * `isSubmitSuccessful` as a dependency to a `useEffect`, rather than chain a `.then()` off the form handler.
   */
  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      if (callbackOnSuccessfulFormSubmission) {
        callbackOnSuccessfulFormSubmission();
      }
    }
  }, [reset, isSubmitSuccessful, callbackOnSuccessfulFormSubmission]);

  /** -----------------------------------------------------------------------------
   * Markup
   * ------------------------------------------------------------------------------- */

  return (
    <FormProvider {...reactHookFormMethods}>
      <Box as="form" onSubmit={onSubmit} display="grid" gap="spacing2">
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
