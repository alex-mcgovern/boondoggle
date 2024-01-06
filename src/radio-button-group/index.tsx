import type { ComponentProps, Ref } from "react";

import clsx from "clsx";
import { forwardRef, useMemo } from "react";

import type { Sprinkles } from "../sprinkles/index.css";
import type {
	WithDescription,
	WithName,
	WithStateInvalid,
	WithWrapperProps,
} from "../types";

import { Box } from "../box";
import { FieldDescription } from "../field-description";
import { FieldError } from "../field-error";
import { variantColorOverlay } from "../index.css";
import { Label } from "../label";
import { RadioButton } from "../radio-button";

export type RadioButtonGroupProps = Sprinkles &
	WithWrapperProps &
	WithStateInvalid &
	WithName &
	WithDescription &
	WithStateInvalid & {
		defaultValue?: number | string;

		id: string;

		items: Array<ComponentProps<typeof RadioButton>>;

		/**
		 * Label config for the field.
		 */
		label?: string;

		labelTooltip?: string;

		onChange?: (value: string) => void;

		required?: boolean;

		value?: string;
	};

export const RadioButtonGroup = forwardRef(
	(
		{
			defaultValue,
			description,
			errorMessage,
			id,
			invalid,
			items,
			label,
			name,
			onChange,
			required,
			value,
			wrapperProps,
			...rest
		}: RadioButtonGroupProps,
		ref: Ref<HTMLDivElement>,
	) => {
		const controlledItems: Array<ComponentProps<typeof RadioButton>> =
			useMemo(() => {
				if (!Array.isArray(items) || items.length < 1) {
					return [];
				}
				return items.map((item) => {
					return {
						...item,
						checked:
							defaultValue === item.value || value === item.value,
					};
				});
			}, [defaultValue, items, value]);

		if (!Array.isArray(controlledItems) || controlledItems.length < 1) {
			return null;
		}

		return (
			<Box
				className={clsx({ [variantColorOverlay.red]: invalid })}
				{...wrapperProps}
				ref={ref}
			>
				<Label>{label}</Label>

				<Box
					aria-labelledby={`label-${id}`}
					as="fieldset"
					display="flex"
					flexDirection="column"
					gap="space_2"
					id={id}
					name={name}
					{...rest}
				>
					{controlledItems.map((item) => {
						return (
							<RadioButton
								checked={item.checked}
								description={item.description}
								key={item.title}
								name={name}
								onChange={onChange}
								required={required}
								title={item.title}
								value={item.value}
							/>
						);
					})}
				</Box>
				{invalid && errorMessage && (
					<FieldError>{errorMessage}</FieldError>
				)}
				{description && !invalid && (
					<FieldDescription>{description}</FieldDescription>
				)}
			</Box>
		);
	},
);
