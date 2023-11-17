import { rankItem } from "@tanstack/match-sorter-utils";
import type { FilterFn } from "@tanstack/react-table";

// biome-ignore lint/suspicious/noExplicitAny: has to be this way
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