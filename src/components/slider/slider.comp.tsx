import { extractAtomsFromProps } from "@dessert-box/core";
import {
  Range as RadixSliderRange,
  Root as RadixSliderRoot,
  Thumb as RadixSliderThumb,
  Track as RadixSliderTrack,
} from "@radix-ui/react-slider";
import clsx from "clsx";
import { forwardRef } from "react";

import { getTheme } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box";
import { InputErrorMessage } from "../input_error_message";
import { Label } from "../label";
import { SlotWrapper } from "../slot_wrapper";
import * as styles from "./slider.styles.css";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { ConditionalLabelProps } from "../../types";
import type { SliderProps as RadixSliderProps } from "@radix-ui/react-slider";
import type { AriaRole, HTMLInputTypeAttribute, ReactNode, Ref } from "react";

export type SliderProps = Omit<RadixSliderProps, "color"> &
  SprinklesArgs &
  ConditionalLabelProps & {
    autoComplete?: HTMLInputElement["autocomplete"];
    /** Is input disabled. Mapped to html5 <input> `disabled` attribute and `aria-disabled` attribute. */
    disabled?: boolean;
    /** Message shown when `invalid=true`. May originate from controlling library, like `react-hook-form` */
    errorMessage?: string;
    /** Allow controlling components to set error styles, `aria-invalid` prop and display error message. */
    invalid?: boolean;
    /** Name of the form control. Submitted with the form as part of a name/value pair */
    name: string;
    /** React node shown on the left side of input. */
    slotLeft?: ReactNode;
    /** React node shown on the right side of input. */
    slotRight?: ReactNode;
    /** Controls `aria-required` and input `required` attributes. */
    required?: boolean;
    /** Text shown before user has interacted with the input. */
    placeholder?: string;
    /** Aria role to use for the input (e.g. `search`). */
    role?: AriaRole;
    /** Common interactive element size, shared with button, select, etc */
    size?: ElementSizeEnum;
    type?: HTMLInputTypeAttribute;
  };

export const Slider = forwardRef(
  (
    {
      errorMessage,
      id,
      invalid,
      label,
      name,
      required,
      slotLeft,
      slotRight,
      ...rest
    }: SliderProps,
    ref: Ref<HTMLSpanElement>
  ) => {
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    const labelId = `${id}-label`;

    return (
      <Box
        className={clsx({ [getTheme({ colorOverlay: "red" })]: invalid })}
        color="text_low_contrast"
        {...atomProps}
      >
        {label && id && <Label label={label} htmlFor={id} id={labelId} />}

        <SlotWrapper slotLeft={slotLeft} slotRight={slotRight}>
          <RadixSliderRoot
            aria-required={required}
            className={styles.sliderRoot}
            name={name}
            aria-label={name}
            aria-labelledby={label && id ? labelId : undefined}
            id={id}
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
