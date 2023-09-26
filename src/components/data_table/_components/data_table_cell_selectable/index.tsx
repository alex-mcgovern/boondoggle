import { Box } from "../../../box";

import type { Row, RowData } from "@tanstack/react-table";

type DataTableCellSelectableProps<TData extends RowData> = {
    /**
     * Whether the entire row should be clickable
     */
    isRowClickable?: boolean;

    /**
     * The `react-table` row that is being controlled.
     */
    row: Row<TData>;
};

/**
 * Renders a checkbox for use in a DataTable cell.
 */
export function DataTableCellSelectable<TData extends RowData>({
    isRowClickable,
    row,
}: DataTableCellSelectableProps<TData>) {
    return (
        <Box
            alignItems="center"
            display="flex"
        >
            <input
                checked={row.getIsSelected()}
                onChange={isRowClickable ? undefined : row.getToggleSelectedHandler()}
                type="checkbox"
            />
        </Box>
    );
}
