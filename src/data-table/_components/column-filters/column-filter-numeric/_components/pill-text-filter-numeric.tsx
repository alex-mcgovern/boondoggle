import type { TableNumberRangeFilterMode } from "../../../../types";

import { exhaustiveSwitchGuard } from "../../../../../_lib/exhaustive-switch-guard";
import { Box } from "../../../../../box";
import { activeFilterStringCSS } from "../../column-filter-multi/styles.css";
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
    currentFilters,
    filterMode,
}: {
    currentFilters: [number | undefined, number | undefined];
    filterMode: TableNumberRangeFilterMode;
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
    currentFilters,
    strFilterPillText,
}: {
    currentFilters: [number | undefined, number | undefined];
    strFilterPillText: string;
}) => {
    const [filterMode] = useNumericFilterMode();

    return (
        <Box
            display="flex"
            gap="space_1"
        >
            {strFilterPillText}
            <div>{getSeparator(filterMode)}</div>

            <Box
                as="span"
                className={activeFilterStringCSS}
                color="bg_button_primary"
            >
                {getValue({ currentFilters, filterMode })}
            </Box>
        </Box>
    );
};
