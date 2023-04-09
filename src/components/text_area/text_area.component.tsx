import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import React, { forwardRef } from "react";

import { globalErrorStyles } from "../../styles/common/globalErrorStyles.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box";
import { Icon } from "../icon";
import { InputErrorMessage } from "../input_error_message";
import { Label } from "../label";
import * as styles from "./text_area.styles.css";

import type { VariantUiScaleEnum } from "../../styles/common/globalVariantsUiScale.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { IconProps } from "../icon";
import type { LegacyRef } from "react";

export interface TextAreaProps
  extends SprinklesArgs,
    Omit<React.ComponentPropsWithoutRef<"textarea">, "color" | "ref"> {
  size?: VariantUiScaleEnum;
  name: string;
  /** FontAwesome icon shown on the left side of input. */
  slotLeft?: IconProps["icon"];
  /** Props for leading icon */
  iconLeftProps?: Omit<IconProps, "icon">;
  /** FontAwesome icon shown on the right side of input. */
  slotRight?: IconProps["icon"];
  /** Props for trailing icon */
  iconRightProps?: Omit<IconProps, "icon">;
  errorMessage?: string;
  invalid?: boolean;
  placeholder: string;
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
      slotLeft,
      iconLeftProps,
      slotRight,
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
          {slotLeft && (
            <Icon
              marginY="spacing1"
              color="text_default_low_contrast"
              icon={slotLeft}
              {...iconLeftProps}
            />
          )}

          <textarea
            aria-invalid={invalid}
            className={clsx(styles.textArea, {
              [globalErrorStyles]: invalid,
            })}
            ref={ref}
            {...otherProps}
          />

          {slotRight && (
            <Icon
              marginY="spacing1"
              color="text_default_low_contrast"
              icon={slotRight}
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
