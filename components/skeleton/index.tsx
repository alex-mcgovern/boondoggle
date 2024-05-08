import clsx from "clsx";

import type { BoxProps } from "../box";

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
 * import { Skeleton, type SkeletonProps } from "boondoggle/skeleton"
 * ```
 */
export function Skeleton({ className, ...rest }: BoxProps) {
    return (
        <div
            className={clsx(className, "skeleton")}
            {...rest}
        />
    );
}
