import { Column, RowData } from "@tanstack/react-table";
import { useState } from "react";
import { arrayHasLength } from "../../../../_lib/array-has-length";
import { isTruthy } from "../../../../_lib/is-truthy";
import { FilterDialogTitle } from "../base/filter-dialog-title";
import { FilterPillMenu } from "../base/filter-pill-menu";
import { FormFilterNumeric } from "./_components/form-filter-numeric";
import { NumericFilterModeProvider } from "./_components/numeric-filter-mode-context";
import { PillTextFilterNumberRange } from "./_components/pill-text-filter-numeric";

type NumberRangeFilterValue = [number | undefined, number | undefined];

function getCurrentFilters<TRowData extends RowData>({
	column,
	transformNumericFromRaw,
}: {
	column: Column<TRowData>;
	transformNumericFromRaw?: (value: number | undefined) => number | undefined;
}) {
	let currentFilters: NumberRangeFilterValue =
		column.getFilterValue() as NumberRangeFilterValue;

	if (transformNumericFromRaw && currentFilters) {
		currentFilters = [
			transformNumericFromRaw(currentFilters[0]),
			transformNumericFromRaw(currentFilters[1]),
		];
	}

	return currentFilters;
}

function getSmallestLargestValues<TRowData extends RowData>({
	column,
	transformNumericFromRaw,
}: {
	column: Column<TRowData>;
	transformNumericFromRaw?: (value: number | undefined) => number | undefined;
}) {
	let smallestValue = column.getFacetedMinMaxValues()?.[0];
	let largestValue = column.getFacetedMinMaxValues()?.[1];

	if (transformNumericFromRaw) {
		smallestValue =
			smallestValue !== undefined
				? transformNumericFromRaw(smallestValue)
				: undefined;
		largestValue =
			largestValue !== undefined
				? transformNumericFromRaw(largestValue)
				: undefined;
	}

	return { smallestValue, largestValue };
}

function getMinMax<TRowData extends RowData>({
	column,
	transformNumericFromRaw,
	currentFilters,
}: {
	currentFilters: NumberRangeFilterValue;
	column: Column<TRowData>;
	transformNumericFromRaw?: (value: number | undefined) => number | undefined;
}) {
	let currentMin = column.getIsFiltered() ? currentFilters[0] : undefined;
	let currentMax = column.getIsFiltered() ? currentFilters[1] : undefined;

	if (transformNumericFromRaw) {
		currentMin =
			currentMin !== undefined
				? transformNumericFromRaw(currentMin)
				: undefined;
		currentMax =
			currentMax !== undefined
				? transformNumericFromRaw(currentMax)
				: undefined;
	}

	return { currentMin, currentMax };
}

export function ColumnFilterNumeric<TRowData extends RowData>({
	strFilterDialogTitle,
	strFilterPillText,
	column,
	transformNumericFromRaw,
	transformNumericToRaw,
}: {
	column: Column<TRowData>;
	strFilterDialogTitle: string;
	strFilterPillText: string;
	transformNumericFromRaw?: (value: number | undefined) => number | undefined;
	transformNumericToRaw?: (value: number | undefined) => number | undefined;
}) {
	const [isOpen, setIsOpen] = useState(false);

	const currentFilters = getCurrentFilters<TRowData>({
		column,
		transformNumericFromRaw,
	});

	const isFiltered =
		column.getIsFiltered() &&
		arrayHasLength(currentFilters.filter(isTruthy));

	const { largestValue, smallestValue } = getSmallestLargestValues<TRowData>({
		column,
		transformNumericFromRaw,
	});

	const { currentMin, currentMax } = getMinMax<TRowData>({
		column,
		currentFilters,
		transformNumericFromRaw,
	});

	const pillText = isFiltered ? (
		<PillTextFilterNumberRange
			currentFilters={currentFilters}
			strFilterPillText={strFilterPillText}
		/>
	) : (
		strFilterPillText
	);

	const facetKeys = column.getCanFilter()
		? Array.from(column.getFacetedUniqueValues().keys())
		: [];

	if (!column.getCanFilter()) {
		return null;
	}

	return (
		<NumericFilterModeProvider>
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
				<FormFilterNumeric
					currentMax={currentMax}
					currentMin={currentMin}
					largestValue={largestValue ?? 0}
					setFilter={(v: NumberRangeFilterValue) => {
						if (transformNumericToRaw) {
							column.setFilterValue(v.map(transformNumericToRaw));
						} else {
							column.setFilterValue(v);
						}
						setIsOpen(false);
					}}
					smallestValue={smallestValue ?? 0}
					transformNumericToRaw={transformNumericToRaw}
				/>
			</FilterPillMenu>
		</NumericFilterModeProvider>
	);
}
