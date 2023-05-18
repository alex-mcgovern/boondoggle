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
import * as styles from "./input.styles.css";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type {
  ConditionalLabelProps,
  LabelledElementCustomisation,
} from "../../types";
import type { ComponentPropsWithoutRef, ReactNode, Ref } from "react";

export type InputProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "width" | "height" | "style" | "color" | "size" | "label" | "id"
> &
  SprinklesArgs &
  LabelledElementCustomisation &
  ConditionalLabelProps & {
    /** Message shown when `invalid=true`. May originate from controlling library, like `react-hook-form` */
    errorMessage?: string;
    /** Will be forwarded to the native `<input>`. When using the `errorMessage` prop, will toggle visibility of the error message. */
    invalid?: boolean;
    /** Optional tooltip for label */
    labelTooltip?: string;
    /** Name of the form control. Submitted with the form as part of a name/value pair */
    name: string;
    /** Placeholder text shown when input is empty. */
    placeholder: string;
    /** Common interactive element size, shared with button, select, etc */
    size?: ElementSizeEnum;
    /** React node shown on the left side of input. */
    slotLeft?: ReactNode;
    /** React node shown on the right side of input. */
    slotRight?: ReactNode;
  };

export const Input = forwardRef(
  (
    {
      errorMessage,
      className: userClassName,
      slotLeft,
      slotRight,
      id,
      invalid,
      labelTooltip,
      label,
      name,
      size = "md",
      wrapperProps,
      labelProps,
      ...rest
    }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    /** Separate `SprinklesArgs` from other spread props, so we don't break Vanilla Extract */
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    /** -----------------------------------------------------------------------------
     * Layout for input component
     * ------------------------------------------------------------------------------- */

    return (
      <Box
        className={clsx({ [getTheme({ colorOverlay: "red" })]: invalid })}
        color="text_low_contrast"
        {...wrapperProps}
      >
        {label && id && (
          <Label
            htmlFor={id}
            label={label}
            labelTooltip={labelTooltip}
            {...labelProps}
          />
        )}

        <SlotWrapper
          slotLeft={slotLeft}
          slotProps={{ marginX: "spacing1" }}
          slotRight={slotRight}
        >
          <input
            id={id}
            name={name}
            ref={ref}
            className={clsx(
              styles.getInputStyles({ size }),
              getSprinkles(atomProps),
              userClassName,
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
