import { faSearch } from "@fortawesome/pro-light-svg-icons";
import { useMemo } from "react";

import { Icon } from "../Icon";
import { Input } from "../Input";

import type { InputProps } from "../Input";
import type { FilterAppearance } from "../core.ui.data_table/types";
import type { Column } from "@tanstack/react-table";

type CustomizableInputProps = Partial<InputProps>;

const getInputProps = (
  appearance: FilterAppearance
): CustomizableInputProps => {
  switch (appearance) {
    case "TABLE_CELL": {
      return {
        flexGrow: "1",
        hasBorder: false,
        size: "sm",
        wrapperProps: { width: "100%" },
      };
    }

    case "INPUT": {
      return {};
    }

    default: {
      return exhaustiveSwitchGuard(appearance);
    }
  }
};

type DataTableFilterStringProps<TTableData> = {
  appearance?: "TABLE_CELL" | "INPUT";
  column?: Column<TTableData, unknown>;
} & Partial<InputProps>;

export function DataTableFilterString<TTableData>({
  appearance = "TABLE_CELL",
  column,
  placeholder = I18N.placeholder_filter,
  ...rest
}: DataTableFilterStringProps<TTableData>) {
  const appearance_props = useMemo(() => {
    return getInputProps(appearance);
  }, [appearance]);

  if (!column) {
    return null;
  }

  return (
    <Input
      {...(appearance_props as InputProps)}
      {...(rest as InputProps)}
      autoComplete="off"
      isClearable
      name={`filter_${column.id}`}
      onChange={(e) => {
        return column.setFilterValue(e.target.value);
      }}
      placeholder={placeholder}
      slotLeft={<Icon icon={faSearch} />}
      value={(column.getFilterValue() ?? "") as string}
    />
  );
}
