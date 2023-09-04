import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { Children, forwardRef } from "react";

import { arrayHasLength } from "../../lib/array_has_length";
import { Box } from "../box";
import {
    getSlotContainerStyles,
    getSlotInnerStyles,
    getSlotLeftOffsetStyles,
    getSlotRightOffsetStyles,
} from "./styles.css";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { BoxProps } from "../box";
import type { ReactNode, Ref } from "react";

type SlotWrapperProps = {
    /**
     * React node(s) rendered on the left-hand side.
     */
    slotLeft?: [ReactNode?, ReactNode?, ReactNode?];

    /**
     * React node(s) rendered on the right-hand side.
     */
    slotRight?: [ReactNode?, ReactNode?, ReactNode?];
} & {
    children?: ReactNode;

    className?: string;

    size: ElementSizeEnum;
} & BoxProps;

export const SlotWrapperInset = forwardRef(
    (
        {
            children,
            className: userClassName,
            size,
            slotLeft,
            slotRight,
            ...rest
        }: SlotWrapperProps,
        ref: Ref<HTMLDivElement>
    ) => {
        return (
            <Box
                className={userClassName}
                position="relative"
                ref={ref}
                {...rest}
            >
                {arrayHasLength(slotLeft) && (
                    <Box
                        className={getSlotContainerStyles({
                            numSlots: slotLeft?.length || 1,
                            size,
                        })}
                        left="0"
                    >
                        {Children.map(slotLeft, (child) => {
                            return <div className={getSlotInnerStyles({ size })}>{child}</div>;
                        })}
                    </Box>
                )}

                <Slot
                    className={clsx({
                        [getSlotLeftOffsetStyles({
                            numSlots: slotLeft?.length || 1,
                            size,
                        })]: !!slotLeft,
                        [getSlotRightOffsetStyles({
                            numSlots: slotRight?.length || 1,
                            size,
                        })]: !!slotRight,
                    })}
                >
                    {children}
                </Slot>

                {arrayHasLength(slotRight) && (
                    <Box
                        className={getSlotContainerStyles({
                            numSlots: slotRight?.length || 1,
                            size,
                        })}
                        right="0"
                    >
                        {Children.map(slotRight, (child) => {
                            return <div className={getSlotInnerStyles({ size })}>{child}</div>;
                        })}
                    </Box>
                )}
            </Box>
        );
    }
);
