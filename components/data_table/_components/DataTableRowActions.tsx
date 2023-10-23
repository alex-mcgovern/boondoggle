import { faEllipsis } from "@fortawesome/pro-solid-svg-icons";

import { Icon } from "../../icon";
import { SelectButton } from "../../select/select_button";

import type { ChangeEvent } from "react";
import type { SelectButtonProps } from "../../select/select_button";
import type { SelectItemShape } from "../../select/types";

/**
 * Renders a `SelectButton` configured to act as a DataTable row actions menu.
 */
export function DataTableRowActions({
	items,
}: {
	/**
	 * An array of Select items to render in the row actions menu.
	 */
	items: Array<SelectItemShape<string>>;
} & Omit<
	SelectButtonProps<string>,
	"buttonProps" | "items" | "name" | "placement" | "slotRight"
>) {
	return (
		<SelectButton
			buttonProps={{
				variant: "secondary",
				name: "select_button_data_table_team",
				size: "square_md",
				width: "min-content",
			}}
			items={items}
			name="select_button_data_table_team"
			placement="bottom-end"
			slotRight={<Icon icon={faEllipsis} />}
			wrapperProps={{
				marginLeft: "auto",
				width: "min-content",
			}}
		/>
	);
}
