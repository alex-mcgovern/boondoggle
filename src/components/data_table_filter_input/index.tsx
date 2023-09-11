import { faSearch } from "@fortawesome/pro-solid-svg-icons";

import { Icon } from "../icon";
import { Input } from "../input";

import type { WithOptionalPlaceholder } from "../../common-types";
import type { useDataTableState } from "../../lib/use_data_table_state";

type DataTableFilterInputProps = Required<WithOptionalPlaceholder> & {
    /**
     * The current DataTable global filter state
     */
    globalFilter: ReturnType<typeof useDataTableState>["globalFilter"];

    /**
     * Function to set the `DataTable` global filter state
     */
    setGlobalFilter: ReturnType<typeof useDataTableState>["setGlobalFilter"];
};

/**
 * Renders a string filter for the DataTable.
 */
export function DataTableFilterInput({
    globalFilter,
    placeholder,
    setGlobalFilter,
}: DataTableFilterInputProps) {
    return (
        <Input
            autoComplete="off"
            isClearable
            name="filter"
            onChange={(e) => {
                return setGlobalFilter(e.target.value);
            }}
            placeholder={placeholder}
            slotLeft={[<Icon icon={faSearch} />]}
            value={globalFilter}
        />
    );
}
