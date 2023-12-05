import { Column } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { arrayHasLength } from "../../../../_lib/array-has-length";
import { isTruthy } from "../../../../_lib/is-truthy";
import { Box } from "../../../../box";
import { FilterDialogTitle } from "../base/filter-dialog-title";
import { FilterPillMenu } from "../base/filter-pill-menu";
import {
	activeFilterStringCSS,
	multiFilterItemCSS,
	multiFilterItemCheckboxCSS,
	multiFilterItemTextCSS,
	multiFilterListCSS,
} from "./styles.css";
import { Button } from "../../../../v2-button";
import { sprinkles } from "../../../../sprinkles/index.css";

const ColumnMultiFilterItem = ({
	defaultChecked,
	label,
	value,
	handleSelection,
}: {
	handleSelection: (value: string) => void;
	defaultChecked: boolean | undefined;
	label: string;
	value: string;
}) => {
	return (
		<Box
			className={multiFilterItemCSS}
			as="label"
			htmlFor={`item_${value}`}
			display="flex"
			alignItems="center"
			fontStyle="bodyMd"
			gap="space_2"
			marginBottom="space_4"
		>
			<Box
				value={value}
				as="input"
				className={multiFilterItemCheckboxCSS}
				defaultChecked={defaultChecked}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					handleSelection(e.target.value)
				}
				// tabIndex={-1}
				type="checkbox"
				id={`item_${value}`}
			/>
			<div className={multiFilterItemTextCSS}>{label}</div>
		</Box>
	);
};

export function ColumnMultiFilter<TRowData>({
	strApplyFilter,
	strFilterDialogTitle,
	strFilterPillText,
	transformValueToString = (value) => value,
	column,
}: {
	column: Column<TRowData>;
	strApplyFilter: string;
	strFilterDialogTitle: string;
	strFilterPillText: string;
	// biome-ignore lint/suspicious/noExplicitAny: no better alternative
	transformValueToString?: (value: any) => string;
}) {
	const [isOpen, setIsOpen] = useState(false);

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
						key={v}
						className={activeFilterStringCSS}
						color="button_default"
					>
						{transformValueToString ? transformValueToString(v) : v}
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

		return facetKeys.sort().map((v) => {
			return (
				<ColumnMultiFilterItem
					handleSelection={handleSelection}
					label={
						transformValueToString ? transformValueToString(v) : v
					}
					key={v}
					value={v}
					defaultChecked={currentFilters?.includes(v)}
				/>
			);
		});
	}, [
		facetKeys,
		handleSelection,
		currentFilters,
		column,
		transformValueToString,
	]);

	if (!column.getCanFilter()) {
		return null;
	}

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

			<div className={multiFilterListCSS}>{items}</div>

			<Box paddingX="space_4">
				<Button
					onPress={() => {
						column.setFilterValue(
							arrayHasLength(selectedItems)
								? selectedItems
								: undefined,
						);
						setIsOpen(false);
					}}
					className={sprinkles({
						width: "100%",
						marginBottom: "space_4",
					})}
					size="sm"
					name="apply_filter"
				>
					{strApplyFilter}
				</Button>
			</Box>
		</FilterPillMenu>
	);
}
