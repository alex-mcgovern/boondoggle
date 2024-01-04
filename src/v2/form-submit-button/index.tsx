import * as React from "react";
import { Button } from "../../button";

export const FormSubmitButton = React.forwardRef<
	HTMLButtonElement,
	Omit<React.ComponentProps<typeof Button>, "name">
>(({ children, appearance = "primary", ...rest }, ref) => {
	return (
		<Button
			name="submit"
			appearance={appearance}
			ref={ref}
			type="submit"
			{...rest}
		>
			{children}
		</Button>
	);
});
