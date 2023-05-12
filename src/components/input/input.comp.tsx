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
import type { ConditionalLabelProps } from "../../types";
import type { BoxProps } from "../box";
import type {
  ComponentPropsWithoutRef,
  LegacyRef,
  ReactNode,
  Ref,
} from "react";

export type InputCustomisation = {
  wrapperProps?: BoxProps;
  inputProps?: SprinklesArgs;
};

export type InputProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "width" | "height" | "style" | "color" | "size" | "label" | "id"
> & {
  /** Message shown when `invalid=true`. May originate from controlling library, like `react-hook-form` */
  errorMessage?: string;
  /** Will be forwarded to the native `<input>`. When using the `errorMessage` prop, will toggle visibility of the error message. */
  invalid?: boolean;
  /** Name of the form control. Submitted with the form as part of a name/value pair */
  name: string;
  /** Common interactive element size, shared with button, select, etc */
  size?: ElementSizeEnum;
  /** React node shown on the left side of input. */
  slotLeft?: ReactNode;
  /** React node shown on the right side of input. */
  slotRight?: ReactNode;
  /** Placeholder text shown when input is empty. */
  placeholder: string;
} & ConditionalLabelProps &
  InputCustomisation;

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
      inputProps,
      wrapperProps,
    }: InputProps,
    ref:
      | LegacyRef<HTMLInputElement>
      | Ref<HTMLInputElement | undefined>
      | undefined
  ) => {
    /** Separate `SprinklesArgs` from other spread props, so we don't break Vanilla Extract */
    const { atomProps, otherProps } = extractAtomsFromProps(
      inputProps,
      getSprinkles
    );

    return (
      <Box
        className={clsx({ [getTheme({ colorOverlay: "red" })]: invalid })}
        color="text_low_contrast"
        {...wrapperProps}
      >
        {label && id && <Label label={label} htmlFor={id} />}

        <SlotWrapper
          slotProps={{ paddingY: "spacing1" }}
          slotLeft={slotLeft}
          slotRight={slotRight}
        >
          <input
            className={clsx(
              getSprinkles(atomProps),
              styles.getInputStyles({ size }),
              userClassName,
              {
                [a11yError]: invalid,
              }
            )}
            name={name}
            id={id}
            ref={ref as LegacyRef<HTMLInputElement>}
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
