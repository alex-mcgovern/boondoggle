import type { BoxProps } from "./components/Box";
import type { FieldLabelProps } from "./components/FieldLabel";
import type { ColorOverlay } from "./styles/color_palette.css";
import type {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";

/** ----------------------------------------------------------------------------- */

export type WithColorOverlay = {
  /**
   * Allows setting a color to indicate semantic meaning associated with
   * an action. Redefines color variables via CSS custom properties.
   */
  colorOverlay?: ColorOverlay;
};

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
  labelProps?: FieldLabelProps;
  wrapperProps?: BoxProps;
};
