import type {
  DetailedHTMLProps,
  LegacyRef,
  TextareaHTMLAttributes,
} from "react";
import React, { forwardRef } from "react";
import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { a11yFocus } from "../../styles/common/a11y.focus.css";
import type {
  GetSprinklesArgs} from "../../styles/utils/get_sprinkles.css";
import {
  getSprinkles,
} from "../../styles/utils/get_sprinkles.css";
import { Box } from "../Box";
import { InputErrorMessage } from "../InputErrorMessage";
import { Label } from "../Label";
import type { VariantTextAreaSizeEnum } from "./styles.css";
import { getTextAreaStyles } from "./styles.css";

export interface TextAreaProps
  extends GetSprinklesArgs,
    Omit<
      DetailedHTMLProps<
        TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
      >,
      "color" | "ref"
    > {
  size?: VariantTextAreaSizeEnum;
  name: string;
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

      label,
      id,
      ...rest
    }: TextAreaProps,
    ref: LegacyRef<HTMLTextAreaElement> | undefined
  ) => {
    /** Separate `GetSprinklesArgs` from other spread props, so we don't break Vanilla Extract */
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    const inputWrapperStyles = clsx(
      getTextAreaStyles({
        size,
      }),
      a11yFocus,
      getSprinkles({ ...atomProps })
    );

    return (
      <Box>
        {label && id && <Label label={label} htmlFor={id} />}

        <textarea
          aria-invalid={invalid}
          className={inputWrapperStyles}
          ref={ref}
          {...otherProps}
        />
        {invalid && errorMessage && (
          <InputErrorMessage message={errorMessage} />
        )}
      </Box>
    );
  }
);
