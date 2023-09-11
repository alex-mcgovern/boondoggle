import { faCaretDown, faCaretUp } from "@fortawesome/pro-solid-svg-icons";
import { type ReactNode, useMemo } from "react";

import { Button } from "../button";
import { Icon } from "../icon";
import { getSortControlStyle, sortIconStyle } from "./styles.css";

import type { Header } from "@tanstack/react-table";

type DataTableControlTableHeadSortProps<TData> = {
    /**
     * The children to render inside the sort control.
     */
    children: ReactNode;

    /**
     * The `react-table` header instance to render the sort control for.
     */
    header: Header<TData, unknown>;
};

/**
 * Renders the sort control for a column header.
 */
export function DataTableControlTableHeadSort<TData>({
    children,
    header,
}: DataTableControlTableHeadSortProps<TData>) {
    const canSort = header.column.getCanSort();

    const isSorted = !!header.column.getIsSorted();

    const slotRight = useMemo(() => {
        return canSort
            ? [
                  {
                      asc: <Icon icon={faCaretUp} />,
                      desc: <Icon icon={faCaretDown} />,
                  }[header.column.getIsSorted() as string],
              ] ?? [
                  <Icon
                      className={sortIconStyle}
                      icon={faCaretDown}
                  />,
              ]
            : undefined;
    }, [canSort, header.column]);

    return (
        <Button
            appearance="link"
            className={getSortControlStyle({ isSorted })}
            flexShrink="0"
            marginLeft="auto"
            name={`sort_${header.column.id}`}
            onClick={header.column.getToggleSortingHandler()}
            size="sm"
            slotRight={slotRight as [ReactNode]}
        >
            {children}
        </Button>
    );
}
