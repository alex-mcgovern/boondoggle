import { forwardRef } from "react";

import { Button } from "../Button";

import type { ButtonProps } from "../Button";

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
