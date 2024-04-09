import type { ReactNode } from "react";

import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";

import type { ColorOverlay } from "../index.css";

import { css } from "../css/index.css";
import { pillCSS } from "./styles.css";

export function Pill({
    children,
    className: userClassName,
    colorOverlay,
    id,
    slotLeft,
    slotRight,
    ...rest
}: {
    children?: ReactNode;
    className?: string;
    /**
     * Color overlay, used to convey semantic meaning.
     * -   `amber`: To indicate caution, or warning actions
     * -   `blue`: To indicate information, or neutral actions
     * -   `green`: To indicate success, or confirmatory actions
     * -   `grey`: When a subtle, neutral color is needed
     * -   `red`: To warn of potentially destructive actions
     * -   `default`: To reset the color overlay if inherited from a parent
     */
    colorOverlay?: ColorOverlay;
    id?: string;
    size?: "lg" | "md" | "sm";
    slotLeft?: ReactNode;
    slotRight?: ReactNode;
}) {
    const { atomProps, otherProps } = extractAtomsFromProps(rest, css);

    return (
        <div
            {...{
                className: clsx(
                    userClassName,
                    pillCSS({ colorOverlay }),
                    css({
                        ...atomProps,
                        paddingLeft: slotLeft ? "space_1" : "space_2",
                        paddingRight: slotRight ? "space_1" : "space_2",
                    }),
                ),
                id,
                ...otherProps,
            }}
        >
            {children}
        </div>
    );
}
