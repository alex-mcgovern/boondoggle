import { DataTableLayoutColumnHeaderCell } from "../data_table_column_header_cell";

import type { Table } from "@tanstack/react-table";

type DataTableLayoutHeadProps<TTableData> = {
  /** Whether column is sortable. */
  isSortable: boolean | undefined;
  /** The `react-table` instance to control. */
  table: Table<TTableData>;
};

/**
 * Renders the table head for the DataTable.
 */
export function DataTableLayoutHead<TTableData>({
  isSortable,
  table,
}: DataTableLayoutHeadProps<TTableData>) {
  return (
    <thead>
      {table.getHeaderGroups().map((header_group) => {
        return (
          <tr key={header_group.id}>
            {header_group.headers.map((header) => {
              return (
                <DataTableLayoutColumnHeaderCell<TTableData>
                  header={header}
                  isSortable={isSortable}
                  key={header.id}
                />
              );
            })}
          </tr>
        );
      })}
    </thead>
  );
}
