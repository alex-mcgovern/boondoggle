import { forwardRef } from "react";

import { Button } from "../button/Button";

import type { ButtonProps } from "../button/Button";

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
