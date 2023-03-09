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
import type { VariantUiScaleEnum } from "../../styles/common/variant.ui_scale.css";
import type {
  SprinklesArgs,
  SprinklesMargin,
} from "../../styles/utils/get_sprinkles.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import type {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../../types";
import { Icon } from "../Icon/index";
import type { IconProps } from "../Icon/index";
import type {
  VariantButtonAppearanceEnum,
  VariantButtonColorEnum,
} from "./button.css";
import { buttonTheme, getButtonStyles } from "./button.css";

type BaseButtonProps<TPolymorphicAs extends ElementType> = SprinklesMargin &
  Pick<SprinklesArgs, "display" | "maxWidth" | "minWidth"> &
  PolymorphicComponentPropWithRef<
    TPolymorphicAs,
    {
      /** Controls html element `disabled` attribute and `aria-disabled` attribute. */
      disabled?: boolean;
      /** FontAwesome icon shown on the left side of button. */
      iconLeft?: IconProps["icon"];
      /** Props for leading icon */
      iconLeftProps?: Omit<IconProps, "icon">;
      /** FontAwesome icon shown on the right side of button. */
      iconRight?: IconProps["icon"];
      /** Props for trailing icon */
      iconRightProps?: Omit<IconProps, "icon">;
      /** Title for button, shown in the UI */
      name: string;
      /** HTML button type, defaults to `button`. */
      type?: "button" | "submit" | "reset";
      /** Size of the button element */
      size?: VariantUiScaleEnum;
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

export const Button: ButtonComponent = forwardRef(
  <TPolymorphicAs extends ElementType = "span">(
    {
      appearance = "primary",
      as,
      children,
      className: userClassName,
      color = "accent",
      disabled = false,
      iconLeft,
      iconLeftProps,
      iconRight,
      iconRightProps,
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
        {iconLeft && <Icon icon={iconLeft} {...iconLeftProps} />}
        {children}
        {iconRight && <Icon icon={iconRight} {...iconRightProps} />}
      </Component>
    );
  }
);
