import { faSort as faSortUp } from "@fortawesome/pro-duotone-svg-icons/faSort";
import { faSort } from "@fortawesome/pro-solid-svg-icons/faSort";
import type { Header } from "@tanstack/react-table";
import { Icon } from "../../../icon";
import { getSortControlStyle, sortIconStyle } from "./TableSortButton.css";

export function TableSortButton<TData>({
	children,
	header,
}: {
	children: React.ReactNode;
	header: Header<TData, unknown>;
}) {
	const canSort = header.column.getCanSort();
	const isSorted = !!header.column.getIsSorted();

	const slotRight = canSort
		? {
				asc: <Icon className={sortIconStyle} icon={faSortUp} />,
				desc: (
					<Icon
						className={sortIconStyle}
						icon={faSortUp}
						style={{ transform: "rotate(180deg)" }}
					/>
				),
		  }[header.column.getIsSorted() as string] ?? (
				<Icon className={sortIconStyle} icon={faSort} />
		  )
		: undefined;

	return (
		<button
			type="button"
			className={getSortControlStyle({ isSorted })}
			name={`sort_${header.column.id}`}
			onClick={header.column.getToggleSortingHandler()}
		>
			{children}
			{slotRight}
		</button>
	);
}
