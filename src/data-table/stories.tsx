import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";
import { faEllipsis } from "@fortawesome/pro-solid-svg-icons/faEllipsis";
import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";

import type { TV2DataTableRowActions } from ".";
import type { MockTableData } from "./_mocks/data-table.mock";
import type { TableNumberRangeFilterMode } from "./types";

import { DataTable as StoryComp, TableRowMenuButton } from ".";
import { Button } from "../button";
import { Icon } from "../icon";
import { COLUMNS, mockColumn } from "./_mocks/data-table.mock";

const meta = {
    args: {
        columns: COLUMNS,
        data: Array.from({ length: 20 }, mockColumn),
        gridTemplateColumns: "1fr repeat(3, min-content)",
    },
    component: StoryComp<MockTableData>,
    parameters: {
        layout: "padded",
    },
    title: "DataTable",
} satisfies Meta<typeof StoryComp<MockTableData>>;

export default meta;

type Story = StoryObj<typeof meta>;

/** -----------------------------------------------------------------------------
 * MOCK DATA
 * ------------------------------------------------------------------------------- */

export const MOCK_FILTER_STRINGS = {
    balance: {
        strFilterDialogTitle: "Filter by balance",
        strFilterPillText: "Balance",
        transformNumericFromRaw: (value: string) => value,
    },
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
    id: {
        strFilterDialogTitle: "Filter by ID",
        strFilterPillText: "ID",
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

const MockRowActionsComponent: TV2DataTableRowActions<MockTableData> = () => {
    return (
        <TableRowMenuButton
            items={[
                {
                    description: faker.lorem.sentence(3),
                    id: "view_details",
                    name: "View details",
                },
                {
                    description: faker.lorem.sentence(3),
                    id: "edit",
                    name: "Edit",
                },
                {
                    colorOverlay: "red" as const,
                    description: faker.lorem.sentence(3),
                    id: "delete",
                    name: "Delete",
                },
            ]}
            onAction={(id) => {
                alert(`Action ${id} clicked`);
            }}
        />
    );
};

/** -----------------------------------------------------------------------------
 * STORIES
 * ------------------------------------------------------------------------------- */

export const Default: Story = {
    args: {
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
            strClearAllFilters: "Clear all filters",
            strClearFilterInput: "Clear filter input",
            strFilterPlaceholder: "Filter results...",
        },
        strNoResults: "No results",
    },
};

export const IsGlobalFilterEnabledWithNoResults: Story = {
    args: {
        data: [],
        filteringOptions: {
            strClearAllFilters: "Clear all filters",
            strClearFilterInput: "Clear filter input",
            strFilterPlaceholder: "Filter results...",
        },
        strNoResults: "No results",
    },
};

export const IsColumnFilterEnabled: Story = {
    args: {
        filteringOptions: {
            columnFilterConfig: {
                balance: {
                    strFilterDialogTitle: "Filter by balance",
                    strFilterPillText: "Balance",
                    transformNumericFromRaw: (value: number | undefined) =>
                        value !== undefined ? value / 100 : undefined,
                    transformNumericToRaw: (value: number | undefined) =>
                        value !== undefined ? value * 100 : undefined,
                    type: "NUMBER_RANGE",
                },
                points: {
                    strFilterDialogTitle: "Filter by points",
                    strFilterPillText: "Points",
                    type: "NUMBER_RANGE",
                },
                status: {
                    strFilterDialogTitle: "Filter by status",
                    strFilterPillText: "Status",
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
                    type: "MULTI_SELECT",
                },
            },
            strClearAllFilters: "Clear all filters",
            strClearFilterInput: "Clear filter input",
            strFilterPlaceholder: "Filter results...",
        },
        isSortable: true,
        strNoResults: "No results",
    },
};

export const IsSelectable: Story = {
    args: {
        gridTemplateColumns: "min-content 1fr repeat(3, min-content)",
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
        gridTemplateColumns: "min-content 1fr repeat(3, min-content)",
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
            <Button
                name="primary_action"
                size="sm"
            >
                <Icon icon={faPlus} />
                Primary action
            </Button>
        ),
        strNoResults: "No results",
    },
};

export const With2Actions: Story = {
    args: {
        actions: (
            <>
                <Button
                    appearance="secondary"
                    name="secondary_action"
                    size="square_sm"
                >
                    <Icon icon={faEllipsis} />
                </Button>

                <Button
                    name="primary_action"
                    size="sm"
                >
                    <Icon icon={faPlus} />
                    Primary action
                </Button>
            </>
        ),

        strNoResults: "No results",
    },
};

export const WithRowActionItems: Story = {
    args: {
        RowActions: MockRowActionsComponent,
        gridTemplateColumns: "1fr repeat(3, min-content)",
        strNoResults: "No results",
    },
};

export const WithRowActionItemsShortList: Story = {
    args: {
        RowActions: MockRowActionsComponent,
        data: Array.from({ length: 1 }, mockColumn),
        gridTemplateColumns: "1fr repeat(3, min-content)",
        strNoResults: "No results",
    },
};

export const KitchenSink: Story = {
    args: {
        RowActions: MockRowActionsComponent,
        actions: (
            <>
                <Button
                    appearance="secondary"
                    name="secondary_action"
                    size="square_sm"
                >
                    <Icon icon={faEllipsis} />
                </Button>
                ,
                <Button
                    name="primary_action"
                    size="sm"
                >
                    <Icon icon={faPlus} />
                    Primary action
                </Button>
            </>
        ),
        filteringOptions: {
            columnFilterConfig: {
                balance: {
                    strFilterDialogTitle: "Filter by balance",
                    strFilterPillText: "Balance",
                    transformNumericFromRaw: (value: number | undefined) =>
                        value !== undefined ? value / 100 : undefined,
                    transformNumericToRaw: (value: number | undefined) =>
                        value !== undefined ? value * 100 : undefined,
                    type: "NUMBER_RANGE",
                },
                points: {
                    strFilterDialogTitle: "Filter by points",
                    strFilterPillText: "Points",
                    type: "NUMBER_RANGE",
                },
                status: {
                    strFilterDialogTitle: "Filter by status",
                    strFilterPillText: "Status",
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
                    type: "MULTI_SELECT",
                },
            },
            strClearAllFilters: "Clear all filters",
            strClearFilterInput: "Clear filter input",
            strFilterPlaceholder: "Filter results...",
        },
        gridTemplateColumns: "min-content 1fr repeat(4, min-content)",
        isSelectable: true,
        isSortable: true,
        onSelect: (rowSelection) => {
            alert(`Selected rows \n ${JSON.stringify(rowSelection, null, 2)}`);
        },
        paginationOptions: {
            strNext: "Next",
            strPage: "Page",
            strPrev: "Previous",
            strResults: "Results",
        },
        strNoResults: "No results",
    },
};
