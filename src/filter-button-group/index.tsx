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

/**
 * A group represents a set of related UI controls, and supports interactive states for styling.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/Group.html)
 */

export type FilterButtonGroupProps = RACGroupProps & {
    isFilterApplied: boolean;
};

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

export type FilterButtonGroupLabelProps = { children: ReactNode };

export function FilterButtonGroupLabel({
    children,
}: FilterButtonGroupLabelProps) {
    return <div className={filterButtonGroupLabelCSS}>{children}</div>;
}

export type RemoveFilterButtonProps = Omit<RACButtonProps, "children">;

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
