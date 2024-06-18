import type { ReactNode } from "react";

import clsx from "clsx";

import type { Color } from "../types";

import "./styles.css";

/**
 * Pill component
 */
export function Pill({
    children,
    className,
    color,
    id,
    style,
}: {
    children?: ReactNode;
    className?: string;
    color?: Color;
    id?: string;
    style?: React.CSSProperties;
}) {
    return (
        <div
            className={clsx(className, "pill", color)}
            id={id}
            style={style}
        >
            {children}
        </div>
    );
}
