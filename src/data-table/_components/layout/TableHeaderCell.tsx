import { flexRender } from "@tanstack/react-table";
import type { Header } from "@tanstack/react-table";
import clsx from "clsx";
import { thStyles } from "../../../index.css";
import { sprinkles } from "../../../sprinkles/index.css";
import { TableSortButton } from "../controls/TableSortButton";

export function TableHeaderCell<THeaderData>({
	header,
	isSortable,
}: {
	header: Header<THeaderData, unknown>;
	isSortable: boolean | undefined;
}) {
	if (isSortable) {
		return (
			<div
				className={clsx(
					thStyles,
					sprinkles({
						color: "text_low_contrast",
						paddingY: "space_1",
						paddingX: "space_4",
						borderBottom: "border_default",
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
				sprinkles({
					color: "text_low_contrast",
					paddingY: "space_1",
					paddingX: "space_4",
					borderBottom: "border_default",
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
