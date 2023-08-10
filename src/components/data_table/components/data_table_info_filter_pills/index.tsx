import { faTimesCircle } from "@fortawesome/pro-light-svg-icons";
import { type Dispatch, type SetStateAction, useCallback } from "react";

import { arrayHasLength } from "../../../../lib/arrayHasLength";
import { isTruthy } from "../../../../lib/isTruthy";
import { Box } from "../../../Box";
import { Icon } from "../../../Icon";
import { Pill } from "../../../Pill";

import type { ColumnFiltersState } from "@tanstack/react-table";

type DataTableInfoFilterPillsProps = {
  /** The current column filters. */
  columnFilters: ColumnFiltersState;
  /** Converts a column ID to a human-readable string. */
  columnIdToString: (value: string) => string;
  /** Converts a filter value to a human-readable string. */
  filterValueToString: (value: string) => string;
  /** Setter for the column filters. */
  setColumnFilters: Dispatch<SetStateAction<ColumnFiltersState>>;
  /** The text to display for the clear all filters button. */
  strClearAllFilters: string;
};

/**
 * Renders a list of pills for each filter that is currently applied to the DataTable.
 */
export function DataTableInfoFilterPills({
  columnFilters,
  columnIdToString,
  filterValueToString,
  setColumnFilters,
  strClearAllFilters,
}: DataTableInfoFilterPillsProps) {
  /**
   * Callback to clear filters.
   */
  const clearFilter = useCallback(
    (columnFilter: ColumnFiltersState[number]) => {
      return setColumnFilters((old) => {
        return old.filter((oldFilter) => {
          return oldFilter.id !== columnFilter.id;
        });
      });
    },
    [setColumnFilters]
  );

  /** --------------------------------------------- */

  if (!arrayHasLength(columnFilters)) {
    return null;
  }

  /** --------------------------------------------- */

  return (
    <Box display="flex" flexWrap="wrap" gap="spacing_1" marginY="spacing_2">
      <Pill
        as="button"
        colorOverlay="amber"
        onClick={() => {
          return setColumnFilters([]);
        }}
        size="sm"
        slotRight={<Icon icon={faTimesCircle} />}
      >
        {strClearAllFilters}
      </Pill>

      {/** -------------------------------------------- */}

      {columnFilters.map((columnFilter) => {
        if (Array.isArray(columnFilter.value)) {
          return (
            <Pill
              as="button"
              onClick={() => {
                clearFilter(columnFilter);
              }}
              size="sm"
              slotRight={<Icon icon={faTimesCircle} />}
            >
              {filterValueToString(columnFilter.id)}:{" "}
              {columnFilter.value
                .filter(isTruthy)
                .map((val: string) => {
                  return filterValueToString(val);
                })
                .join(", ")}
            </Pill>
          );
        }

        /** -------------------------------------------- */

        return (
          <Pill
            as="button"
            onClick={() => {
              clearFilter(columnFilter);
            }}
            size="sm"
            slotRight={<Icon icon={faTimesCircle} />}
          >
            {columnIdToString(columnFilter.id)}:{" "}
            {filterValueToString(columnFilter.value as string)}
          </Pill>
        );
      })}
    </Box>
  );
}
