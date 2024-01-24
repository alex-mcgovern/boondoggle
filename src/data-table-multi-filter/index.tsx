import type { Column } from "@tanstack/react-table";

import { useMemo } from "react";

import type { IterableMenuItem } from "../menu";

import { arrayHasLength } from "../_lib/array-has-length";
import { capitalize } from "../_lib/capitalize";
import {
    FilterButton,
    FilterButtonGroup,
    RemoveFilterButton,
} from "../filter-button-group";
import { MenuButton } from "../menu-button";

export function DataTableMultiFilter<TRowData>({
    column,
}: {
    column: Column<TRowData>;
}) {
    const items: Array<IterableMenuItem<string>> = useMemo(() => {
        return Array.from(column.getFacetedUniqueValues(), ([v]) => ({
            id: v,
            name: typeof v === "string" ? capitalize(v) : v,
        }));
    }, [column]);

    return (
        <FilterButtonGroup isFilterApplied={column.getIsFiltered()}>
            <MenuButton
                items={items}
                onSelectionChange={(v) => {
                    switch (v) {
                        case "all": {
                            return column.setFilterValue(
                                Array.from(
                                    column.getFacetedUniqueValues().keys(),
                                ),
                            );
                        }
                        case undefined: {
                            return column.setFilterValue(undefined);
                        }
                        default: {
                            return column.setFilterValue(Array.from(v));
                        }
                    }
                }}
                placement="bottom start"
                selectionMode="multiple"
            >
                <FilterButton>
                    {capitalize(column.id)}{" "}
                    {arrayHasLength(column.getFilterValue())
                        ? `(${(column.getFilterValue() as string[]).length})`
                        : null}
                </FilterButton>
            </MenuButton>

            {column.getIsFiltered() ? (
                <RemoveFilterButton
                    onPress={() => column.setFilterValue(undefined)}
                />
            ) : null}
        </FilterButtonGroup>
    );
}
