import type {
  AriaRole,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  Ref,
} from "react";
import React, { forwardRef } from "react";
import { extractAtomsFromProps } from "@dessert-box/core";
import { a11yFocus } from "../../styles/common/a11y.focus.css";
import type { VariantUiScaleEnum } from "../../styles/common/variant.ui_scale.css";
import type { GetSprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../Box";
import type { IconProps } from "../Icon";
import { Icon } from "../Icon";
import { InputErrorMessage } from "../InputErrorMessage";
import { Label } from "../Label";
import * as styles from "./index.css";

export interface InputProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "width" | "height" | "style" | "color" | "size"
    >,
    GetSprinklesArgs {
  autoComplete?: HTMLInputElement["autocomplete"];
  /** FontAwesome icon shown on the left side of input. */
  iconLeading?: IconProps["icon"];
  /** Props for leading icon */
  iconLeadingProps?: Omit<IconProps, "icon">;
  /** FontAwesome icon shown on the right side of input. */
  iconTrailing?: IconProps["icon"];
  /** Props for trailing icon */
  iconTrailingProps?: Omit<IconProps, "icon">;
  /** Used as the html ID. */
  id: string;
  /** Controls `aria-required` and input `required` attributes. */
  required?: boolean;
  /** Allow controlling components to set error styles, `aria-invalid` prop and display error message. */
  invalid?: boolean;
  /** Is input disabled. Mapped to html5 <input> `disabled` attribute and `aria-disabled` attribute. */
  disabled?: boolean;
  /** Name of the form control. Submitted with the form as part of a name/value pair */
  name: string;
  /** Message shown when `invalid=true`. May originate from controlling library, like `react-hook-form` */
  errorMessage?: string;
  /** Label text. (Will also be used as accessible `name` on the input element.) */
  label?: string;
  /** Callback on input change. */
  onChange?(...args: unknown[]): unknown;
  /** Text shown before user has interacted with the input. */
  placeholder?: string;
  /** Aria role to use for the input (e.g. `search`). */
  role?: AriaRole;
  /** Common interactive element size, shared with button, select, etc */
  size?: VariantUiScaleEnum;
  /** Allows directly assigning a value when the input is acting as a controlled element. */
  value?: string;
  type?: HTMLInputTypeAttribute;
}

export const Input = forwardRef(
  (
    {
      autoComplete,
      errorMessage,
      iconLeading,
      iconLeadingProps,
      iconTrailing,
      iconTrailingProps,
      id,
      invalid,
      disabled,
      label,
      name,
      onChange,
      placeholder,
      required,
      role,
      size = "md",
      type,
      value,
      ...rest
    }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    /** Separate `GetSprinklesArgs` from other spread props, so we don't break Vanilla Extract */
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    const inputWrapperStyles = [
      styles.getInputWrapperStyles({
        size,
      }),
      a11yFocus,
      getSprinkles({ ...atomProps }),
    ];

    return (
      <Box>
        {label && id && <Label label={label} htmlFor={id} />}
        <fieldset
          className={inputWrapperStyles.join(" ")}
          role={role}
          disabled={disabled}
        >
          {iconLeading && (
            <Icon
              className={styles.leadingIcon}
              icon={iconLeading}
              {...iconLeadingProps}
            />
          )}
          <input
            value={value}
            type={type}
            autoComplete={autoComplete}
            disabled={disabled}
            className={styles.inputElement}
            placeholder={placeholder}
            onChange={onChange}
            aria-invalid={invalid}
            aria-required={required}
            name={name}
            id={id}
            ref={ref}
            {...otherProps}
          />
          {iconTrailing && (
            <Icon
              className={styles.trailingIcon}
              icon={iconTrailing}
              {...iconTrailingProps}
            />
          )}
        </fieldset>

        {invalid && errorMessage && (
          <InputErrorMessage message={errorMessage} />
        )}
      </Box>
    );
  }
);
