import type {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";

/** -----------------------------------------------------------------------------
 * Polymorphic component types
 * ------------------------------------------------------------------------------- */

export type PolyMorphicAsProp<TPolymorphicAs extends ElementType> = {
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
