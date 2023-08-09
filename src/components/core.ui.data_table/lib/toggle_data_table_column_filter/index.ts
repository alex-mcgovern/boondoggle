import type { CellContext } from "@tanstack/react-table";

type ToggleDataTableColumnFilterArgs<
  TCellData,
  TCellDataKey extends TCellData[keyof TCellData]
> = {
  info: CellContext<TCellData, TCellDataKey>;
};

export function toggleDataTableColumnFilter<
  TCellData,
  TCellDataKey extends TCellData[keyof TCellData]
>({ info }: ToggleDataTableColumnFilterArgs<TCellData, TCellDataKey>) {
  return info.column.setFilterValue((old_filters?: Array<string>) => {
    if (!Array.isArray(old_filters)) {
      return [info.getValue()];
    }

    if (
      old_filters.some((old_filter) => {
        return old_filter === info.getValue();
      })
    ) {
      return old_filters.filter((old_filter) => {
        return old_filter !== info.getValue();
      });
    }

    return [...old_filters, info.getValue()];
  });
}
