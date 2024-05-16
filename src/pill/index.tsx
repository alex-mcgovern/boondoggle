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
    icon,
    id,
}: {
    children?: ReactNode;
    className?: string;
    color?: "amber" | "blue" | "green" | "red";
    icon?: ReactNode;
    id?: string;
}) {
    return (
        <div
            className={clsx(className, "pill", color)}
            id={id}
        >
            {icon ? <div className="pill-icon">{icon}</div> : null}
            {children}
        </div>
    );
}
