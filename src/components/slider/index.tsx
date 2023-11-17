import { extractAtomsFromProps } from "@dessert-box/core";
import * as RadixSlider from "@radix-ui/react-slider";
import type { SliderProps as RadixSliderProps } from "@radix-ui/react-slider";
import clsx from "clsx";
import { forwardRef } from "react";
import type { AriaRole, Ref } from "react";
import type {
	WithName,
	WithOptionalLabel,
	WithSize,
	WithSlots,
	WithStateDisabled,
	WithStateInvalid,
	WithWrapperProps,
} from "../../types";
import {
	type UtilCssArgs,
	utilCss,
	variantColorOverlay,
} from "../../index.css";
import { Box } from "../box";
import { FieldErrorMessage } from "../field-error-message";
import { FieldLabel } from "../field-label";
import { SlotWrapper } from "../slot-wrapper";
import * as styles from "./styles.css";

export type SliderProps = Omit<RadixSliderProps, "color"> &
	UtilCssArgs &
	WithWrapperProps &
	WithOptionalLabel &
	WithStateInvalid &
	WithSlots &
	WithSize &
	WithStateDisabled &
	WithName & {
		/**
		 * Controls `aria-required` and input `required` attributes.
		 */
		required?: boolean;

		/**
		 * Aria role to use for the input (e.g. `search`).
		 */
		role?: AriaRole;
	};

export const Slider = forwardRef(
	(
		{
			errorMessage,
			id,
			invalid,
			label,
			labelTooltip,
			name,
			required,
			size,
			slotLeft,
			slotRight,
			wrapperProps,
			...rest
		}: SliderProps,
		ref: Ref<HTMLSpanElement>,
	) => {
		const labelId = id ? `${id}-label` : undefined;

		const { atomProps, otherProps } = extractAtomsFromProps(rest, utilCss);

		return (
			<Box
				className={clsx({ [variantColorOverlay.red]: invalid })}
				color="text_low_contrast"
				{...wrapperProps}
			>
				{label && id && labelId && (
					<FieldLabel
						htmlFor={id}
						id={labelId}
						label={label}
						labelTooltip={labelTooltip}
					/>
				)}

				<SlotWrapper
					size={size}
					slotLeft={slotLeft}
					slotRight={slotRight}
				>
					<RadixSlider.Root
						aria-label={name}
						aria-labelledby={label && id ? labelId : undefined}
						aria-required={required}
						className={clsx(styles.sliderRoot, utilCss(atomProps))}
						id={id}
						name={name}
						ref={ref}
						{...otherProps}
					>
						<RadixSlider.Track className={styles.sliderTrack}>
							<RadixSlider.Range className={styles.sliderRange} />
						</RadixSlider.Track>
						<RadixSlider.Thumb className={styles.sliderThumb} />
					</RadixSlider.Root>
				</SlotWrapper>
				{invalid && errorMessage && (
					<FieldErrorMessage message={errorMessage} />
				)}
			</Box>
		);
	},
);
