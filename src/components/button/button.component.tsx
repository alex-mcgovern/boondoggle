/**
 * Approach adapted from a LogRocket blog by Ohans Emmanuel
 * https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
 */
import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import React, { forwardRef } from "react";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import * as styles from "./button.styles.css";

import type { SharedUiScale } from "../../styles/common/globalVariantsUiScale.css";
import type {
  SprinklesArgs,
  SprinklesMargin,
} from "../../styles/utils/get_sprinkles.css";
import type {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../../types";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
} from "react";

type BaseButtonProps<TPolymorphicAs extends ElementType> = SprinklesMargin &
  Pick<SprinklesArgs, "display" | "maxWidth" | "minWidth" | "width"> &
  PolymorphicComponentPropWithRef<
    TPolymorphicAs,
    {
      /** The appearance of the button: `primary` for important actions, `secondary` for less important actions, and `tertiary` for additional actions with the least emphasis. */
      appearance?: styles.Appearance;
      /** The color of the button to communicate intent. The default uses normal theme colors, green for positive actions, and red for negative actions. */
      color?: styles.Color;
      /** The size of the button: `sm` for small secondary content, `md` as the default size meeting tap target requirements, and `lg` for edge cases like marketing CTAs. */
      size?: SharedUiScale;
      /** The React node shown in the button. */
      children?: React.ReactNode;
      /** The title for the button, shown in the UI. */
      name: string;
      /** The React node shown on the left side of the button. */
      slotLeft?: React.ReactNode;
      /** The React node shown on the right side of the button. */
      slotRight?: React.ReactNode;
      /** The HTML button type, defaults to `button`. */
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
      as,
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
            styles.getButtonStyles({ appearance, color, size }),
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
