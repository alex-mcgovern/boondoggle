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
import type { TDataTableRowActions } from "../../types";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  args: {},
  component: StoryComp<MockAccountColumnData>,
  title: "Components/DataTable",
} satisfies Meta<typeof StoryComp<MockAccountColumnData>>;

export default meta;
type Story = StoryObj<typeof meta>;

/** ----------------------------------------------------------------------------- */

const MOCK_DATA = Array.from({ length: 40 }, generateMockAccountColumn);

/** ----------------------------------------------------------------------------- */

const MockRowActionsComponent: TDataTableRowActions<
  MockAccountColumnData
> = () => {
  return <DataTableRowActions items={mockSelectItemsActions()} />;
};

/** ----------------------------------------------------------------------------- */

export const Default: Story = {
  args: {
    columns: DATA_TABLE_COLUMNS_MOCK,
    data: MOCK_DATA,
  },
};

/** ----------------------------------------------------------------------------- */

export const IsPaginated: Story = {
  args: {
    columns: DATA_TABLE_COLUMNS_MOCK,
    data: MOCK_DATA,
    isPaginated: true,
    strNext: "Next",
    strPage: "Page",
    strPrev: "Previous",
    strResults: "Results",
    strShow: "Show",
  },
};

/** ----------------------------------------------------------------------------- */

export const IsSortable: Story = {
  args: {
    columns: DATA_TABLE_COLUMNS_MOCK,
    data: MOCK_DATA,
    isSortable: true,
  },
};

/** ----------------------------------------------------------------------------- */

export const IsFilterable: Story = {
  args: {
    columns: DATA_TABLE_COLUMNS_MOCK,
    data: MOCK_DATA,
    isFilterable: true,
    strFilterPlaceholder: "Filter results...",
  },
};

/** ----------------------------------------------------------------------------- */

export const IsSelectable: Story = {
  args: {
    columns: DATA_TABLE_COLUMNS_MOCK,
    data: MOCK_DATA,
    isSelectable: true,
    onSelect: (rowSelection) => {
      alert(`Selected rows \n ${JSON.stringify(rowSelection, null, 2)}`);
    },
  },
};

/** ----------------------------------------------------------------------------- */

export const IsSelectableWithEnableMultiRowSelection: Story = {
  args: {
    columns: DATA_TABLE_COLUMNS_MOCK,
    data: MOCK_DATA,
    enableMultiRowSelection: true,
    isSelectable: true,
    onSelect: (rowSelection) => {
      alert(`Selected rows \n ${JSON.stringify(rowSelection, null, 2)}`);
    },
  },
};

/** ----------------------------------------------------------------------------- */

export const WithAggregatedCell: Story = {
  args: {
    columns: DATA_TABLE_COLUMNS_WITH_AGGREGATED_MOCK,
    data: MOCK_DATA,
  },
};

/** ----------------------------------------------------------------------------- */

export const With1Action: Story = {
  args: {
    actions: (
      <Button name="primary_action" slotLeft={[<Icon icon={faPlus} />]}>
        Primary action
      </Button>
    ),
    columns: DATA_TABLE_COLUMNS_MOCK,
    data: MOCK_DATA,
  },
};

/** ----------------------------------------------------------------------------- */

export const With2Actions: Story = {
  args: {
    actions: [
      <Button appearance="secondary" name="secondary_action">
        Secondary action
      </Button>,
      <Button name="primary_action" slotLeft={[<Icon icon={faPlus} />]}>
        Primary action
      </Button>,
    ],
    columns: DATA_TABLE_COLUMNS_MOCK,
    data: MOCK_DATA,
  },
};

/** ----------------------------------------------------------------------------- */

export const WithRowActionItems: Story = {
  args: {
    actions: [
      <Button appearance="secondary" name="secondary_action">
        Secondary action
      </Button>,
      <Button name="primary_action" slotLeft={[<Icon icon={faPlus} />]}>
        Primary action
      </Button>,
    ],
    columns: DATA_TABLE_COLUMNS_MOCK,
    data: MOCK_DATA,
    RowActions: MockRowActionsComponent,
  },
};

/** ----------------------------------------------------------------------------- */

export const KitchenSink: Story = {
  args: {
    actions: [
      <Button appearance="secondary" name="secondary_action">
        Secondary action
      </Button>,
      <Button name="primary_action" slotLeft={[<Icon icon={faPlus} />]}>
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
    strFilterPlaceholder: "Filter results...",
    strNext: "Next",
    strPage: "Page",
    strPrev: "Previous",
    strResults: "Results",
    strShow: "Show",
  },
};
