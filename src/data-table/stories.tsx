import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";
import type { Meta, StoryObj } from "@storybook/react";
import { DataTable as StoryComp } from ".";
import { Button } from "../button";
import {
	DataTableRowActions,
	TDataTableRowActions,
} from "../data-table-row-actions";
import { Icon } from "../icon";
import { mockSelectItemsActions } from "../select/__mocks__/select.mock";
import { COLUMNS, MockTableData, mockColumn } from "./_mocks/data-table.mock";
import { TableNumberRangeFilterMode } from "./types";

const meta = {
	args: {
		columns: COLUMNS,
		data: Array.from({ length: 20 }, mockColumn),
	},
	component: StoryComp<MockTableData>,
	title: "Components/DataTable",
} satisfies Meta<typeof StoryComp<MockTableData>>;

export default meta;

type Story = StoryObj<typeof meta>;

/** -----------------------------------------------------------------------------
 * MOCK DATA
 * ------------------------------------------------------------------------------- */

export const MOCK_FILTER_STRINGS = {
	email_address: {
		strFilterDialogTitle: "Filter by email address",
		strFilterPillText: "Email address",
		transformNumericFromRaw: (value: string) => value,
	},
	first_name: {
		strFilterDialogTitle: "Filter by first name",
		strFilterPillText: "First name",
		transformNumericFromRaw: (value: string) => value,
	},
	last_name: {
		strFilterDialogTitle: "Filter by last name",
		strFilterPillText: "Last name",
		transformNumericFromRaw: (value: string) => value,
	},
	phone_number: {
		strFilterDialogTitle: "Filter by phone number",
		strFilterPillText: "Phone number",
		transformNumericFromRaw: (value: string) => value,
	},
	id: {
		strFilterDialogTitle: "Filter by ID",
		strFilterPillText: "ID",
		transformNumericFromRaw: (value: string) => value,
	},
	balance: {
		strFilterDialogTitle: "Filter by balance",
		strFilterPillText: "Balance",
		transformNumericFromRaw: (value: string) => value,
	},
	status: {
		strFilterDialogTitle: "Filter by status",
		strFilterPillText: "Status",
		transformNumericFromRaw: (value: MockTableData["status"]) => {
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

export const MOCK_FILTER_MODE_STRINGS: Record<
	TableNumberRangeFilterMode,
	string
> = {
	is_between: "Is between",
	is_equal_to: "Is equal to",
	is_greater_than: "Is greater than",
	is_less_than: "Is less than",
};

const MockRowActionsComponent: TDataTableRowActions<MockTableData> = () => {
	return <DataTableRowActions items={mockSelectItemsActions()} />;
};

/** -----------------------------------------------------------------------------
 * STORIES
 * ------------------------------------------------------------------------------- */

export const Default: Story = {
	args: {
		strNoResults: "No results",
	},
};

export const IsLoading: Story = {
	args: {
		isLoading: true,
		strNoResults: "No results",
	},
};

export const IsPaginated: Story = {
	args: {
		paginationOptions: {
			strNext: "Next",
			strPage: "Page",
			strPrev: "Previous",
			strResults: "Results",
		},
		strNoResults: "No results",
	},
};

export const IsSortable: Story = {
	args: {
		isSortable: true,
		strNoResults: "No results",
	},
};

export const IsGlobalFilterEnabled: Story = {
	args: {
		filteringOptions: {
			strApplyFilter: "Apply filter",
			strClearAllFilters: "Clear all filters",
			strClearFilterInput: "Clear filter input",
			strFilterPlaceholder: "Filter results...",
		},
		strNoResults: "No results",
	},
};

export const IsGlobalFilterEnabledWithNoResults: Story = {
	args: {
		filteringOptions: {
			strApplyFilter: "Apply filter",
			strClearAllFilters: "Clear all filters",
			strClearFilterInput: "Clear filter input",
			strFilterPlaceholder: "Filter results...",
		},
		data: [],
		strNoResults: "No results",
	},
};

export const IsColumnFilterEnabled: Story = {
	args: {
		filteringOptions: {
			strApplyFilter: "Apply filter",
			strClearAllFilters: "Clear all filters",
			strClearFilterInput: "Clear filter input",
			strFilterPlaceholder: "Filter results...",
			columnFilterConfig: {
				status: {
					strFilterDialogTitle: "Filter by status",
					strFilterPillText: "Status",
					type: "MULTI_SELECT",
					transformValueToString: (
						value: MockTableData["status"],
					) => {
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
				balance: {
					strFilterDialogTitle: "Filter by balance",
					strFilterPillText: "Balance",
					strMapNumericFilterMode: {
						is_between: "Is between",
						is_equal_to: "Is equal to",
						is_greater_than: "Is greater than",
						is_less_than: "Is less than",
					},
					transformNumericFromRaw: (value: number | undefined) =>
						value !== undefined ? value / 100 : undefined,
					transformNumericToRaw: (value: number | undefined) =>
						value !== undefined ? value * 100 : undefined,
					type: "NUMBER_RANGE",
					strNotANumber: "Enter a number",
				},
				points: {
					strFilterDialogTitle: "Filter by points",
					strFilterPillText: "Points",
					strMapNumericFilterMode: {
						is_between: "Is between",
						is_equal_to: "Is equal to",
						is_greater_than: "Is greater than",
						is_less_than: "Is less than",
					},
					type: "NUMBER_RANGE",
					strNotANumber: "Enter a number",
				},
			},
		},
		isSortable: true,
		strNoResults: "No results",
	},
};

export const IsSelectable: Story = {
	args: {
		isSelectable: true,
		onSelect: (rowSelection) => {
			alert(`Selected rows \n ${JSON.stringify(rowSelection, null, 2)}`);
		},
		strNoResults: "No results",
	},
};

export const IsSelectableWithEnableMultiRowSelection: Story = {
	args: {
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
		strNoResults: "No results",
	},
};

export const WithInitialSorting: Story = {
	args: {
		initialSorting: [
			{
				desc: true,
				id: "last_name",
			},
		],
		isSortable: true,
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
		data: Array.from({ length: 1 }, mockColumn),
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
		filteringOptions: {
			strApplyFilter: "Apply filter",
			strClearAllFilters: "Clear all filters",
			strClearFilterInput: "Clear filter input",
			strFilterPlaceholder: "Filter results...",
			columnFilterConfig: {
				status: {
					strFilterDialogTitle: "Filter by status",
					strFilterPillText: "Status",
					type: "MULTI_SELECT",
					transformValueToString: (
						value: MockTableData["status"],
					) => {
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
			},
		},
		paginationOptions: {
			strNext: "Next",
			strPage: "Page",
			strPrev: "Previous",
			strResults: "Results",
		},
		isSelectable: true,
		isSortable: true,
		onSelect: (rowSelection) => {
			alert(`Selected rows \n ${JSON.stringify(rowSelection, null, 2)}`);
		},
		RowActions: MockRowActionsComponent,
		strNoResults: "No results",
	},
};
