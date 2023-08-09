import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import { a11yError } from "../../styles/common/a11y.css";
import { getTheme } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../Box";
import { FieldErrorMessage } from "../FieldErrorMessage";
import { FieldLabel } from "../FieldLabel";
import { SlotWrapper } from "../SlotWrapper";
import * as styles from "./styles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type {
  LabelledElementCustomisation,
  WithOptionalLabel,
  WithSize,
  WithSlots,
  WithStateInvalid,
} from "../../types";
import type { ComponentPropsWithoutRef, LegacyRef } from "react";

export type TextAreaProps = Omit<
  ComponentPropsWithoutRef<"textarea">,
  "color" | "ref"
> &
  SprinklesArgs &
  LabelledElementCustomisation &
  WithOptionalLabel &
  WithStateInvalid &
  WithSize &
  WithSlots & {
    /** Optional tooltip for label */
    labelTooltip?: string;
    name: string;
  };

export const TextArea = forwardRef(
  (
    {
      errorMessage,
      id,
      invalid,
      label,
      labelTooltip,
      name,
      size = "md",
      slotLeft,
      slotRight,
      wrapperProps,
      ...rest
    }: TextAreaProps,
    ref: LegacyRef<HTMLTextAreaElement> | undefined
  ) => {
    /** Separate `SprinklesArgs` from other spread props, so we don't break Vanilla Extract */
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    return (
      <Box
        className={clsx({ [getTheme({ colorOverlay: "red" })]: invalid })}
        color="text_low_contrast"
        {...wrapperProps}
      >
        {label && id && (
          <FieldLabel htmlFor={id} label={label} labelTooltip={labelTooltip} />
        )}

        <SlotWrapper
          alignItems="start"
          size={size}
          slotLeft={slotLeft}
          slotProps={{ paddingY: "spacing_1" }}
          slotRight={slotRight}
        >
          <textarea
            aria-invalid={invalid}
            aria-label={label}
            className={clsx(
              styles.getTextAreaStyles({ size }),
              getSprinkles(atomProps),

              {
                [a11yError]: invalid,
              }
            )}
            id={id}
            name={name}
            ref={ref}
            {...otherProps}
          />
        </SlotWrapper>

        {invalid && errorMessage && (
          <FieldErrorMessage message={errorMessage} />
        )}
      </Box>
    );
  }
);
