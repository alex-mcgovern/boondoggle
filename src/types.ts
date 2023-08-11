import type { BoxProps } from "./components/box";
import type { FieldLabelProps } from "./components/field_label";
import type { ColorOverlay } from "./styles/color_palette.css";
import type { ElementSizeEnum } from "./styles/common/element_size.css";
import type {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
  ReactNode,
} from "react";
import type { RegisterOptions } from "react-hook-form";

/** ----------------------------------------------------------------------------- */

export type WithDescription = {
  /** Description shown under the field (when there is no error message). */
  description?: ReactNode;
};

/** ----------------------------------------------------------------------------- */

export type WithColorOverlay = {
  /**
   * Allows setting a color to indicate semantic meaning associated with
   * an action. Redefines color variables via CSS custom properties.
   */
  colorOverlay?: ColorOverlay;
};

/** ----------------------------------------------------------------------------- */

export type WithFormFieldProps = {
  /** Message to render when erroring. */
  errorMessage: string;
  /** Function to validate field value */
  validate?: RegisterOptions["validate"];
};

/** ----------------------------------------------------------------------------- */

export type WithName = {
  /** Name of the component. If field is connected as a form field, will be used to key the value in the form field values. */
  name: string;
};
/** ----------------------------------------------------------------------------- */

// const myUnion = z.discriminatedUnion("label", [
//   z.object({
//     id: z.string(),
//     label: z.string(),
//     labelTooltip: z.string().optional(),
//   }),
//   z.object({
//     id: z.string().optional(),
//     label: z.never(),
//     labelTooltip: z.never(),
//   }),
// ]);

// type X = z.infer<typeof myUnion>;

export type WithOptionalLabel =
  /** When label is defined, id must also be defined */
  (
    | {
        /** HTML element id */
        id: string;
        /** Text for HTML label element */
        label: string;
      }
    /** When label is not defined, id may be undefined */
    | {
        /** HTML element id */
        id?: string;
        /** Text for HTML label element */
        label?: never;
      }
  ) & {
    /** Optional tooltip for label */
    labelTooltip?: string;
  };
/** ----------------------------------------------------------------------------- */

export type WithPlaceholder = {
  /** String shown in a field before it is filled/interacted with. */
  placeholder: string;
};

/** ----------------------------------------------------------------------------- */

export type WithSize = {
  /** Consistent size option shared across multiple components. */
  size?: ElementSizeEnum;
};
/** ----------------------------------------------------------------------------- */

export type WithSlots = {
  /** React node rendered on the left-hand side. */
  slotLeft?: ReactNode;
  /** React node rendered on the right-hand side. */
  slotRight?: ReactNode;
};

/** ----------------------------------------------------------------------------- */

export type WithStateDisabled = {
  /** Whether the component is disabled. */
  disabled?: boolean;
};

/** ----------------------------------------------------------------------------- */

export type WithStateInvalid = {
  /** Message shown when field fails validation. */
  errorMessage?: string;
  /** Whether the value of the field fails validation. */
  invalid?: boolean;
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
  ComponentPropsWithRef<TPolymorphicAs>["ref"];

/** ----------------------------------------------------------------------------- */

// Enum of all HTML element types
export type ElementTypeArg =
  | HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
  | undefined;

/** ----------------------------------------------------------------------------- */

export type LabelledElementCustomisation = {
  labelProps?: FieldLabelProps;
  wrapperProps?: BoxProps;
};
