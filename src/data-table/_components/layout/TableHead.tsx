import type { Table } from "@tanstack/react-table";
import { tRowStyles } from "../../../index.css";
import { getHeadStyle } from "./TableHead.css";
import { TableHeaderCell } from "./TableHeaderCell";

export function TableHead<TTableData>({
	isSortable,
	table,
	isSelectable,
	hasRowActions,
}: {
	isSortable: boolean | undefined;
	isSelectable: boolean | undefined;
	hasRowActions: boolean | undefined;
	table: Table<TTableData>;
}) {
	return table
		.getHeaderGroups()
		.map((hg) =>
			hg.headers.map((h) => (
				<TableHeaderCell<TTableData>
					header={h}
					isSortable={isSortable}
					key={h.id}
				/>
			)),
		);
}
