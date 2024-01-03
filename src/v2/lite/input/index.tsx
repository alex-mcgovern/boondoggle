import * as React from "react";
import {
	Input as RACInput,
	InputProps as RACInputProps,
} from "react-aria-components";
import { inputCSS } from "./styles.css";

export const Input = React.forwardRef<HTMLInputElement, RACInputProps>(
	(
		{
			className,
			...props
		},
		ref,
	) => {
		return (
			<RACInput
				ref={ref}
				className={inputCSS()}
				{...props}
			/>
		);
	},
);
