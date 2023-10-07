import { flexRender } from "@tanstack/react-table";

import { tBodyStyles, tdStyles } from "../../../../styles/stylesheet.css";
import { Box } from "../../../box";
import { rowStyles } from "./styles.css";

import type { Table } from "@tanstack/react-table";

type DataTableLayoutBodyProps<TRowData> = {
    /**
     * The `react-table` instance to control.
     */
    table: Table<TRowData>;
};

/**
 * The body for a DataTable, comprising of <tbody>, <tr> & <td> elements.
 */
export function DataTableLayoutBody<TRowData>({
    table,
}: DataTableLayoutBodyProps<TRowData>) {
    return (
        <div className={tBodyStyles}>
            {table.getRowModel().rows.map((row) => {
                return (
                    <Box
                        className={rowStyles}
                        key={row.id}
                    >
                        {row.getVisibleCells().map((cell) => {
                            return (
                                <div
                                    className={tdStyles}
                                    key={cell.id}
                                    style={{
                                        width: cell.column.getSize(),
                                    }}
                                >
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </div>
                            );
                        })}
                    </Box>
                );
            })}
        </div>
    );
}
