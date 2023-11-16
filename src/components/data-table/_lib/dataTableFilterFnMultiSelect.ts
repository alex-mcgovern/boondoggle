import { Row, RowData } from "@tanstack/react-table";
import { arrayHasLength } from "../../../lib/array_has_length";

export function dataTableFilterFnMultiSelect<TRowData extends RowData>(
	row: Row<TRowData>,
	column_id: string,
	// biome-ignore lint/suspicious/noExplicitAny: required by react-table
	filter_value: any,
) {
	const cell_value = row.getValue(column_id);

	if (!arrayHasLength(filter_value)) {
		return false;
	}

	return filter_value.includes(cell_value as string);
}
