import clsx from "clsx";
import { forwardRef } from "react";

import { Box } from "../../box";
import { SlotWrapper } from "../../slot_wrapper";
import * as styles from "./styles.css";

import type { ColorOverlay } from "../../../styles/color_palette.css";
import type { ElementSizeEnum } from "../../../styles/common/element_size.css";
import type { BoxProps } from "../../box";
import type { ReactNode, Ref } from "react";

export type SelectItemProps = BoxProps & {
    /**
     * An optional color overlay to apply to the item.
     */
    colorOverlay: ColorOverlay | undefined;

    /**
     * Whether the item is highlighted.
     */
    isHighlighted: boolean | undefined;

    /**
     * Whether the parent component allows multiple selection or not.
     */
    isMulti: boolean | undefined;

    /**
     * Whether the item is selected.
     */
    isSelected?: boolean;

    /**
     * The label to display for the item.
     */
    label: string;

    /**
     * Consistent size option shared across multiple components.
     */
    size?: ElementSizeEnum;

    /**
     * React node(s) rendered on the left-hand side.
     */
    slotLeft?: [ReactNode?, ReactNode?, ReactNode?];

    /**
     * The value of the item.
     */
    value: string;
};

export const SelectItem = forwardRef(
    (
        {
            as = "li",
            colorOverlay,
            isHighlighted,
            isMulti,
            isSelected,
            label,
            size,
            slotLeft,
            ...rest
        }: SelectItemProps,
        ref: Ref<HTMLDivElement>
    ) => (
        <SlotWrapper
            as={as}
            className={clsx(
                styles.getDropdownItemStyles({
                    colorOverlay,
                    size,
                }),
                {
                    [styles.isHighlighted]: isHighlighted,
                }
            )}
            id={label}
            size={size}
            slotLeft={slotLeft}
            {...rest}
            ref={ref}
        >
            <Box flexShrink="0">{label}</Box>
            {isMulti && (
                <Box
                    as="input"
                    checked={isSelected}
                    marginLeft="auto"
                    readOnly
                    tabIndex={-1}
                    type="checkbox"
                />
            )}
        </SlotWrapper>
    )
);
