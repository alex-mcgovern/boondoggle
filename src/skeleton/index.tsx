import clsx from "clsx";

import "./styles.css";

/**
 * An animated `Skeleton` component, for use as a loading placeholder.
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * ```ts
 * import { Skeleton } from "boondoggle";
 * ```
 */
export function Skeleton({
    className,
}: {
    /**
     * CSS class name.
     */
    className?: string;
}) {
    return <div className={clsx(className, "skeleton")} />;
}
