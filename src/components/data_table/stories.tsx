import { faPlus } from "@fortawesome/pro-light-svg-icons";

import { DataTable as StoryComp } from ".";
import {
  DATA_TABLE_COLUMNS_MOCK,
  generateMockAccountColumn,
} from "../../../mocks/data_table_columns.mock";
import { Button } from "../Button";
import { Icon } from "../Icon";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  args: {},
  component: StoryComp,
  title: "Components/DataTable",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

/** ----------------------------------------------------------------------------- */

const MOCK_DATA = Array.from({ length: 40 }, generateMockAccountColumn);

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
    strPage: "Page",
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
    filterableColumns: ["account_name", "id"],
    isFilterable: true,
  },
};

/** ----------------------------------------------------------------------------- */

export const With1Action: Story = {
  args: {
    actions: (
      <Button name="primary_action" slotLeft={<Icon icon={faPlus} />}>
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
      <Button name="primary_action" slotLeft={<Icon icon={faPlus} />}>
        Primary action
      </Button>,
    ],
    columns: DATA_TABLE_COLUMNS_MOCK,
    data: MOCK_DATA,
  },
};
