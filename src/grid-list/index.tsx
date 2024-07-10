import type {
    GridListItemProps as AriaGridListItemProps,
    GridListProps as AriaGridListProps,
} from "react-aria-components";

import clsx from "clsx";
import {
    GridList as AriaGridList,
    GridListItem as AriaGridListItem,
} from "react-aria-components";

import "./styles.css";

function GridListRoot<T extends object = object>(props: AriaGridListProps<T>) {
    return (
        <AriaGridList<T>
            {...props}
            className={clsx(props.className, "grid-list")}
        />
    );
}

function GridListItem<T extends object = object>({
    borderless,
    ...props
}: {
    /**
     * Whether the item should be displayed as a borderless card.
     */
    borderless?: boolean;
} & AriaGridListItemProps<T>) {
    return (
        <AriaGridListItem
            {...props}
            className={clsx(props.className, "grid-list-item", {
                borderless: borderless,
            })}
        />
    );
}

/**
 * A grid list displays a list of interactive items,
 * with support for keyboard navigation, single or
 * multiple selection, and row actions.
 */
export const GridList = {
    Item: GridListItem,
    Root: GridListRoot,
};
