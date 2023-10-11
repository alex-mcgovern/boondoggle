/**
 * Approach adapted from a LogRocket blog by Ohans Emmanuel
 * https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
 */
import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef, useMemo } from "react";

import { exhaustiveSwitchGuard } from "../../lib/exhaustive_switch_guard";
import { variantColorOverlay } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Loader } from "../loader";
import { SlotWrapper } from "../slot_wrapper";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip_comp";
import { getButtonStyles } from "./styles.css";

import type {
    PolymorphicComponentPropWithRef,
    PolymorphicRef,
    WithColorOverlay,
    WithSlots,
    WithStateDisabled,
} from "../../common-types";
import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { Alignment, Appearance } from "./styles.css";
import type { Placement } from "@floating-ui/react";
import type {
    ComponentProps,
    ElementType,
    ReactElement,
    ReactNode,
} from "react";

/**
 * Removes square size
 */
function stripSquareSizes(
    size?: "square_md" | "square_sm" | "square_xs" | ElementSizeEnum
): ElementSizeEnum {
    switch (size) {
        case "lg":
        case "square_md": {
            return "lg";
        }

        case undefined:
        case "md":
        case "square_sm": {
            return "md";
        }
        case "sm":
        case "square_xs": {
            return "sm";
        }

        default:
            return exhaustiveSwitchGuard(size);
    }
}

const getLoadingSlotSide = ({
    slotLeft,
    slotRight,
}: WithSlots): "right" | "left" => {
    if (slotRight) {
        return "right";
    }
    if (slotLeft) {
        return "left";
    }
    return "right";
};

type BaseButtonProps<TPolymorphicAs extends ElementType> = SprinklesArgs &
    PolymorphicComponentPropWithRef<
        TPolymorphicAs,
        WithStateDisabled &
            WithSlots & {
                /**
                 * Forces the button's active state
                 */
                active?: boolean;

                /**
                 * Controls the horizontal alignment of the button's content.
                 */
                alignment?: Alignment;

                /**
                 * Controls the button's appearance.
                 */
                appearance?: Appearance;

                /**
                 * The React node shown in the button.
                 */
                children?: ReactNode;

                /**
                 * Whether to show a loader on first render
                 */
                isLoading?: boolean;

                /**
                 * The title for the button, shown in the UI.
                 */
                name: string;

                /**
                 * The size of the button.
                 */
                size?:
                    | "square_md"
                    | "square_sm"
                    | "square_xs"
                    | ElementSizeEnum;

                /**
                 * The tooltip to show on hover
                 */
                strTooltip?: string;

                /**
                 * The placement of the tooltip relative to the trigger.
                 */
                tooltipPlacement?: Placement;

                /**
                 * The HTML button type, defaults to `button`.
                 */
                type?: "button" | "submit" | "reset";
            } & WithColorOverlay
    >;

type ButtonComponent = <TPolymorphicAs extends ElementType = "button">(
    props: BaseButtonProps<TPolymorphicAs>
) => ReactElement | null;

export type ButtonProps = ComponentProps<typeof Button>;

export const Button: ButtonComponent = forwardRef(
    <TPolymorphicAs extends ElementType = "span">(
        {
            active,
            alignment = "center",
            appearance = "primary",
            as,
            children,
            className: userClassName,
            colorOverlay,
            disabled,
            isLoading,
            size = "md",
            slotLeft,
            slotProps,
            slotRight,
            strTooltip,
            tooltipPlacement = "top",
            type = "button",
            ...rest
        }: BaseButtonProps<TPolymorphicAs>,
        ref?: PolymorphicRef<TPolymorphicAs>
    ) => {
        const { atomProps, otherProps } = extractAtomsFromProps(
            rest,
            getSprinkles
        );

        const Component = as || "button";

        const loaderSide = useMemo(() => {
            return getLoadingSlotSide({ slotLeft, slotRight });
        }, [slotLeft, slotRight]);

        if (strTooltip && tooltipPlacement) {
            return (
                <Tooltip placement="top">
                    <TooltipTrigger asChild>
                        <Component
                            {...{
                                "aria-disabled": disabled,
                                className: clsx(
                                    getButtonStyles({
                                        alignment,
                                        appearance,
                                        size,
                                    }),
                                    getSprinkles(atomProps),
                                    userClassName,
                                    colorOverlay
                                        ? variantColorOverlay[colorOverlay]
                                        : undefined
                                ),
                                "data-active": active,
                                disabled: disabled || isLoading,
                                ref,
                                type,
                                ...otherProps,
                            }}
                        >
                            <SlotWrapper
                                color="inherit"
                                size={stripSquareSizes(size)}
                                slotLeft={
                                    isLoading && loaderSide === "left"
                                        ? [<Loader />]
                                        : slotLeft
                                }
                                slotProps={slotProps}
                                slotRight={
                                    isLoading && loaderSide === "right"
                                        ? [<Loader />]
                                        : slotRight
                                }
                            >
                                {children}
                            </SlotWrapper>
                        </Component>
                    </TooltipTrigger>
                    <TooltipContent>{strTooltip}</TooltipContent>
                </Tooltip>
            );
        }

        return (
            <Component
                {...{
                    "aria-disabled": disabled,
                    className: clsx(
                        getButtonStyles({ alignment, appearance, size }),
                        getSprinkles(atomProps),
                        userClassName,
                        colorOverlay
                            ? variantColorOverlay[colorOverlay]
                            : undefined
                    ),
                    "data-active": active,
                    disabled: disabled || isLoading,
                    ref,
                    type,
                    ...otherProps,
                }}
            >
                <SlotWrapper
                    color="inherit"
                    size={stripSquareSizes(size)}
                    slotLeft={
                        isLoading && loaderSide === "left"
                            ? [<Loader />]
                            : slotLeft
                    }
                    slotProps={slotProps}
                    slotRight={
                        isLoading && loaderSide === "right"
                            ? [<Loader />]
                            : slotRight
                    }
                >
                    {children}
                </SlotWrapper>
            </Component>
        );
    }
);
