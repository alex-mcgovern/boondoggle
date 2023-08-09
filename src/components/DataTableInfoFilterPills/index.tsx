import { faTimesCircle } from "@fortawesome/pro-light-svg-icons";

import { I18N } from "../../../core/constants/I18N";
import { arrayHasLength } from "../../../core/lib/validation/array_has_length";
import { isTruthy } from "../../../core/lib/validation/is_truthy";
import { Box } from "../Box";
import { Icon } from "../Icon";
import { Pill } from "../Pill";

import type { ColumnFiltersState } from "@tanstack/react-table";
import type { Dispatch, SetStateAction } from "react";

type DataTableInfoFilterPillsProps = {
  column_filters: ColumnFiltersState;
  filterToString: (value: string) => string;
  setColumnFilters: Dispatch<SetStateAction<ColumnFiltersState>>;
};

export function DataTableInfoFilterPills({
  column_filters,
  filterToString,
  setColumnFilters,
}: DataTableInfoFilterPillsProps) {
  if (!arrayHasLength(column_filters)) {
    return null;
  }

  /** --------------------------------------------- */

  const clearFilter = (column_filter: ColumnFiltersState[number]) => {
    return setColumnFilters((old) => {
      return old.filter((old_column_filter) => {
        return old_column_filter.id !== column_filter.id;
      });
    });
  };

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
        {I18N.clear_all_filters}
      </Pill>

      {/** -------------------------------------------- */}

      {column_filters.map((column_filter) => {
        if (Array.isArray(column_filter.value)) {
          return (
            <Pill
              as="button"
              onClick={() => {
                clearFilter(column_filter);
              }}
              size="sm"
              slotRight={<Icon icon={faTimesCircle} />}
            >
              {filterToString(column_filter.id)}:{" "}
              {column_filter.value
                .filter(isTruthy)
                .map((val: string) => {
                  return filterToString(val);
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
              clearFilter(column_filter);
            }}
            size="sm"
            slotRight={<Icon icon={faTimesCircle} />}
          >
            {filterToString(column_filter.id)}:{" "}
            {filterToString(column_filter.value as string)}
          </Pill>
        );
      })}
    </Box>
  );
}
