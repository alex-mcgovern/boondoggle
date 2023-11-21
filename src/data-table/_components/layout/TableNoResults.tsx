import { faCircleExclamation } from "@fortawesome/pro-solid-svg-icons/faCircleExclamation";
import { RowData, Table } from "@tanstack/react-table";
import { arrayHasLength } from "../../../_lib/array-has-length";
import { Box } from "../../../box";
import { Button } from "../../../button";
import { Icon } from "../../../icon";
import { FilteringOptions } from "../../types";

export function TableNoResults<TRowData extends RowData>({
	table,
	filteringOptions,
	strNoResults,
}: {
	table: Table<TRowData>;
	filteringOptions: FilteringOptions<TRowData> | undefined;
	strNoResults: string;
}) {
	const isFiltered =
		table.getState().globalFilter ||
		arrayHasLength(table.getState().columnFilters);

	return (
		<Box
			alignItems="center"
			color="text_low_contrast"
			display="flex"
			flexDirection="column"
			fontStyle="bodySm"
			gap="space_4"
			justifyContent="center"
			paddingX="space_4"
			paddingY="space_12"
			textAlign="center"
		>
			<Icon icon={faCircleExclamation} size="3x" />

			<Box fontStyle="bodyLg" fontWeight="semibold">
				{strNoResults}
			</Box>

			{filteringOptions && isFiltered && (
				<Button
					size="sm"
					name="clear_filters"
					appearance="secondary"
					onClick={() => {
						table.setColumnFilters([]);
						table.setGlobalFilter("");
					}}
				>
					{filteringOptions.strClearAllFilters}
				</Button>
			)}
		</Box>
	);
}
