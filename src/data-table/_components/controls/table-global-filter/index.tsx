import { faSearch } from "@fortawesome/pro-solid-svg-icons/faSearch";
import { RowData, Table } from "@tanstack/react-table";
import { Icon } from "../../../../icon";
import { Input } from "../../../../input";
import { FilteringOptions } from "../../../types";

export function TableGlobalFilter<TRowData extends RowData>({
	table,
	disabled,
	filteringOptions,
}: {
	table: Table<TRowData>;
	filteringOptions: FilteringOptions<TRowData> | undefined;
	disabled?: boolean;
}) {
	if (!filteringOptions) {
		return null;
	}

	const { strFilterPlaceholder, strClearFilterInput } = filteringOptions;

	return (
		<Input
			autoComplete="off"
			disabled={disabled}
			hideLastpass
			isClearable
			name="filter"
			onChange={(e) => {
				return table.setGlobalFilter(e.target.value);
			}}
			placeholder={strFilterPlaceholder}
			slotLeft={<Icon icon={faSearch} />}
			strClear={strClearFilterInput}
			type="search"
			value={table.getState().globalFilter}
			marginBottom="none"
		/>
	);
}