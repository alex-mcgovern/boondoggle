import { faEllipsis } from "@fortawesome/sharp-regular-svg-icons";

import { Icon } from "../icon";
import { SelectButton } from "../select_button";

import type { SelectItemShape } from "../select/types";
import type { SelectButtonProps } from "../select_button";

type DataTableActiveUsersActionsProps = {
  items: Array<SelectItemShape>;
} & Omit<
  SelectButtonProps,
  "buttonProps" | "items" | "name" | "placement" | "slotRight"
>;

export function DataTableRowActions({
  items,
}: DataTableActiveUsersActionsProps) {
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
