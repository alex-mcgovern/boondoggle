import {
  faCheckCircle,
  faExclamationTriangle,
  faPaperPlane,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useMemo } from "react";
import {
  FormProvider,
  useController,
  useForm,
  useFormContext,
} from "react-hook-form";

import { Box } from "../box";
import { Button } from "../button";
import { Icon } from "../icon";
import { Input } from "../input";
import { SelectSingle } from "../select";
import { Slider } from "../slider";
import { TextArea } from "../text_area";

import type { FormEvent, ReactElement} from "react";
import type { IconProps } from "../icon";
import type { InputProps } from "../input";
import type { DropdownItemShape, SelectSingleProps } from "../select";
import type { SliderProps } from "../slider";
import type { TextAreaProps } from "../text_area";
import type { UseComboboxStateChange } from "downshift";
import type { FieldValues, FormState } from "react-hook-form";

/**
 * Get a dynamic icon for the submit button based on the form state
 */
export function getSubmitButtonIcon({
  errors,
  isSubmitSuccessful,
  isSubmitted,
  isSubmitting,
}: FormState<FieldValues>): {
  buttonIcon: IconProps["icon"] | undefined;
  buttonIconProps: Omit<IconProps, "icon"> | undefined;
} {
  if (isSubmitted && isSubmitSuccessful) {
    return {
      buttonIcon: faCheckCircle,
      buttonIconProps: undefined,
    };
  }
  if (isSubmitted && !isSubmitSuccessful && errors) {
    return {
      buttonIcon: faExclamationTriangle,
      buttonIconProps: undefined,
    };
  }
  if (isSubmitted && !isSubmitSuccessful && !errors && isSubmitting) {
    return {
      buttonIcon: faSpinner,
      buttonIconProps: {
        spin: true,
      },
    };
  }

  return {
    buttonIcon: faPaperPlane,
    buttonIconProps: undefined,
  };
}

/**
 * React Hook Form connected version of Boondoggle's `Input`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export interface FormSliderProps extends SliderProps {
  /** Message to render when erroring. */
  errorMessage: string;
  /** Callback for validation, else simply validates is non-empty. */
  validateFunction?: (value: string) => boolean;
  /** a11y label passed to `Label` component */
  label: string;
  /** Whether the slider is a required form element */
  required?: boolean;
}

export function FormSlider({
  name,
  errorMessage,
  required,
  validateFunction,
  defaultValue,
  ...rest
}: FormSliderProps) {
  const { control } = useFormContext();

  const {
    field: { onChange, onBlur, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: required && errorMessage,
      validate: (value) => {
        if (validateFunction) {
          return validateFunction(value) || errorMessage;
        }
        return !!value;
      },
    },
    defaultValue,
  });

  /**
   * Radix Slider returns an array of values, for the "slider range" use case.
   * Currently we don't need these, so we're just destructuring the first and using that.
   */
  const handleChange = useCallback(
    (value: Array<number>) => {
      const [firstValue] = value || [];
      return onChange(firstValue);
    },
    [onChange]
  );

  return (
    <Slider
      onValueChange={handleChange}
      onBlur={onBlur}
      invalid={!!error}
      aria-required={required}
      errorMessage={errorMessage}
      name={name}
      ref={ref}
      {...rest}
    />
  );
}

/**
 * React Hook Form connected version of Boondoggle's `TextArea`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export interface FormTextAreaProps extends TextAreaProps {
  /** Message to render when erroring. */
  errorMessage: string;
  /** Callback for validation, else simply validates is non-empty. */
  validateFunction?: (value: string) => boolean;
  /** a11y label passed to `Label` component */
  label: string;
  /** Placeholder text to display when input is empty. */
  placeholder: string;
}

export function FormTextArea({
  name,
  errorMessage,
  required,
  validateFunction,
  defaultValue,
  ...rest
}: FormTextAreaProps) {
  const { control } = useFormContext();

  const {
    field: { onChange, onBlur, ref, value: controlledValue },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: required && errorMessage,
      validate: (value) => {
        if (validateFunction) {
          return validateFunction(value) || errorMessage;
        }
        return !!value;
      },
    },
    defaultValue,
  });

  return (
    <TextArea
      onChange={onChange}
      onBlur={onBlur}
      invalid={!!error}
      aria-required={required}
      errorMessage={errorMessage}
      name={name}
      value={controlledValue}
      ref={ref}
      {...rest}
    />
  );
}

/**
 * React Hook Form connected version of `SelectSingle`. Uses `useFormContext`
 * to access Hook Form's methods so can be deeply nested.
 */
export interface FormSingleSelectProps extends SelectSingleProps {
  errorMessage: string;
}

export function FormSingleSelect({ name, ...rest }: FormSingleSelectProps) {
  const { control } = useFormContext();

  const {
    field: { onChange, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true },
  });

  const handleChange = useCallback(
    ({ selectedItem }: UseComboboxStateChange<DropdownItemShape>) => {
      return selectedItem ? onChange(selectedItem.value) : null;
    },
    [onChange]
  );

  return (
    <SelectSingle
      ref={ref}
      invalid={!!error}
      onChange={handleChange}
      name={name}
      {...rest}
    />
  );
}

/**
 * React Hook Form connected version of Boondoggle's `Input`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export interface FormInputProps extends InputProps {
  /** Message to render when erroring. */
  errorMessage: string;
  /** Callback for validation, else simply validates is non-empty. */
  validateFunction?: (value: string) => boolean;
  /** a11y label passed to `Label` component */
  label: string;
  /** Placeholder text to display when input is empty. */
  placeholder: string;
}

export function FormInput({
  defaultValue,
  errorMessage,
  name,
  required,
  validateFunction,
  ...rest
}: FormInputProps) {
  const { control } = useFormContext();

  const {
    field: { onChange, onBlur, ref, value: controlledValue },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: required && errorMessage,
      validate: (value) => {
        if (validateFunction) {
          return validateFunction(value) || errorMessage;
        }
        return !!value;
      },
    },
    defaultValue,
  });

  return (
    <Input
      onChange={onChange}
      onBlur={onBlur}
      invalid={!!error}
      aria-required={required}
      errorMessage={errorMessage}
      name={name}
      value={controlledValue}
      ref={ref}
      {...rest}
    />
  );
}

/**
 * Main form component, wraps `react-hook-form` and provides a consistent interface for
 * composing forms. Allows only a selection of connected form input elements.
 */ type PermittedFormElements =
  | ReactElement<FormInputProps>
  | ReactElement<FormSingleSelectProps>
  | Array<ReactElement<FormInputProps> | ReactElement<FormSingleSelectProps>>;
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
