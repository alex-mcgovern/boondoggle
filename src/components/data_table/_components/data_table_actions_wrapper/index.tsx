import { Table } from "@tanstack/react-table";
import { Children } from "react";
import type { ReactNode } from "react";
import type { UtilCssArgs } from "../../../../styles/utils/util_css.css";
import { Box } from "../../../box";
import { FilterPillMultiSelect } from "../filters/multi-select/FilterPillMultiSelect";
import { FilterPillNumberRange } from "../filters/number-range/_components/FilterPillNumberRange";
import { NumberRangeFilterMode } from "../filters/number-range/types";

type DataTableActionsWrapperProps<TRowData> = UtilCssArgs & {
	/**
	 * Action shown on the left-hand side
	 */
	leftAction?: ReactNode;

	/**
	 * The `react-table` table instance
	 */
	table: Table<TRowData>;

	/**
	 * Action shown on the right-hand side
	 */
	rightActions?: ReactNode | [ReactNode?, ReactNode?];

	/**
	 * The text to display in the "Apply filters" button.
	 */
	strApplyFilter: string | undefined;

	/**
	 * Whether filtering is enabled for the data table.
	 */

	isFilterable: boolean | undefined;

	/**
	 * A map of column IDs to their string representations.
	 */
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

	/**
	 * A map of strings used in the numeric filter mode.
	 */
	strMapFilterMode:
		| undefined
		| Record<NumberRangeFilterMode, string>
		| undefined;
};

/**
 * Wraps actions for a data table.
 */
export function DataTableActionsWrapper<TRowData>({
	leftAction,
	rightActions,
	strApplyFilter,
	isFilterable,
	filterColumnStrMap,
	strMapFilterMode,
	table,
	...rest
}: DataTableActionsWrapperProps<TRowData>) {
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
