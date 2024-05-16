import type { ReactNode } from "react";

import clsx from "clsx";

import "./styles.css";

/**
 * Pill component
 */
export function Pill({
    children,
    className,
    color,
    id,
}: {
    children?: ReactNode;
    className?: string;
    color?: "amber" | "blue" | "green" | "red";
    id?: string;
}) {
    return (
        <div
            className={clsx(className, "pill", color)}
            id={id}
        >
            {children}
        </div>
    );
}
