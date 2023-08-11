import { faSearch } from "@fortawesome/pro-light-svg-icons";

import { Icon } from "../Icon";
import { Input } from "../InputComp";

import type { WithPlaceholder } from "../../types";
import type { Dispatch, SetStateAction } from "react";

/** ----------------------------------------------------------------------------- */

type DataTableFilterInputProps = WithPlaceholder & {
  /** Function to set the `DataTable` global filter state */
  setGlobalFilter: Dispatch<SetStateAction<string>>;
};

/**
 * Renders a string filter for the DataTable.
 */
export function DataTableFilterInput({
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
      slotLeft={<Icon icon={faSearch} />}
    />
  );
}
