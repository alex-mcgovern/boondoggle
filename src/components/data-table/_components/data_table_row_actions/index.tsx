import { faEllipsis } from "@fortawesome/pro-solid-svg-icons";

import { Icon } from "../../../icon";
import { SelectButton } from "../../../select/select_button";

import type { ChangeEvent } from "react";
import type { SelectButtonProps } from "../../../select/select_button";
import type { SelectItemShape } from "../../../select/types";

export type DataTableRowActionsProps = {
	/**
	 * An array of Select items to render in the row actions menu.
	 */
	items: Array<SelectItemShape<string>>;
} & Omit<
	SelectButtonProps<string>,
	"buttonProps" | "items" | "name" | "placement" | "slotRight"
>;

/**
 * Renders a `SelectButton` configured to act as a DataTable row actions menu.
 */
export function DataTableRowActions({ items }: DataTableRowActionsProps) {
	return (
		<SelectButton
			// eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
			buttonProps={{
				appearance: "secondary",
				name: "row_actions",
				onClick: (e: ChangeEvent<HTMLButtonElement>) => {
					return e.stopPropagation(); // Prevent triggering the row click event if there is one
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
