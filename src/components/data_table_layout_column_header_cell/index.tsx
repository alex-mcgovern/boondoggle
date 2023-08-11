import { flexRender } from "@tanstack/react-table";

import { DataTableControlTableHeadSort } from "../data_table_control_table_head_sort";

import type { Header } from "@tanstack/react-table";

type DataTableLayoutColumnHeaderCellProps<THeaderData> = {
  header: Header<THeaderData, unknown>;
  isSortable: boolean | undefined;
};

/**
 * Renders a single column header cell.
 */
export function DataTableLayoutColumnHeaderCell<THeaderData>({
  header,
  isSortable,
}: DataTableLayoutColumnHeaderCellProps<THeaderData>) {
  if (isSortable) {
    return (
      <th>
        <DataTableControlTableHeadSort header={header}>
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </DataTableControlTableHeadSort>
      </th>
    );
  }

  return (
    <th>
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, header.getContext())}
    </th>
  );
}
