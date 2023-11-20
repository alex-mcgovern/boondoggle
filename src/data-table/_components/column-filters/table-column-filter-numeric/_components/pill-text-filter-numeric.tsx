import { exhaustiveSwitchGuard } from "../../../../../_lib/exhaustive-switch-guard";
import { Box } from "../../../../../box";
import { TableNumberRangeFilterMode } from "../../../../types";
import { activeFilterStringCSS } from "../../multi-select/FilterPillMultiSelect.css";
import { useNumericFilterMode } from "./numeric-filter-mode-context";

const getSeparator = (filterMode: TableNumberRangeFilterMode) => {
	switch (filterMode) {
		case "is_between": {
			return "|";
		}
		case "is_equal_to": {
			return " = ";
		}
		case "is_greater_than": {
			return " >= ";
		}
		case "is_less_than": {
			return " <= ";
		}
		default: {
			return exhaustiveSwitchGuard(filterMode);
		}
	}
};

const getValue = ({
	filterMode,
	currentFilters,
}: {
	filterMode: TableNumberRangeFilterMode;
	currentFilters: [number | undefined, number | undefined];
}) => {
	switch (filterMode) {
		case "is_between": {
			return `${currentFilters[0]} to ${currentFilters[1]}`;
		}
		case "is_equal_to": {
			return currentFilters[0];
		}
		case "is_greater_than": {
			return currentFilters[0];
		}
		case "is_less_than": {
			return currentFilters[1];
		}
		default: {
			return exhaustiveSwitchGuard(filterMode);
		}
	}
};

export const PillTextFilterNumberRange = ({
	strFilterPillText,
	currentFilters,
}: {
	strFilterPillText: string;
	currentFilters: [number | undefined, number | undefined];
}) => {
	const [filterMode] = useNumericFilterMode();

	return (
		<Box display="flex" gap="space_1">
			{strFilterPillText}
			<div>{getSeparator(filterMode)}</div>

			<Box
				as="span"
				className={activeFilterStringCSS}
				color="button_default"
			>
				{getValue({ filterMode, currentFilters })}
			</Box>
		</Box>
	);
};
