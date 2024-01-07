import type {
    ComponentPropsWithRef,
    ComponentPropsWithoutRef,
    ElementType,
    PropsWithChildren,
    ReactNode,
} from "react";
import type * as React from "react";
import type { RegisterOptions } from "react-hook-form";

import type { BoxProps } from "./box";
import type { ColorOverlay, ElementSizeEnum } from "./index.css";
import type { Label } from "./label";

declare module "react" {
    function forwardRef<T, P = Record<string, unknown>>(
        render: (props: P, ref: React.Ref<T>) => React.ReactElement | null,
    ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

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
     * Unique name for the element.
     * @important Should be a *snake_case* string.
     * @important This will be used as the HTML element ID.
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

/**
 * Accessible label for a field.
 * @note All fields should have a label, if the label is not visible, use the `hidden` prop.
 */
export type V2Label =
    | {
          isHidden?: boolean;
          props?: Omit<
              ComponentPropsWithoutRef<typeof Label>,
              "children" | "htmlFor"
          >;
          text: string;
          tooltip?: string;
      }
    | string;

export type WithSize = {
    /**
     * Consistent size option shared across multiple components.
     */
    size?: ElementSizeEnum;
};

export type WithSlots = {
    /**
     * React node(s) rendered on the left-hand side.
     */
    slotLeft?: ReactNode;

    /**
     * React node(s) rendered on the right-hand side.
     */
    slotRight?: ReactNode;
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
    errorMessage?: ReactNode;

    /**
     * Whether the value of the field fails validation.
     */
    invalid?: boolean;
};

type PolyMorphicAsProp<TPolymorphicAs extends ElementType> = {
    /**
     * Pass an HTML tag or custom component to this prop to merge the original component props with the supplied element/component props and change the DOM node.
     */
    as?: TPolymorphicAs;
};

type PropsToOmit<
    TPolymorphicAs extends ElementType,
    P,
> = keyof (PolyMorphicAsProp<TPolymorphicAs> & P);

type PolymorphicComponentProp<
    TPolymorphicAs extends ElementType,
    Props = Record<string, unknown>,
> = PropsWithChildren<Props & PolyMorphicAsProp<TPolymorphicAs>> &
    Omit<
        ComponentPropsWithoutRef<TPolymorphicAs>,
        PropsToOmit<TPolymorphicAs, Props>
    >;

export type PolymorphicComponentPropWithRef<
    TPolymorphicAs extends ElementType,
    Props = Record<string, unknown>,
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
