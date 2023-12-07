import { faEllipsis } from "@fortawesome/pro-solid-svg-icons/faEllipsis";
import { RowData } from "@tanstack/react-table";
import { Icon } from "../v2-icon";
import { MenuButton } from "../v2-menu-button";

export type TV2DataTableRowActions<TData extends RowData> =
	React.JSXElementConstructor<{
		/**
		 * The raw data for the DataTable row.
		 */
		row_data: TData;
	}>;

export function V2DataTableRowActions({
	menuProps,
}: Omit<React.ComponentProps<typeof MenuButton>, "buttonProps">) {
	return (
		<MenuButton
			menuProps={menuProps}
			popoverProps={{
				placement: "bottom end",
			}}
			size="sm"
			buttonProps={{
				children: <Icon icon={faEllipsis} />,
			}}
		/>
	);
}
