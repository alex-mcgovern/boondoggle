import type {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";

/**
 * Polymorphic component types
 */
export type PolyMorphicAsProp<TPolymorphicAs extends ElementType> = {
  /**
   * Pass an HTML tag or custom component to this prop to merge the
   * original component props with the supplied element/component props
   * and change the DOM node.
   */
  as?: TPolymorphicAs;
};

export type PropsToOmit<
  TPolymorphicAs extends ElementType,
  P
> = keyof (PolyMorphicAsProp<TPolymorphicAs> & P);

export type PolymorphicComponentProp<
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
  ComponentPropsWithRef<TPolymorphicAs>["ref"];

export type LabelledElement = {
  label: string;
  id: string;
};

export type UnlabelledElement = {
  label?: never;
  id?: string;
};

export type ConditionalLabelProps =
  /** When label is defined, id must also be defined */
  | LabelledElement
  /** When label is not defined, id may be undefined */
  | UnlabelledElement;
