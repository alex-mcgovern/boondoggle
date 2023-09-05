import { faPlus } from "@fortawesome/sharp-regular-svg-icons";

import { DataTable as StoryComp } from ".";
import {
    DATA_TABLE_COLUMNS_MOCK,
    DATA_TABLE_COLUMNS_WITH_AGGREGATED_MOCK,
    generateMockAccountColumn,
} from "../../../mocks/data_table_columns.mock";
import { Button } from "../button";
import { DataTableRowActions } from "../data_table_row_actions";
import { Icon } from "../icon";
import { mockSelectItemsActions } from "../select/__mocks__/select.mock";

import type { MockAccountColumnData } from "../../../mocks/data_table_columns.mock";
import type { TDataTableRowActions } from "../../common-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    args: {},
    component: StoryComp<MockAccountColumnData>,
    title: "Components/DataTable",
} satisfies Meta<typeof StoryComp<MockAccountColumnData>>;

export default meta;

type Story = StoryObj<typeof meta>;

const MOCK_DATA = Array.from({ length: 40 }, generateMockAccountColumn);

const MockRowActionsComponent: TDataTableRowActions<MockAccountColumnData> = () => (
    <DataTableRowActions items={mockSelectItemsActions()} />
);

export const Default: Story = {
    args: {
        columns: DATA_TABLE_COLUMNS_MOCK,
        data: MOCK_DATA,

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
        data: MOCK_DATA,
        isFilterable: true,
        strClearAllFilters: "Clear all filters",
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
        data: [],
        isFilterable: true,
        strClearAllFilters: "Clear all filters",
        strFilterPlaceholder: "Filter results...",
        strNoResults: "No results",
    },
};

export const With1Action: Story = {
    args: {
        actions: (
            <Button
                name="primary_action"
                slotLeft={[<Icon icon={faPlus} />]}
            >
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
            <Button
                appearance="secondary"
                name="secondary_action"
            >
                Secondary action
            </Button>,
            <Button
                name="primary_action"
                slotLeft={[<Icon icon={faPlus} />]}
            >
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
            <Button
                appearance="secondary"
                name="secondary_action"
            >
                Secondary action
            </Button>,
            <Button
                name="primary_action"
                slotLeft={[<Icon icon={faPlus} />]}
            >
                Primary action
            </Button>,
        ],
        columns: DATA_TABLE_COLUMNS_MOCK,
        data: MOCK_DATA,
        RowActions: MockRowActionsComponent,

        strNoResults: "No results",
    },
};

export const KitchenSink: Story = {
    args: {
        actions: [
            <Button
                appearance="secondary"
                name="secondary_action"
            >
                Secondary action
            </Button>,
            <Button
                name="primary_action"
                slotLeft={[<Icon icon={faPlus} />]}
            >
                Primary action
            </Button>,
        ],
        columns: DATA_TABLE_COLUMNS_WITH_AGGREGATED_MOCK,
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
        strFilterPlaceholder: "Filter results...",
        strNext: "Next",
        strNoResults: "No results",
        strPage: "Page",
        strPrev: "Previous",
        strResults: "Results",
    },
};
