import { forwardRef } from "react";

import { Button } from "../button_comp";

import type { ButtonProps } from "../button_comp";

export type FormSubmitButtonProps = Omit<ButtonProps, "slotLeft">;

export const FormSubmitButton = forwardRef<
  HTMLButtonElement,
  FormSubmitButtonProps
>(({ children, ...rest }, ref) => {
  return (
    <Button name="submit" ref={ref} size="md" type="submit" {...rest}>
      {children}
    </Button>
  );
});
