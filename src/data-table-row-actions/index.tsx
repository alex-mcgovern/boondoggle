import { faEllipsis } from "@fortawesome/pro-solid-svg-icons/faEllipsis";
import { RowData } from "@tanstack/react-table";
import { Icon } from "../icon";
import { SelectButton } from "../select/select-button";
import type { SelectButtonProps } from "../select/select-button";
import type { SelectItemShape } from "../select/types";

export type TDataTableRowActions<TData extends RowData> =
	React.JSXElementConstructor<{
		/**
		 * The raw data for the DataTable row.
		 */
		row_data: TData;
	}>;

export function DataTableRowActions({
	items,
}: {
	items: Array<SelectItemShape<string>>;
} & Omit<
	SelectButtonProps<string>,
	"buttonProps" | "items" | "name" | "placement" | "slotRight"
>) {
	return (
		<SelectButton
			buttonProps={{
				appearance: "secondary",
				name: "row_actions",
				onClick: (e: React.ChangeEvent<HTMLButtonElement>) => {
					return e.stopPropagation();
				},
				size: "square_md",
				width: "min-content",
			}}
			items={items}
			name="row_actions"
			placement="bottom-end"
			slotRight={<Icon icon={faEllipsis} />}
			wrapperProps={{
				marginX: "auto",
				width: "min-content",
			}}
		/>
	);
}