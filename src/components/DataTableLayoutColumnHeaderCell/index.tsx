import {
  faArrowDown,
  faArrowUp,
  faArrowUpArrowDown,
} from "@fortawesome/pro-light-svg-icons";
import { flexRender } from "@tanstack/react-table";

import { Button } from "../Button";
import { Icon } from "../Icon";

import type { Header } from "@tanstack/react-table";

type DataTableSortingControlsProps<THeaderData> = {
  header: Header<THeaderData, unknown>;
};

function DataTableSortingControls<THeaderData>({
  header,
}: DataTableSortingControlsProps<THeaderData>) {
  return (
    {
      asc: <Icon icon={faArrowDown} />,
      desc: <Icon icon={faArrowUp} />,
    }[header.column.getIsSorted() as string] ?? (
      <Icon icon={faArrowUpArrowDown} />
    )
  );
}

type DataTableLayoutColumnHeaderCellProps<THeaderData> = {
  header: Header<THeaderData, unknown>;
};

export function DataTableLayoutColumnHeaderCell<THeaderData>({
  header,
}: DataTableLayoutColumnHeaderCellProps<THeaderData>) {
  return (
    <th>
      <Button
        appearance="link"
        flexShrink="0"
        marginLeft="auto"
        name={`sort_${header.column.id}`}
        onClick={header.column.getToggleSortingHandler()}
        size="sm"
        slotRight={
          header.column.getCanSort() ? (
            <DataTableSortingControls header={header} />
          ) : null
        }
      >
        {header.isPlaceholder
          ? null
          : flexRender(header.column.columnDef.header, header.getContext())}
      </Button>
    </th>
  );
}
