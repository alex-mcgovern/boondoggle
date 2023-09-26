import { isValidElement } from "react";

import { addonChildrenStyle, getAddonTabStyle, getAddonWrapperStyle } from "./styles.css";

import type { WithSize } from "../../common-types";
import type { ReactNode } from "react";

type AddonTabProps = WithSize & {
    children: ReactNode;
    side: "right" | "left";
};

export function AddonTab({ children, side, size }: AddonTabProps) {
    if (isValidElement(children)) {
        return <div className={getAddonTabStyle({ hasBorder: false, side, size })}>{children}</div>;
    }
    return (
        <div className={getAddonTabStyle({ hasBorder: true, paddingSize: size, side, size })}>
            {children}
        </div>
    );
}

export type WithOptionalFieldAddons = {
    /**
     * Addon to be rendered on the left side of the field.
     */
    addonLeft?: ReactNode;
    /**
     * Addon to be rendered on the right side of the field.
     */
    addonRight?: ReactNode;
};

type FieldAddonWrapperProps = WithOptionalFieldAddons &
    WithSize & {
        /**
         * The children to be rendered inside the wrapper.
         */
        children: ReactNode;
    };

/**
 * Wraps the children with optional addons, left & right.
 */
export function FieldAddonWrapper({
    addonLeft,
    addonRight,
    children,
    size,
}: FieldAddonWrapperProps) {
    return (
        <div
            className={getAddonWrapperStyle({
                hasAddonLeft: !!addonLeft,
                hasAddonRight: !!addonRight,
            })}
        >
            {addonLeft && (
                <AddonTab
                    side="left"
                    size={size}
                >
                    {addonLeft}
                </AddonTab>
            )}

            <div className={addonChildrenStyle}>{children}</div>

            {addonRight && (
                <AddonTab
                    side="right"
                    size={size}
                >
                    {addonRight}
                </AddonTab>
            )}
        </div>
    );
}
