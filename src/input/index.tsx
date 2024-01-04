import clsx from "clsx";
import * as React from "react";
import {
	Input as RACInput,
	type InputProps as RACInputProps,
} from "react-aria-components";
import { inputCSS } from "./styles.css";

export const Input = React.forwardRef<HTMLInputElement, RACInputProps>(
	(props, ref) => {
		return (
			<RACInput
				{...props}
				ref={ref}
				className={clsx(props.className, inputCSS)}
			/>
		);
	},
);
