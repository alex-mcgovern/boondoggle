/**
 * @jest-environment jsdom
 */
import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";
import { render } from "@testing-library/react";

import type { DataTableProps } from ".";
import type { MockTableData } from "./_mocks/data-table.mock";

import { DataTable } from ".";
import { Button } from "../button";
import { Icon } from "../icon";
import { COLUMNS, mockColumn } from "./_mocks/data-table.mock";

const renderComponent = ({ ...props }: DataTableProps<MockTableData>) => {
    return render(<DataTable {...props} />);
};

const MOCK_DATA = Array.from({ length: 40 }, mockColumn);

const PROPS: DataTableProps<MockTableData> = {
    actions: (
        <>
            <Button
                appearance="secondary"
                name="secondary_action"
            >
                Secondary action
            </Button>
            <Button name="primary_action">
                <Icon icon={faPlus} />
                Primary action
            </Button>
        </>
    ),
    columns: COLUMNS,
    data: MOCK_DATA,
    filteringOptions: {
        columnFilterConfig: {
            status: {
                strFilterDialogTitle: "Filter by status",
                strFilterPillText: "Status",
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
                type: "MULTI_SELECT",
            },
        },
        strClearAllFilters: "Clear all filters",
        strClearFilterInput: "Clear filter input",
        strFilterPlaceholder: "Filter results...",
    },
    gridTemplateColumns: "min-content 1fr repeat(4, min-content)",
    isSelectable: true,
    isSortable: true,
    onSelect: (rowSelection) => {
        alert(`Selected rows \n ${JSON.stringify(rowSelection, null, 2)}`);
    },
    paginationOptions: {
        strNext: "Next",
        strPage: "Page",
        strPrev: "Previous",
        strResults: "Results",
    },
    strNoResults: "No results",
};

describe("<DataTable />", () => {
    describe("when rendering", () => {
        test("should render without throwing", () => {
            const { container } = renderComponent(PROPS);

            expect(container).not.toBeNull();
        });
    });
});
