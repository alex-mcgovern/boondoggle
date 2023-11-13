import { Table } from "@tanstack/react-table";
import { Children } from "react";
import type { ReactNode } from "react";
import type { UtilCssArgs } from "../../../../styles/utils/util_css.css";
import { Box } from "../../../box";
import { FilterPillMultiSelect } from "../data_table_filter_menu/FilterPillMultiSelect";

type DataTableActionsWrapperProps<TRowData> = {
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
	 * A map of column IDs to their string representations.
	 */
	filterColumnStrMap?: Readonly<
		Partial<
			Record<
				keyof TRowData,
				{
					strFilterDialogTitle: string;
					strFilterPillText: string;
					valueToString: (value: string) => string;
				}
			>
		>
	>;
} & UtilCssArgs;

/**
 * Wraps actions for a data table.
 */
export function DataTableActionsWrapper<TRowData>({
	leftAction,
	rightActions,
	strApplyFilter,
	filterColumnStrMap,
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

			{strApplyFilter && filterColumnStrMap
				? table.getAllColumns().map((column) => {
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
