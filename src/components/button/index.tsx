/**
 * Approach adapted from a LogRocket blog by Ohans Emmanuel
 * https://blog.logrocket.com/build-strongly-typed-polymorphic-components-react-typescript/
 */
import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef, useCallback, useMemo, useState } from "react";

import { variantColorOverlay } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Loader } from "../loader";
import { SlotWrapper } from "../slot_wrapper";
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
import type { ComponentProps, ElementType, ReactElement, ReactNode } from "react";

const getLoadingSlotSide = ({ slotLeft, slotRight }: WithSlots): "right" | "left" => {
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
                size?: "square_md" | "square_sm" | "square_xs" | ElementSizeEnum;

                /**
                 * The HTML button type, defaults to `button`.
                 */
                type?: "button" | "submit" | "reset";

                /**
                 * Whether to show a loader on click
                 */
                withLoadingState?: boolean;
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
            isLoading: initIsLoading,
            size = "md",
            slotLeft,
            slotProps,
            slotRight,
            type = "button",
            withLoadingState,
            ...rest
        }: BaseButtonProps<TPolymorphicAs>,
        ref?: PolymorphicRef<TPolymorphicAs>
    ) => {
        const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

        const Component = as || "button";

        const [isLoading, setIsLoading] = useState(initIsLoading);

        const revertLoadingState = useCallback(() => {
            setTimeout(() => {
                setIsLoading(false);
            }, 3000);
        }, []);

        const handleClickWithLoadingState = useCallback(() => {
            setIsLoading(true);

            rest.onClick?.();

            revertLoadingState();
        }, [rest, revertLoadingState]);

        const loaderSide = useMemo(() => {
            return getLoadingSlotSide({ slotLeft, slotRight });
        }, [slotLeft, slotRight]);

        return (
            <Component
                {...{
                    "aria-disabled": disabled,
                    className: clsx(
                        getButtonStyles({ alignment, appearance, size }),
                        getSprinkles(atomProps),
                        userClassName,
                        colorOverlay ? variantColorOverlay[colorOverlay] : undefined
                    ),
                    "data-active": active,
                    disabled,
                    onClick: withLoadingState ? handleClickWithLoadingState : rest.onClick,
                    ref,
                    type,
                    ...otherProps,
                }}
            >
                <SlotWrapper
                    color="inherit"
                    size={size}
                    slotLeft={isLoading && loaderSide === "left" ? <Loader /> : slotLeft}
                    slotProps={slotProps}
                    slotRight={isLoading && loaderSide === "right" ? <Loader /> : slotRight}
                >
                    {children}
                </SlotWrapper>
            </Component>
        );
    }
);
