import { faSearch } from "@fortawesome/sharp-regular-svg-icons";

import { Icon } from "../icon";
import { Input } from "../input";

import type { WithOptionalPlaceholder } from "../../common-types";
import type { Dispatch, SetStateAction } from "react";

type DataTableFilterInputProps = Required<WithOptionalPlaceholder> & {
    /**
     * Function to set the `DataTable` global filter state
     */
    setGlobalFilter: Dispatch<SetStateAction<string>>;
};

/**
 * Renders a string filter for the DataTable.
 */
export function DataTableFilterInput({ placeholder, setGlobalFilter }: DataTableFilterInputProps) {
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
        />
    );
}
