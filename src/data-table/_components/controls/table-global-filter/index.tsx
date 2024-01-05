import { faSearch } from "@fortawesome/pro-solid-svg-icons/faSearch";
import { RowData, Table } from "@tanstack/react-table";
import { Icon } from "../../../../icon";
// import { Input } from "../../../../_DEPRECATED_input";
import { FilteringOptions } from "../../../types";
import { tableGlobalFilterCSS } from "./styles.css";
import { Group } from "../../../../group";
import { Input } from "../../../../input";
import { SearchField, SearchFieldClearButton } from "../../../../search-field";

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

	const { strFilterPlaceholder } = filteringOptions;

	return (
		<SearchField
			onChange={table.setGlobalFilter}
			isDisabled={disabled}
			className={tableGlobalFilterCSS}
			value={table.getState().globalFilter ?? ""}
		>
			<Group>
				<Icon icon={faSearch} />
				<Input placeholder={strFilterPlaceholder} />
				<SearchFieldClearButton />
			</Group>
		</SearchField>
	);
}
