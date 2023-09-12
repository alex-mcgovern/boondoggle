import { flexRender } from "@tanstack/react-table";
import clsx from "clsx";

import { thStyles } from "../../styles/stylesheet.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { DataTableControlTableHeadSort } from "../data_table_control_table_head_sort";

import type { Header } from "@tanstack/react-table";

type DataTableLayoutColumnHeaderCellProps<THeaderData> = {
    /**
     * the header for a DataTable column.
     */
    header: Header<THeaderData, unknown>;

    /**
     * Whether the DataTable is sortable or not.
     */
    isSortable: boolean | undefined;

    /**
     * Whether the table head is sticky
     */
    isSticky?: boolean;
};

/**
 * Renders a single column header cell.
 */
export function DataTableLayoutColumnHeaderCell<THeaderData>({
    header,
    isSortable,
    isSticky,
}: DataTableLayoutColumnHeaderCellProps<THeaderData>) {
    if (isSortable) {
        return (
            <div
                className={clsx(
                    thStyles,
                    getSprinkles({
                        background: isSticky ? "white" : undefined,
                        position: isSticky ? "sticky" : undefined,
                        top: isSticky ? "0" : undefined,
                    })
                )}
                style={{
                    width: header.getSize(),
                }}
            >
                <DataTableControlTableHeadSort header={header}>
                    {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                </DataTableControlTableHeadSort>
            </div>
        );
    }

    return (
        <div
            className={clsx(
                thStyles,
                getSprinkles({
                    background: isSticky ? "white" : undefined,
                    position: isSticky ? "sticky" : undefined,
                    top: isSticky ? "0" : undefined,
                })
            )}
            style={{
                width: header.getSize(),
            }}
        >
            {header.isPlaceholder
                ? null
                : flexRender(header.column.columnDef.header, header.getContext())}
        </div>
    );
}
