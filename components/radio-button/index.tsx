import { Box } from "../box/Box";
import {
	radioButtonInputStyles,
	radioButtonLabelStyles,
	radioButtonWrapperStyles,
} from "./styles.css";

import type { HTMLProps } from "react";
import type { WithName } from "../../src/common-types";

export type RadioButtonInputProps = Omit<
	HTMLProps<HTMLInputElement>,
	"className" | "id" | "name" | "required" | "type" | "value"
>;

export type RadioButtonShape = {
	checked?: boolean;

	description: string;

	title: string;

	value: string;
};

export type RadioButtonProps = RadioButtonShape &
	WithName & {
		inputProps?: RadioButtonInputProps;

		onChange?: (value: string) => void;

		required?: boolean;
	};

export function RadioButton({
	checked,
	description,
	inputProps,
	name,
	onChange,
	required,
	title,
	value,
}: RadioButtonProps) {
	return (
		<Box className={radioButtonWrapperStyles}>
			<input
				className={radioButtonInputStyles}
				defaultChecked={checked}
				id={`${name}-${value}`}
				name={name}
				onChange={() => {
					onChange?.(value);
				}}
				required={required}
				type="radio"
				value={value}
				{...inputProps}
			/>
			<Box
				as="label"
				className={radioButtonLabelStyles}
				htmlFor={`${name}-${value}`}
				position="relative"
			>
				<Box>{title}</Box>
				<Box color="text_low_contrast">{description}</Box>
			</Box>
		</Box>
	);
}
