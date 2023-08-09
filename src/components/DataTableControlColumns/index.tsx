import { faTableColumns } from "@fortawesome/pro-light-svg-icons";
import { useCallback, useMemo } from "react";

import { isTruthy } from "../../lib/isTruthy";
import { Icon } from "../Icon";
import { SelectMulti } from "../SelectMulti";

import type { SelectItemShape } from "../Select/types";
import type { SelectMultiProps } from "../SelectMulti";
import type { Table } from "@tanstack/react-table";

type SelectedColumnsToStringArgs = {
  /** Added to column count when column count is 1, e.g. "column selected". */
  columnSelectedString: string;
  /** Added to column count when column count is 1, e.g. "columns selected". */
  columnsSelectedString: string;
  /** Items in the select component that are currently selected. */
  selectedItems: Array<SelectItemShape>;
};

/**
 * Returns a string that describes the number of columns selected.
 */
const selectedColumnsToString = ({
  columnSelectedString,
  columnsSelectedString,
  selectedItems,
}: SelectedColumnsToStringArgs) => {
  if (selectedItems.length === 1) {
    return `${selectedItems.length} ${columnSelectedString}`;
  }

  return `${selectedItems.length} ${columnsSelectedString}`;
};

/** ----------------------------------------------------------------------------- */

type GetColumnSelectItemsArgs<TTableData> = {
  /** Converts a column ID to a string to use as the label for the select item. */
  columnIdToString: (id: string) => string;
  /** The `react-table` instance to control. */
  table: Table<TTableData>;
};

/**
 * Returns an array of dropdown items for toggling column visibility.
 */
function getColumnSelectItems<TTableData>({
  columnIdToString,
  table,
}: GetColumnSelectItemsArgs<TTableData>): Array<SelectItemShape> {
  return table
    .getAllLeafColumns()
    .map((column) => {
      if (!column.getCanHide()) {
        return null;
      }
      return {
        as: "button",
        isSelected: column.getIsVisible(),
        label: columnIdToString(column.id),
        onClick: column.toggleVisibility,
        value: column.id,
      };
    })
    .filter(isTruthy);
}

type DataTableControlColumnsProps<TTableData> = {
  /** Converts a column ID to a string to use as the label for the select item. */
  columnIdToString: (id: string) => string;
  /** Added to column count when column count is 1, e.g. "column selected". */
  columnSelectedString: string;
  /** Added to column count when column count is 1, e.g. "columns selected". */
  columnsSelectedString: string;
  /** The `react-table` instance to control. */
  table: Table<TTableData>;
} & Omit<SelectMultiProps, "columns" | "name" | "id" | "items" | "label">;

/**
 * Component for controlling the visibility of columns in a data table.
 */
export function DataTableControlColumns<TTableData>({
  columnIdToString,
  columnSelectedString,
  columnsSelectedString,
  placeholder,
  table,
  ...rest
}: DataTableControlColumnsProps<TTableData>) {
  const configuredSelectedColumnsToString = useCallback(
    (selectedItems: Array<SelectItemShape>) => {
      return selectedColumnsToString({
        columnSelectedString,
        columnsSelectedString,
        selectedItems,
      });
    },
    [columnSelectedString, columnsSelectedString]
  );

  const columnDropdownItems: Array<SelectItemShape> = useMemo(() => {
    return getColumnSelectItems({ columnIdToString, table });
  }, [columnIdToString, table]);

  return (
    <SelectMulti
      id="columns"
      items={columnDropdownItems}
      name="columns"
      placeholder={placeholder}
      selectedItemsToString={configuredSelectedColumnsToString}
      size="sm"
      slotLeft={<Icon icon={faTableColumns} />}
      {...rest}
    />
  );
}
