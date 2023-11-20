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

	const { columnFilterConfig, strApplyFilter } = filteringOptions;

	return (
		<>
			{table.getAllColumns().map((column) => {
				if (
					!column.getCanFilter() ||
					!columnFilterConfig[column.id as keyof TRowData]
				) {
					return null;
				}
				const columnConfig =
					columnFilterConfig[column.id as keyof TRowData];

				const firstValue = table
					.getPreFilteredRowModel()
					.flatRows[0]?.getValue(column.id);

				if (
					typeof firstValue === "string" &&
					columnConfig?.type === "MULTI_SELECT"
				) {
					return (
						<ColumnMultiFilter<TRowData>
							column={column}
							transformerIdToString={
								columnConfig.transformerIdToString
							}
							strApplyFilter={strApplyFilter}
							strFilterDialogTitle={
								columnConfig.strFilterDialogTitle
							}
							strFilterPillText={columnConfig.strFilterPillText}
							key={column.id}
						/>
					);
				}

				if (
					typeof firstValue === "number" &&
					columnConfig?.type === "NUMBER_RANGE"
				) {
					const {
						strFilterDialogTitle,
						strFilterPillText,
						strMapFilterMode,
						transformerNumericFromRaw,
						transformerNumericToRaw,
						strNotANumber,
					} = columnConfig;

					return (
						<ColumnFilterNumeric<TRowData>
							strApplyFilter={strApplyFilter}
							strFilterDialogTitle={strFilterDialogTitle}
							strFilterPillText={strFilterPillText}
							strMapFilterMode={strMapFilterMode}
							transformerNumericFromRaw={
								transformerNumericFromRaw
							}
							transformerNumericToRaw={transformerNumericToRaw}
							column={column}
							key={column.id}
							strNotANumber={strNotANumber}
						/>
					);
				}

				return null;
			})}
		</>
	);
}
