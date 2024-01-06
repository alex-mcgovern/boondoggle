import type { ReactNode, Ref } from "react";

import { Children, forwardRef } from "react";

import type { BoxProps } from "../box";
import type { WithSlots } from "../types";

import { Box } from "../box";
import { slotCSS } from "./styles.css";

export type SlotWrapperProps = BoxProps &
    WithSlots & {
        children?: ReactNode;

        className?: string;

        slotProps?: BoxProps;
    };

export const SlotWrapper = forwardRef(
    (
        {
            children,
            className: userClassName,
            gap = "space_2",
            slotLeft,
            slotProps,
            slotRight,
            ...rest
        }: SlotWrapperProps,
        ref: Ref<HTMLDivElement>,
    ) => {
        return (
            <Box
                alignItems="center"
                className={userClassName}
                display="flex"
                gap={gap}
                ref={ref}
                {...rest}
            >
                {slotLeft && (
                    <Box
                        {...slotProps}
                        className={slotCSS}
                        color="inherit"
                        flexShrink="0"
                    >
                        {Children.map(slotLeft, (child) => {
                            return child;
                        })}
                    </Box>
                )}

                {children}

                {slotRight && (
                    <Box
                        {...slotProps}
                        className={slotCSS}
                        color="inherit"
                        flexShrink="0"
                    >
                        {Children.map(slotRight, (child) => {
                            return child;
                        })}
                    </Box>
                )}
            </Box>
        );
    },
);
