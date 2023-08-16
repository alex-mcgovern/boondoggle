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

export type WithHideLastpass = {
  /** Whether to hide the Lastpass icon or not. */
  hideLastpass?: boolean;
};

/** ----------------------------------------------------------------------------- */

export type WithIsCopyable =
  | {
      /** Whether the input is copyable or not. */
      isCopyable: true;
      /** Whether the input is readonly or not. */
      readonly: true;
    }
  | {
      /** Whether the input is copyable or not. */
      isCopyable?: never;
      /** Whether the input is readonly or not. */
      readonly?: false | undefined;
    };

/** ----------------------------------------------------------------------------- */

export type WithIsVisibilityToggleable =
  | {
      /** Whether the input field value visibility can be toggled or not. */
      isVisibilityToggleable: true;
      /** Whether the input field value is visible or not. */
      isVisible?: boolean;
    }
  | {
      /** Whether the input field value visibility can be toggled or not. */
      isVisibilityToggleable?: never;
      /** Whether the input field value is visible or not. */
      isVisible?: never;
    };

/** ----------------------------------------------------------------------------- */

export type WithIsClearable =
  | {
      /** Whether the input is clearable or not. */
      isClearable: true;
      /** Whether the input is readonly or not. */
      readonly?: never;
    }
  | {
      /** Whether the input is clearable or not. */
      isClearable?: never;
      /** Whether the input is readonly or not. */
      readonly?: boolean;
    };

/** ----------------------------------------------------------------------------- */

export type WithName = {
  /** Name of the component. If field is connected as a form field, will be used to key the value in the form field values. */
  name: string;
};

/** ----------------------------------------------------------------------------- */

export type WithPlaceholder =
  | {
      /** Placeholder shown on empty field. */
      placeholder: string;
    }
  | {
      /** Placeholder shown on empty field. */
      placeholder?: never;
      /** Whether the input is readonly or not. */
      readonly: true;
    }
  | {
      /** Initial value of the field. */
      defaultValue?: string;
      /** Placeholder shown on empty field. */
      placeholder?: never;
    };

/** ----------------------------------------------------------------------------- */

export type WithReadOnly =
  | {
      /** Placeholder shown on empty field. */
      placeholder?: never;
      /** Whether the input is readonly or not. */
      readonly: true;
    }
  | {
      /** Placeholder shown on empty field. */
      placeholder?: string;
      /** Whether the input is readonly or not. */
      readonly?: boolean;
    };

/** ----------------------------------------------------------------------------- */

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

export type WithSize = {
  /** Consistent size option shared across multiple components. */
  size?: ElementSizeEnum;
};
/** ----------------------------------------------------------------------------- */

export type WithSlots = {
  /** React node(s) rendered on the left-hand side. */
  slotLeft?: [ReactNode, ReactNode?, ReactNode?];
  /** React node(s) rendered on the right-hand side. */
  slotRight?: [ReactNode, ReactNode?, ReactNode?];
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
