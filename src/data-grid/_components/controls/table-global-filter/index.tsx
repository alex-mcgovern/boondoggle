import { faSearch } from "@fortawesome/pro-solid-svg-icons/faSearch";
import { RowData, Table } from "@tanstack/react-table";
import { Icon } from "../../../../icon";
import { Input } from "../../../../input";
import { tableGlobalFilterCSS } from "./styles.css";

export function TableGlobalFilter<TRowData extends RowData>({
	table,
	disabled,
	strClearFilterInput,
	strFilterPlaceholder,
}: {
	table: Table<TRowData> | undefined;
	strClearFilterInput: string | undefined;
	strFilterPlaceholder: string | undefined;
	disabled?: boolean;
}) {
	return (
		<Input
			className={tableGlobalFilterCSS}
			autoComplete="off"
			size="sm"
			disabled={disabled}
			hideLastpass
			isClearable
			name="filter"
			onChange={(e) => {
				return table?.setGlobalFilter(e.target.value);
			}}
			placeholder={strFilterPlaceholder}
			slotLeft={<Icon icon={faSearch} />}
			strClear={strClearFilterInput}
			type="search"
			value={table?.getState().globalFilter}
			marginBottom="none"
		/>
	);
}
