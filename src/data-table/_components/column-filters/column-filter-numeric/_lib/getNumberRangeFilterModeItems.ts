import { SelectItemShape } from "../../../../../select/types";
import { TableNumberRangeFilterMode } from "../../../../types";

export const getTableNumberRangeFilterModeItems = ({
	strMapFilterMode,
}: {
	strMapFilterMode: Record<TableNumberRangeFilterMode, string>;
}): Array<SelectItemShape<TableNumberRangeFilterMode>> => [
	{
		label: strMapFilterMode.is_between,
		value: "is_between",
	},
	{
		label: strMapFilterMode.is_equal_to,
		value: "is_equal_to",
	},
	{
		label: strMapFilterMode.is_greater_than,
		value: "is_greater_than",
	},
	{
		label: strMapFilterMode.is_less_than,
		value: "is_less_than",
	},
];
