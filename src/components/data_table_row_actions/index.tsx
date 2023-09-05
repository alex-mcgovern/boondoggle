import { faEllipsis } from "@fortawesome/sharp-regular-svg-icons";

import { Icon } from "../icon";
import { SelectButton } from "../select/select_button";

import type { SelectButtonProps } from "../select/select_button";
import type { SelectItemShape } from "../select/types";

export type DataTableRowActionsProps = {
    /**
     * An array of Select items to render in the row actions menu.
     */
    items: Array<SelectItemShape>;
} & Omit<SelectButtonProps, "buttonProps" | "items" | "name" | "placement" | "slotRight">;

/**
 * Renders a `SelectButton` configured to act as a DataTable row actions menu.
 */
export function DataTableRowActions({ items }: DataTableRowActionsProps) {
    return (
        <SelectButton
            buttonProps={{
                appearance: "secondary",
                name: "select_button_data_table_team",
                size: "square_md",
            }}
            items={items}
            name="select_button_data_table_team"
            placement="bottom-end"
            slotRight={[<Icon icon={faEllipsis} />]}
            wrapperProps={{
                marginLeft: "auto",
                width: "min-content",
            }}
        />
    );
}
