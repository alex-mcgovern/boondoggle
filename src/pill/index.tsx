import type { ReactNode } from "react";

import clsx from "clsx";

import "./styles.css";

/**
 * Pill component
 */
export function Pill({
    children,
    className: userClassName,
    id,
    ...rest
}: {
    children?: ReactNode;
    className?: string;
    id?: string;
    size?: "lg" | "md" | "sm";
}) {
    return (
        <div
            {...{
                className: clsx(userClassName, "pill"),
                id,
                ...rest,
            }}
        >
            {children}
        </div>
    );
}
