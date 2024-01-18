import type {
    ButtonProps as RACButtonProps,
    GroupProps as RACGroupProps,
} from "react-aria-components";

import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
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

/** -----------------------------------------------------------------------------
 * FilterButtonGroup
 * ------------------------------------------------------------------------------- */

/**
 * A group represents a set of related UI controls, and supports interactive states for styling.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/Group.html)
 */

export type FilterButtonGroupProps = RACGroupProps;

export const FilterButtonGroup = (props: FilterButtonGroupProps) => {
    return (
        <RACGroup
            {...props}
            className={(renderProps) =>
                clsx(props.className, filterButtonGroupCSS(renderProps))
            }
        />
    );
};

/** -----------------------------------------------------------------------------
 * FilterButtonGroupLabel
 * ------------------------------------------------------------------------------- */

export type FilterButtonGroupLabelProps = { title: string };

export const FilterButtonGroupLabel = ({
    title,
}: FilterButtonGroupLabelProps) => {
    return <div className={filterButtonGroupLabelCSS}>{title}</div>;
};

/** -----------------------------------------------------------------------------
 * RemoveFilterButton
 * ------------------------------------------------------------------------------- */

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
            <Icon icon={faTimes} />
        </RACButton>
    );
});

/** -----------------------------------------------------------------------------
 * FilterButton
 * ------------------------------------------------------------------------------- */

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
