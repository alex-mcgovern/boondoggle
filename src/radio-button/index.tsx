import type * as React from "react";

import { Box } from "../box";
import {
	radioButtonInputStyles,
	radioButtonLabelStyles,
	radioButtonWrapperStyles,
} from "./styles.css";

export function RadioButton({
	checked,
	description,
	inputProps,
	name,
	onChange,
	required,
	title,
	value,
}: {
	checked?: boolean;

	description: string;

	inputProps?: Omit<
		React.HTMLProps<HTMLInputElement>,
		"className" | "id" | "name" | "required" | "type" | "value"
	>;

	/**
	 * Unique name for the element.
	 * @important Should be a *snake_case* string.
	 * @important This will be used as the HTML element ID.
	 */
	name: string;

	onChange?: (value: string) => void;

	required?: boolean;

	title: string;

	value: string;
}) {
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
			<label
				className={radioButtonLabelStyles}
				htmlFor={`${name}-${value}`}
			>
				<Box color="text_high_contrast">{title}</Box>
				<Box color="text_low_contrast">{description}</Box>
			</label>
		</Box>
	);
}
