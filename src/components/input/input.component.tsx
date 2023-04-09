import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import React, { forwardRef } from "react";

import { globalErrorStyles } from "../../styles/common/globalErrorStyles.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box";
import { InputErrorMessage } from "../input_error_message";
import { Label } from "../label";
import { SlotWrapper } from "../slot_wrapper/slot_wrapper.component";
import * as styles from "./input.styles.css";

import type { VariantUiScaleEnum } from "../../styles/common/globalVariantsUiScale.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { ReactNode, Ref } from "react";

export interface InputProps
  extends Omit<
      React.ComponentPropsWithoutRef<"input">,
      "width" | "height" | "style" | "color" | "size"
    >,
    SprinklesArgs {
  /** React node shown on the left side of input. */
  slotLeft?: ReactNode;
  /** React node shown on the right side of input. */
  slotRight?: ReactNode;
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
      slotLeft,
      slotRight,
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

        <SlotWrapper
          {...atomProps}
          className={styles.getWrapperStyles({
            size,
          })}
          slotLeft={slotLeft}
          slotRight={slotRight}
        >
          <input
            className={clsx(styles.input, {
              [globalErrorStyles]: invalid,
            })}
            name={name}
            id={id}
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
