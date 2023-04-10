import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import React, { forwardRef } from "react";

import { globalErrorStyles } from "../../styles/common/globalErrorStyles.css";
import { globalVariantsUiScale } from "../../styles/common/globalVariantsUiScale.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box";
import { InputErrorMessage } from "../input_error_message";
import { Label } from "../label";
import { SlotWrapper } from "../slot_wrapper/slot_wrapper.component";
import * as styles from "./input.styles.css";

import type { SharedUiScale } from "../../styles/common/globalVariantsUiScale.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { ReactNode, Ref } from "react";

export interface InputProps
  extends Omit<
      React.ComponentPropsWithoutRef<"input">,
      "width" | "height" | "style" | "color" | "size"
    >,
    SprinklesArgs {
  /** Message shown when `invalid=true`. May originate from controlling library, like `react-hook-form` */
  errorMessage?: string;
  /** Used as the html ID. */
  id: string;
  /** Will be forwarded to the native `<input>`. When using the `errorMessage` prop, will toggle visibility of the error message. */
  invalid?: boolean;
  /** Label text. (Will also be used as accessible `name` on the input element.) */
  label?: string;
  /** Name of the form control. Submitted with the form as part of a name/value pair */
  name: string;
  /** Common interactive element size, shared with button, select, etc */
  size?: SharedUiScale;
  /** React node shown on the left side of input. */
  slotLeft?: ReactNode;
  /** React node shown on the right side of input. */
  slotRight?: ReactNode;
  /** Placeholder text shown when input is empty. */
  placeholder: string;
}

export const Input = forwardRef(
  (
    {
      errorMessage,
      className: userClassName,
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

        <SlotWrapper {...atomProps} slotLeft={slotLeft} slotRight={slotRight}>
          <input
            className={clsx(
              styles.input,
              userClassName,
              globalVariantsUiScale[size],
              {
                [globalErrorStyles]: invalid,
              }
            )}
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
