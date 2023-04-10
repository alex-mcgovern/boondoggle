import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import React, { forwardRef } from "react";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { getButtonStyles } from "./button.styles.css";

import type { VariantUiScaleEnum } from "../../styles/common/globalVariantsUiScale.css";
import type {
  VariantAppearanceEnum,
  VariantColorEnum,
} from "./button.styles.css";
import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  JSXElementConstructor,
  ReactNode,
} from "react";

type ButtonBaseProps = {
  /**
   * Come in three sizes: `primary` for important actions, `secondary`
   * for less important actions, and `tertiary` for additional actions
   * with the least emphasis.
   */
  appearance?: VariantAppearanceEnum;

  /**
   * You can change the button color to communicate intent. Default uses
   * normal theme colors, green for positive actions, and red for negative actions.
   */
  color?: VariantColorEnum;

  /**
   * Buttons come in three sizes: `sm` for small secondary content,
   * `md` as the default size meeting tap target requirements, and
   * `lg` for edge cases like marketing CTAs.
   */
  size?: VariantUiScaleEnum;

  /** React node shown in the button. */
  children?: ReactNode;

  /** Title for button, shown in the UI */
  name: string;

  /** React node shown on the left side of button. */
  slotLeft?: ReactNode;

  /** React node shown on the right side of button. */
  slotRight?: ReactNode;

  /** HTML button type, defaults to `button`. */
  type?: "button" | "submit" | "reset";
};

export type ButtonProps = ComponentPropsWithoutRef<typeof Button>;

export const Button = forwardRef(
  <T extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>>(
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
    }: {
      as: T;
    } & ButtonBaseProps &
      ComponentProps<T>,
    ref: React.Ref<T>
  ) => {
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    const Comp = as || "button";

    return (
      <Comp
        {...{
          className: clsx(
            getButtonStyles({
              appearance,
              color,
              size,
            }),
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
      </Comp>
    );
  }
);
