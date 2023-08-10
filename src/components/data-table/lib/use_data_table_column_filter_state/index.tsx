import { useMemo, useState } from "react";

import { arrayHasLength } from "../../../../lib/arrayHasLength";

import type { ColumnFiltersState } from "@tanstack/react-table";

/**
 * Hook to manage the state of the DataTable column filters.
 */
export const useDataTableColumnFilterState = () => {
  const [initColumnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  );

  const columnFilters: ColumnFiltersState = useMemo(() => {
    return initColumnFilters.filter(({ value }) => {
      if (Array.isArray(value)) {
        return arrayHasLength(value);
      }

      return !!value;
    });
  }, [initColumnFilters]);

  return { columnFilters, setColumnFilters };
};
