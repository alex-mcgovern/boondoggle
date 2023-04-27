/**
 * Approach adapted from a LogRocket blog by Ohans Emmanuel
 * https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
 */
import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import { variantIntent } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { SlotWrapper } from "../slot_wrapper";
import * as styles from "./button.styles.css";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { Intent } from "../../styles/theme.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../../types";
import type { SlotWrapperProps } from "../slot_wrapper";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
  ReactNode,
} from "react";

type BaseButtonProps<TPolymorphicAs extends ElementType> = SprinklesArgs &
  PolymorphicComponentPropWithRef<
    TPolymorphicAs,
    {
      /** The appearance of the button: `primary` for important actions, `secondary` for less important actions, and `tertiary` for additional actions with the least emphasis. */
      appearance?: styles.Appearance;
      /** Use color to indicate beneficial, or potentially destructive actions. */
      intent?: Intent;
      /** The size of the button: `sm` for small secondary content, `md` as the default size meeting tap target requirements, and `lg` for edge cases like marketing CTAs. */
      size?: "square" | ElementSizeEnum;
      /** The React node shown in the button. */
      children?: ReactNode;
      /** The title for the button, shown in the UI. */
      name: string;
      /** The React node shown on the left side of the button. */
      slotLeft?: ReactNode;
      /** The React node shown on the right side of the button. */
      slotRight?: ReactNode;
      /** The HTML button type, defaults to `button`. */
      type?: "button" | "submit" | "reset";
      /** Props forwarded to slots */
      slotProps?: SlotWrapperProps["slotProps"];
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
      intent,
      size = "md",
      slotLeft,
      slotRight,
      slotProps,
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
            styles.getButtonStyles({ appearance, size }),
            getSprinkles(atomProps),
            userClassName,
            intent ? variantIntent[intent] : undefined
          ),
          ref,
          type,
          ...otherProps,
        }}
      >
        <SlotWrapper
          color="inherit"
          slotLeft={slotLeft}
          slotProps={slotProps}
          slotRight={slotRight}
        >
          {children}
        </SlotWrapper>
      </Component>
    );
  }
);
