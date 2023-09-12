import { flexRender } from "@tanstack/react-table";

import { Box } from "../box";
import { getRowStyles } from "./styles.css";

import type { BoxProps } from "../box";
import type { Table } from "@tanstack/react-table";

type DataTableLayoutBodyProps<TRowData> = {
    /**
     * A function that returns props for the row.
     */
    getRowProps?: (row_data: TRowData) => BoxProps;

    /**
     * Whether the entire row should be clickable
     */
    isRowClickable: boolean | undefined;

    /**
     * Whether the table should allow rows to be selectable
     */
    isSelectable: boolean | undefined;

    /**
     * The `react-table` instance to control.
     */
    table: Table<TRowData>;
};

/**
 * The body for a DataTable, comprising of <tbody>, <tr> & <td> elements.
 */
export function DataTableLayoutBody<TRowData>({
    getRowProps,
    isRowClickable,
    isSelectable,
    table,
}: DataTableLayoutBodyProps<TRowData>) {
    return (
        <tbody>
            {table.getRowModel().rows.map((row) => {
                const rowProps = getRowProps?.(row.original) ?? {};

                return (
                    <Box
                        as="tr"
                        key={row.id}
                        {...getRowProps?.(row.original)}
                        className={getRowStyles({ isRowClickable })}
                        onClick={
                            isSelectable && isRowClickable
                                ? row.getToggleSelectedHandler()
                                : rowProps.onClick
                        }
                    >
                        {row.getVisibleCells().map((cell) => {
                            return (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            );
                        })}
                    </Box>
                );
            })}
        </tbody>
    );
}
