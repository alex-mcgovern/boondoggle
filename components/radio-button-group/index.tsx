import clsx from "clsx";
import { forwardRef, useMemo } from "react";

import { variantColorOverlay } from "../../src/styles/color_palette.css";
import { Box } from "../box/Box";
import { FieldDescription } from "../field-description";
import { FieldErrorMessage } from "../field-error-message";
import { FieldLabel } from "../field-label";
import { RadioButton } from "../radio-button";
import { getGroupLabelStyles } from "./styles.css";

import type { Ref } from "react";
import type {
	WithDescription,
	WithName,
	WithOptionalLabel,
	WithStateInvalid,
	WithWrapperProps,
} from "../../src/common-types";
import type { UtilCssArgs } from "../../src/styles/utils/util_css.css";
import type { RadioButtonInputProps, RadioButtonShape } from "../radio-button";

export type RadioButtonGroupProps = UtilCssArgs &
	WithWrapperProps &
	WithStateInvalid &
	WithName &
	WithDescription &
	WithOptionalLabel &
	WithStateInvalid & {
		defaultValue?: string | number;

		id: string;

		inputProps?: RadioButtonInputProps;

		isLabelVisible?: boolean;

		items: Array<RadioButtonShape>;

		label: string;

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
		}: RadioButtonGroupProps,
		ref: Ref<HTMLDivElement>,
	) => {
		const controlledItems: Array<RadioButtonShape> = useMemo(() => {
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
