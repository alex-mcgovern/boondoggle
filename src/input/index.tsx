import clsx from "clsx";
import { forwardRef } from "react";
import {
	Input as RACInput,
	type InputProps as RACInputProps,
} from "react-aria-components";

import { inputCSS } from "./styles.css";

export type InputProps = RACInputProps;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return (
		<RACInput
			{...props}
			className={clsx(props.className, inputCSS)}
			data-can-group
			ref={ref}
		/>
	);
});
