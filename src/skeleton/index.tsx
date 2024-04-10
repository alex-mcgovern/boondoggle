import clsx from "clsx";

import type { BoxProps } from "../box";

import { Box } from "../box";
import { loadingStyles } from "./styles.css";

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
export function Skeleton({
    borderRadius = "sm",
    className,
    height = "space_6",
    width = "100%",
    ...rest
}: BoxProps) {
    return (
        <Box
            borderRadius={borderRadius}
            className={clsx(className, loadingStyles)}
            height={height}
            width={width}
            {...rest}
        />
    );
}
