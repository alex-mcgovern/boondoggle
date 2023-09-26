import { faSearch } from "@fortawesome/pro-solid-svg-icons";

import { Icon } from "../../../icon";
import { FieldInput } from "../../../input/FieldInput";

import type { WithOptionalPlaceholder } from "../../../../common-types";
import type { useDataTableState } from "../../../../lib/use_data_table_state";

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
        <FieldInput
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
