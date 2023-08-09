import { useCallback } from "react";

import { Box } from "../Box";
import { Input } from "../Input";

import type { InputProps } from "../Input";
import type { Column } from "@tanstack/react-table";
import type { ChangeEvent } from "react";

/** ----------------------------------------------------------------------------- */

const MIN_MAX_INPUT_PROPS: Omit<
  InputProps,
  "name" | "placeholder" | "id" | "name" | "label"
> = {
  hasBorder: false,
  min: 0,
  size: "sm",
  step: 10000,
  type: "number",
  wrapperProps: { __minWidth: "5rem" },
};

/** ----------------------------------------------------------------------------- */

type DataTableFilterMinMaxProps<TColumnData> = {
  /** The `react-table` column instance to filter. */
  column: Column<TColumnData, TColumnData[keyof TColumnData]>;
  /** Placeholder for the maximum input. */
  strMax: string;
  /** Placeholder for the minimum input. */
  strMin: string;
};

/**
 * A filter component for filtering numeric columns by a minimum and maximum
 */
export function DataTableFilterMinMax<TColumnData>({
  column,
  strMax,
  strMin,
}: DataTableFilterMinMaxProps<TColumnData>) {
  const filterMin = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      return column.setFilterValue((old: [number, number]) => {
        return [e.target.value, old?.[1]];
      });
    },
    [column]
  );

  const filterMax = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      return column.setFilterValue((old: [number, number]) => {
        return [old?.[0], e.target.value];
      });
    },
    [column]
  );

  return (
    <Box display="flex">
      <Input
        {...MIN_MAX_INPUT_PROPS}
        name="filter_current_balance_min"
        onChange={filterMin}
        placeholder={strMin}
        value={(column.getFilterValue() as [number, number])?.[0] ?? ""}
      />
      <Box __width="1px" borderLeft="border_default" />
      <Input
        {...MIN_MAX_INPUT_PROPS}
        name="filter_current_balance_max"
        onChange={filterMax}
        placeholder={strMax}
        value={(column.getFilterValue() as [number, number])?.[1] ?? ""}
      />
    </Box>
  );
}
