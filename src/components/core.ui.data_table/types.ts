import type { Column } from "@tanstack/react-table";
import type { ComponentType } from "react";

export type DataTableFilterComponentType<TTableData> = ComponentType<{
  column: Column<TTableData> | unknown;
}>;

export type FilterAppearance = "TABLE_CELL" | "INPUT";
