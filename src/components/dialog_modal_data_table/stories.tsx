import { DialogModalDataTable as StoryComp } from ".";
import {
	DATA_TABLE_COLUMNS_REDUCED_MOCK,
	generateMockAccountColumn,
} from "../../../mocks/data_table_columns.mock";
import { Button } from "../button";

import type { Meta, StoryObj } from "@storybook/react";
import type { DialogModalDataTableProps as StoryCompProps } from ".";
import type { MockAccountColumnData } from "../../../mocks/data_table_columns.mock";

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

const MOCK_DATA = Array.from({ length: 40 }, generateMockAccountColumn);

export const IsFilterable: Story = {
	args: {
		columns: DATA_TABLE_COLUMNS_REDUCED_MOCK,
		data: MOCK_DATA,
		isFilterable: true,
		strClearAllFilters: "Clear all filters",
		strClearFilterInput: "Clear filter input",
		strFilterPlaceholder: "Filter",
		strNoResults: "No results",
		title: "Dialog modal data table",
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
		width: "lg",
	},
};

export const IsPaginated: Story = {
	args: {
		columns: DATA_TABLE_COLUMNS_REDUCED_MOCK,
		data: MOCK_DATA,
		isPaginated: true,
		strNext: "Next",
		strNoResults: "No results",
		strPage: "Page",
		strPrev: "Previous",
		strResults: "Results",
		title: "Dialog modal data table",
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
		width: "lg",
	},
};

export const WidthSm: Story = {
	args: {
		columns: DATA_TABLE_COLUMNS_REDUCED_MOCK,
		data: MOCK_DATA,
		strNoResults: "No results",
		title: "Dialog modal data table",
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
		width: "lg",
	},
};

export const WidthLg: Story = {
	args: {
		columns: DATA_TABLE_COLUMNS_REDUCED_MOCK,
		data: MOCK_DATA,
		strNoResults: "No results",
		title: "Dialog modal data table",
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
		width: "lg",
	},
};

export const IsSelectable: Story = {
	args: {
		columns: DATA_TABLE_COLUMNS_REDUCED_MOCK,
		data: MOCK_DATA,
		isSelectable: true,
		onSelect: (rowSelection) => {
			alert(`Selected rows \n ${JSON.stringify(rowSelection, null, 2)}`);
		},
		strNoResults: "No results",
		title: "Dialog modal data table",
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
		width: "lg",
	},
};

export const IsSelectableWithEnableMultiRowSelection: StoryObj<
	StoryCompProps<MockAccountColumnData>
> = {
	args: {
		columns: DATA_TABLE_COLUMNS_REDUCED_MOCK,
		data: MOCK_DATA,
		enableMultiRowSelection: true,
		isSelectable: true,
		onSelect: (rowSelection) => {
			alert(`Selected rows \n ${JSON.stringify(rowSelection, null, 2)}`);
		},
		strClearAllFilters: "Clear all filters",
		strNoResults: "No results",
		title: "Dialog modal data table",
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
		width: "lg",
	},
};

export const KitchenSink: Story = {
	args: {
		columns: DATA_TABLE_COLUMNS_REDUCED_MOCK,
		data: MOCK_DATA,
		isFilterable: true,
		isPaginated: true,
		isSelectable: true,
		isSortable: true,
		onSelect: (rowSelection) => {
			alert(`Selected rows \n ${JSON.stringify(rowSelection, null, 2)}`);
		},
		strClearAllFilters: "Clear all filters",
		strClearFilterInput: "Clear filter input",
		strFilterPlaceholder: "Filter",
		strNext: "Next",
		strNoResults: "No results",
		strPage: "Page",
		strPrev: "Previous",
		strResults: "Results",
		title: "Dialog modal data table",
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
		width: "lg",
	},
};
