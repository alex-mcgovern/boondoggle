import clsx from "clsx";
import { forwardRef } from "react";

import { a11yError } from "../../styles/common/a11y.css";
import { getTheme } from "../../styles/theme.css";
import { Box } from "../box";
import { InputErrorMessage } from "../input_error_message";
import { Label } from "../label";
import { SlotWrapper } from "../slot_wrapper";
import * as styles from "./text_area.styles.css";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { ConditionalLabelProps } from "../../types";
import type { InputCustomisation } from "../input/input.comp";
import type { ComponentPropsWithoutRef, LegacyRef, ReactNode } from "react";

export type TextAreaProps = InputCustomisation &
  Omit<ComponentPropsWithoutRef<"textarea">, "color" | "ref"> &
  ConditionalLabelProps & {
    errorMessage?: string;
    invalid?: boolean;
    name: string;
    size?: ElementSizeEnum;
    /** React node shown on the left side of text area. */
    slotLeft?: ReactNode;
    /** React node shown on the right side of text area. */
    slotRight?: ReactNode;
  };

export const TextArea = forwardRef(
  (
    {
      size = "md",
      invalid,
      errorMessage,
      slotLeft,
      slotRight,
      name,
      label,
      wrapperProps,
      inputProps,
      id,
      ...rest
    }: TextAreaProps,
    ref: LegacyRef<HTMLTextAreaElement> | undefined
  ) => {
    /** Separate `SprinklesArgs` from other spread props, so we don't break Vanilla Extract */

    return (
      <Box
        className={clsx({ [getTheme({ colorOverlay: "red" })]: invalid })}
        color="text_low_contrast"
        {...wrapperProps}
      >
        {label && id && <Label htmlFor={id} label={label} />}

        <SlotWrapper
          alignItems="start"
          slotLeft={slotLeft}
          slotProps={{ paddingY: "spacing1" }}
          slotRight={slotRight}
        >
          <textarea
            aria-invalid={invalid}
            aria-label={name}
            className={clsx(styles.getTextAreaStyles({ size }), {
              [a11yError]: invalid,
            })}
            id={id}
            name={name}
            ref={ref}
            {...inputProps}
            {...rest}
          />
        </SlotWrapper>

        {invalid && errorMessage && (
          <InputErrorMessage message={errorMessage} />
        )}
      </Box>
    );
  }
);
