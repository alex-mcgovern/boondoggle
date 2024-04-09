import type { ForwardedRef } from "react";
import type {
    CellProps as RACCellProps,
    ColumnProps as RACColumnProps,
    ResizableTableContainerProps as RACResizableTableContainerProps,
    RowProps as RACRowProps,
    TableBodyProps as RACTableBodyProps,
    TableHeaderProps as RACTableHeaderProps,
    TableProps as RACTableProps,
} from "react-aria-components";

import { faSort as faSortUp } from "@fortawesome/pro-duotone-svg-icons/faSort";
import { faGripDots } from "@fortawesome/pro-solid-svg-icons/faGripDots";
import { clsx } from "clsx";
import { forwardRef } from "react";
import {
    Cell as RACCell,
    Collection as RACCollection,
    ResizableTableContainer as RACResizableTableContainer,
    Row as RACRow,
    Table as RACTable,
    TableBody as RACTableBody,
    TableHeader as RACTableHeader,
    useTableOptions,
} from "react-aria-components";
import { Column as RACColumn } from "react-aria-components";

import { Button } from "../button";
import { Checkbox } from "../checkbox";
import { Icon } from "../icon";
import {
    cellCSS,
    columnCSS,
    rowCSS,
    sortIconStyle,
    tableCSS,
    tableContainerCSS,
} from "./styles.css";

export type ColumnProps = RACColumnProps;

export const Column = forwardRef<HTMLTableCellElement, ColumnProps>(
    (props: ColumnProps, ref) => {
        return (
            <RACColumn
                {...props}
                className={({
                    allowsSorting,
                    isFocused,
                    isFocusVisible,
                    isHovered,
                    isResizing,
                }) =>
                    clsx(
                        props.className,
                        columnCSS({
                            allowsSorting,
                            isFocused,
                            isFocusVisible,
                            isHovered,
                            isResizing,
                        }),
                    )
                }
                ref={ref}
            >
                {(renderProps) => (
                    <>
                        {typeof props.children === "function"
                            ? props.children(renderProps)
                            : props.children}

                        {renderProps.allowsSorting && (
                            <span
                                aria-hidden="true"
                                className="sort-indicator"
                            >
                                {renderProps.sortDirection === "ascending" ? (
                                    <Icon
                                        className={sortIconStyle}
                                        icon={faSortUp}
                                    />
                                ) : (
                                    <Icon
                                        className={sortIconStyle}
                                        icon={faSortUp}
                                        style={{ transform: "rotate(180deg)" }}
                                    />
                                )}
                            </span>
                        )}
                    </>
                )}
            </RACColumn>
        );
    },
);

type TableHeaderProps<T extends object> = RACTableHeaderProps<T>;

function _TableHeader<T extends object>(
    props: TableHeaderProps<T>,
    ref: ForwardedRef<HTMLTableSectionElement>,
) {
    const { allowsDragging, selectionBehavior, selectionMode } =
        useTableOptions();

    return (
        <RACTableHeader
            {...props}
            ref={ref}
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
            <RACCollection items={props.columns}>
                {props.children}
            </RACCollection>
        </RACTableHeader>
    );
}

export const TableHeader = forwardRef(_TableHeader);

type CellProps = RACCellProps;

export const Cell = forwardRef<HTMLTableCellElement, CellProps>(
    (props, ref) => {
        return (
            <RACCell
                {...props}
                className={({
                    isFocused,
                    isFocusVisible,
                    isHovered,
                    isPressed,
                }) =>
                    clsx(
                        props.className,
                        cellCSS({
                            isFocused,
                            isFocusVisible,
                            isHovered,
                            isPressed,
                        }),
                    )
                }
                ref={ref}
            />
        );
    },
);

type RowProps<T extends object> = RACRowProps<T>;

function _Row<T extends object>(
    props: RowProps<T>,
    ref: ForwardedRef<HTMLTableRowElement>,
) {
    const { allowsDragging, selectionBehavior } = useTableOptions();

    return (
        <RACRow
            {...props}
            className={({
                // allowsDragging,
                isDisabled,
                // isDragging,
                // isDropTarget,
                isFocused,
                isFocusVisible,
                isHovered,
                isPressed,
                isSelected,
                selectionBehavior,
                selectionMode,
            }) =>
                clsx(
                    props.className,
                    rowCSS({
                        isDisabled,
                        isFocused,
                        isFocusVisible,
                        isHovered,
                        isPressed,
                        isSelected,
                        selectionBehavior,
                        selectionMode,
                    }),
                )
            }
            ref={ref}
        >
            {allowsDragging && (
                <Cell>
                    <Button
                        appearance="ghost"
                        size="square_sm"
                        slot="drag"
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
            <RACCollection items={props.columns}>
                {props.children}
            </RACCollection>
        </RACRow>
    );
}

export const Row = forwardRef(_Row);

export type TableBodyProps<T extends object> = RACTableBodyProps<T>;

function _TableBody<T extends object>(
    props: TableBodyProps<T>,
    ref: ForwardedRef<HTMLTableSectionElement>,
) {
    return (
        <RACTableBody
            {...props}
            ref={ref}
        >
            {props.children}
        </RACTableBody>
    );
}

export const TableBody = forwardRef(_TableBody);

export type TableProps = RACTableProps;

export const Table = forwardRef<HTMLTableElement, TableProps>(
    (props: TableProps, ref) => {
        return (
            <RACTable
                {...props}
                className={({ isDropTarget, isFocused, isFocusVisible }) =>
                    clsx(
                        props.className,
                        tableCSS({
                            isDropTarget,
                            isFocused,
                            isFocusVisible,
                        }),
                    )
                }
                ref={ref}
            >
                {props.children}
            </RACTable>
        );
    },
);

export type ResizableTableContainerProps = RACResizableTableContainerProps;

export const ResizableTableContainer = forwardRef<
    HTMLDivElement,
    ResizableTableContainerProps
>((props, ref) => {
    return (
        <RACResizableTableContainer
            {...props}
            className={clsx(props.className, tableContainerCSS)}
            ref={ref}
        />
    );
});
