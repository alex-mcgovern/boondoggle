import { Column } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { arrayHasLength } from "../../../../../lib/array-has-length";
import { isTruthy } from "../../../../../lib/is-truthy";
import { Box } from "../../../../box";
import { Button } from "../../../../button";
import { FilterDialogTitle } from "../base/FilterDialogTitle";
import { FilterPillMenu } from "../base/FilterPillMenu";
import * as styles from "./FilterPillMultiSelect.css";
import { FilterSelectItem } from "./FilterSelectItem";

export function FilterPillMultiSelect<TRowData>({
	strApplyFilter,
	strFilterDialogTitle,
	strFilterPillText,
	valueToString = (value) => value,
	column,
}: {
	column: Column<TRowData>;
	strApplyFilter: string;
	strFilterDialogTitle: string;
	strFilterPillText: string;
	// biome-ignore lint/suspicious/noExplicitAny: no better alternative
	valueToString?: (value: any) => string;
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
						className={styles.activeFilterString}
						color="button_default"
					>
						{valueToString(v)}
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
					label={valueToString(value)}
					key={value}
					value={value}
					defaultChecked={currentFilters?.includes(value)}
				/>
			);
		});
	}, [facetKeys, handleSelection, currentFilters, column, valueToString]);

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

			<div className={styles.selectItemList}>{items}</div>

			<Box padding="space_4">
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
					name="apply_filter"
				>
					{strApplyFilter}
				</Button>
			</Box>
		</FilterPillMenu>
	);
}
