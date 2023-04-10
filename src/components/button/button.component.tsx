/**
 * Approach adapted from a LogRocket blog by Ohans Emmanuel
 * https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
 */
import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import React, { forwardRef } from "react";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { getButtonStyles } from "./button.styles.css";

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
  VariantAppearanceEnum,
  VariantColorEnum,
} from "./button.styles.css";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
  ReactNode,
} from "react";

type BaseButtonProps<TPolymorphicAs extends ElementType> = SprinklesMargin &
  Pick<SprinklesArgs, "display" | "maxWidth" | "minWidth" | "width"> &
  PolymorphicComponentPropWithRef<
    TPolymorphicAs,
    {
      /**
       * Come in three sizes: `primary` for important actions, `secondary`
       * for less important actions, and `tertiary` for additional actions with the least emphasis.
       */
      appearance?: VariantAppearanceEnum;
      /**
       * You can change the button color to communicate intent. Default uses normal theme colors, green for positive actions, and red for negative actions.       */
      color?: VariantColorEnum;
      /**
       * Buttons come in three sizes: `sm` for small secondary content,
       * `md` as the default size meeting tap target requirements, and
       * `lg` for edge cases like marketing CTAs.
       */
      size?: VariantUiScaleEnum;
      /** Title for button, shown in the UI */
      name: string;
      /** React node shown on the left side of button. */
      slotLeft?: ReactNode;
      /** React node shown on the right side of button. */
      slotRight?: ReactNode;
      /** HTML button type, defaults to `button`. */
      type?: "button" | "submit" | "reset";
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
      as = "button",
      children,
      className: userClassName,
      color = "default",
      size = "md",
      slotLeft,
      slotRight,
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
