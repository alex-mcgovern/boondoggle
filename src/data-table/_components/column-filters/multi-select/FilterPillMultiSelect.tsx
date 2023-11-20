import { Column } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { arrayHasLength } from "../../../../_lib/array-has-length";
import { isTruthy } from "../../../../_lib/is-truthy";
import { Box } from "../../../../box";
import { Button } from "../../../../button";
import { FilterDialogTitle } from "../base/FilterBaseDialogTitle";
import { FilterPillMenu } from "../base/FilterPillMenu";
import {
	activeFilterStringCSS,
	selectItemListCSS,
} from "./FilterPillMultiSelect.css";
import { FilterSelectItem } from "./FilterSelectItem";

export function FilterPillMultiSelect<TRowData>({
	strApplyFilter,
	strFilterDialogTitle,
	strFilterPillText,
	transformerIdToString = (value) => value,
	column,
}: {
	column: Column<TRowData>;
	strApplyFilter: string;
	strFilterDialogTitle: string;
	strFilterPillText: string;
	// biome-ignore lint/suspicious/noExplicitAny: no better alternative
	transformerIdToString?: (value: any) => string;
}) {
	const [isOpen, setIsOpen] = useState(false);

	/** -----------------------------------------------------------------------------
	 * SYNCHRONISING STATE BETWEEN THE FILTER MENU AND THE FILTER PILL
	 * ------------------------------------------------------------------------------- */

	const currentFilters: string[] = column.getFilterValue() as string[];

	const [selectedItems, setSelectedItems] =
		useState<Array<string>>(currentFilters);

	const handleSelection = (value: string) => {
		setSelectedItems((current) => {
			if (current?.includes(value)) {
				return current.filter((item) => item !== value);
			}

			return [...(current ?? []), value];
		});
	};

	useEffect(() => {
		setSelectedItems(currentFilters);
	}, [currentFilters]);

	/** -----------------------------------------------------------------------------
	 * PILL TEXT
	 * ------------------------------------------------------------------------------- */

	const isFiltered =
		column.getIsFiltered() &&
		arrayHasLength(currentFilters.filter(isTruthy));

	const pillText = isFiltered ? (
		<Box display="flex" gap="space_1">
			{strFilterPillText}
			<div>|</div>
			{currentFilters.map((v, i) => {
				return (
					<Box
						as="span"
						className={activeFilterStringCSS}
						color="button_default"
					>
						{transformerIdToString(v)}
						{i < currentFilters.length - 1 ? ", " : ""}
					</Box>
				);
			})}
		</Box>
	) : (
		strFilterPillText
	);

	/** -----------------------------------------------------------------------------
	 * FILTER SELECT ITEMS
	 * ------------------------------------------------------------------------------- */

	const facetKeys = column.getCanFilter()
		? Array.from(column.getFacetedUniqueValues().keys())
		: [];

	const items = useMemo(() => {
		if (!column.getCanFilter()) {
			return [];
		}

		return facetKeys.sort().map((value) => {
			return (
				<FilterSelectItem
					handleSelection={handleSelection}
					label={transformerIdToString(value)}
					key={value}
					value={value}
					defaultChecked={currentFilters?.includes(value)}
				/>
			);
		});
	}, [
		facetKeys,
		handleSelection,
		currentFilters,
		column,
		transformerIdToString,
	]);

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
		<FilterPillMenu
			clearFilters={() => column.setFilterValue(undefined)}
			isFiltered={isFiltered}
			pillText={pillText}
			disabled={!arrayHasLength(facetKeys)}
			isOpen={isOpen}
			onIsOpenChange={setIsOpen}
		>
			<FilterDialogTitle strFilterDialogTitle={strFilterDialogTitle} />

			<div className={selectItemListCSS}>{items}</div>

			<Box paddingX="space_4">
				<Button
					onClick={() => {
						column.setFilterValue(
							arrayHasLength(selectedItems)
								? selectedItems
								: undefined,
						);
						setIsOpen(false);
					}}
					width="100%"
					size="sm"
					name="apply_filter"
				>
					{strApplyFilter}
				</Button>
			</Box>
		</FilterPillMenu>
	);
}
