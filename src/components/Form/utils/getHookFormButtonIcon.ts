import type { IconProps } from "@alexmcgovern/boondoggle.design";
import {
  faCheckCircle,
  faExclamationTriangle,
  faPaperPlane,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import type { FieldValues, FormState } from "react-hook-form";

interface GetHookFormButtonIconProps {
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
 * ToDo: Reconsider how icon & iconProps are handled in `packages/boondoggle.design/src/Icon`
 * it doesn't really make sense how they have been typed.
 */
export function getHookFormButtonIconProps({
  errors,
  isSubmitSuccessful,
  isSubmitted,
  isSubmitting,
}: GetHookFormButtonIconProps): {
  buttonIcon: IconProps["icon"] | undefined;
  buttonIconProps: Omit<IconProps, "icon"> | undefined;
} {
  if (isSubmitted) {
    /** -----------------------------------------------------------------------------
     * ✅ Handle success case
     * ------------------------------------------------------------------------------- */
    if (isSubmitSuccessful) {
      return {
        buttonIcon: faCheckCircle,
        buttonIconProps: undefined,
      };
    }

    /** -----------------------------------------------------------------------------
     * ⛔️⏳ Handle non-success cases
     * ------------------------------------------------------------------------------- */

    if (!isSubmitSuccessful) {
      /** ---------------------------------------------
       * ⛔️ Validation errors
       * ----------------------------------------------- */

      if (errors) {
        return {
          buttonIcon: faExclamationTriangle,
          buttonIconProps: undefined,
        };
      }

      /** ---------------------------------------------
       * ⏳ Waiting on form submission
       * ----------------------------------------------- */

      if (!errors && isSubmitting) {
        return {
          buttonIcon: faSpinner,
          buttonIconProps: {
            spin: true,
          },
        };
      }
    }
  }

  /** -----------------------------------------------------------------------------
   * Default icon props
   * ------------------------------------------------------------------------------- */

  return {
    buttonIcon: faPaperPlane,
    buttonIconProps: undefined,
  };
}
