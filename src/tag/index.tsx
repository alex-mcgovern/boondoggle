import type {
    ComponentPropsWithoutRef,
    ElementType,
    ReactElement,
    ReactNode,
} from "react";

import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import type { Sprinkles } from "../sprinkles/index.css";
import type {
    PolymorphicComponentPropWithRef,
    PolymorphicRef,
    WithColorOverlay,
    WithSize,
    WithSlots,
    WithStateDisabled,
} from "../types";

import { SlotWrapper } from "../_DEPRECATED_slot-wrapper";
import { a11yFocus } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";
import { getTagStyle } from "./styles.css";

type BaseTagProps<TPolymorphicAs extends ElementType> = Sprinkles &
    PolymorphicComponentPropWithRef<
        TPolymorphicAs,
        WithColorOverlay &
            WithSize &
            WithSlots &
            WithStateDisabled & {
                /**
                 * The react node rendered in the tag.
                 */
                children?: ReactNode;

                /**
                 * Used as the html ID.
                 */
                id?: string;

                /**
                 * Callback on click.
                 */
                onClick?(...args: unknown[]): unknown;
            }
    >;

type TagComponent = <TPolymorphicAs extends ElementType = "div">(
    props: BaseTagProps<TPolymorphicAs>,
) => ReactElement | null;

export type TagProps = ComponentPropsWithoutRef<typeof Tag>;

export const Tag: TagComponent = forwardRef(
    <TPolymorphicAs extends ElementType = "span">(
        {
            as,
            children,
            className: userClassName,
            colorOverlay,
            id,
            size,
            slotLeft,
            slotRight,
            ...rest
        }: BaseTagProps<TPolymorphicAs>,
        ref?: PolymorphicRef<TPolymorphicAs>,
    ) => {
        /**
         * Separate `GetSprinklesArgs` from other spread props, so we don't break Vanilla Extract
         */
        const { atomProps, otherProps } = extractAtomsFromProps(
            rest,
            sprinkles,
        );

        const Component = as || "div";

        return (
            <Component
                {...{
                    className: clsx(
                        userClassName,
                        getTagStyle({ colorOverlay }),
                        sprinkles(atomProps),
                        a11yFocus,
                    ),
                    id,
                    ref,
                    ...otherProps,
                }}
            >
                <SlotWrapper
                    color="inherit"
                    gap="space_1"
                    size={size}
                    slotLeft={slotLeft}
                    slotRight={slotRight}
                >
                    {children}
                </SlotWrapper>
            </Component>
        );
    },
);
