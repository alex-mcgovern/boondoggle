import { faSearch } from "@fortawesome/pro-solid-svg-icons";
import { Icon } from "../../icon";
import type { WithOptionalPlaceholder } from "../../../src/common-types";
import type { useDataTableState } from "../../../src/lib/use_data_table_state";
import { Input } from "../../input";
/**
 * Renders a string filter for the DataTable.
 */

export function DataTableFilterInput({
	disabled,
	globalFilter = "",
	placeholder,
	setGlobalFilter,
	strClearFilterInput,
}: Required<WithOptionalPlaceholder> & {
	/**
	 * Whether the input should be disabled.
	 */
	disabled?: boolean;

	/**
	 * The current DataTable global filter state
	 */
	globalFilter: ReturnType<typeof useDataTableState>["globalFilter"];

	/**
	 * Function to set the `DataTable` global filter state
	 */
	setGlobalFilter: ReturnType<typeof useDataTableState>["setGlobalFilter"];

	/**
	 * The string to display in a tooltip to clear the filters
	 */
	strClearFilterInput: string;
}) {
	return (
		<Input
			autoComplete="off"
			disabled={disabled}
			hideLastpass
			isClearable
			name="filter"
			onChange={(e) => {
				return setGlobalFilter(e.target.value);
			}}
			placeholder={placeholder}
			slotLeft={<Icon icon={faSearch} />}
			strClear={strClearFilterInput}
			type="search"
			value={globalFilter}
			marginBottom="none"
		/>
	);
}
