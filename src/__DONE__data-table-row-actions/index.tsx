import { faEllipsis } from "@fortawesome/pro-solid-svg-icons/faEllipsis";
import { RowData } from "@tanstack/react-table";
import { Icon } from "../__DONE__icon";
import { MenuButton } from "../__DONE__menu-button";

export type TV2DataTableRowActions<TData extends RowData> =
	React.JSXElementConstructor<{
		/**
		 * The raw data for the DataTable row.
		 */
		row_data: TData;
	}>;

export function V2DataTableRowActions<TActionId extends string>({
	menuProps,
}: Omit<React.ComponentProps<typeof MenuButton<TActionId>>, "buttonProps">) {
	return (
		<MenuButton<TActionId>
			menuProps={menuProps}
			popoverProps={{
				placement: "bottom end",
			}}
			buttonProps={{
				appearance: "ghost",
				size: "square_sm",
				name: "row_actions",
				children: <Icon icon={faEllipsis} />,
			}}
		/>
	);
}
