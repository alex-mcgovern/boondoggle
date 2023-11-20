/**
 * @jest-environment jsdom
 */
import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";
import { render } from "@testing-library/react";
import { DataTable } from ".";
import type { DataTableProps } from ".";
import {
	DATA_TABLE_COLUMNS_WITH_AGGREGATED_MOCK,
	mockColumn,
} from "./_mocks/data-table.mock";
import type { MockTableData } from "./_mocks/data-table.mock";
import { Button } from "../button";
import { Icon } from "../icon";
import { MOCK_FILTER_MODE_STRINGS, MOCK_FILTER_STRINGS } from "./stories";

const renderComponent = ({ ...props }: DataTableProps<MockTableData>) => {
	return render(<DataTable {...props} />);
};

const MOCK_DATA = Array.from({ length: 40 }, mockColumn);

const PROPS: DataTableProps<MockTableData> = {
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
	isGlobalFilterEnabled: true,
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
