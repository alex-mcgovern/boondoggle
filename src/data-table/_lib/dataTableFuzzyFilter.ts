import type { FilterFn } from "@tanstack/react-table";

import { rankItem } from "@tanstack/match-sorter-utils";

export const dataTableFuzzyFilter: FilterFn<any> = (
    row,
    columnId,
    value,
    addMeta,
) => {
    const itemRank = rankItem(row.getValue(columnId), value);

    addMeta({
        itemRank,
    });

    return itemRank.passed;
};
