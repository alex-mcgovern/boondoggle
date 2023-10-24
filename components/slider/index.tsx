import { extractAtomsFromProps } from "@dessert-box/core";
import * as RadixSlider from "@radix-ui/react-slider";
import clsx from "clsx";
import { forwardRef } from "react";
import { css } from "../../src/styles/utils/util_css.css";
import { Box } from "../box/Box";
import { FieldErrorMessage } from "../field-error-message";
import { FieldLabel } from "../field-label";
import * as styles from "./styles.css";
import type { SliderProps as RadixSliderProps } from "@radix-ui/react-slider";
import type { AriaRole, Ref } from "react";
import type {
	WithName,
	WithOptionalLabel,
	WithSize,
	WithSlots,
	WithStateDisabled,
	WithStateInvalid,
	WithWrapperProps,
} from "../../src/common-types";
import type { UtilCssArgs } from "../../src/styles/utils/util_css.css";
import { SlotWrapper } from "../_utility/slot_wrapper";
import { theme } from "../../style.css";

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

		const { atomProps, otherProps } = extractAtomsFromProps(rest, css);

		return (
			<Box
				className={clsx({ [theme.red]: invalid })}
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
						className={clsx(styles.sliderRoot, css(atomProps))}
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
