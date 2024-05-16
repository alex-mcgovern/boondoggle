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
    icon,
    id,
}: {
    children?: ReactNode;
    className?: string;
    color?: Color;
    icon?: ReactNode;
    id?: string;
}) {
    return (
        <div
            className={clsx(className, "pill", color)}
            id={id}
        >
            {icon ? <div className="pill-icon-container">{icon}</div> : null}
            {children}
        </div>
    );
}
