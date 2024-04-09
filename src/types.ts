import type { ReactNode } from "react";
import type * as React from "react";

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
