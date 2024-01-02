import clsx from "clsx";
import * as React from "react";
import { variantColorOverlay } from "../../index.css";
import {
	WithDescription,
	WithName,
	WithOptionalLabel,
	WithStateInvalid,
	WithWrapperProps,
} from "../../types";
import { Box } from "../box";
import { FieldDescription } from "../field-description";
import { FieldErrorMessage } from "../field-error-message";
import { FieldLabel } from "../field-label";
import { RadioButton } from "../radio-button";
import { Sprinkles } from "../sprinkles/index.css";
import { getGroupLabelStyles } from "./styles.css";

export type RadioButtonGroupProps = Sprinkles &
	WithWrapperProps &
	WithStateInvalid &
	WithName &
	WithDescription &
	WithOptionalLabel &
	WithStateInvalid & {
		defaultValue?: string | number;

		id: string;

		isLabelVisible?: boolean;

		items: Array<React.ComponentProps<typeof RadioButton>>;

		label: string;

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
			labelProps,
			labelTooltip,
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
				{label && id && (
					<FieldLabel
						className={getGroupLabelStyles({ isLabelVisible })}
						htmlFor={id}
						id={`label-${id}`}
						label={label}
						labelTooltip={labelTooltip}
						{...labelProps}
					/>
				)}
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
					<FieldErrorMessage message={errorMessage} />
				)}
				{description && !invalid && (
					<FieldDescription description={description} />
				)}
			</Box>
		);
	},
);
