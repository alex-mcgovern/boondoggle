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
