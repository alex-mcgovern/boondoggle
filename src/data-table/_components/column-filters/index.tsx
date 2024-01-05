import { RowData, Table } from "@tanstack/react-table";
import { FilteringOptions } from "../../types";
import { ColumnMultiFilter } from "./column-filter-multi";
import { ColumnFilterNumeric } from "./column-filter-numeric";

export function TableColumnFilters<TRowData extends RowData>({
	table,
	filteringOptions,
}: {
	table: Table<TRowData>;
	filteringOptions: FilteringOptions<TRowData> | undefined;
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
							transformValueToString={
								columnConfig.transformValueToString
							}
							strFilterDialogTitle={
								columnConfig.strFilterDialogTitle
							}
							strFilterPillText={columnConfig.strFilterPillText}
							key={column.id}
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
							strFilterDialogTitle={strFilterDialogTitle}
							strFilterPillText={strFilterPillText}
							transformNumericFromRaw={transformNumericFromRaw}
							transformNumericToRaw={transformNumericToRaw}
							column={column}
							key={column.id}
						/>
					);
				}

				return null;
			})}
		</>
	);
}
