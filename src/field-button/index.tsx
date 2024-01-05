import {
	Button as RACButton,
	type ButtonProps as RACButtonProps,
} from "react-aria-components";
import { fieldButtonCSS } from "./styles.css";
import * as React from "react";

export type FieldButtonProps = RACButtonProps;

/**
 * A field button is a button that is intended to be used inside a `Group` component
 * to add additional functionality to a field. The `slot` prop is used to connect the
 * button to the field.
 */
export const FieldButton = React.forwardRef<
	HTMLButtonElement,
	FieldButtonProps
>((props: RACButtonProps, ref) => {
	return (
		<RACButton
			{...props}
			ref={ref}
			className={fieldButtonCSS}
			excludeFromTabOrder
		/>
	);
});
