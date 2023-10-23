import { flexRender } from "@tanstack/react-table";
import clsx from "clsx";

import { thStyles } from "../../../src/styles/stylesheet.css";
import { utilCss } from "../../../src/styles/utils/util_css.css";
import { DataTableControlTableHeadSort } from "./DataTableControlTableHeadSort";

import type { Header } from "@tanstack/react-table";

/**
 * Renders a single column header cell.
 */
export function DataTableLayoutColumnHeaderCell<THeaderData>({
	header,
	isSortable,
	isSticky,
}: {
	/**
	 * the header for a DataTable column.
	 */
	header: Header<THeaderData, unknown>;

	/**
	 * Whether the DataTable is sortable or not.
	 */
	isSortable: boolean | undefined;

	/**
	 * Whether the table head is sticky
	 */
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
				<DataTableControlTableHeadSort header={header}>
					{header.isPlaceholder
						? null
						: flexRender(
								header.column.columnDef.header,
								header.getContext(),
						  )}
				</DataTableControlTableHeadSort>
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
