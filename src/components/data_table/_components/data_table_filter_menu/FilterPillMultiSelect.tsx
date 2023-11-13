import { Column } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { arrayHasLength } from "../../../../lib/array_has_length";
import { isTruthy } from "../../../../lib/is_truthy";
import { Box } from "../../../box";
import { Button } from "../../../button";
import { FilterPillMenu } from "./FilterPillMenu";
import { FilterSelectItem } from "./FilterSelectItem";

export function FilterPillMultiSelect<TRowData>({
	strApply,
	strMenuTitle,
	strPillText,
	column,
}: {
	column: Column<TRowData>;
	strApply: string;
	strMenuTitle: string;
	strPillText: string;
}) {
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
		<span>
			{strPillText} |{" "}
			<Box as="span" color="button_default">
				{currentFilters.join(", ")}
			</Box>
		</span>
	) : (
		strPillText
	);

	/** -----------------------------------------------------------------------------
	 * FILTER SELECT ITEMS
	 * ------------------------------------------------------------------------------- */

	const facetKeys = column.getCanFilter()
		? Array.from(column.getFacetedUniqueValues().keys())
		: [];
	console.debug("debug  facetKeys:", facetKeys);

	const items = useMemo(() => {
		if (!column.getCanFilter()) {
			return [];
		}

		return facetKeys.sort().map((value) => {
			return (
				<FilterSelectItem
					handleSelection={handleSelection}
					label={value}
					key={value}
					value={value}
					defaultChecked={currentFilters?.includes(value)}
				/>
			);
		});
	}, [facetKeys, handleSelection, currentFilters, column]);

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
		>
			{strMenuTitle && (
				<Box as="h3" fontStyle="h6" marginBottom="space_4">
					{strMenuTitle}
				</Box>
			)}

			{items}

			<Button
				onClick={() => {
					column.setFilterValue(
						arrayHasLength(selectedItems)
							? selectedItems
							: undefined,
					);
				}}
				width="100%"
				name="apply_filter"
			>
				{strApply}
			</Button>
		</FilterPillMenu>
	);
}
