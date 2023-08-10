import { flexRender } from "@tanstack/react-table";

import { Box } from "../../../Box";

import type { Table } from "@tanstack/react-table";

type DataTableLayoutBodyProps<TTableData> = {
  /** The `react-table` instance to control. */
  table: Table<TTableData>;
};

export function DataTableLayoutBody<TTableData>({
  table,
}: DataTableLayoutBodyProps<TTableData>) {
  return (
    <tbody>
      {table.getRowModel().rows.map((row) => {
        return (
          <Box as="tr" key={row.id}>
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
