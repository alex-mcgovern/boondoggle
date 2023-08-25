import { DialogModalDataTable as StoryComp } from ".";
import {
  DATA_TABLE_COLUMNS_REDUCED_MOCK,
  generateMockAccountColumn,
} from "../../../mocks/data_table_columns.mock";
import { Button } from "../button";

import type { DialogModalDataTableProps as StoryCompProps } from ".";
import type { MockAccountColumnData } from "../../../mocks/data_table_columns.mock";
import type { Meta, StoryObj } from "@storybook/react";

/** ----------------------------------------------------------------------------- */

const meta = {
  args: {},
  component: StoryComp<MockAccountColumnData>,
  parameters: {
    layout: "fullscreen",
  },
  title: "Components/DialogModalDataTable",
} satisfies Meta<typeof StoryComp<MockAccountColumnData>>;

export default meta;
type Story = StoryObj<typeof meta>;

/** ----------------------------------------------------------------------------- */

const MOCK_DATA = Array.from({ length: 40 }, generateMockAccountColumn);

/** ----------------------------------------------------------------------------- */

export const IsFilterable: Story = {
  args: {
    columns: DATA_TABLE_COLUMNS_REDUCED_MOCK,
    data: MOCK_DATA,
    height: "lg",
    isFilterable: true,
    strFilterPlaceholder: "Filter",
    title: "Dialog modal data table",
    triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
    width: "lg",
  },
};

/** ----------------------------------------------------------------------------- */

export const IsPaginated: Story = {
  args: {
    columns: DATA_TABLE_COLUMNS_REDUCED_MOCK,
    data: MOCK_DATA,
    height: "lg",
    isPaginated: true,
    strNext: "Next",
    strPage: "Page",
    strPrev: "Previous",
    strResults: "Results",
    strShow: "Show",
    title: "Dialog modal data table",
    triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
    width: "lg",
  },
};

/** ----------------------------------------------------------------------------- */

export const WidthSm: Story = {
  args: {
    columns: DATA_TABLE_COLUMNS_REDUCED_MOCK,
    data: MOCK_DATA,
    height: "lg",
    title: "Dialog modal data table",
    triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
    width: "lg",
  },
};

/** ----------------------------------------------------------------------------- */

export const WidthLg: Story = {
  args: {
    columns: DATA_TABLE_COLUMNS_REDUCED_MOCK,
    data: MOCK_DATA,
    height: "lg",
    title: "Dialog modal data table",
    triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
    width: "lg",
  },
};

/** ----------------------------------------------------------------------------- */

export const IsSelectable: Story = {
  args: {
    columns: DATA_TABLE_COLUMNS_REDUCED_MOCK,
    data: MOCK_DATA,
    height: "lg",
    isSelectable: true,
    onSelect: (rowSelection) => {
      alert(`Selected rows \n ${JSON.stringify(rowSelection, null, 2)}`);
    },
    title: "Dialog modal data table",
    triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
    width: "lg",
  },
};
/** ----------------------------------------------------------------------------- */

export const IsSelectableWithEnableMultiRowSelection: StoryObj<
  StoryCompProps<MockAccountColumnData>
> = {
  args: {
    columns: DATA_TABLE_COLUMNS_REDUCED_MOCK,
    data: MOCK_DATA,
    enableMultiRowSelection: true,
    height: "lg",
    isSelectable: true,
    onSelect: (rowSelection) => {
      alert(`Selected rows \n ${JSON.stringify(rowSelection, null, 2)}`);
    },
    title: "Dialog modal data table",
    triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
    width: "lg",
  },
};

/** ----------------------------------------------------------------------------- */

export const KitchenSink: Story = {
  args: {
    columns: DATA_TABLE_COLUMNS_REDUCED_MOCK,
    data: MOCK_DATA,
    height: "lg",
    isFilterable: true,
    isPaginated: true,
    isSelectable: true,
    isSortable: true,
    onSelect: (rowSelection) => {
      alert(`Selected rows \n ${JSON.stringify(rowSelection, null, 2)}`);
    },
    strFilterPlaceholder: "Filter",
    strNext: "Next",
    strPage: "Page",
    strPrev: "Previous",
    strResults: "Results",
    strShow: "Show",
    title: "Dialog modal data table",
    triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
    width: "lg",
  },
};
