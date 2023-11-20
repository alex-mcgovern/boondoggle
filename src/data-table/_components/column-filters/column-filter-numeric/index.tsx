import { Column, RowData } from "@tanstack/react-table";
import { useState } from "react";
import { arrayHasLength } from "../../../../_lib/array-has-length";
import { isTruthy } from "../../../../_lib/is-truthy";
import { TableNumberRangeFilterMode } from "../../../types";
import { FilterDialogTitle } from "../base/FilterBaseDialogTitle";
import { FilterPillMenu } from "../base/FilterPillMenu";
import { FormFilterNumeric } from "./_components/form-filter-numeric";
import { NumericFilterModeProvider } from "./_components/numeric-filter-mode-context";
import { PillTextFilterNumberRange } from "./_components/pill-text-filter-numeric";

type NumberRangeFilterValue = [number | undefined, number | undefined];

function getCurrentFilters<TRowData extends RowData>({
	column,
	transformerNumericFromRaw,
}: {
	column: Column<TRowData>;
	transformerNumericFromRaw?: (
		value: number | undefined,
	) => number | undefined;
}) {
	let currentFilters: NumberRangeFilterValue =
		column.getFilterValue() as NumberRangeFilterValue;

	if (transformerNumericFromRaw && currentFilters) {
		currentFilters = [
			transformerNumericFromRaw(currentFilters[0]),
			transformerNumericFromRaw(currentFilters[1]),
		];
	}

	return currentFilters;
}

function getSmallestLargestValues<TRowData extends RowData>({
	column,
	transformerNumericFromRaw,
}: {
	column: Column<TRowData>;
	transformerNumericFromRaw?: (
		value: number | undefined,
	) => number | undefined;
}) {
	let smallestValue = column.getFacetedMinMaxValues()?.[0];
	let largestValue = column.getFacetedMinMaxValues()?.[1];

	if (transformerNumericFromRaw) {
		smallestValue =
			smallestValue !== undefined
				? transformerNumericFromRaw(smallestValue)
				: undefined;
		largestValue =
			largestValue !== undefined
				? transformerNumericFromRaw(largestValue)
				: undefined;
	}

	return { smallestValue, largestValue };
}

function getMinMax<TRowData extends RowData>({
	column,
	transformerNumericFromRaw,
	currentFilters,
}: {
	currentFilters: NumberRangeFilterValue;
	column: Column<TRowData>;
	transformerNumericFromRaw?: (
		value: number | undefined,
	) => number | undefined;
}) {
	let currentMin = column.getIsFiltered() ? currentFilters[0] : undefined;
	let currentMax = column.getIsFiltered() ? currentFilters[1] : undefined;

	if (transformerNumericFromRaw) {
		currentMin =
			currentMin !== undefined
				? transformerNumericFromRaw(currentMin)
				: undefined;
		currentMax =
			currentMax !== undefined
				? transformerNumericFromRaw(currentMax)
				: undefined;
	}

	return { currentMin, currentMax };
}

export function ColumnFilterNumeric<TRowData extends RowData>({
	strApplyFilter,
	strFilterDialogTitle,
	strFilterPillText,
	strMapNumericFilterMode,
	column,
	transformerNumericFromRaw,
	transformerNumericToRaw,
	strNotANumber,
}: {
	column: Column<TRowData>;
	strMapNumericFilterMode: Record<TableNumberRangeFilterMode, string>;
	strApplyFilter: string;
	strFilterDialogTitle: string;
	strNotANumber: string;
	strFilterPillText: string;
	transformerNumericFromRaw?: (
		value: number | undefined,
	) => number | undefined;
	transformerNumericToRaw?: (value: number | undefined) => number | undefined;
}) {
	const [isOpen, setIsOpen] = useState(false);

	const currentFilters = getCurrentFilters<TRowData>({
		column,
		transformerNumericFromRaw,
	});

	const isFiltered =
		column.getIsFiltered() &&
		arrayHasLength(currentFilters.filter(isTruthy));

	const { largestValue, smallestValue } = getSmallestLargestValues<TRowData>({
		column,
		transformerNumericFromRaw,
	});

	const { currentMin, currentMax } = getMinMax<TRowData>({
		column,
		currentFilters,
		transformerNumericFromRaw,
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
						if (transformerNumericToRaw) {
							return column.setFilterValue(
								v.map(transformerNumericToRaw),
							);
						}
						return column.setFilterValue(v);
					}}
					smallestValue={smallestValue ?? 0}
					transformerNumericToRaw={transformerNumericToRaw}
					strApplyFilter={strApplyFilter}
					strMapNumericFilterMode={strMapNumericFilterMode}
					strNotANumber={strNotANumber}
				/>
			</FilterPillMenu>
		</NumericFilterModeProvider>
	);
}
