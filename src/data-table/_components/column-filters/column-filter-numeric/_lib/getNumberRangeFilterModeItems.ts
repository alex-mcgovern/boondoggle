import { SelectItemShape } from "../../../../../_DEPRECATED_select/types";
import { TableNumberRangeFilterMode } from "../../../../types";

export const getTableNumberRangeFilterModeItems = ({
	strMapNumericFilterMode,
}: {
	strMapNumericFilterMode: Record<TableNumberRangeFilterMode, string>;
}): Array<SelectItemShape<TableNumberRangeFilterMode>> => [
	{
		label: strMapNumericFilterMode.is_between,
		value: "is_between",
	},
	{
		label: strMapNumericFilterMode.is_equal_to,
		value: "is_equal_to",
	},
	{
		label: strMapNumericFilterMode.is_greater_than,
		value: "is_greater_than",
	},
	{
		label: strMapNumericFilterMode.is_less_than,
		value: "is_less_than",
	},
];
