import { Box } from "../../../box";

import type { Row, RowData } from "@tanstack/react-table";

type DataTableCellSelectableProps<TData extends RowData> = {
    /**
     * The `react-table` row that is being controlled.
     */
    row: Row<TData>;
};

/**
 * Renders a checkbox for use in a DataTable cell.
 */
export function DataTableCellSelectable<TData extends RowData>({
    row,
}: DataTableCellSelectableProps<TData>) {
    return (
        <Box
            alignItems="center"
            display="flex"
        >
            <input
                defaultChecked={row.getIsSelected()}
                onChange={row.getToggleSelectedHandler()}
                type="checkbox"
            />
        </Box>
    );
}
