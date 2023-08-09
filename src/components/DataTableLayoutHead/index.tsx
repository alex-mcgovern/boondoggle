import { data_table_filter_cell_style } from "../../styles.css";
import { Box } from "../Box";
import { DataTableLayoutColumnHeaderCell } from "../DataTableLayoutColumnHeaderCell";

import type { DataTableFilterComponentType } from "../../types";
import type { Column, Table } from "@tanstack/react-table";

type DataTableLayoutHeadProps<TTableData> = {
  filterComponent?: DataTableFilterComponentType<TTableData>;
  /** The `react-table` instance to control. */
  table: Table<TTableData>;
};

export function DataTableLayoutHead<TTableData>({
  filterComponent: FilterComponent,
  table,
}: DataTableLayoutHeadProps<TTableData>) {
  return (
    <thead>
      {table.getHeaderGroups().map((header_group) => {
        return (
          <tr key={header_group.id}>
            {header_group.headers.map((header) => {
              return (
                <DataTableLayoutColumnHeaderCell<TTableData>
                  header={header}
                  key={header.id}
                />
              );
            })}
          </tr>
        );
      })}

      {FilterComponent &&
        table.getHeaderGroups().map((header_group) => {
          return (
            <tr key={header_group.id}>
              {header_group.headers.map((header) => {
                return (
                  <Box
                    as="td"
                    className={data_table_filter_cell_style}
                    key={header.id}
                  >
                    {header.isPlaceholder ? null : (
                      <Box>
                        {header.column?.getCanFilter() ? (
                          <FilterComponent
                            column={
                              header.column as Column<
                                TTableData,
                                TTableData[keyof TTableData]
                              >
                            }
                          />
                        ) : null}
                      </Box>
                    )}
                  </Box>
                );
              })}
            </tr>
          );
        })}
    </thead>
  );
}
