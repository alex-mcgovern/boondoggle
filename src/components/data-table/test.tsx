/**
 * @jest-environment jsdom
 */
import { faPlus } from "@fortawesome/pro-solid-svg-icons";
import { render } from "@testing-library/react";

import {
	DATA_TABLE_COLUMNS_WITH_AGGREGATED_MOCK,
	generateMockAccountColumn,
} from "../../../mocks/data_table_columns.mock";
import { Button } from "../button";
import { Icon } from "../icon";
import { DataTable } from "./_components/DataTable";

import type { MockAccountColumnData } from "../../../mocks/data_table_columns.mock";
import type { DataTableProps } from "./_components/DataTable";
import { MOCK_FILTER_MODE_STRINGS, MOCK_FILTER_STRINGS } from "./stories";

const renderComponent = ({
	...props
}: DataTableProps<MockAccountColumnData>) => {
	return render(<DataTable {...props} />);
};

const MOCK_DATA = Array.from({ length: 40 }, generateMockAccountColumn);

const PROPS: DataTableProps<MockAccountColumnData> = {
	actions: [
		<Button appearance="secondary" name="secondary_action">
			Secondary action
		</Button>,
		<Button name="primary_action" slotLeft={<Icon icon={faPlus} />}>
			Primary action
		</Button>,
	],
	columns: DATA_TABLE_COLUMNS_WITH_AGGREGATED_MOCK,
	data: MOCK_DATA,
	isFilterable: true,
	strApplyFilter: "Apply filter",
	isPaginated: true,
	strMapFilterMode: MOCK_FILTER_MODE_STRINGS,
	filterColumnStrMap: MOCK_FILTER_STRINGS,
	isSortable: true,
	strClearAllFilters: "Clear all filters",
	strClearFilterInput: "Clear filter input",
	strFilterPlaceholder: "Filter results...",
	strNext: "Next",
	strNoResults: "No results",
	strPage: "Page",
	strPrev: "Previous",
	strResults: "Results",
};

describe("<DataTable />", () => {
	describe("when rendering", () => {
		test("should render without throwing", () => {
			const { container } = renderComponent(PROPS);

			expect(container).not.toBeNull();
		});
	});
});
