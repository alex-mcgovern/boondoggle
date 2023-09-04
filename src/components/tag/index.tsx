import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import { a11yFocus } from "../../styles/common/a11y.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { SlotWrapper } from "../slot_wrapper";
import * as styles from "./styles.css";

import type {
    PolymorphicComponentPropWithRef,
    PolymorphicRef,
    WithColorOverlay,
 WithSize, WithStateDisabled } from "../../common-types";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { ComponentPropsWithoutRef, ElementType, ReactElement, ReactNode } from "react";

type BaseTagProps<TPolymorphicAs extends ElementType> = SprinklesArgs &
    PolymorphicComponentPropWithRef<
        TPolymorphicAs,
        WithColorOverlay &
            WithSize & {
                /**
                 * React node(s) rendered on the left-hand side.
                 */
                slotLeft?: [ReactNode?, ReactNode?, ReactNode?];

                /**
                 * React node(s) rendered on the right-hand side.
                 */
                slotRight?: [ReactNode?, ReactNode?, ReactNode?];
            } & WithStateDisabled & {
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
    props: BaseTagProps<TPolymorphicAs>
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
        ref?: PolymorphicRef<TPolymorphicAs>
    ) => {
        /**
         * Separate `GetSprinklesArgs` from other spread props, so we don't break Vanilla Extract
         */
        const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

        const Component = as || "div";

        return (
            <Component
                {...{
                    className: clsx(
                        userClassName,
                        styles.getTagStyle({ colorOverlay, size }),
                        getSprinkles(atomProps),
                        a11yFocus
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
    }
);
