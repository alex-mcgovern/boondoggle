import { faSearch } from "@fortawesome/pro-light-svg-icons";
import { useMemo } from "react";

import { exhaustiveSwitchGuard } from "../../../../lib/exhaustiveSwitchGuard";
import { Icon } from "../../../Icon";
import { Input } from "../../../Input";

import type { WithPlaceholder } from "../../../../types";
import type { InputProps } from "../../../Input";
import type { FilterAppearance } from "../../types";
import type { Column } from "@tanstack/react-table";

/** ----------------------------------------------------------------------------- */

type CustomizableInputProps = Partial<InputProps>;

/**
 * Returns the props for the input based on the appearance.
 */
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

/** ----------------------------------------------------------------------------- */

type DataTableFilterStringProps<TTableData> = Partial<InputProps> &
  WithPlaceholder & {
    /** The appearance of the filter. */
    appearance?: "TABLE_CELL" | "INPUT";
    /** The `react-table` column instance to filter. */
    column?: Column<TTableData, unknown>;
  };

/**
 * Renders a string filter for the DataTable.
 */
export function DataTableFilterString<TTableData>({
  appearance = "TABLE_CELL",
  column,
  placeholder,
  ...rest
}: DataTableFilterStringProps<TTableData>) {
  const appearanceProps = useMemo(() => {
    return getInputProps(appearance);
  }, [appearance]);

  if (!column) {
    return null;
  }

  return (
    <Input
      {...(appearanceProps as InputProps)}
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
