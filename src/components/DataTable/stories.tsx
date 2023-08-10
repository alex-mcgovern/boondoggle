import { DataTable as StoryComp } from ".";
import {
  DATA_TABLE_COLUMNS_MOCK,
  generateMockAccountColumn,
} from "../../../mocks/data_table_columns.mock";

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
