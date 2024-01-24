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
        filterButtonText: "Filter by balance",
        transformNumericFromRaw: (value: string) => value,
    },
    email_address: {
        filterButtonText: "Filter by email address",
        transformNumericFromRaw: (value: string) => value,
    },
    first_name: {
        filterButtonText: "Filter by first name",
        transformNumericFromRaw: (value: string) => value,
    },
    id: {
        filterButtonText: "Filter by ID",
        transformNumericFromRaw: (value: string) => value,
    },
    last_name: {
        filterButtonText: "Filter by last name",
        transformNumericFromRaw: (value: string) => value,
    },
    phone_number: {
        filterButtonText: "Filter by phone number",
        transformNumericFromRaw: (value: string) => value,
    },
    status: {
        filterButtonText: "Status",
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
    args: {},
};

export const IsPaginated: Story = {
    args: {
        paginationOptions: {
            strNext: "Next",
            strPage: "Page",
            strPrev: "Previous",
            strResults: "Results",
        },
    },
};

export const IsGlobalFilterEnabled: Story = {
    args: {
        isFuzzySearchable: true,
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
    },
};

export const WithRowActionItems: Story = {
    args: {
        gridTemplateColumns: "1fr repeat(3, min-content)",
        RowActions: MockRowActionsComponent,
    },
};

export const WithRowActionItemsShortList: Story = {
    args: {
        data: Array.from({ length: 1 }, mockColumn),
        gridTemplateColumns: "1fr repeat(3, min-content)",
        RowActions: MockRowActionsComponent,
    },
};

export const KitchenSink: Story = {
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

        gridTemplateColumns: "min-content 1fr repeat(4, min-content)",
        paginationOptions: {
            strNext: "Next",
            strPage: "Page",
            strPrev: "Previous",
            strResults: "Results",
        },
        RowActions: MockRowActionsComponent,
    },
};
