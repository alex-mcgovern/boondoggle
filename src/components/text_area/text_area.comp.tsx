import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import { a11yError } from "../../styles/common/a11y.css";
import { variantColorOverlay } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
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
    textAreaProps?: ComponentPropsWithoutRef<"textarea">;
  };

export const TextArea = forwardRef(
  (
    {
      size = "md",
      className: userClassName,
      invalid,
      errorMessage,
      slotLeft,
      name,
      label,
      wrapperProps,
      textAreaProps,
      id,
      ...rest
    }: TextAreaProps,
    ref: LegacyRef<HTMLTextAreaElement> | undefined
  ) => {
    /** Separate `SprinklesArgs` from other spread props, so we don't break Vanilla Extract */
    const { atomProps: textAreaAtomProps, otherProps: textAreaOtherProps } =
      extractAtomsFromProps(textAreaProps, getSprinkles);
    return (
      <Box
        className={clsx({ [variantColorOverlay.red]: invalid })}
        color="text_low_contrast"
        {...wrapperProps}
      >
        {label && id && <Label htmlFor={id} label={label} />}

        <Box
          aria-disabled={rest.disabled}
          className={clsx(
            styles.getTextAreaWrapperStyles({ outerSize: size }),
            userClassName,
            {
              [a11yError]: invalid,
            }
          )}
          {...textAreaAtomProps}
        >
          <SlotWrapper
            alignItems="start"
            slotLeft={slotLeft}
            slotProps={{ paddingY: "spacing1" }}
          >
            <textarea
              className={styles.getTextAreaInnerStyles({ innerSize: size })}
              id={id}
              name={name}
              ref={ref as LegacyRef<HTMLTextAreaElement>}
              {...textAreaOtherProps}
              {...rest}
            />
          </SlotWrapper>
        </Box>

        {invalid && errorMessage && (
          <InputErrorMessage message={errorMessage} />
        )}
      </Box>
    );
  }
);
