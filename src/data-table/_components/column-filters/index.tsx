import type { RowData, Table } from "@tanstack/react-table";

import type { FilteringOptions } from "../../types";

import { ColumnMultiFilter } from "./column-filter-multi";
import { ColumnFilterNumeric } from "./column-filter-numeric";

export function TableColumnFilters<TRowData extends RowData>({
	filteringOptions,
	table,
}: {
	filteringOptions: FilteringOptions<TRowData> | undefined;
	table: Table<TRowData>;
}) {
	if (!filteringOptions?.columnFilterConfig) {
		return null;
	}

	const { columnFilterConfig } = filteringOptions;

	return (
		<>
			{table.getAllColumns().map((column) => {
				if (
					// !column.getCanFilter() ||
					!columnFilterConfig[column.id as keyof TRowData]
				) {
					return null;
				}
				const columnConfig =
					columnFilterConfig[column.id as keyof TRowData];

				// const firstValue = table
				// 	.getPreFilteredRowModel()
				// 	.flatRows[0]?.getValue(column.id);

				if (
					// typeof firstValue === "string" &&
					columnConfig?.type === "MULTI_SELECT"
				) {
					return (
						<ColumnMultiFilter<TRowData>
							column={column}
							key={column.id}
							strFilterDialogTitle={
								columnConfig.strFilterDialogTitle
							}
							strFilterPillText={columnConfig.strFilterPillText}
							transformValueToString={
								columnConfig.transformValueToString
							}
						/>
					);
				}

				if (
					// typeof firstValue === "number" &&
					columnConfig?.type === "NUMBER_RANGE"
				) {
					const {
						strFilterDialogTitle,
						strFilterPillText,
						transformNumericFromRaw,
						transformNumericToRaw,
					} = columnConfig;

					return (
						<ColumnFilterNumeric<TRowData>
							column={column}
							key={column.id}
							strFilterDialogTitle={strFilterDialogTitle}
							strFilterPillText={strFilterPillText}
							transformNumericFromRaw={transformNumericFromRaw}
							transformNumericToRaw={transformNumericToRaw}
						/>
					);
				}

				return null;
			})}
		</>
	);
}
