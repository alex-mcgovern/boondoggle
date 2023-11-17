import type { Table } from "@tanstack/react-table";
import { getHeadStyle } from "./TableHead.css";
import { TableHeaderCell } from "./TableHeaderCell";
import { tRowStyles } from "../../../../index.css";

export function TableHead<TTableData>({
	isSortable,
	isSticky,
	table,
	isSelectable,
	hasRowActions,
}: {
	isSortable: boolean | undefined;
	isSticky?: boolean;
	isSelectable: boolean | undefined;
	hasRowActions: boolean | undefined;
	table: Table<TTableData>;
}) {
	return (
		<div className={getHeadStyle({ isSelectable, hasRowActions })}>
			{table.getHeaderGroups().map((hg) => {
				return (
					<div className={tRowStyles} key={hg.id}>
						{hg.headers.map((h) => {
							return (
								<TableHeaderCell<TTableData>
									header={h}
									isSortable={isSortable}
									isSticky={isSticky}
									key={h.id}
								/>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}
