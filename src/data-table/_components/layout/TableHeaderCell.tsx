import { flexRender } from "@tanstack/react-table";
import type { Header } from "@tanstack/react-table";
import clsx from "clsx";
import { thStyles, utilCss } from "../../../index.css";
import { TableSortButton } from "../controls/TableSortButton";

export function TableHeaderCell<THeaderData>({
	header,
	isSortable,
	isSticky,
}: {
	header: Header<THeaderData, unknown>;
	isSortable: boolean | undefined;
	isSticky?: boolean;
}) {
	if (isSortable) {
		return (
			<div
				className={clsx(
					thStyles,
					utilCss({
						background: isSticky ? "white" : undefined,
						position: isSticky ? "sticky" : undefined,
						top: isSticky ? "0" : undefined,
					}),
				)}
			>
				<TableSortButton header={header}>
					{header.isPlaceholder
						? null
						: flexRender(
								header.column.columnDef.header,
								header.getContext(),
						  )}
				</TableSortButton>
			</div>
		);
	}

	return (
		<div
			className={clsx(
				thStyles,
				utilCss({
					background: isSticky ? "white" : undefined,
					position: isSticky ? "sticky" : undefined,
					top: isSticky ? "0" : undefined,
				}),
			)}
		>
			{header.isPlaceholder
				? null
				: flexRender(
						header.column.columnDef.header,
						header.getContext(),
				  )}
		</div>
	);
}