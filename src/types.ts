import type { BoxProps } from "./components/box";
import type { FieldLabelProps } from "./components/field_label";
import type { ColorOverlay } from "./styles/color_palette.css";
import type { ElementSizeEnum } from "./styles/common/element_size.css";
import type { RowData } from "@tanstack/react-table";
import type {
  ComponentPropsWithRef,
  ComponentPropsWithoutRef,
  ElementType,
  JSXElementConstructor,
  PropsWithChildren,
  ReactNode,
} from "react";
import type { RegisterOptions } from "react-hook-form";

/** ----------------------------------------------------------------------------- */

export type TDataTableRowActions<TData extends RowData> =
  JSXElementConstructor<{ row_data: TData }>;

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
      /** Whether the input is read-only or not. */
      readOnly: true;
    }
  | {
      /** Whether the input is copyable or not. */
      isCopyable?: never;
      /** Whether the input is read-only or not. */
      readOnly?: boolean;
    };

/** ----------------------------------------------------------------------------- */

export type WithIsVisibilityToggleable =
  | {
      /** Whether the input field value visibility can be toggled or not. */
      isVisibilityToggleable?: true;
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
      isClearable?: true;
      /** Whether the input is read-only or not. */
      readOnly?: never;
    }
  | {
      /** Whether the input is clearable or not. */
      isClearable?: never;
      /** Whether the input is read-only or not. */
      readOnly?: boolean;
    };

/** ----------------------------------------------------------------------------- */

export type WithWrapperProps = {
  /** Props for the wrapper component. */
  wrapperProps?: BoxProps;
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
      /** Whether the input is read-only or not. */
      readOnly: true;
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
      /** Whether the input is read-only or not. */
      readOnly: true;
    }
  | {
      /** Placeholder shown on empty field. */
      placeholder?: string;
      /** Whether the input is read-only or not. */
      readOnly?: boolean;
    };

/** ----------------------------------------------------------------------------- */

export type WithOptionalLabel =
  /** When label is defined, id must also be defined */
  | {
      /** HTML element id */
      id: string;
      /** Text for HTML label element */
      label: string;
      /** Props for FieldLabel component */
      labelProps?: FieldLabelProps | undefined;
      /** Optional tooltip for label */
      labelTooltip?: string;
    }
  /** When label is not defined, id may be undefined */
  | {
      /** HTML element id */
      id?: string;
      /** Text for HTML label element */
      label?: never;
      /** Props for FieldLabel component */
      labelProps?: never;
      /** Optional tooltip for label */
      labelTooltip?: never;
    };

/** ----------------------------------------------------------------------------- */

export type WithSize = {
  /** Consistent size option shared across multiple components. */
  size?: ElementSizeEnum;
};
/** ----------------------------------------------------------------------------- */

export type WithSlots = {
  /** React node(s) rendered on the left-hand side. */
  slotLeft?: [ReactNode?, ReactNode?, ReactNode?];
  /** React node(s) rendered on the right-hand side. */
  slotRight?: [ReactNode?, ReactNode?, ReactNode?];
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

export type WithTableOptionalPagination =
  /** If `isPaginated` is `false` or `undefined`, `strPage` and `strResults` should not be passed. */
  | {
      /** Whether to show pagination */
      isPaginated: true;
      /** String to use for the next button */
      strNext: string;
      /** String to use for the page label */
      strPage: string;
      /** String to use for the previous button */
      strPrev: string;
      /** String to use for the results label */
      strResults: string;
      /** String to use for the show label */
      strShow: string;
    }
  /** If `isPaginated` is `false` or `undefined`, `strPage` and `strResults` should not be passed. */
  | {
      /** Whether to show pagination */
      isPaginated?: false;
      /** String to use for the next button */
      strNext?: never;
      /** String to use for the page label */
      strPage?: never;
      /** String to use for the previous button */
      strPrev?: never;
      /** String to use for the results label */
      strResults?: never;
      /** String to use for the show label */
      strShow?: never;
    };

/** ----------------------------------------------------------------------------- */

export type WithTableOptionalFiltering =
  /** If `isFilterable` is `false` or `undefined`, `strFilterPlaceholder` should not be passed. */
  | {
      /** Whether the table should be filterable */
      isFilterable: true;
      /** String to use for filter field placeholder */
      strFilterPlaceholder: string;
    }
  /** If `isFilterable` is `false` or `undefined`, `strFilterPlaceholder` should not be passed. */
  | {
      /** Whether the table should be filterable */
      isFilterable?: false;
      /** String to use for filter field placeholder */
      strFilterPlaceholder?: never;
    };

/** ----------------------------------------------------------------------------- */

export type WithTableOptionalSelectableRows<TData extends RowData> =
  /** If `isSelectable` is `true`, `enableMultiRowSelection` can be passed. */
  | {
      /** Boolean to enable multi-row selection. */
      enableMultiRowSelection?: boolean;
      /** Whether the table should allow rows to be selectable */
      isSelectable: true;
      /** Function called on a new selection, with the current selection */
      onSelect: (selection: TData[] | undefined) => void;
    }
  /** If `isSelectable` is `false` or `undefined`, `enableMultiRowSelection` should not be passed. */
  | {
      /** Boolean to enable multi-row selection. */
      enableMultiRowSelection?: never;
      /** Whether the table should allow rows to be selectable */
      isSelectable?: false | undefined;
      /** Function called on a new selection, with the current selection */
      onSelect?: never;
    };

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
