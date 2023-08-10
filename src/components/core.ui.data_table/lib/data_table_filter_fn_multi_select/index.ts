import { arrayHasLength } from "../../../../lib/arrayHasLength";

import type { Row, RowData } from "@tanstack/react-table";

/**
 * Filter function for columns that are filtered with a `SelectMulti` component.
 */
export function filterDataTableMultiSelect<TRowData extends RowData>(
  row: Row<TRowData>,
  column_id: string,
  filterValue: any
) {
  const cellValue = row.getValue(column_id);

  if (!arrayHasLength(filterValue)) {
    return false;
  }

  return filterValue.includes(cellValue as string);
}
