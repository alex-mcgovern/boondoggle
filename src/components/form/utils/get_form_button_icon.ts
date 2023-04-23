import {
  faCheckCircle,
  faExclamationTriangle,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import type { IconProps } from "../../icon";
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
    buttonIcon: faCheckCircle,
    buttonIconProps: undefined,
  };
}
