import type { ElementType, ReactElement, ReactNode } from "react";
import React, { forwardRef } from "react";
import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import type { GetSprinklesArgs } from "../../styles/getSprinkles.css";
import { getSprinkles } from "../../styles/getSprinkles.css";
import type {
  PolymorphicComponentPropWithRef,
  PolymorphicRef,
} from "../../types";
import { Box } from "../Box";
import * as styles from "./index.css";

type BaseCardProps<TPolymorphicAs extends ElementType> = GetSprinklesArgs &
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
    /** Separate `GetSprinklesArgs` from other spread props, so we don't break Vanilla Extract */
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
