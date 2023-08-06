import { forwardRef, useMemo } from "react";
import { useForm } from "react-hook-form";

import { Button } from "../button";
import { Icon } from "../decorative.icon";
import { getSubmitButtonIcon } from "../form/utils/get_form_button_icon";

import type { ButtonProps } from "../button";

export type FormSubmitButtonProps = Omit<ButtonProps, "slotLeft">;

export const FormSubmitButton = forwardRef<
  HTMLButtonElement,
  FormSubmitButtonProps
>(({ children, slotRight, ...rest }, ref) => {
  /**
   * Initialise react-hook-form and subscribe to form state proxy
   * https://react-hook-form.com/api/useform/formstate
   */
  const formMethods = useForm();

  const { buttonIcon, buttonIconProps } = useMemo(() => {
    return getSubmitButtonIcon(formMethods.formState);
  }, [formMethods.formState]);

  return (
    <Button
      name="submit"
      ref={ref}
      size="md"
      slotRight={
        slotRight ||
        (buttonIcon ? (
          <Icon icon={buttonIcon} {...buttonIconProps} />
        ) : undefined)
      }
      type="submit"
      {...rest}
    >
      {children}
    </Button>
  );
});
