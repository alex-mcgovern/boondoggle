import { faCircleExclamation, faTimesCircle } from "@fortawesome/sharp-regular-svg-icons";

import { Box } from "../box";
import { Button } from "../button";
import { Icon } from "../icon";

import type { useDataTableState } from "../../lib/use_data_table_state";

type DataTableInfoNoResultsProps = {
    /**
     * The current DataTable global filter state
     */
    globalFilter: ReturnType<typeof useDataTableState>["globalFilter"];

    /**
     * The function to set the global filter state
     */
    setGlobalFilter: ReturnType<typeof useDataTableState>["setGlobalFilter"];

    /**
     * The text to display for the clear all filters button.
     */
    strClearAllFilters: string;

    /**
     * The title of the no results message
     */
    strNoResultsTitle: string;
};

/**
 * Renders a message to the user when there are no results in the data table.
 */
export function DataTableInfoNoResults({
    globalFilter,
    setGlobalFilter,
    strClearAllFilters,

    strNoResultsTitle,
}: DataTableInfoNoResultsProps) {
    return (
        <Box
            alignItems="center"
            color="text_low_contrast"
            display="flex"
            flexDirection="column"
            fontStyle="body_sm"
            gap="space_4"
            justifyContent="center"
            paddingX="space_4"
            paddingY="space_12"
            textAlign="center"
        >
            {}

            <Icon
                icon={faCircleExclamation}
                size="3x"
            />

            <Box
                fontStyle="body_lg"
                fontWeight="semibold"
            >
                {strNoResultsTitle}
            </Box>

            {globalFilter && (
                <Button
                    name="clear_filters"
                    onClick={() => setGlobalFilter("")}
                    slotRight={[<Icon icon={faTimesCircle} />]}
                >
                    {strClearAllFilters}
                </Button>
            )}
        </Box>
    );
}
