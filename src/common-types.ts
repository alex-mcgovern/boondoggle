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

declare module "react" {
    function forwardRef<T, P = Record<string, unknown>>(
        render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
    ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

export type TDataTableRowActions<TData extends RowData> =
    JSXElementConstructor<{
        /**
         * The raw data for the DataTable row.
         */
        row_data: TData;
    }>;

export type WithDescription = {
    /**
     * Description shown under the field (when there is no error message).
     */
    description?: ReactNode;
};

export type WithColorOverlay = {
    /**
     * Allows setting a color to indicate semantic meaning associated with an action. Redefines color variables via CSS custom properties.
     */
    colorOverlay?: ColorOverlay;
};

export type WithFormFieldProps = {
    /**
     * Function to validate field value
     */
    validate?: RegisterOptions["validate"];
};

export type WithHideLastpass = {
    /**
     * Whether to hide the Lastpass icon or not.
     */
    hideLastpass?: boolean;
};

type BaseIsCopyable = {
    /**
     * Whether the input is copyable or not.
     */
    isCopyable?: boolean;

    /**
     * Whether the input is read-only or not.
     */
    readOnly?: boolean;

    /**
     * The tooltip text to display when the button is hovered after copying.
     */
    strCopied?: string;

    /**
     * The tooltip text to display when the button is hovered before copying.
     */
    strCopy?: string;
};

/* eslint-disable jsdoc/require-jsdoc */

type IsCopyable = BaseIsCopyable & {
    isCopyable: true;
    readOnly: true;
    strCopied: string;
    strCopy: string;
};

type IsNotCopyable = BaseIsCopyable & {
    isCopyable?: never;
    readOnly?: boolean;
    strCopied?: never;
    strCopy?: never;
};

/* eslint-enable jsdoc/require-jsdoc */

export type WithOptionalIsCopyable = IsCopyable | IsNotCopyable;

export const getOptionalIsCopyableProps = ({
    isCopyable,
    readOnly,
    strCopied,
    strCopy,
}: BaseIsCopyable): WithOptionalIsCopyable => {
    return readOnly && isCopyable && strCopy && strCopied
        ? { isCopyable, readOnly, strCopied, strCopy }
        : {
              isCopyable: undefined,
              readOnly,
              strCopied: undefined,
              strCopy: undefined,
          };
};

type BaseIsVisibilityToggleable = {
    /**
     * Whether the input field value visibility can be toggled or not.
     */
    isVisibilityToggleable?: boolean;

    /**
     * Whether the input field value is visible or not.
     */
    isVisible?: boolean;

    /**
     * The tooltip text to display when the button is hovered when value is hidden.
     */
    strHide?: string;

    /**
     * The tooltip text to display when the button is hovered when value is visible.
     */
    strShow?: string;
};

/* eslint-disable jsdoc/require-jsdoc */

type WithIsVisibilityToggleable = BaseIsVisibilityToggleable & {
    isVisibilityToggleable: true;
    isVisible?: boolean;
    strHide: string;
    strShow: string;
};

type WithoutIsVisibilityToggleable = BaseIsVisibilityToggleable & {
    isVisibilityToggleable?: never;
    isVisible?: never;
    strHide?: never;
    strShow?: never;
};

/* eslint-enable jsdoc/require-jsdoc */

export type WithOptionalIsVisibilityToggleable =
    | WithIsVisibilityToggleable
    | WithoutIsVisibilityToggleable;

/**
 * Validates that the correct required props are present to label
 * an element and forwards them to a component.
 */
export const getOptionalIsVisibilityToggleableProps = ({
    isVisibilityToggleable,
    isVisible,
    strHide,
    strShow,
}: BaseIsVisibilityToggleable): WithOptionalIsVisibilityToggleable => {
    return isVisibilityToggleable && strShow && strHide
        ? { isVisibilityToggleable, isVisible, strHide, strShow }
        : {};
};

type BaseIsClearable = {
    /**
     * Whether the input is clearable or not.
     */
    isClearable?: boolean;

    /**
     * Whether the input is read-only or not.
     */
    readOnly?: boolean;

    /**
     * The tooltip text to display when the button is hovered.
     */
    strClear?: string;
};

/* eslint-disable jsdoc/require-jsdoc */

type IsClearable = BaseIsClearable & {
    isClearable: true;
    readOnly?: never;
    strClear: string;
};

type IsNotClearable = BaseIsClearable & {
    isClearable?: never;
    readOnly?: boolean;
    strClear?: never;
};

/* eslint-enable jsdoc/require-jsdoc */

export type WithOptionalIsClearable = IsClearable | IsNotClearable;

/**
 * Validates that the correct required props are present to label
 * an element and forwards them to a component.
 */
export const getOptionalIsClearableProps = ({
    isClearable,
    readOnly,
    strClear,
}: BaseIsClearable): WithOptionalIsClearable => {
    return !readOnly && isClearable && strClear
        ? { isClearable, readOnly: undefined, strClear }
        : { isClearable: undefined, readOnly, strClear: undefined };
};

export type WithWrapperProps = {
    /**
     * Props for the wrapper component.
     */
    wrapperProps?: BoxProps;
};

export type WithName = {
    /**
     * Name of the component. If field is connected as a form field, will be used to key the value in the form field values.
     */
    name: string;
};

export type WithOptionalPlaceholder = {
    /**
     * Placeholder shown on empty field.
     */
    placeholder?: string;
};

export type WithReadOnly = {
    /**
     * Whether the input is read-only or not.
     */
    readOnly?: boolean;
};

export type WithId = {
    /**
     * HTML element id
     */
    id?: string;
};

type BaseWithLabel = {
    /**
     * HTML element id
     */
    id?: string;

    /**
     * Whether the label is visible or not.
     */
    isLabelVisible?: boolean;

    /**
     * Text for HTML label element
     */
    label?: string;

    /**
     * Props for FieldLabel component
     */
    labelProps?: Omit<FieldLabelProps, "label"> | undefined;

    /**
     * Optional tooltip for label
     */
    labelTooltip?: string;
};

/* eslint-disable jsdoc/require-jsdoc */

type WithLabel = BaseWithLabel & {
    id: string;

    isLabelVisible?: boolean;

    label: string;

    labelProps?: Omit<FieldLabelProps, "label"> | undefined;

    labelTooltip?: string;
};

type WithoutLabel = BaseWithLabel & {
    id?: string;

    isLabelVisible?: never;

    label?: never;

    labelProps?: never;

    labelTooltip?: never;
};

/* eslint-enable jsdoc/require-jsdoc */

export type WithOptionalLabel = WithLabel | WithoutLabel;

/**
 * Validates that the correct required props are present to label
 * an element and forwards them to a component.
 */
export const getOptionalLabelProps = ({
    id,
    isLabelVisible,
    label,
    labelProps,
    labelTooltip,
}: BaseWithLabel): WithOptionalLabel => {
    return typeof label !== "undefined" && typeof id !== "undefined"
        ? { id, isLabelVisible, label, labelProps, labelTooltip }
        : {};
};

export type WithSize = {
    /**
     * Consistent size option shared across multiple components.
     */
    size?: ElementSizeEnum;
};

export type Slot = ReactNode | [ReactNode?, ReactNode?, ReactNode?];

export type WithSlots = {
    /**
     * React node(s) rendered on the left-hand side.
     */
    slotLeft?: Slot;

    /**
     * React node(s) rendered on the right-hand side.
     */
    slotRight?: Slot;
};

export type WithStateDisabled = {
    /**
     * Whether the component is disabled.
     */
    disabled?: boolean;
};

export type WithStateInvalid = {
    /**
     * Message shown when field fails validation.
     */
    errorMessage?: string;

    /**
     * Whether the value of the field fails validation.
     */
    invalid?: boolean;
};

export type WithTableOptionalPagination =
    /**
     * If `isPaginated` is `false` or `undefined`, `strPage` and `strResults` should not be passed.
     */
    | {
          /**
           * Whether to show pagination
           */
          isPaginated: true;

          /**
           * String to use for the next button
           */
          strNext: string;

          /**
           * String to use for the page label
           */
          strPage: string;

          /**
           * String to use for the previous button
           */
          strPrev: string;

          /**
           * String to use for the results label
           */
          strResults: string;
      }
    /**
     * If `isPaginated` is `false` or `undefined`, `strPage` and `strResults` should not be passed.
     */
    | {
          /**
           * Whether to show pagination
           */
          isPaginated?: false;

          /**
           * String to use for the next button
           */
          strNext?: never;

          /**
           * String to use for the page label
           */
          strPage?: never;

          /**
           * String to use for the previous button
           */
          strPrev?: never;

          /**
           * String to use for the results label
           */
          strResults?: never;
      };

export type WithTableOptionalFiltering =
    /**
     * If `isFilterable` is `false` or `undefined`, `strFilterPlaceholder` should not be passed.
     */
    | {
          /**
           * Whether the table should be filterable
           */
          isFilterable: true;

          /**
           * The text to display for the clear all filters button.
           */
          strClearAllFilters: string;

          /**
           * String to use for filter field placeholder
           */
          strFilterPlaceholder: string;
      }
    /**
     * If `isFilterable` is `false` or `undefined`, `strFilterPlaceholder` should not be passed.
     */
    | {
          /**
           * Whether the table should be filterable
           */
          isFilterable?: false;

          /**
           * The text to display for the clear all filters button.
           */
          strClearAllFilters?: never;

          /**
           * String to use for filter field placeholder
           */
          strFilterPlaceholder?: never;
      };

export type WithTableOptionalSelectableRows<TData extends RowData> =
    /**
     * If `isSelectable` is `true`, `enableMultiRowSelection` can be passed.
     */
    | {
          /**
           * Boolean to enable multi-row selection.
           */
          enableMultiRowSelection?: boolean;

          /**
           * Whether the table should allow rows to be selectable
           */
          isSelectable: true;

          /**
           * Function called on a new selection, with the current selection
           */
          onSelect: (selection: TData[] | undefined) => void;
      }
    /**
     * If `isSelectable` is `false` or `undefined`, `enableMultiRowSelection` should not be passed.
     */
    | {
          /**
           * Boolean to enable multi-row selection.
           */
          enableMultiRowSelection?: never;

          /**
           * Whether the table should allow rows to be selectable
           */
          isSelectable?: false | undefined;

          /**
           * Function called on a new selection, with the current selection
           */
          onSelect?: never;
      };

type PolyMorphicAsProp<TPolymorphicAs extends ElementType> = {
    /**
     * Pass an HTML tag or custom component to this prop to merge the original component props with the supplied element/component props and change the DOM node.
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
    /**
     * The React ref for the polymorphic component.
     */
    ref?: PolymorphicRef<TPolymorphicAs>;
};

export type PolymorphicRef<TPolymorphicAs extends ElementType> =
    ComponentPropsWithRef<TPolymorphicAs>["ref"];

// Enum of all HTML element types
export type ElementTypeArg =
    | HTMLElementTagNameMap[keyof HTMLElementTagNameMap]
    | undefined;
