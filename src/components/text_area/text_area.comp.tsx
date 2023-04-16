import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import { a11yError } from "../../styles/common/a11y.css";
import { getTheme } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box";
import { InputErrorMessage } from "../input_error_message";
import { Label } from "../label";
import { SlotWrapper } from "../slot_wrapper";
import * as styles from "./text_area.styles.css";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { ComponentPropsWithoutRef, LegacyRef, ReactNode } from "react";

export interface TextAreaProps
  extends SprinklesArgs,
    Omit<ComponentPropsWithoutRef<"textarea">, "color" | "ref"> {
  size?: ElementSizeEnum;
  name: string;
  /** React node shown on the left side of text area. */
  slotLeft?: ReactNode;
  /** React node shown on the right side of text area. */
  slotRight?: ReactNode;
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
      <Box className={clsx({ [getTheme({ intent: "bad" })]: invalid })}>
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
              [a11yError]: invalid,
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
