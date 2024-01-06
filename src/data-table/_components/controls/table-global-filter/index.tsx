import type { RowData, Table } from "@tanstack/react-table";

import type { FilteringOptions } from "../../../types";

import { Group } from "../../../../group";
import { Input } from "../../../../input";
import {
	SearchField,
	SearchFieldClearButton,
	SearchFieldIcon,
} from "../../../../search-field";
import { tableGlobalFilterCSS } from "./styles.css";

export function TableGlobalFilter<TRowData extends RowData>({
	disabled,
	filteringOptions,
	table,
}: {
	disabled?: boolean;
	filteringOptions: FilteringOptions<TRowData> | undefined;
	table: Table<TRowData>;
}) {
	if (!filteringOptions) {
		return null;
	}

	const { strFilterPlaceholder } = filteringOptions;

	return (
		<SearchField
			aria-label="Filter"
			className={tableGlobalFilterCSS}
			isDisabled={disabled}
			onChange={table.setGlobalFilter}
			value={table.getState().globalFilter ?? ""}
		>
			<Group>
				<SearchFieldIcon />
				<Input placeholder={strFilterPlaceholder} />
				<SearchFieldClearButton />
			</Group>
		</SearchField>
	);
}
