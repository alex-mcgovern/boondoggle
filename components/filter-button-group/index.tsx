import type { ReactNode } from "react";
import type {
    ButtonProps as RACButtonProps,
    GroupProps as RACGroupProps,
} from "react-aria-components";

import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons/faTimesCircle";
import clsx from "clsx";
import { forwardRef } from "react";
import { Button as RACButton, Group as RACGroup } from "react-aria-components";

import { Icon } from "../icon";
import {
    filterButtonCSS,
    filterButtonGroupCSS,
    filterButtonGroupLabelCSS,
    removeFilterButtonCSS,
} from "./styles.css";

export type FilterButtonGroupLabelProps = {
    /**
     * The content of the label.
     */
    children: ReactNode;
};

/**
 * A FilterButtonGroupLabel is a label that is intended to be used inside a `FilterButtonGroup` component.
 */
export function FilterButtonGroupLabel({
    children,
}: FilterButtonGroupLabelProps) {
    return <div className={filterButtonGroupLabelCSS}>{children}</div>;
}

export type RemoveFilterButtonProps = Omit<RACButtonProps, "children">;

/**
 * A RemoveFilterButton is a button that is intended to be used inside a `FilterButtonGroup` component, to remove an active filter.
 *
 * [Built with React Aria Button](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
export const RemoveFilterButton = forwardRef<
    HTMLButtonElement,
    FilterButtonProps
>((props, ref) => {
    return (
        <RACButton
            {...props}
            className={(renderProps) =>
                clsx(props.className, removeFilterButtonCSS(renderProps))
            }
            ref={ref}
        >
            <Icon icon={faTimesCircle} />
        </RACButton>
    );
});

export type FilterButtonProps = RACButtonProps;

/**
 * A FilterButton is a button that is intended to be used inside a `FilterButtonGroup` component. [Built with React Aria Button](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
export const FilterButton = forwardRef<HTMLButtonElement, FilterButtonProps>(
    (props, ref) => {
        return (
            <RACButton
                {...props}
                className={(renderProps) =>
                    clsx(props.className, filterButtonCSS(renderProps))
                }
                ref={ref}
            >
                {(renderProps) =>
                    typeof props.children === "function"
                        ? props.children(renderProps)
                        : props.children
                }
            </RACButton>
        );
    },
);

export type FilterButtonGroupProps = RACGroupProps & {
    /**
     * Whether a filter is applied.
     */
    isFilterApplied: boolean;
};

/**
 * A group represents a set of related UI controls, and supports interactive states for styling.
 *
 * A FilterButtonGroup is a group of buttons that are used to filter a list of items.
 *
 * [Built with React Aria Group](https://react-spectrum.adobe.com/react-aria/Group.html)
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
 * import { FilterButtonGroup, FilterButton, type FilterButtonGroupProps } from "boondoggle/filter-button-group"
 * ```
 */
export function FilterButtonGroup({
    isFilterApplied,
    ...props
}: FilterButtonGroupProps) {
    return (
        <RACGroup
            {...props}
            className={(renderProps) =>
                clsx(
                    props.className,
                    filterButtonGroupCSS({
                        ...renderProps,
                        isFilterApplied: isFilterApplied ? "true" : "false",
                    }),
                )
            }
        />
    );
}
