import { Children, forwardRef } from "react";

import { Box } from "../box";
import { getSlotStyles } from "./styles.css";

import type { WithSlots } from "../../common-types";
import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { BoxProps } from "../box";
import type { ReactNode, Ref } from "react";

export type SlotWrapperProps = BoxProps &
    WithSlots & {
        children?: ReactNode;

        className?: string;

        size: ElementSizeEnum | undefined;

        slotProps?: BoxProps;
    };

export const SlotWrapper = forwardRef(
    (
        {
            children,
            className: userClassName,
            size = "md",
            slotLeft,
            slotProps,
            slotRight,
            ...rest
        }: SlotWrapperProps,
        ref: Ref<HTMLDivElement>
    ) => {
        return (
            <Box
                alignItems="center"
                className={userClassName}
                display="flex"
                gap="space_2"
                ref={ref}
                {...rest}
            >
                {slotLeft && (
                    <Box
                        {...slotProps}
                        className={getSlotStyles({ size })}
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
                        className={getSlotStyles({ size })}
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
    }
);
