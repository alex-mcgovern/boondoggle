import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import { a11yFocus } from "../../styles/common/a11y.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { SlotWrapper } from "../slot_wrapper";
import * as styles from "./pill.styles.css";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { ColorOverlay } from "../../styles/theme.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../../types";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
  ReactNode,
} from "react";

type BasePillProps<TPolymorphicAs extends ElementType> = SprinklesArgs &
  PolymorphicComponentPropWithRef<
    TPolymorphicAs,
    {
      /** The react node rendered in the pill. */
      children?: ReactNode;
      /** USed to communicate semantic meaning */
      colorOverlay?: ColorOverlay;
      /** If `true`, the component is disabled. */
      disabled?: boolean;
      /** Used as the html ID. */
      id?: string;
      /** Callback on click. */
      onClick?(...args: unknown[]): unknown;
      /** The size of the pill */
      size?: ElementSizeEnum;
      /** The React node shown on the left side of the Pill. */
      slotLeft?: ReactNode;
      /** The React node shown on the right side of the Pill. */
      slotRight?: ReactNode;
      /** The string URI to link to. Supports relative and absolute URIs. */
      to?: string;
    }
  >;

type PillComponent = <TPolymorphicAs extends ElementType = "div">(
  props: BasePillProps<TPolymorphicAs>
) => ReactElement | null;

export type PillProps = ComponentPropsWithoutRef<typeof Pill>;

export const Pill: PillComponent = forwardRef(
  <TPolymorphicAs extends ElementType = "span">(
    {
      as,
      id,
      colorOverlay,
      className: userClassName,
      slotLeft,
      slotRight,
      size,
      children,
      ...rest
    }: BasePillProps<TPolymorphicAs>,
    ref?: PolymorphicRef<TPolymorphicAs>
  ) => {
    /** Separate `GetSprinklesArgs` from other spread props, so we don't break Vanilla Extract */
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    const Component = as || "div";

    return (
      <Component
        {...{
          className: clsx(
            userClassName,
            styles.getPillStyle({ colorOverlay, size }),
            getSprinkles(atomProps),
            a11yFocus
          ),
          id,
          ref,
          ...otherProps,
        }}
      >
        <SlotWrapper
          color="inherit"
          gap="spacing_0"
          slotLeft={slotLeft}
          slotRight={slotRight}
        >
          {children}
        </SlotWrapper>
      </Component>
    );
  }
);
