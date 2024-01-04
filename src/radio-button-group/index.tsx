import clsx from "clsx";
import * as React from "react";
import { variantColorOverlay } from "../index.css";
import {
	WithDescription,
	WithName,
	WithStateInvalid,
	WithWrapperProps,
} from "../types";
import { Label } from "../__DONE__label";
import { Box } from "../__DONE__box";
import { FieldDescription } from "../__DONE__field-description";
import { RadioButton } from "../radio-button";
import { FieldError } from "../__DONE__field-error";
import { Sprinkles } from "../__DONE__sprinkles/index.css";

export type RadioButtonGroupProps = Sprinkles &
	WithWrapperProps &
	WithStateInvalid &
	WithName &
	WithDescription &
	WithStateInvalid & {
		defaultValue?: string | number;

		id: string;

		isLabelVisible?: boolean;

		items: Array<React.ComponentProps<typeof RadioButton>>;

		/**
		 * Label config for the field.
		 */
		label?: string;

		labelTooltip?: string;

		onChange?: (value: string) => void;

		required?: boolean;

		value?: string;
	};

export const RadioButtonGroup = React.forwardRef(
	(
		{
			defaultValue,
			description,
			errorMessage,
			id,
			invalid,
			isLabelVisible,
			items,
			label,
			name,
			onChange,
			required,
			value,
			wrapperProps,
			...rest
		}: RadioButtonGroupProps,
		ref: React.Ref<HTMLDivElement>,
	) => {
		const controlledItems: Array<React.ComponentProps<typeof RadioButton>> = React.useMemo(() => {
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
					<FieldError >
						{errorMessage} 
					</FieldError>
				)}
				{description && !invalid && (
					<FieldDescription>{description}</FieldDescription>
				)}
			</Box>
		);
	},
);
