import type { FilterFn } from "@tanstack/react-table";

import { rankItem } from "@tanstack/match-sorter-utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
