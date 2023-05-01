import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import { a11yFocus } from "../../styles/common/a11y.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { SlotWrapper } from "../slot_wrapper";
import * as styles from "./tag.styles.css";

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

type BaseTagProps<TPolymorphicAs extends ElementType> = SprinklesArgs &
  PolymorphicComponentPropWithRef<
    TPolymorphicAs,
    {
      /** The React node shown on the left side of the Tag. */
      slotLeft?: ReactNode;
      /** The React node shown on the right side of the Tag. */
      slotRight?: ReactNode;
      /** Used as the html ID. */
      id?: string;
      /** USed to communicate semantic meaning */
      colorOverlay?: ColorOverlay;
      /** If `true`, the component is disabled. */
      disabled?: boolean;
      /** Callback on click. */
      onClick?(...args: unknown[]): unknown;
      /** The react node rendered in the tag. */
      children?: ReactNode;
      /** The string URI to link to. Supports relative and absolute URIs. */
      to?: string;
      /** The size of the tag */
      size?: ElementSizeEnum;
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
      id,
      colorOverlay,
      slotLeft,
      slotRight,
      size,
      children,
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
            styles.getTagStyle({ colorOverlay, size }),
            getSprinkles(atomProps),
            a11yFocus
          ),
          ref,
          id,
          ...otherProps,
        }}
      >
        <SlotWrapper
          gap="spacing0"
          color="inherit"
          slotLeft={slotLeft}
          slotRight={slotRight}
        >
          {children}
        </SlotWrapper>
      </Component>
    );
  }
);
