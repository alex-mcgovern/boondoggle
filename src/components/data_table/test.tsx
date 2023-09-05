/**
 * @jest-environment jsdom
 */
import { faPlus } from "@fortawesome/sharp-regular-svg-icons";
import { render } from "@testing-library/react";

import { DataTable } from ".";
import {
    DATA_TABLE_COLUMNS_WITH_AGGREGATED_MOCK,
    generateMockAccountColumn,
} from "../../../mocks/data_table_columns.mock";
import { Button } from "../button";
import { Icon } from "../icon";

import type { DataTableProps } from ".";
import type { MockAccountColumnData } from "../../../mocks/data_table_columns.mock";

const renderComponent = ({ ...props }: DataTableProps<MockAccountColumnData>) =>
    render(<DataTable {...props} />);

const MOCK_DATA = Array.from({ length: 40 }, generateMockAccountColumn);

const PROPS: DataTableProps<MockAccountColumnData> = {
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
    isSortable: true,
    strClearAllFilters: "Clear all filters",
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
