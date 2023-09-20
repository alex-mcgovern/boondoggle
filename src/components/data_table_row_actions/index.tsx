import { faEllipsis } from "@fortawesome/pro-solid-svg-icons";

import { Icon } from "../icon";
import { SelectButton } from "../select/select_button";

import type { SelectButtonProps } from "../select/select_button";
import type { SelectItemShape } from "../select/types";
import type { ChangeEvent } from "react";

export type DataTableRowActionsProps = {
    /**
     * An array of Select items to render in the row actions menu.
     */
    items: Array<SelectItemShape<string>>;
} & Omit<SelectButtonProps<string>, "buttonProps" | "items" | "name" | "placement" | "slotRight">;

/**
 * Renders a `SelectButton` configured to act as a DataTable row actions menu.
 */
export function DataTableRowActions({ items }: DataTableRowActionsProps) {
    return (
        <SelectButton
            // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
            buttonProps={{
                appearance: "secondary",
                name: "select_button_data_table_team",
                onClick: (e: ChangeEvent<HTMLButtonElement>) => {
                    return e.preventDefault(); // Prevent triggering the row click event if there is one
                },
                size: "square_md",
            }}
            items={items}
            name="select_button_data_table_team"
            placement="bottom-end"
            // eslint-disable-next-line react-perf/jsx-no-new-array-as-prop
            slotRight={[<Icon icon={faEllipsis} />]}
            // eslint-disable-next-line react-perf/jsx-no-new-object-as-prop
            wrapperProps={{
                marginLeft: "auto",
                width: "min-content",
            }}
        />
    );
}
