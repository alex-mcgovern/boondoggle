import clsx from "clsx";
import * as React from "react";
import {
	FieldError,
	Input as RACInput,
	type InputProps as RACInputProps,
} from "react-aria-components";
import { inputCSS } from "./styles.css";
import { useController, useFormContext } from "react-hook-form";

export type InputProps = RACInputProps;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
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

export function FormInput(props: InputProps) {
	if (!props.name) {
		throw new Error("FormTextField requires a name prop");
	}

	const { control } = useFormContext();

	const {
		field: { ref, value = "", disabled: isDisabled, ...field },
		fieldState: { error, invalid },
	} = useController({
		control,
		defaultValue: props.defaultValue,
		name: props.name,
	});

	return (
		<>
			<Input {...props} {...field} value={value} invalid={invalid} />
			<FieldError>{error?.message}</FieldError>
		</>
	);
}
