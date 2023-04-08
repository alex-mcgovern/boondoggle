import { extractAtomsFromProps } from "@dessert-box/core";
import React, { forwardRef } from "react";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Icon } from "../Icon";
import { Box } from "../box_component/box.component";
import { InputErrorMessage } from "../input_error_message_component";
import { Label } from "../label_component";
import * as styles from "./input.css";

import type { VariantUiScaleEnum } from "../../styles/common/globalVariantsUiScale.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { IconProps } from "../Icon";
import type { Ref } from "react";

export interface InputProps
  extends Omit<
      React.ComponentPropsWithoutRef<"input">,
      "width" | "height" | "style" | "color" | "size"
    >,
    SprinklesArgs {
  /** FontAwesome icon shown on the left side of input. */
  iconLeft?: IconProps["icon"];
  /** Props for leading icon */
  iconLeftProps?: Omit<IconProps, "icon">;
  /** FontAwesome icon shown on the right side of input. */
  iconRight?: IconProps["icon"];
  /** Props for trailing icon */
  iconRightProps?: Omit<IconProps, "icon">;
  /** Used as the html ID. */
  id: string;
  /** Will be forwarded to the native `<input>`. When using the `errorMessage` prop, will toggle visibility of the error message. */
  invalid?: boolean;
  /** Name of the form control. Submitted with the form as part of a name/value pair */
  name: string;
  /** Message shown when `invalid=true`. May originate from controlling library, like `react-hook-form` */
  errorMessage?: string;
  /** Label text. (Will also be used as accessible `name` on the input element.) */
  label?: string;
  /** Common interactive element size, shared with button, select, etc */
  size?: VariantUiScaleEnum;
}

export const Input = forwardRef(
  (
    {
      errorMessage,
      iconLeft,
      iconLeftProps,
      iconRight,
      iconRightProps,
      id,
      invalid,
      label,
      name,
      size = "md",
      ...rest
    }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    /** Separate `SprinklesArgs` from other spread props, so we don't break Vanilla Extract */
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    return (
      <Box>
        {label && id && <Label label={label} htmlFor={id} />}
        <Box
          {...atomProps}
          className={styles.getWrapperStyles({
            size,
          })}
        >
          {iconLeft && (
            <Icon color="lowContrast" icon={iconLeft} {...iconLeftProps} />
          )}

          <input
            className={styles.input}
            name={name}
            id={id}
            ref={ref}
            {...otherProps}
          />

          {iconRight && (
            <Icon color="lowContrast" icon={iconRight} {...iconRightProps} />
          )}
        </Box>

        {invalid && errorMessage && (
          <InputErrorMessage message={errorMessage} />
        )}
      </Box>
    );
  }
);
