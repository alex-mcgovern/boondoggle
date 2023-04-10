import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import React, { forwardRef } from "react";

import { globalErrorStyles } from "../../styles/common/globalErrorStyles.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box";
import { InputErrorMessage } from "../input_error_message";
import { Label } from "../label";
import { SlotWrapper } from "../slot_wrapper/slot_wrapper.component";
import * as styles from "./text_area.styles.css";

import type { SharedUiScale } from "../../styles/common/globalVariantsUiScale.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { LegacyRef } from "react";

export interface TextAreaProps
  extends SprinklesArgs,
    Omit<React.ComponentPropsWithoutRef<"textarea">, "color" | "ref"> {
  size?: SharedUiScale;
  name: string;
  /** React node shown on the left side of input. */
  slotLeft?: React.ReactNode;
  /** React node shown on the right side of input. */
  slotRight?: React.ReactNode;
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
      slotRight,
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

        <SlotWrapper
          slotLeft={slotLeft}
          slotRight={slotRight}
          className={styles.getWrapperStyles({ size })}
          {...atomProps}
        >
          <textarea
            aria-invalid={invalid}
            className={clsx(styles.textArea, {
              [globalErrorStyles]: invalid,
            })}
            ref={ref}
            {...otherProps}
          />
        </SlotWrapper>

        {invalid && errorMessage && (
          <InputErrorMessage message={errorMessage} />
        )}
      </Box>
    );
  }
);
