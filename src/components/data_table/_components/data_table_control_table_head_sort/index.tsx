import { faSort } from "@fortawesome/pro-solid-svg-icons/faSort";
import { faSort as faSortUp } from "@fortawesome/pro-duotone-svg-icons/faSort";
import { useMemo } from "react";
import { Button } from "../../../button";
import { Icon } from "../../../icon";
import { getSortControlStyle, sortIconStyle } from "./styles.css";

import type { Header } from "@tanstack/react-table";

type DataTableControlTableHeadSortProps<TData> = {
	/**
	 * The children to render inside the sort control.
	 */
	children: React.ReactNode;

	/**
	 * The `react-table` header instance to render the sort control for.
	 */
	header: Header<TData, unknown>;
};

/**
 * Renders the sort control for a column header.
 */
export function DataTableControlTableHeadSort<TData>({
	children,
	header,
}: DataTableControlTableHeadSortProps<TData>) {
	const canSort = header.column.getCanSort();

	const isSorted = !!header.column.getIsSorted();

	const slotRight = useMemo(() => {
		return canSort
			?
			{
				asc: <Icon icon={faSortUp} />,
				desc: <Icon icon={faSortUp} style={{ transform: "rotate(180deg)" }} />,
			}[header.column.getIsSorted() as string]
			?? <Icon className={sortIconStyle} icon={faSort} />
			: undefined;
	}, [canSort, header.column]);

	return (
		<Button
			appearance="link"
			className={getSortControlStyle({ isSorted })}
			flexShrink="0"
			marginLeft="auto"
			name={`sort_${header.column.id}`}
			onClick={header.column.getToggleSortingHandler()}
			size="sm"
			slotRight={slotRight}
		>
			{children}
		</Button>
	);
}
