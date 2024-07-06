import type { GroupProps as AriaGroupProps } from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { Group as AriaGroup } from "react-aria-components";

import "./styles.css";

/**
 * A group represents a set of related UI controls, and supports interactive states for styling. [Built with React Aria Group](https://react-spectrum.adobe.com/react-aria/Group.html)
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
 * import { Group } from "boondoggle";
 * ```
 */
export const Group = forwardRef<HTMLDivElement, AriaGroupProps>(
    (
        {
            size,
            ...props
        }: {
            /**
             * The size of the group.
             */
            size?: "lg" | "md" | "sm";
        } & AriaGroupProps,
        ref,
    ) => {
        return (
            <AriaGroup
                {...props}
                className={clsx(props.className, "group", size)}
                ref={ref}
            />
        );
    },
);
