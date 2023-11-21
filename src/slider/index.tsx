import { extractAtomsFromProps } from "@dessert-box/core";
import * as RadixSlider from "@radix-ui/react-slider";
import type { SliderProps as RadixSliderProps } from "@radix-ui/react-slider";
import clsx from "clsx";
import { forwardRef } from "react";
import type { AriaRole, Ref } from "react";
import { Box } from "../box";
import { FieldErrorMessage } from "../field-error-message";
import { FieldLabel } from "../field-label";
import { variantColorOverlay } from "../index.css";
import { SlotWrapper } from "../slot-wrapper";
import { Sprinkles, sprinkles } from "../sprinkles/index.css";
import {
	WithName,
	WithOptionalLabel,
	WithSize,
	WithSlots,
	WithStateDisabled,
	WithStateInvalid,
	WithWrapperProps,
} from "../types";
import {
	sliderRange,
	sliderRoot,
	sliderThumb,
	sliderTrack,
} from "./styles.css";

export type SliderProps = Omit<RadixSliderProps, "color"> &
	Sprinkles &
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

		const { atomProps, otherProps } = extractAtomsFromProps(
			rest,
			sprinkles,
		);

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
						className={clsx(sliderRoot, sprinkles(atomProps))}
						id={id}
						name={name}
						ref={ref}
						{...otherProps}
					>
						<RadixSlider.Track className={sliderTrack}>
							<RadixSlider.Range className={sliderRange} />
						</RadixSlider.Track>
						<RadixSlider.Thumb className={sliderThumb} />
					</RadixSlider.Root>
				</SlotWrapper>
				{invalid && errorMessage && (
					<FieldErrorMessage message={errorMessage} />
				)}
			</Box>
		);
	},
);
