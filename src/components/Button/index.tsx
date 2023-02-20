/**
 * Approach adapted from a LogRocket blog by Ohans Emmanuel
 * https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
 */
import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
} from "react";
import React, { forwardRef } from "react";
import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import type { VariantInteractiveElementSizeEnum } from "../../styles/common/variant_interactive_element_size.css";
import type { GetSprinklesArgs } from "../../styles/getSprinkles.css";
import { getSprinkles } from "../../styles/getSprinkles.css";
import type {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../../types";
import { Icon } from "../Icon/index";
import type { IconProps } from "../Icon/index";
import type { VariantButtonColorEnum } from "./button-color.css";
import { buttonTheme } from "./button.theme.css";
import { getButtonStyles, iconStyle } from "./index.css";
import type { VariantButtonAppearanceEnum } from "./variantButtonAppearance.css";

type BaseButtonProps<TPolymorphicAs extends ElementType> = Omit<
  GetSprinklesArgs,
  "color"
> &
  PolymorphicComponentPropWithRef<
    TPolymorphicAs,
    {
      /** Is button disabled. Mapped to html5 <button> `disabled` attribute and `aria-disabled` attribute. */
      disabled?: boolean;
      /** FontAwesome icon shown on the left side of button. */
      iconLeading?: IconProps["icon"];
      /** Props for leading icon */
      iconLeadingProps?: Omit<IconProps, "icon">;
      /** FontAwesome icon shown on the right side of button. */
      iconTrailing?: IconProps["icon"];
      /** Props for trailing icon */
      iconTrailingProps?: Omit<IconProps, "icon">;
      /** Title for button, shown in the UI */
      name: string;
      /** HTML button type, defaults to `button`. */
      type?: "button" | "submit" | "reset";
      /** Size of the button element */
      size?: VariantInteractiveElementSizeEnum;
      /** Color for the button */
      color?: VariantButtonColorEnum;
      /** Appearance for the button */
      appearance?: VariantButtonAppearanceEnum;
    }
  >;

type ButtonComponent = <TPolymorphicAs extends ElementType = "button">(
  props: BaseButtonProps<TPolymorphicAs>
) => ReactElement | null;

export type ButtonProps = ComponentPropsWithoutRef<typeof Button>;

/** -----------------------------------------------------------------------------
 * Button component
 * ------------------------------------------------------------------------------- */

export const Button: ButtonComponent = forwardRef(
  <TPolymorphicAs extends ElementType = "span">(
    {
      appearance = "primary",
      as,
      children,
      className: userClassName,
      color,
      disabled,
      iconLeading,
      iconLeadingProps,
      iconTrailing,
      iconTrailingProps,
      id,
      size = "md",
      type = "button",
      ...rest
    }: BaseButtonProps<TPolymorphicAs>,
    ref?: PolymorphicRef<TPolymorphicAs>
  ) => {
    /** Separate `GetSprinklesArgs` from other spread props, so we don't break Vanilla Extract */
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    const Component = as || "button";

    const buttonClassNames = clsx(
      buttonTheme,
      getButtonStyles({ appearance, color, size }),
      getSprinkles(atomProps),
      userClassName
    );

    return (
      <Component
        {...{
          "aria-disabled": disabled,
          className: buttonClassNames,
          disabled,
          id,
          ref,
          type,
          ...otherProps,
        }}
      >
        {iconLeading && (
          <Icon
            className={iconStyle}
            icon={iconLeading}
            {...iconLeadingProps}
          />
        )}
        {children}
        {iconTrailing && (
          <Icon
            className={iconStyle}
            icon={iconTrailing}
            {...iconTrailingProps}
          />
        )}
      </Component>
    );
  }
);
