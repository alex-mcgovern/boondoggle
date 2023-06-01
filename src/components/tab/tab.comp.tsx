import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import { a11yFocus } from "../../styles/common/a11y.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { SlotWrapper } from "../slot_wrapper";
import * as styles from "./tab.styles.css";

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

type BaseTabProps<TPolymorphicAs extends ElementType> = SprinklesArgs &
  PolymorphicComponentPropWithRef<
    TPolymorphicAs,
    {
      /** The react node rendered in the tab. */
      children?: ReactNode;
      /** USed to communicate semantic meaning */
      colorOverlay?: ColorOverlay;
      /** If `true`, the component is disabled. */
      disabled?: boolean;
      /** Used as the html ID. */
      id?: string;
      /** Callback on click. */
      onClick?(...args: unknown[]): unknown;
      /** The size of the tab */
      size?: ElementSizeEnum;
      /** The React node shown on the left side of the Tab. */
      slotLeft?: ReactNode;
      /** The React node shown on the right side of the Tab. */
      slotRight?: ReactNode;
      /** The string URI to link to. Supports relative and absolute URIs. */
      to?: string;
    }
  >;

type TabComponent = <TPolymorphicAs extends ElementType = "div">(
  props: BaseTabProps<TPolymorphicAs>
) => ReactElement | null;

export type TabProps = ComponentPropsWithoutRef<typeof Tab>;

export const Tab: TabComponent = forwardRef(
  <TPolymorphicAs extends ElementType = "span">(
    {
      as,
      id,
      colorOverlay,
      slotLeft,
      className: userClassName,
      slotRight,
      size,
      children,
      ...rest
    }: BaseTabProps<TPolymorphicAs>,
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
            styles.getTabStyle({ colorOverlay, size }),
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
