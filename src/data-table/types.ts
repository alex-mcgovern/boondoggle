import { RowData } from "@tanstack/react-table";

export type TableNumberRangeFilterMode =
	| "is_between"
	| "is_equal_to"
	| "is_greater_than"
	| "is_less_than";

export type PaginationOptions = {
	/**
	 * String to use for the next button
	 */
	strNext: string;

	/**
	 * String to use for the page label
	 */
	strPage: string;

	/**
	 * String to use for the previous button
	 */
	strPrev: string;

	/**
	 * String to use for the results label
	 */
	strResults: string;
};

export type FilteringOptions<TRowData extends RowData> = {
	/**
	 * String to use for apply filter button
	 */
	strApplyFilter: string;

	/**
	 * The text to display for the clear filters button.
	 */
	strClearAllFilters: string;

	/**
	 * The text to display for the clear all filters button in the search input component.
	 */
	strClearFilterInput: string;

	/**
	 * String to use for filter field placeholder
	 */
	strFilterPlaceholder: string;

	/**
	 * A key-value map of column IDs to their filter configurations.
	 */
	columnFilterConfig?: Partial<
		Record<
			keyof TRowData,
			| {
					type: "MULTI_SELECT";
					strFilterDialogTitle: string;
					strFilterPillText: string;
					// biome-ignore lint/suspicious/noExplicitAny: Using any here because we don't know what the type of the data is
					transformerIdToString: (value: any) => string;
			  }
			| {
					type: "NUMBER_RANGE";
					strFilterDialogTitle: string;
					strFilterPillText: string;
					transformerNumericFromRaw?: (
						value: number | undefined,
					) => number | undefined;
					transformerNumericToRaw?: (
						value: number | undefined,
					) => number | undefined;
					strMapFilterMode: Record<
						TableNumberRangeFilterMode,
						string
					>;
			  }
		>
	>;
};

// ===== OLD TYPES ====

export type WithTableOptionalPagination =
	/**
	 * If `isPaginated` is `false` or `undefined`, `strPage` and `strResults` should not be passed.
	 */
	| {
			/**
			 * Whether to show pagination
			 */
			isPaginated: true;

			/**
			 * String to use for the next button
			 */
			strNext: string;

			/**
			 * String to use for the page label
			 */
			strPage: string;

			/**
			 * String to use for the previous button
			 */
			strPrev: string;

			/**
			 * String to use for the results label
			 */
			strResults: string;
	  }
	/**
	 * If `isPaginated` is `false` or `undefined`, `strPage` and `strResults` should not be passed.
	 */
	| {
			/**
			 * Whether to show pagination
			 */
			isPaginated?: false;

			/**
			 * String to use for the next button
			 */
			strNext?: never;

			/**
			 * String to use for the page label
			 */
			strPage?: never;

			/**
			 * String to use for the previous button
			 */
			strPrev?: never;

			/**
			 * String to use for the results label
			 */
			strResults?: never;
	  };

export type WithTableOptionalFiltering<TRowData extends RowData> =
	/**
	 * If `isGlobalFilterEnabled` is `false` or `undefined`, `strFilterPlaceholder` should not be passed.
	 */
	| {
			/**
			 * Whether the table should be filterable
			 */
			isGlobalFilterEnabled: true;

			/**
			 * String to use for apply filter button
			 */
			strApplyFilter: string;

			/**
			 * The text to display for the clear filters button.
			 */
			strClearAllFilters: string;

			/**
			 * The text to display for the clear all filters button in the search input component.
			 */
			strClearFilterInput: string;

			/**
			 * String to use for filter field placeholder
			 */
			strFilterPlaceholder: string;

			/**
			 * A key-value map of column IDs to their filter configurations.
			 */
			columnFilterConfig: Partial<
				Record<
					keyof TRowData,
					| {
							type: "MULTI_SELECT";
							strFilterDialogTitle: string;
							strFilterPillText: string;
							// biome-ignore lint/suspicious/noExplicitAny: no better alternative
							transformerNumericFromRaw: (value: any) => string;
					  }
					| {
							type: "NUMBER_RANGE";
							transformerNumericFromRaw: (
								value: number,
							) => number;
							transformerNumericToRaw: (value: number) => number;
					  }
				>
			>;

			/**
			 * A map of column IDs to their string representations.
			 */
			filterColumnStrMap: Partial<
				Record<
					keyof TRowData,
					{
						strFilterDialogTitle: string;
						strFilterPillText: string;
						// biome-ignore lint/suspicious/noExplicitAny: no better alternative
						transformerNumericFromRaw: (value: any) => string;
					}
				>
			>;

			/**
			 * A map of strings used in the numeric filter mode.
			 */
			strMapFilterMode: Record<TableNumberRangeFilterMode, string>;
	  }
	/**
	 * If `isGlobalFilterEnabled` is `false` or `undefined`, `strFilterPlaceholder` should not be passed.
	 */
	| {
			/**
			 * Whether the table should be filterable
			 */
			isGlobalFilterEnabled?: false;

			/**
			 * String to use for apply filter button
			 */
			strApplyFilter?: never;

			/**
			 * The text to display for the clear all filters button.
			 */
			strClearAllFilters?: never;

			/**
			 * The text to display for the clear all filters button in the search input component.
			 */
			strClearFilterInput?: never;

			/**
			 * String to use for filter field placeholder
			 */
			strFilterPlaceholder?: never;

			/**
			 * A map of column IDs to their string representations.
			 */
			filterColumnStrMap?: never;

			/**
			 * A map of strings used in the numeric filter mode.
			 */
			strMapFilterMode?: never;
	  };

export type WithTableOptionalSelectableRows<TData extends RowData> =
	/**
	 * If `isSelectable` is `true`, `enableMultiRowSelection` can be passed.
	 */
	| {
			/**
			 * Boolean to enable multi-row selection.
			 */
			enableMultiRowSelection?: boolean;

			/**
			 * Whether the table should allow rows to be selectable
			 */
			isSelectable: true;

			/**
			 * Function called on a new selection, with the current selection
			 */
			onSelect: (selection: TData[] | undefined) => void;
	  }
	/**
	 * If `isSelectable` is `false` or `undefined`, `enableMultiRowSelection` should not be passed.
	 */
	| {
			/**
			 * Boolean to enable multi-row selection.
			 */
			enableMultiRowSelection?: never;

			/**
			 * Whether the table should allow rows to be selectable
			 */
			isSelectable?: false | undefined;

			/**
			 * Function called on a new selection, with the current selection
			 */
			onSelect?: never;
	  };
