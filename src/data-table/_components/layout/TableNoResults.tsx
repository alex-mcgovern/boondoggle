import { faCircleExclamation } from "@fortawesome/pro-solid-svg-icons/faCircleExclamation";
import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons/faTimesCircle";
import { RowData, Table } from "@tanstack/react-table";
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

			{filteringOptions && table.getState().globalFilter && (
				<Button
					name="clear_filters"
					onClick={() => {
						return table.setGlobalFilter("");
					}}
					slotRight={<Icon icon={faTimesCircle} />}
				>
					{filteringOptions.strClearAllFilters}
				</Button>
			)}
		</Box>
	);
}
