import type { RowData, Table } from "@tanstack/react-table";

import { faCircleExclamation } from "@fortawesome/pro-solid-svg-icons/faCircleExclamation";

import type { FilteringOptions } from "../../types";

import { arrayHasLength } from "../../../_lib/array-has-length";
import { Box } from "../../../box";
import { Button } from "../../../button";
import { Icon } from "../../../icon";

export function TableNoResults<TRowData extends RowData>({
    filteringOptions,
    strNoResults,
    table,
}: {
    filteringOptions: FilteringOptions<TRowData> | undefined;
    strNoResults: string;
    table: Table<TRowData>;
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
            <Icon
                icon={faCircleExclamation}
                size="3x"
            />

            <Box
                fontStyle="bodyLg"
                fontWeight="semibold"
            >
                {strNoResults}
            </Box>

            {filteringOptions && isFiltered && (
                <Button
                    appearance="secondary"
                    name="clear_filters"
                    onPress={() => {
                        table.setColumnFilters([]);
                        table.setGlobalFilter("");
                    }}
                    size="sm"
                >
                    {filteringOptions.strClearAllFilters}
                </Button>
            )}
        </Box>
    );
}
