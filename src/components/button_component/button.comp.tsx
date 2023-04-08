/**
 * Approach adapted from a LogRocket blog by Ohans Emmanuel
 * https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
 */
import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import React, { forwardRef } from "react";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { getButtonStyles } from "./button.css";

import type { VariantUiScaleEnum } from "../../styles/common/globalVariantsUiScale.css";
import type {
  SprinklesArgs,
  SprinklesMargin,
} from "../../styles/utils/get_sprinkles.css";
import type {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../../types";
import type {
  VariantButtonAppearanceEnum,
  VariantButtonColorEnum,
} from "./button.css";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
  ReactNode,
} from "react";

type BaseButtonProps<TPolymorphicAs extends ElementType> = SprinklesMargin &
  Pick<SprinklesArgs, "display" | "maxWidth" | "minWidth"> &
  PolymorphicComponentPropWithRef<
    TPolymorphicAs,
    {
      /** React node shown on the left side of button. */
      slotLeft?: ReactNode;
      /** React node shown on the right side of button. */
      slotRight?: ReactNode;
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
      slotLeft,
      slotRight,
      size = "md",
      type = "button",
      ...rest
    }: BaseButtonProps<TPolymorphicAs>,
    ref?: PolymorphicRef<TPolymorphicAs>
  ) => {
    /** Separate `GetSprinklesArgs` from other spread props, so we don't break Vanilla Extract */
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    const Component = as || "button";

    return (
      <Component
        {...{
          className: clsx(
            getButtonStyles({ appearance, color, size }),
            getSprinkles(atomProps),
            userClassName
          ),
          ref,
          type,
          ...otherProps,
        }}
      >
        {slotLeft}
        {children}
        {slotRight}
      </Component>
    );
  }
);
