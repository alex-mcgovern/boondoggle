import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";
import type { Meta, StoryObj } from "@storybook/react";
import {
	DATA_TABLE_COLUMNS_MOCK,
	DATA_TABLE_COLUMNS_WITH_AGGREGATED_MOCK,
	generateMockAccountColumn,
} from "../../mocks/data_table_columns.mock";
import type { MockAccountColumnData } from "../../mocks/data_table_columns.mock";
import { Button } from "../button";
import { Icon } from "../icon";
import { mockSelectItemsActions } from "../select/__mocks__/select.mock";
import { DataTable as StoryComp } from ".";
import { NumberRangeFilterMode } from "./_components/column-filters/number-range/types";
import { DataTableRowActions } from "../data-table-row-actions";
import { TDataTableRowActions } from "./types";

const meta = {
	args: {},
	component: StoryComp<MockAccountColumnData>,
	title: "Components/DataTable",
} satisfies Meta<typeof StoryComp<MockAccountColumnData>>;

export default meta;

type Story = StoryObj<typeof meta>;

/** -----------------------------------------------------------------------------
 * MOCK DATA
 * ------------------------------------------------------------------------------- */

const MOCK_DATA = Array.from({ length: 20 }, generateMockAccountColumn);

export const MOCK_FILTER_STRINGS = {
	email_address: {
		strFilterDialogTitle: "Filter by email address",
		strFilterPillText: "Email address",
		valueToString: (value: string) => value,
	},
	first_name: {
		strFilterDialogTitle: "Filter by first name",
		strFilterPillText: "First name",
		valueToString: (value: string) => value,
	},
	last_name: {
		strFilterDialogTitle: "Filter by last name",
		strFilterPillText: "Last name",
		valueToString: (value: string) => value,
	},
	phone_number: {
		strFilterDialogTitle: "Filter by phone number",
		strFilterPillText: "Phone number",
		valueToString: (value: string) => value,
	},
	id: {
		strFilterDialogTitle: "Filter by ID",
		strFilterPillText: "ID",
		valueToString: (value: string) => value,
	},
	balance: {
		strFilterDialogTitle: "Filter by balance",
		strFilterPillText: "Balance",
		valueToString: (value: string) => value,
	},
	status: {
		strFilterDialogTitle: "Filter by status",
		strFilterPillText: "Status",
		valueToString: (value: MockAccountColumnData["status"]) => {
			switch (value) {
				case "active":
					return "Active";
				case "inactive":
					return "Inactive";
				case "invited":
					return "Invited";
				default:
					return value;
			}
		},
	},
} as const;

export const MOCK_FILTER_MODE_STRINGS: Record<NumberRangeFilterMode, string> = {
	is_between: "Is between",
	is_equal_to: "Is equal to",
	is_greater_than: "Is greater than",
	is_less_than: "Is less than",
};

const MockRowActionsComponent: TDataTableRowActions<MockAccountColumnData> =
	() => {
		return <DataTableRowActions items={mockSelectItemsActions()} />;
	};

/** -----------------------------------------------------------------------------
 * STORIES
 * ------------------------------------------------------------------------------- */

export const Default: Story = {
	args: {
		columns: DATA_TABLE_COLUMNS_MOCK,
		data: MOCK_DATA,
		strNoResults: "No results",
	},
};

export const IsLoading: Story = {
	args: {
		columns: DATA_TABLE_COLUMNS_MOCK,
		data: MOCK_DATA,
		isLoading: true,
		strNoResults: "No results",
	},
};

export const IsPaginated: Story = {
	args: {
		columns: DATA_TABLE_COLUMNS_MOCK,
		data: MOCK_DATA,
		isPaginated: true,
		strNext: "Next",

		strNoResults: "No results",
		strPage: "Page",
		strPrev: "Previous",
		strResults: "Results",
	},
};

export const IsSortable: Story = {
	args: {
		columns: DATA_TABLE_COLUMNS_MOCK,
		data: MOCK_DATA,
		isSortable: true,

		strNoResults: "No results",
	},
};

export const IsFilterable: Story = {
	args: {
		columns: DATA_TABLE_COLUMNS_MOCK,
		strMapFilterMode: MOCK_FILTER_MODE_STRINGS,
		data: MOCK_DATA,
		isFilterable: true,
		strApplyFilter: "Apply filter",
		filterColumnStrMap: MOCK_FILTER_STRINGS,
		strClearAllFilters: "Clear all filters",
		strClearFilterInput: "Clear filter input",
		strFilterPlaceholder: "Filter results...",
		strNoResults: "No results",
	},
};

export const IsSelectable: Story = {
	args: {
		columns: DATA_TABLE_COLUMNS_MOCK,
		data: MOCK_DATA,
		isSelectable: true,
		onSelect: (rowSelection) => {
			alert(`Selected rows \n ${JSON.stringify(rowSelection, null, 2)}`);
		},
		strNoResults: "No results",
	},
};

