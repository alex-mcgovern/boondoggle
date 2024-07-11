import type { HTMLProps } from "react";

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
export function Skeleton(props: HTMLProps<HTMLDivElement>) {
    return (
        <div
            {...props}
            className={clsx(props.className, "skeleton")}
        />
    );
}
