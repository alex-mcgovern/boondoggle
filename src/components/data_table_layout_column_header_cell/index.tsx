import { flexRender } from "@tanstack/react-table";

import { Box } from "../box";
import { DataTableControlTableHeadSort } from "../data_table_control_table_head_sort";

import type { Header } from "@tanstack/react-table";

type DataTableLayoutColumnHeaderCellProps<THeaderData> = {
  header: Header<THeaderData, unknown>;
  isSortable: boolean | undefined;
  /** Whether the table head is sticky */
  isSticky?: boolean;
};

/**
 * Renders a single column header cell.
 */
export function DataTableLayoutColumnHeaderCell<THeaderData>({
  header,
  isSortable,
  isSticky,
}: DataTableLayoutColumnHeaderCellProps<THeaderData>) {
  if (isSortable) {
    return (
      <Box
        as="th"
        background={isSticky ? "white" : undefined}
        position={isSticky ? "sticky" : undefined}
        top={isSticky ? "0" : undefined}
      >
        <DataTableControlTableHeadSort header={header}>
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
        </DataTableControlTableHeadSort>
      </Box>
    );
  }

  return (
    <Box
      as="th"
      background={isSticky ? "white" : undefined}
      position={isSticky ? "sticky" : undefined}
      top={isSticky ? "0" : undefined}
    >
      {header.isPlaceholder
        ? null
        : flexRender(header.column.columnDef.header, header.getContext())}
    </Box>
  );
}
