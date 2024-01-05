import { RowData, Table } from "@tanstack/react-table";
import { Group } from "../../../../group";
import { Input } from "../../../../input";
import {
	SearchField,
	SearchFieldClearButton,
	SearchFieldIcon,
} from "../../../../search-field";
import { FilteringOptions } from "../../../types";
import { tableGlobalFilterCSS } from "./styles.css";

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
				<SearchFieldIcon />
				<Input aria-label="Filter" placeholder={strFilterPlaceholder} />
				<SearchFieldClearButton />
			</Group>
		</SearchField>
	);
}
