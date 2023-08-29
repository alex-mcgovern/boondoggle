import { faEllipsis } from "@fortawesome/sharp-regular-svg-icons";

import { Icon } from "../icon";
import { SelectButton } from "../select/SelectButton";

import type { SelectButtonProps } from "../select/SelectButton";
import type { SelectItemShape } from "../select/types";

export type DataTableRowActionsProps = {
  items: Array<SelectItemShape>;
} & Omit<
  SelectButtonProps,
  "buttonProps" | "items" | "name" | "placement" | "slotRight"
>;

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
