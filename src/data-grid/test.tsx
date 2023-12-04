/**
 * @jest-environment jsdom
 */
import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";
import { render } from "@testing-library/react";
import { DataGrid } from ".";
import type { DataGridProps } from ".";
import { Button } from "../button";
import { Icon } from "../icon";
import { COLUMNS, mockColumn } from "./_mocks/data-table.mock";
import type { MockTableData } from "./_mocks/data-table.mock";

const renderComponent = ({ ...props }: DataGridProps<MockTableData>) => {
	return render(<DataGrid {...props} />);
};

const MOCK_DATA = Array.from({ length: 40 }, mockColumn);

const PROPS: DataGridProps<MockTableData> = {
	data: MOCK_DATA,
	columns: COLUMNS,
	actions: [
		<Button appearance="secondary" name="secondary_action">
			Secondary action
		</Button>,
		<Button name="primary_action" slotLeft={<Icon icon={faPlus} />}>
			Primary action
		</Button>,
	],
	filteringOptions: {
		strApplyFilter: "Apply filter",
		strClearAllFilters: "Clear all filters",
		strClearFilterInput: "Clear filter input",
		strFilterPlaceholder: "Filter results...",
		columnFilterConfig: {
			status: {
				strFilterDialogTitle: "Filter by status",
				strFilterPillText: "Status",
				type: "MULTI_SELECT",
				transformValueToString: (value: MockTableData["status"]) => {
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
		},
	},
	paginationOptions: {
		strNext: "Next",
		strPage: "Page",
		strPrev: "Previous",
		strResults: "Results",
	},
	isSelectable: true,
	isSortable: true,
	onSelect: (rowSelection) => {
		alert(`Selected rows \n ${JSON.stringify(rowSelection, null, 2)}`);
	},
	strNoResults: "No results",
};

describe("<DataGrid />", () => {
	describe("when rendering", () => {
		test("should render without throwing", () => {
			const { container } = renderComponent(PROPS);

			expect(container).not.toBeNull();
		});
	});
});
