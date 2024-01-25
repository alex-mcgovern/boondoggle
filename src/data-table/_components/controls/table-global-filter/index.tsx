import type { RowData, Table } from "@tanstack/react-table";

import { i18n } from "../../../../_i18n";
import { Group } from "../../../../group";
import { Input } from "../../../../input";
import {
    SearchField,
    SearchFieldClearButton,
    SearchFieldIcon,
} from "../../../../search-field";
import { tableGlobalFilterCSS } from "./styles.css";

export function TableGlobalFilter<TRowData extends RowData>({
    table,
}: {
    table: Table<TRowData>;
}) {
    return (
        <SearchField
            aria-label="Filter"
            className={tableGlobalFilterCSS}
            onChange={table.setGlobalFilter}
            value={table.getState().globalFilter ?? ""}
        >
            <Group>
                <Input
                    icon={<SearchFieldIcon />}
                    placeholder={i18n.filter_placeholder}
                    variant="unstyled"
                />
                <SearchFieldClearButton />
            </Group>
        </SearchField>
    );
}
