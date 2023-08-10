import {
  faArrowLeft,
  faArrowRight,
  faArrowToLeft,
  faArrowToRight,
} from "@fortawesome/pro-light-svg-icons";
import { useCallback } from "react";

import { Box } from "../../../Box";
import { Button } from "../../../Button";
import { Icon } from "../../../Icon";

import type { BoxProps } from "../../../Box";
import type { ButtonProps } from "../../../Button";
import type { Table } from "@tanstack/react-table";

/** ----------------------------------------------------------------------------- */

const PAGINATION_BUTTON_PROPS: Omit<
  ButtonProps,
  "name" | "onClick" | "slotLeft"
> = {
  appearance: "primary",
  size: "square_sm",
};

/** ----------------------------------------------------------------------------- */

type DataTableControlPaginationProps<TTableData> = {
  /** The `react-table` instance to control. */
  table: Table<TTableData>;
} & BoxProps;

/**
 * A control for navigating a table's pages.
 */
export function DataTableControlPagination<TTableData>({
  table,
  ...rest
}: DataTableControlPaginationProps<TTableData>) {
  const goToFirst = useCallback(() => {
    return table.setPageIndex(0);
  }, [table]);

  const goToPrevious = useCallback(() => {
    return table.previousPage();
  }, [table]);

  const goToNext = useCallback(() => {
    return table.nextPage();
  }, [table]);

  const goToLast = useCallback(() => {
    return table.setPageIndex(table.getPageCount() - 1);
  }, [table]);

  return (
    <Box alignItems="end" display="flex" gap="spacing_2" {...rest}>
      <Box alignItems="center" display="flex" gap="spacing_1">
        <Button
          {...PAGINATION_BUTTON_PROPS}
          disabled={!table.getCanPreviousPage()}
          name="button_first_page"
          onClick={goToFirst}
          slotLeft={<Icon icon={faArrowToLeft} />}
        />
        <Button
          {...PAGINATION_BUTTON_PROPS}
          disabled={!table.getCanPreviousPage()}
          name="button_previous_page"
          onClick={goToPrevious}
          slotLeft={<Icon icon={faArrowLeft} />}
        />
        <Button
          {...PAGINATION_BUTTON_PROPS}
          disabled={!table.getCanNextPage()}
          name="button_next_page"
          onClick={goToNext}
          slotRight={<Icon icon={faArrowRight} />}
        />
        <Button
          {...PAGINATION_BUTTON_PROPS}
          disabled={!table.getCanNextPage()}
          name="button_last_page"
          onClick={goToLast}
          slotLeft={<Icon icon={faArrowToRight} />}
        />
      </Box>
    </Box>
  );
}
