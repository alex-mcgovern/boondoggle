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
    isWholeRowClickable: boolean | undefined;

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
    isWholeRowClickable,
    table,
}: DataTableLayoutBodyProps<TRowData>) {
    return (
        <tbody>
            {table.getRowModel().rows.map((row) => {
                return (
                    <Box
                        as="tr"
                        key={row.id}
                        {...getRowProps?.(row.original)}
                        className={getRowStyles({ isWholeRowClickable })}
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
