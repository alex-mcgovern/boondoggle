import { faCaretDown, faCaretUp } from "@fortawesome/pro-solid-svg-icons"; import { type ReactNode, useMemo } from "react"; import { Button } from "../../button"; import { Icon } from "../../icon"; import {
	getSortControlStyle,
	sortIconStyle,
} from "./DataTableControlTableHeadSort.css"; import type { Header } from "@tanstack/react-table";
/**
 * Renders the sort control for a column header.
 */

export function DataTableControlTableHeadSort<TData>({
	children,
	header,
}: {
	/**
	 * The children to render inside the sort control.
	 */
	children: ReactNode;

	/**
	 * The `react-table` header instance to render the sort control for.
	 */
	header: Header<TData, unknown>;
}) {
	const canSort = header.column.getCanSort();

	const isSorted = !!header.column.getIsSorted();

	const slotRight = useMemo(() => {
		return canSort
			? [
				{
					asc: <Icon icon={faCaretUp} />,
					desc: <Icon icon={faCaretDown} />,
				}[header.column.getIsSorted() as string],
			] ?? [<Icon className={sortIconStyle} icon={faCaretDown} />]
			: undefined;
	}, [canSort, header.column]);

	return (
		<Button
			variant="ghost"
			size="sm"
			className={getSortControlStyle({ isSorted })}
			name={`sort_${header.column.id}`}
			onClick={header.column.getToggleSortingHandler()}
			slotRight={slotRight as [ReactNode]}
		>
			{children}
		</Button>
	);
}
