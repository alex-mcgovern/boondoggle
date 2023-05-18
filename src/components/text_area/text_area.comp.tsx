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
import type {
  ConditionalLabelProps,
  LabelledElementCustomisation,
} from "../../types";
import type { ComponentPropsWithoutRef, LegacyRef, ReactNode } from "react";

export type TextAreaProps = Omit<
  ComponentPropsWithoutRef<"textarea">,
  "color" | "ref"
> &
  SprinklesArgs &
  LabelledElementCustomisation &
  ConditionalLabelProps & {
    errorMessage?: string;
    invalid?: boolean;
    /** Optional tooltip for label */
    labelTooltip?: string;
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
      labelTooltip,
      slotLeft,
      slotRight,
      name,
      label,
      id,
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
          <Label htmlFor={id} label={label} labelTooltip={labelTooltip} />
        )}

        <SlotWrapper
          alignItems="start"
          slotLeft={slotLeft}
          slotProps={{ paddingY: "spacing1" }}
          slotRight={slotRight}
        >
          <textarea
            aria-invalid={invalid}
            aria-label={label}
            id={id}
            name={name}
            ref={ref}
            className={clsx(
              styles.getTextAreaStyles({ size }),
              getSprinkles(atomProps),

              {
                [a11yError]: invalid,
              }
            )}
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
