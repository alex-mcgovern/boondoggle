import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import React, { forwardRef } from "react";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box_component";
import * as styles from "./card.styles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../../types";
import type { ElementType, ReactElement, ReactNode } from "react";

type BaseCardProps<TPolymorphicAs extends ElementType> = SprinklesArgs &
  PolymorphicComponentPropWithRef<
    TPolymorphicAs,
    {
      children: ReactNode | Array<ReactNode>;
      className?: string;
    }
  >;

export type CardProps = <TPolymorphicAs extends ElementType = "button">(
  props: BaseCardProps<TPolymorphicAs>
) => ReactElement | null;

export const Card: CardProps = forwardRef(
  <TPolymorphicAs extends ElementType = "div">(
    {
      children,
      as,
      className: userClassName,
      ...rest
    }: BaseCardProps<TPolymorphicAs>,
    ref?: PolymorphicRef<TPolymorphicAs>
  ) => {
    /** Separate `SprinklesArgs` from other spread props, so we don't break Vanilla Extract */
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    const Component = as || Box;

    const classNames = clsx(
      styles.cardStyle,
      getSprinkles(atomProps),
      userClassName
    );

    return (
      <Component
        {...{
          ref,
          className: classNames,
          ...otherProps,
        }}
      >
        {children}
      </Component>
    );
  }
);
