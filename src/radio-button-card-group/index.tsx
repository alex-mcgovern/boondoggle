import clsx from "clsx";
import { forwardRef, useMemo } from "react";
import type { Ref } from "react";
import { variantColorOverlay } from "../index.css";
import {
	WithDescription,
	WithName,
	WithStateInvalid,
	WithWrapperProps,
} from "../types";
import { Box } from "../__DONE__box";
import { FieldDescription } from "../__DONE__field-description";

import { Label } from "../__DONE__label";
import { RadioButtonCard } from "../radio-button-card";
import type {
	RadioButtonCardShape,
	RadioButtonInputProps,
} from "../radio-button-card";
import { Sprinkles } from "../__DONE__sprinkles/index.css";
import { FieldError } from "../__DONE__field-error";

export type RadioButtonCardGroupProps = Sprinkles &
	WithWrapperProps &
	WithStateInvalid &
	WithName &
	WithDescription & {
		defaultValue?: string | number;

		id: string;

		inputProps?: RadioButtonInputProps;

		invalid?: boolean;

		isLabelVisible?: boolean;

		items: Array<RadioButtonCardShape>;

		labelTooltip?: string;

		onChange?: (value: string) => void;

		required?: boolean;

		value?: string;

		/**
		 * Label config for the field.
		 */
		label?: string;
	};

export const RadioButtonCardGroup = forwardRef(
	(
		{
			defaultValue,
			description,
			errorMessage,
			id,
			inputProps,
			invalid,
			isLabelVisible,
			items,
			label,
			labelTooltip,
			name,
			onChange,
			required,
			value,
			wrapperProps,
			...rest
		}: RadioButtonCardGroupProps,
		ref: Ref<HTMLDivElement>,
	) => {
		const controlledItems: Array<RadioButtonCardShape> = useMemo(() => {
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
				className={clsx({
					[variantColorOverlay.red]: invalid,
				})}
				{...wrapperProps}
				ref={ref}
			>
				<Label>{label}</Label>

				<Box
					aria-labelledby={`label-${id}`}
					as="fieldset"
					display="flex"
					flexWrap="wrap"
					gap="space_2"
					id={id}
					name={name}
					{...rest}
				>
					{controlledItems.map((item) => {
						return (
							<RadioButtonCard
								adornment={item.adornment}
								body={item.body}
								checked={item.checked}
								inputProps={inputProps}
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
					<FieldError  >{errorMessage}</FieldError>
				)}
				{description && !invalid && (
					<FieldDescription>{description}</FieldDescription>
				)}
			</Box>
		);
	},
);
