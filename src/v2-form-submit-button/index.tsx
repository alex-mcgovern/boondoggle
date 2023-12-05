import * as React from "react";
import { Button } from "../v2-button";

export const FormSubmitButton = React.forwardRef<
	HTMLButtonElement,
	Omit<React.ComponentProps<typeof Button>, "name">
>(({ children, ...rest }, ref) => {
	return (
		<Button name="submit" ref={ref} size="md" type="submit" {...rest}>
			{children}
		</Button>
	);
});
