import {
  faCheckCircle,
  faExclamationTriangle,
  faPaperPlane,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";

import type { IconProps } from "../icon";
import type { FieldValues, FormState } from "react-hook-form";

interface GetHookFormIconProps {
  isValid: FormState<FieldValues>["isValid"];
  isValidating: FormState<FieldValues>["isValidating"];
  isSubmitting: FormState<FieldValues>["isSubmitting"];
  isSubmitted: FormState<FieldValues>["isSubmitted"];
  isSubmitSuccessful: FormState<FieldValues>["isSubmitSuccessful"];
  isDirty: FormState<FieldValues>["isDirty"];
  errors: FormState<FieldValues>["errors"];
}

/**
 * Make the experience of submitting a form more ✨fun✨ by communicating form state
 * with submit button icon. This is *very* unnecessary, but it was fun to think up.
 *
 * ToDo: Reconsider how icon & iconProps are handled in `packages/boondoggle.design/src/icon`
 * it doesn't really make sense how they have been typed.
 */
export function getHookFormIconProps({
  errors,
  isSubmitSuccessful,
  isSubmitted,
  isSubmitting,
}: GetHookFormIconProps): {
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
