import clsx from "clsx";
import { forwardRef, useMemo } from "react";
import type { Ref } from "react";
import { Box } from "../box";
import { FieldDescription } from "../field-description";
import { FieldErrorMessage } from "../field-error-message";
import { FieldLabel } from "../field-label";
import { UtilCssArgs, variantColorOverlay } from "../index.css";
import { RadioButtonCard } from "../radio-button-card";
import type {
	RadioButtonCardShape,
	RadioButtonInputProps,
} from "../radio-button-card";
import {
	WithDescription,
	WithName,
	WithOptionalLabel,
	WithStateInvalid,
	WithWrapperProps,
} from "../types";

export type RadioButtonCardGroupProps = UtilCssArgs &
	WithWrapperProps &
	WithStateInvalid &
	WithName &
	WithDescription &
	WithOptionalLabel & {
		defaultValue?: string | number;

		id: string;

		inputProps?: RadioButtonInputProps;

		invalid?: boolean;

		isLabelVisible?: boolean;

		items: Array<RadioButtonCardShape>;

		label: string;

		labelTooltip?: string;

		onChange?: (value: string) => void;

		required?: boolean;

		value?: string;
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
			labelProps,
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
				{label && id && (
					<FieldLabel
						htmlFor={id}
						id={`label-${id}`}
						isLabelVisible={isLabelVisible}
						label={label}
						labelTooltip={labelTooltip}
						{...labelProps}
					/>
				)}
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
					<FieldErrorMessage message={errorMessage} />
				)}
				{description && !invalid && (
					<FieldDescription description={description} />
				)}
			</Box>
		);
	},
);
