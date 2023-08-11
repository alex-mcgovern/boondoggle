import { Box } from "../box";

import type { Table } from "@tanstack/react-table";

type DataTableInfoPageCountProps<TTableData> = {
  /** Added to the page count, e.g. *page* 1 of 4. */
  strPage: string;
  /** Added to the results count, e.g. 10 *results* */
  strResults: string;
  /** The `react-table` instance to control. */
  table: Table<TTableData>;
};

/**
 * Renders the current page and results count for the DataTable.
 */
export function DataTableInfoPageCount<TTableData>({
  strPage,
  strResults,
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
      <Box>{strResults}.</Box>

      {/** -------------------------------------------- */}

      {!!table.getPageCount() && (
        <>
          <Box>{strPage}</Box>
          <Box fontWeight="semibold" whiteSpace="nowrap">
            {table.getState().pagination.pageIndex + 1} of{" "}
            {table.getPageCount()}
          </Box>
        </>
      )}
    </Box>
  );
}
