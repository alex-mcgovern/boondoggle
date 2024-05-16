import type { ReactNode } from "react";
import type { Color } from "react-aria-components";

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
