import { faSort as faSortUp } from "@fortawesome/pro-duotone-svg-icons/faSort";
import { faSort } from "@fortawesome/pro-solid-svg-icons/faSort";
import type { Header } from "@tanstack/react-table";
import { Button } from "../../../button";
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
				asc: <Icon icon={faSortUp} />,
				desc: (
					<Icon
						icon={faSortUp}
						style={{ transform: "rotate(180deg)" }}
					/>
				),
		  }[header.column.getIsSorted() as string] ?? (
				<Icon className={sortIconStyle} icon={faSort} />
		  )
		: undefined;

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
