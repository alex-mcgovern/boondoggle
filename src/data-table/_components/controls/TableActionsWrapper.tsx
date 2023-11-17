import { Table } from "@tanstack/react-table";
import { Children } from "react";
import type { ReactNode } from "react";
import { Box } from "../../../box";
import { FilterPillMultiSelect } from "../column-filters/multi-select/FilterPillMultiSelect";
import { FilterPillNumberRange } from "../column-filters/number-range/FilterPillNumberRange";
import { NumberRangeFilterMode } from "../column-filters/number-range/types";

export function TableActionsWrapper<TRowData>({
	leftAction,
	rightActions,
	strApplyFilter,
	isFilterable,
	filterColumnStrMap,
	strMapFilterMode,
	table,
	...rest
}: {
	leftAction?: ReactNode;
	table: Table<TRowData>;
	rightActions?: ReactNode | [ReactNode?, ReactNode?];
	strApplyFilter: string | undefined;
	isFilterable: boolean | undefined;
	filterColumnStrMap:
		| undefined
		| Readonly<
				Partial<
					Record<
						keyof TRowData,
						{
							strFilterDialogTitle: string;
							strFilterPillText: string;
							// biome-ignore lint/suspicious/noExplicitAny: no better alternative
							valueToString: (value: any) => string;
						}
					>
				>
		  >;
	strMapFilterMode:
		| undefined
		| Record<NumberRangeFilterMode, string>
		| undefined;
}) {
	if (!leftAction && !rightActions) {
		return null;
	}

	return (
		<Box
			alignItems="center"
			borderBottom="border_default"
			display="flex"
			gap="space_2"
			marginTop="space_4"
			paddingBottom="space_4"
			{...rest}
		>
			{leftAction && <Box>{leftAction}</Box>}

			{isFilterable && strApplyFilter && filterColumnStrMap
				? table.getAllColumns().map((column) => {
						if (!column.getCanFilter()) {
							return null;
						}

						const {
							valueToString,
							strFilterDialogTitle,
							strFilterPillText,
						} =
							filterColumnStrMap[column.id as keyof TRowData] ||
							{};

						if (!strFilterDialogTitle || !strFilterPillText) {
							return null;
						}

						const firstValue = table
							.getPreFilteredRowModel()
							.flatRows[0]?.getValue(column.id);

						if (typeof firstValue === "string") {
							return (
								<FilterPillMultiSelect<TRowData>
									column={column}
									valueToString={valueToString}
									strApplyFilter={strApplyFilter}
									strFilterDialogTitle={strFilterDialogTitle}
									strFilterPillText={strFilterPillText}
									key={column.id}
								/>
							);
						}

						if (
							typeof firstValue === "number" &&
							strMapFilterMode
						) {
							return (
								<FilterPillNumberRange<TRowData>
									strings={{
										strApplyFilter,
										strFilterDialogTitle,
										strFilterPillText,
										strMapFilterMode,
									}}
									column={column}
									key={column.id}
								/>
							);
						}

						return null;
				  })
				: null}

			{rightActions && (
				<Box
					alignItems="center"
					display="flex"
					gap="space_2"
					marginLeft="auto"
				>
					{Children.map(rightActions, (action) => {
						return action;
					})}
				</Box>
			)}
		</Box>
	);
}
