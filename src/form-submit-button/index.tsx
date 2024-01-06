import type { ComponentProps } from "react";

import { forwardRef } from "react";

import { Button } from "../button";

export const FormSubmitButton = forwardRef<
    HTMLButtonElement,
    Omit<ComponentProps<typeof Button>, "name">
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
