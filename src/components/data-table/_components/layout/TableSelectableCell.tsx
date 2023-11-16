import type { Row, RowData } from "@tanstack/react-table";
import { Box } from "../../../box/_components/Box";

export function TableSelectableCell<TData extends RowData>({
	row,
}: {
	row: Row<TData>;
}) {
	return (
		<Box alignItems="center" display="flex">
			<input
				defaultChecked={row.getIsSelected()}
				onChange={row.getToggleSelectedHandler()}
				type="checkbox"
			/>
		</Box>
	);
}
