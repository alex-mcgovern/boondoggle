import { forwardRef } from "react";

import { Button } from "../button/Button";
import { ButtonProps } from "../button/types";

export type FormSubmitButtonProps = Omit<ButtonProps, "name">;

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
