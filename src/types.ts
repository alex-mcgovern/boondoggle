import type { BoxProps } from "./components/core.box";
import type { LabelProps } from "./components/field.label";
import type {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";

/** ----------------------------------------------------------------------------- */

type PolyMorphicAsProp<TPolymorphicAs extends ElementType> = {
  /**
   * Pass an HTML tag or custom component to this prop to merge the
   * original component props with the supplied element/component props
   * and change the DOM node.
   */
  as?: TPolymorphicAs;
};

type PropsToOmit<
  TPolymorphicAs extends ElementType,
  P
> = keyof (PolyMorphicAsProp<TPolymorphicAs> & P);

type PolymorphicComponentProp<
  TPolymorphicAs extends ElementType,
  Props = Record<string, unknown>
> = PropsWithChildren<Props & PolyMorphicAsProp<TPolymorphicAs>> &
  Omit<
    ComponentPropsWithoutRef<TPolymorphicAs>,
    PropsToOmit<TPolymorphicAs, Props>
  >;

export type PolymorphicComponentPropWithRef<
  TPolymorphicAs extends ElementType,
  Props = Record<string, unknown>
> = PolymorphicComponentProp<TPolymorphicAs, Props> & {
  ref?: PolymorphicRef<TPolymorphicAs>;
};

export type PolymorphicRef<TPolymorphicAs extends ElementType> =
  ComponentPropsWithRef<TPolymorphicAs>["ref"]; /** ----------------------------------------------------------------------------- */

// Enum of all HTML element types
export type ElementTypeArg =
  | HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
  | undefined;

/** ----------------------------------------------------------------------------- */

type LabelledElement = {
  id: string;
  label: string;
};

type UnlabelledElement = {
  id?: string;
  label?: never;
};

export type ConditionalLabelProps =
  /** When label is defined, id must also be defined */
  | LabelledElement
  /** When label is not defined, id may be undefined */
  | UnlabelledElement;

/** ----------------------------------------------------------------------------- */

export type LabelledElementCustomisation = {
  labelProps?: LabelProps;
  wrapperProps?: BoxProps;
};
