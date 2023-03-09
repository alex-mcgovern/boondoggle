import type { AriaRole, HTMLInputTypeAttribute, Ref } from "react";
import React, { forwardRef } from "react";
import type { SliderProps as RadixSliderProps } from "@radix-ui/react-slider";
import {
  Range as RadixSliderRange,
  Root as RadixSliderRoot,
  Thumb as RadixSliderThumb,
  Track as RadixSliderTrack,
} from "@radix-ui/react-slider";
import type { VariantUiScaleEnum } from "../../styles/common/variant.ui_scale.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../Box";
import type { IconProps } from "../Icon";
import { Icon } from "../Icon";
import { InputErrorMessage } from "../InputErrorMessage";
import { Label } from "../Label";
import * as styles from "./styles.css";

export interface SliderProps
  extends Omit<RadixSliderProps, "color">,
    SprinklesArgs {
  autoComplete?: HTMLInputElement["autocomplete"];
  /** FontAwesome icon shown on the left side of input. */
  iconLeft?: IconProps["icon"];
  /** Props for leading icon */
  iconLeftProps?: Omit<IconProps, "icon">;
  /** Controls `aria-required` and input `required` attributes. */
  required?: boolean;
  /** FontAwesome icon shown on the right side of input. */
  iconRight?: IconProps["icon"];
  /** Props for trailing icon */
  iconRightProps?: Omit<IconProps, "icon">;
  /** Allow controlling components to set error styles, `aria-invalid` prop and display error message. */
  invalid?: boolean;
  /** Is input disabled. Mapped to html5 <input> `disabled` attribute and `aria-disabled` attribute. */
  disabled?: boolean;
  /** Name of the form control. Submitted with the form as part of a name/value pair */
  name: string;
  /** Message shown when `invalid=true`. May originate from controlling library, like `react-hook-form` */
  errorMessage?: string;
  /** Label text. (Will also be used as accessible `name` on the input element.) */
  label?: string;

  /** Text shown before user has interacted with the input. */
  placeholder?: string;
  /** Aria role to use for the input (e.g. `search`). */
  role?: AriaRole;
  /** Common interactive element size, shared with button, select, etc */
  size?: VariantUiScaleEnum;

  type?: HTMLInputTypeAttribute;
}

export const Slider = forwardRef(
  (
    {
      label,
      id,
      errorMessage,
      required,
      iconLeft,
      iconRight,
      iconLeftProps,
      iconRightProps,
      invalid,
      ...rest
    }: SliderProps,
    ref: Ref<HTMLSpanElement>
  ) => {
    return (
      <Box marginBottom="spacing2">
        {label && id && <Label label={label} htmlFor={id} />}

        <Box
          display="flex"
          gap="spacing2"
          marginY="spacing1"
          alignItems="center"
        >
          {iconLeft && (
            <Icon
              className={styles.leadingIcon}
              icon={iconLeft}
              size="xl"
              {...iconLeftProps}
            />
          )}
          <RadixSliderRoot
            aria-required={required}
            className={styles.sliderRoot}
            ref={ref}
            {...rest}
          >
            <RadixSliderTrack className={styles.sliderTrack}>
              <RadixSliderRange className={styles.sliderRange} />
            </RadixSliderTrack>
            <RadixSliderThumb className={styles.sliderThumb} />
          </RadixSliderRoot>
          {iconRight && (
            <Icon
              className={styles.trailingIcon}
              icon={iconRight}
              size="xl"
              {...iconRightProps}
            />
          )}
        </Box>
        {invalid && errorMessage && (
          <InputErrorMessage message={errorMessage} />
        )}
      </Box>
    );
  }
);
