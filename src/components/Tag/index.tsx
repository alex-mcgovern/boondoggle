import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import { a11yFocus } from "../../styles/common/a11y.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { SlotWrapper } from "../SlotWrapper";
import * as styles from "./styles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
  WithColorOverlay,
  WithDisabledState,
  WithSize,
  WithSlots,
} from "../../types";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  ReactElement,
  ReactNode,
} from "react";

type BaseTagProps<TPolymorphicAs extends ElementType> = SprinklesArgs &
  PolymorphicComponentPropWithRef<
    TPolymorphicAs,
    WithColorOverlay &
      WithSize &
      WithSlots &
      WithDisabledState & {
        /** The react node rendered in the tag. */
        children?: ReactNode;
        /** Used as the html ID. */
        id?: string;
        /** Callback on click. */
        onClick?(...args: unknown[]): unknown;
      }
  >;

type TagComponent = <TPolymorphicAs extends ElementType = "div">(
  props: BaseTagProps<TPolymorphicAs>
) => ReactElement | null;

export type TagProps = ComponentPropsWithoutRef<typeof Tag>;

export const Tag: TagComponent = forwardRef(
  <TPolymorphicAs extends ElementType = "span">(
    {
      as,
      children,
      className: userClassName,
      colorOverlay,
      id,
      size,
      slotLeft,
      slotRight,
      ...rest
    }: BaseTagProps<TPolymorphicAs>,
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
            styles.getTagStyle({ colorOverlay, size }),
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
          gap="spacing_0.5"
          size={size}
          slotLeft={slotLeft}
          slotRight={slotRight}
        >
          {children}
        </SlotWrapper>
      </Component>
    );
  }
);
