import { faTableRows } from "@fortawesome/pro-light-svg-icons";
import { useCallback, useMemo } from "react";

import { Icon } from "../../../Icon";
import { SelectSingle } from "../../../SelectSingle";

import type { SelectItemShape } from "../../../Select/types";
import type { SelectSingleProps } from "../../../SelectSingle";
import type { Table } from "@tanstack/react-table";
import type { UseComboboxStateChange } from "downshift";

/** ----------------------------------------------------------------------------- */

type GetPageSizeDropdownItemsArgs = {
  /** String added to the page size for each item in the select, e.g. "Show 10". */
  strShow: string;
};

/**
 * Returns an array of dropdown items for changing the page size.
 */
const getPageSizeDropdownItems = ({
  strShow,
}: GetPageSizeDropdownItemsArgs): Array<SelectItemShape> => {
  return [
    {
      as: "button",
      label: `${strShow} ${10}`,
      value: "10",
    },
    {
      label: `${strShow} ${25}`,
      value: "25",
    },
    {
      label: `${strShow} ${50}`,
      value: "50",
    },
  ];
};

/** ----------------------------------------------------------------------------- */

type DataTableControlPageSizeProps<TTableData> = {
  /** String added to the page size for each item in the select, e.g. "Show 10". */
  strShow: string;
  /** The `react-table` instance to control. */
  table: Table<TTableData>;
} & Omit<SelectSingleProps, "items" | "name" | "placeholder">;

/**
 * A control for changing the page size of a table.
 */
export function DataTableControlPageSize<TTableData>({
  strShow,
  table,
  ...rest
}: DataTableControlPageSizeProps<TTableData>) {
  const selectItems = useMemo(() => {
    return getPageSizeDropdownItems({
      strShow,
    });
  }, [strShow]);

  const handleChange = useCallback(
    (changes: UseComboboxStateChange<SelectItemShape>) => {
      return table.setPageSize(Number(changes.selectedItem?.value));
    },
    [table]
  );

  return (
    <SelectSingle
      id="page_size"
      initialSelectedItem={selectItems[0]}
      items={selectItems}
      name="page_size"
      onChange={handleChange}
      placeholder={selectItems[0].label}
      size="sm"
      slotLeft={<Icon icon={faTableRows} />}
      {...rest}
    />
  );
}