export const IsSelectableWithEnableMultiRowSelection: Story = {
	args: {
		columns: DATA_TABLE_COLUMNS_MOCK,
		data: MOCK_DATA,
		enableMultiRowSelection: true,
		isSelectable: true,
		onSelect: (rowSelection) => {
			alert(`Selected rows \n ${JSON.stringify(rowSelection, null, 2)}`);
		},
		strNoResults: "No results",
	},
};

export const WithAggregatedCell: Story = {
	args: {
		columns: DATA_TABLE_COLUMNS_WITH_AGGREGATED_MOCK,
		data: MOCK_DATA,
		strNoResults: "No results",
	},
};

export const WithNoResults: Story = {
	args: {
		columns: DATA_TABLE_COLUMNS_MOCK,
		strMapFilterMode: MOCK_FILTER_MODE_STRINGS,
		data: [],
		isFilterable: true,
		strApplyFilter: "Apply filter",
		filterColumnStrMap: MOCK_FILTER_STRINGS,
		strClearAllFilters: "Clear all filters",
		strClearFilterInput: "Clear filter input",
		strFilterPlaceholder: "Filter results...",
		strNoResults: "No results",
	},
};

export const WithInitialSorting: Story = {
	args: {
		columns: DATA_TABLE_COLUMNS_WITH_AGGREGATED_MOCK,
		strMapFilterMode: MOCK_FILTER_MODE_STRINGS,
		data: MOCK_DATA,
		initialSorting: [
			{
				desc: true,
				id: "last_name",
			},
		],
		strApplyFilter: "Apply filter",
		filterColumnStrMap: MOCK_FILTER_STRINGS,
		isFilterable: true,
		isSortable: true,
		strClearAllFilters: "Clear all filters",
		strClearFilterInput: "Clear filter input",
		strFilterPlaceholder: "Filter results...",
		strNoResults: "No results",
	},
};

export const With1Action: Story = {
	args: {
		actions: (
			<Button name="primary_action" slotLeft={<Icon icon={faPlus} />}>
				Primary action
			</Button>
		),
		columns: DATA_TABLE_COLUMNS_MOCK,
		data: MOCK_DATA,

		strNoResults: "No results",
	},
};

export const With2Actions: Story = {
	args: {
		actions: [
			<Button appearance="secondary" name="secondary_action">
				Secondary action
			</Button>,
			<Button name="primary_action" slotLeft={<Icon icon={faPlus} />}>
				Primary action
			</Button>,
		],
		columns: DATA_TABLE_COLUMNS_MOCK,
		data: MOCK_DATA,

		strNoResults: "No results",
	},
};

export const WithRowActionItems: Story = {
	args: {
		actions: [
			<Button appearance="secondary" name="secondary_action">
				Secondary action
			</Button>,
			<Button name="primary_action" slotLeft={<Icon icon={faPlus} />}>
				Primary action
			</Button>,
		],
		columns: DATA_TABLE_COLUMNS_MOCK,
		data: MOCK_DATA,
		RowActions: MockRowActionsComponent,

		strNoResults: "No results",
	},
};

export const WithRowActionItemsShortList: Story = {
	args: {
		actions: [
			<Button appearance="secondary" name="secondary_action">
				Secondary action
			</Button>,
			<Button name="primary_action" slotLeft={<Icon icon={faPlus} />}>
				Primary action
			</Button>,
		],
		columns: DATA_TABLE_COLUMNS_MOCK,
		data: Array.from({ length: 1 }, generateMockAccountColumn),
		RowActions: MockRowActionsComponent,

		strNoResults: "No results",
	},
};

export const KitchenSink: Story = {
	args: {
		actions: [
			<Button appearance="secondary" name="secondary_action">
				Secondary action
			</Button>,
			<Button name="primary_action" slotLeft={<Icon icon={faPlus} />}>
				Primary action
			</Button>,
		],
		strMapFilterMode: MOCK_FILTER_MODE_STRINGS,
		columns: DATA_TABLE_COLUMNS_WITH_AGGREGATED_MOCK,
		strApplyFilter: "Apply filter",
		filterColumnStrMap: MOCK_FILTER_STRINGS,
		data: MOCK_DATA,
		isFilterable: true,
		isPaginated: true,
		isSelectable: true,
		isSortable: true,
		onSelect: (rowSelection) => {
			alert(`Selected rows \n ${JSON.stringify(rowSelection, null, 2)}`);
		},
		RowActions: MockRowActionsComponent,
		strClearAllFilters: "Clear all filters",
		strClearFilterInput: "Clear filter input",
		strFilterPlaceholder: "Filter results...",
		strNext: "Next",
		strNoResults: "No results",
		strPage: "Page",
		strPrev: "Previous",
		strResults: "Results",
	},
};
