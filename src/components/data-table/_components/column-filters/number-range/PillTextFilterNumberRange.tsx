import { exhaustiveSwitchGuard } from "../../../../../lib/exhaustive_switch_guard";
import { Box } from "../../../../box/_components/Box";
import { activeFilterString } from "../multi-select/FilterPillMultiSelect.css";
import { useNumberRangeFilterMode } from "./FilterModeContext";
import { NumberRangeFilterMode } from "./types";

const getSeparator = (filterMode: NumberRangeFilterMode) => {
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
	filterMode: NumberRangeFilterMode;
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
	currentFilters: [number, number];
}) => {
	const [filterMode] = useNumberRangeFilterMode();

	return (
		<Box display="flex" gap="space_1">
			{strFilterPillText}
			<div>{getSeparator(filterMode)}</div>

			<Box
				as="span"
				className={activeFilterString}
				color="button_default"
			>
				{getValue({ filterMode, currentFilters })}
			</Box>
		</Box>
	);
};
