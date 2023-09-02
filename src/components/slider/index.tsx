import { extractAtomsFromProps } from "@dessert-box/core";
import {
    Range as RadixSliderRange,
    Root as RadixSliderRoot,
    Thumb as RadixSliderThumb,
    Track as RadixSliderTrack,
} from "@radix-ui/react-slider";
import clsx from "clsx";
import { forwardRef } from "react";

import { variantColorOverlay } from "../../styles/color_palette.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box";
import { FieldErrorMessage } from "../field_error_message";
import { FieldLabel } from "../field_label";
import { SlotWrapper } from "../slot_wrapper";
import * as styles from "./styles.css";

import type {
    WithName,
    WithOptionalLabel,
    WithSize,
    WithStateDisabled,
    WithStateInvalid,
    WithWrapperProps,
} from "../../common-types";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { SliderProps as RadixSliderProps } from "@radix-ui/react-slider";
import type { AriaRole, Ref } from "react";

export type SliderProps = Omit<RadixSliderProps, "color"> &
    SprinklesArgs &
    WithWrapperProps &
    WithOptionalLabel &
    WithStateInvalid & {
        /**
         * React node(s) rendered on the left-hand side.
         */
        slotLeft?: [ReactNode?, ReactNode?, ReactNode?];
        /**
         * React node(s) rendered on the right-hand side.
         */
        slotRight?: [ReactNode?, ReactNode?, ReactNode?];
    } & WithSize &
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
        ref: Ref<HTMLSpanElement>
    ) => {
        const labelId = id ? `${id}-label` : undefined;

        const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

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
                    <RadixSliderRoot
                        aria-label={name}
                        aria-labelledby={label && id ? labelId : undefined}
                        aria-required={required}
                        className={clsx(styles.sliderRoot, getSprinkles(atomProps))}
                        id={id}
                        name={name}
                        ref={ref}
                        {...otherProps}
                    >
                        <RadixSliderTrack className={styles.sliderTrack}>
                            <RadixSliderRange className={styles.sliderRange} />
                        </RadixSliderTrack>
                        <RadixSliderThumb className={styles.sliderThumb} />
                    </RadixSliderRoot>
                </SlotWrapper>
                {invalid && errorMessage && <FieldErrorMessage message={errorMessage} />}
            </Box>
        );
    }
);
