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
import { InputErrorMessage } from "../input_error_message";
import { Label } from "../label";
import { SlotWrapper } from "../slot_wrapper";
import * as styles from "./slider.styles.css";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type {
  ConditionalLabelProps,
  LabelledElementCustomisation,
} from "../../types";
import type { SliderProps as RadixSliderProps } from "@radix-ui/react-slider";
import type { AriaRole, HTMLInputTypeAttribute, ReactNode, Ref } from "react";

export type SliderProps = Omit<RadixSliderProps, "color"> &
  SprinklesArgs &
  LabelledElementCustomisation &
  ConditionalLabelProps & {
    autoComplete?: HTMLInputElement["autocomplete"];
    /** Is input disabled. Mapped to html5 <input> `disabled` attribute and `aria-disabled` attribute. */
    disabled?: boolean;
    /** Message shown when `invalid=true`. May originate from controlling library, like `react-hook-form` */
    errorMessage?: string;
    /** Allow controlling components to set error styles, `aria-invalid` prop and display error message. */
    invalid?: boolean;
    /** Optional tooltip for label */
    labelTooltip?: string;
    /** Name of the form control. Submitted with the form as part of a name/value pair */
    name: string;
    /** Text shown before user has interacted with the input. */
    placeholder?: string;
    /** Controls `aria-required` and input `required` attributes. */
    required?: boolean;
    /** Aria role to use for the input (e.g. `search`). */
    role?: AriaRole;
    /** Common interactive element size, shared with button, select, etc */
    size?: ElementSizeEnum;
    /** React node shown on the left side of input. */
    slotLeft?: ReactNode;
    /** React node shown on the right side of input. */
    slotRight?: ReactNode;
    type?: HTMLInputTypeAttribute;
  };

export const Slider = forwardRef(
  (
    {
      errorMessage,
      id,
      wrapperProps,
      size,
      invalid,
      label,
      name,
      required,
      labelTooltip,
      slotLeft,
      slotRight,
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
          <Label
            htmlFor={id}
            id={labelId}
            label={label}
            labelTooltip={labelTooltip}
          />
        )}

        <SlotWrapper size={size} slotLeft={slotLeft} slotRight={slotRight}>
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
        {invalid && errorMessage && (
          <InputErrorMessage message={errorMessage} />
        )}
      </Box>
    );
  }
);
