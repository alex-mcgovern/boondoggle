import type { Header } from "@tanstack/react-table";
import type { ReactNode } from "react";

import { faSort as faSortUp } from "@fortawesome/pro-duotone-svg-icons/faSort";
import { faSort } from "@fortawesome/pro-solid-svg-icons/faSort";
import { Button as RACButton } from "react-aria-components";

import { Icon } from "../../../icon";
import { sortIconStyle, tableSortButtonCSS } from "./TableSortButton.css";

export function TableSortButton<TData>({
    children,
    header,
}: {
    children: ReactNode;
    header: Header<TData, unknown>;
}) {
    const canSort = header.column.getCanSort();
    const isSorted = !!header.column.getIsSorted();

    const slotRight = canSort
        ? {
              asc: (
                  <Icon
                      className={sortIconStyle}
                      icon={faSortUp}
                  />
              ),
              desc: (
                  <Icon
                      className={sortIconStyle}
                      icon={faSortUp}
                      style={{ transform: "rotate(180deg)" }}
                  />
              ),
          }[header.column.getIsSorted() as string] ?? (
              <Icon
                  className={sortIconStyle}
                  icon={faSort}
              />
          )
        : undefined;

    return (
        <RACButton
            className={(renderProps) =>
                tableSortButtonCSS({
                    ...renderProps,
                    isSorted: isSorted ? "true" : "false",
                })
            }
            name={`sort_${header.column.id}`}
            onPress={header.column.getToggleSortingHandler()}
        >
            {children}
            {slotRight}
        </RACButton>
    );
}
