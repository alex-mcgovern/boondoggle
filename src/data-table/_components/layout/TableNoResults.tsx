import type { RowData, Table } from "@tanstack/react-table";

import { faCircleExclamation } from "@fortawesome/pro-solid-svg-icons/faCircleExclamation";

import { i18n } from "../../../_i18n";
import { arrayHasLength } from "../../../_lib/array-has-length";
import { Box } from "../../../box";
import { Button } from "../../../button";
import { Icon } from "../../../icon";

export function TableNoResults<TRowData extends RowData>({
    table,
}: {
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
                {i18n.no_results_found}
            </Box>

            {isFiltered && (
                <Button
                    appearance="secondary"
                    name="clear_filters"
                    onPress={() => {
                        table.setColumnFilters([]);
                        table.setGlobalFilter("");
                    }}
                    size="sm"
                >
                    {i18n.clear_all_filters}
                </Button>
            )}
        </Box>
    );
}
