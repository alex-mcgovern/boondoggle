import * as React from "react";

import { Button } from "../button";

export const FormSubmitButton = React.forwardRef<
	HTMLButtonElement,
	Omit<React.ComponentProps<typeof Button>, "name">
>(({ appearance = "primary", children, ...rest }, ref) => {
	return (
		<Button
			appearance={appearance}
			name="submit"
			ref={ref}
			type="submit"
			{...rest}
		>
			{children}
		</Button>
	);
});
