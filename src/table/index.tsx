import type {
    CellProps as AriaCellProps,
    ColumnProps as AriaColumnProps,
    ResizableTableContainerProps as AriaResizableTableContainerProps,
    RowProps as AriaRowProps,
    SortDirection as AriaSortDirection,
    TableBodyProps as AriaTableBodyProps,
    TableHeaderProps as AriaTableHeaderProps,
    TableProps as AriaTableProps,
} from "react-aria-components";

import { faSort as faSortUp } from "@fortawesome/pro-duotone-svg-icons/faSort";
import { faGripDots } from "@fortawesome/pro-solid-svg-icons/faGripDots";
import { faSort } from "@fortawesome/pro-solid-svg-icons/faSort";
import { clsx } from "clsx";
import { forwardRef } from "react";
import {
    Cell as AriaCell,
    Collection as AriaCollection,
    ResizableTableContainer as AriaResizableTableContainer,
    Row as AriaRow,
    Table as AriaTable,
    TableBody as AriaTableBody,
    TableHeader as AriaTableHeader,
    useTableOptions,
} from "react-aria-components";
import { Column as AriaColumn } from "react-aria-components";

import { Button } from "../button";
import { Checkbox } from "../checkbox";
import { Icon } from "../icon";
import "./styles.css";

function SortIcon({ direction }: { direction: AriaSortDirection | undefined }) {
    switch (direction) {
        case "ascending": {
            return (
                <Icon
                    className="sort-icon"
                    icon={faSortUp}
                />
            );
        }
        case "descending": {
            return (
                <Icon
                    className="sort-icon"
                    icon={faSortUp}
                    style={{ transform: "rotate(180deg)" }}
                />
            );
        }

        default: {
            return (
                <Icon
                    className="sort-icon"
                    icon={faSort}
                    style={{ opacity: 0.2 }}
                />
            );
        }
    }
}

/**
 * A `Column` component, for use with a `TableHeader` component. [Built with React Aria Column component](https://react-spectrum.adobe.com/react-aria/Table.html#column)
 */
function Column({
    center,
    right,
    ...props
}: {
    center?: boolean;
    right?: boolean;
    sticky?: boolean;
} & AriaColumnProps) {
    return (
        <AriaColumn
            {...props}
            className={clsx(props.className, "column", {
                center: center,
                right: right,
            })}
        >
            {(renderProps) => {
                return (
                    <>
                        {typeof props.children === "function"
                            ? props.children(renderProps)
                            : props.children}

                        {renderProps.allowsSorting && (
                            <span
                                aria-hidden="true"
                                className="sort-indicator"
                            >
                                <SortIcon
                                    direction={renderProps.sortDirection}
                                />
                            </span>
                        )}
                    </>
                );
            }}
        </AriaColumn>
    );
}

/**
 * A `TableHeader` component, for use with a `Table` component. [Built with React Aria TableHeader component](https://react-spectrum.adobe.com/react-aria/Table.html#tableheader)
 */
function TableHeader<T extends object>({
    sticky,
    ...props
}: { sticky?: boolean } & AriaTableHeaderProps<T>) {
    const { allowsDragging, selectionBehavior, selectionMode } =
        useTableOptions();

    return (
        <AriaTableHeader
            {...props}
            className={clsx(props.className, "table-header", { sticky })}
        >
            {allowsDragging && <Column />}
            {selectionBehavior === "toggle" && (
                <Column
                    minWidth={36}
                    width={36}
                >
                    {selectionMode === "multiple" && (
                        <Checkbox slot="selection" />
                    )}
                </Column>
            )}
            <AriaCollection items={props.columns}>
                {props.children}
            </AriaCollection>
        </AriaTableHeader>
    );
}

/**
 * A `Cell` component, for use with a `Row` component. [Built with React Aria Cell component](https://react-spectrum.adobe.com/react-aria/Table.html#cell)
 */
function Cell(props: { center?: boolean; right?: boolean } & AriaCellProps) {
    return (
        <AriaCell
            {...props}
            className={clsx(props.className, "cell", {
                center: props.center,
                right: props.right,
            })}
        />
    );
}

/**
 * A `Row` component, for use with a `TableBody` component. [Built with React Aria Row component](https://react-spectrum.adobe.com/react-aria/Table.html#row)
 */
function Row<T extends object>(props: AriaRowProps<T>) {
    const { allowsDragging, selectionBehavior } = useTableOptions();

    return (
        <AriaRow
            {...props}
            className={clsx(props.className, "row")}
        >
            {allowsDragging && (
                <Cell>
                    <Button
                        appearance="ghost"
                        size="sm"
                        slot="drag"
                        square
                    >
                        <Icon icon={faGripDots} />
                    </Button>
                </Cell>
            )}
            {selectionBehavior === "toggle" && (
                <Cell>
                    <Checkbox slot="selection" />
                </Cell>
            )}
            <AriaCollection items={props.columns}>
                {props.children}
            </AriaCollection>
        </AriaRow>
    );
}

/**
 * A `TableBody` component, for use with a `Table` component. [Built with React Aria TableBody component](https://react-spectrum.adobe.com/react-aria/Table.html#tablebody)
 */
const TableBody = forwardRef<
    HTMLTableSectionElement,
    AriaTableBodyProps<object>
>((props, ref) => {
    return (
        <AriaTableBody
            {...props}
            className={clsx(props.className, "table-body")}
            ref={ref}
        >
            {props.children}
        </AriaTableBody>
    );
});

/**
 * A table displays data in rows and columns and enables a user to navigate its contents via directional navigation keys,
 * and optionally supports row selection and sorting. [Built with React Aria Table component](https://react-spectrum.adobe.com/react-aria/Table.html)
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
 * import {
 *     Cell,
 *     Column,
 *     ResizableTableContainer,
 *     Row,
 *     Table,
 *     TableBody,
 *     TableHeader,
 * } from "booondoggle/table"
 * ```
 */
function TableRoot({
    compact,
    ...props
}: { compact?: boolean } & AriaTableProps) {
    return (
        <AriaTable
            {...props}
            className={clsx(props.className, "table", { compact })}
        >
            {props.children}
        </AriaTable>
    );
}

/**
 * A `ResizableTableContainer` component, for use with a `Table` component. [Built with React Aria ResizableTableContainer component](https://react-spectrum.adobe.com/react-aria/Table.html#resizabletablecontainer)
 */
function ResizableTableContainer({
    ...props
}: AriaResizableTableContainerProps) {
    return (
        <AriaResizableTableContainer
            {...props}
            className={clsx(props.className, "resizable-table-container")}
        />
    );
}

/**
 * A table displays data in rows and columns and enables a user to navigate its contents via directional navigation keys,
 */
export const Table = {
    Body: TableBody,
    Cell,
    Column,
    Header: TableHeader,
    ResizableContainer: ResizableTableContainer,
    Root: TableRoot,
    Row,
};
