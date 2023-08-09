import { I18N } from "../../../core/constants/I18N";
import { Box } from "../Box";

import type { Table } from "@tanstack/react-table";

type DataTableInfoPageCountProps<TTableData> = {
  /** The `react-table` instance to control. */
  table: Table<TTableData>;
};

export function DataTableInfoPageCount<TTableData>({
  table,
}: DataTableInfoPageCountProps<TTableData>) {
  return (
    <Box
      alignItems="center"
      as="span"
      display="flex"
      fontSize="body_md"
      gap="spacing_0.5"
      marginRight="auto"
      marginY="spacing_0.5"
    >
      <Box fontWeight="semibold">
        {table.getPrePaginationRowModel().rows.length}
      </Box>
      <Box>{I18N.results}.</Box>

      {/** -------------------------------------------- */}

      {!!table.getPageCount() && (
        <>
          <Box>{I18N.page}</Box>
          <Box fontWeight="semibold" whiteSpace="nowrap">
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </Box>
        </>
      )}
    </Box>
  );
}
