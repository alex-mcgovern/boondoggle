import { extractAtomsFromProps } from "@dessert-box/core";
import React, { forwardRef } from "react";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../Box";
import { Icon } from "../Icon";
import { InputErrorMessage } from "../InputErrorMessage";
import { Label } from "../Label";
import * as styles from "./styles.css";

import type { VariantUiScaleEnum } from "../../styles/common/globalVariantsUiScale.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { IconProps } from "../Icon";
import type { LegacyRef } from "react";

export interface TextAreaProps
  extends SprinklesArgs,
    Omit<React.ComponentPropsWithoutRef<"textarea">, "color" | "ref"> {
  size?: VariantUiScaleEnum;
  name: string;
  /** FontAwesome icon shown on the left side of input. */
  iconLeft?: IconProps["icon"];
  /** Props for leading icon */
  iconLeftProps?: Omit<IconProps, "icon">;
  /** FontAwesome icon shown on the right side of input. */
  iconRight?: IconProps["icon"];
  /** Props for trailing icon */
  iconRightProps?: Omit<IconProps, "icon">;
  errorMessage?: string;
  invalid?: boolean;
  /** Used as the html ID. */
  id: string;
  /** Label text. (Will also be used as accessible `name` on the textarea element.) */
  label?: string;
}

export const TextArea = forwardRef(
  (
    {
      size = "md",
      invalid,
      errorMessage,
      iconLeft,
      iconLeftProps,
      iconRight,
      iconRightProps,
      label,
      id,
      ...rest
    }: TextAreaProps,
    ref: LegacyRef<HTMLTextAreaElement> | undefined
  ) => {
    /** Separate `SprinklesArgs` from other spread props, so we don't break Vanilla Extract */
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    return (
      <Box>
        {label && id && <Label label={label} htmlFor={id} />}

        <Box className={styles.getWrapperStyles({ size })} {...atomProps}>
          {iconLeft && (
            <Icon
              marginY="spacing1"
              color="neutral_border_interactive"
              icon={iconLeft}
              {...iconLeftProps}
            />
          )}

          <textarea
            aria-invalid={invalid}
            className={styles.textArea}
            ref={ref}
            {...otherProps}
          />

          {iconRight && (
            <Icon
              marginY="spacing1"
              color="neutral_border_interactive"
              icon={iconRight}
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
