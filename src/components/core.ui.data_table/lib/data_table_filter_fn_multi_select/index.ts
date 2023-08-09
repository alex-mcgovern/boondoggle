import { arrayHasLength } from "../../../core/lib/validation/array_has_length";

import type { Row, RowData } from "@tanstack/react-table";

export function filterDataTableMultiSelect<TRowData extends RowData>(
  row: Row<TRowData>,
  column_id: string,
  filter_value: any
) {
  const cell_value = row.getValue(column_id);

  if (!arrayHasLength(filter_value)) {
    return false;
  }

  return filter_value.includes(cell_value as string);
}
