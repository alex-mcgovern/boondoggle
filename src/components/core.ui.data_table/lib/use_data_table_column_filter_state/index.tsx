import { useMemo, useState } from "react";

import { arrayHasLength } from "../../../core/lib/validation/array_has_length";

import type { ColumnFiltersState } from "@tanstack/react-table";

export const useDataTableColumnFilterState = () => {
  const [init_column_filters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  );

  const column_filters: ColumnFiltersState = useMemo(() => {
    return init_column_filters.filter(({ value }) => {
      if (Array.isArray(value)) {
        return arrayHasLength(value);
      }

      return !!value;
    });
  }, [init_column_filters]);

  return { column_filters, setColumnFilters };
};
