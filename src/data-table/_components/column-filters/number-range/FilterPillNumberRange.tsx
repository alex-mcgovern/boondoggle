import { Column } from "@tanstack/react-table";
import { useState } from "react";
import { arrayHasLength } from "../../../../_lib/array-has-length";
import { isTruthy } from "../../../../_lib/is-truthy";
import { FilterDialogTitle } from "../base/FilterDialogTitle";
import { FilterPillMenu } from "../base/FilterPillMenu";
import { TableNumberRangeFilterModeProvider } from "./FilterModeContext";
import { FormFilterNumberRange } from "./FormFilterNumberRange";
import { PillTextFilterNumberRange } from "./PillTextFilterNumberRange";
import { TableNumberRangeFilterMode } from "../../../types";

export function FilterPillNumberRange<TRowData>({
	strings: {
		strApplyFilter,
		strFilterDialogTitle,
		strFilterPillText,
		strMapFilterMode,
	},
	column,
}: {
	column: Column<TRowData>;
	strings: {
		strMapFilterMode: Record<TableNumberRangeFilterMode, string>;
		strApplyFilter: string;
		strFilterDialogTitle: string;
		strFilterPillText: string;
	};
}) {
	const [isOpen, setIsOpen] = useState(false);

	/** -----------------------------------------------------------------------------
	 * SYNCHRONISING STATE BETWEEN THE FILTER MENU AND THE FILTER PILL
	 * ------------------------------------------------------------------------------- */

	const currentFilters: [number, number] = column.getFilterValue() as [
		number,
		number,
	];

	/** -----------------------------------------------------------------------------
	 * PILL TEXT
	 * ------------------------------------------------------------------------------- */

	const isFiltered =
		column.getIsFiltered() &&
		arrayHasLength(currentFilters.filter(isTruthy));

	const smallestValue = column.getFacetedMinMaxValues()?.[0];
	const largestValue = column.getFacetedMinMaxValues()?.[1];

	const currentMin = column.getIsFiltered() ? currentFilters[0] : undefined;
	const currentMax = column.getIsFiltered() ? currentFilters[1] : undefined;

	const pillText = isFiltered ? (
		<PillTextFilterNumberRange
			currentFilters={currentFilters}
			strFilterPillText={strFilterPillText}
		/>
	) : (
		strFilterPillText
	);

	/** -----------------------------------------------------------------------------
	 * FILTER SELECT ITEMS
	 * ------------------------------------------------------------------------------- */

	const facetKeys = column.getCanFilter()
		? Array.from(column.getFacetedUniqueValues().keys())
		: [];

	/** -----------------------------------------------------------------------------
	 * EARLY RETURN IF NO FILTERS
	 * ------------------------------------------------------------------------------- */

	if (!column.getCanFilter()) {
		return null;
	}

	/** -----------------------------------------------------------------------------
	 * RENDER
	 * ------------------------------------------------------------------------------- */

	return (
		<TableNumberRangeFilterModeProvider>
			<FilterPillMenu
				clearFilters={() => column.setFilterValue(undefined)}
				isFiltered={isFiltered}
				pillText={pillText}
				disabled={!arrayHasLength(facetKeys)}
				isOpen={isOpen}
				onIsOpenChange={setIsOpen}
			>
				<FilterDialogTitle
					strFilterDialogTitle={strFilterDialogTitle}
				/>
				<FormFilterNumberRange
					currentMax={currentMax}
					currentMin={currentMin}
					largestValue={largestValue ?? 0}
					setFilter={(v: [number | undefined, number | undefined]) =>
						column.setFilterValue(v)
					}
					smallestValue={smallestValue ?? 0}
					strApplyFilter={strApplyFilter}
					strMapFilterMode={strMapFilterMode}
					strErrorTooLarge="Must be less than "
					strErrorTooSmall="Must be greater than "
				/>
			</FilterPillMenu>
		</TableNumberRangeFilterModeProvider>
	);
}
