import type { Column } from "@tanstack/react-table";
import type { ChangeEvent } from "react";

import { useCallback } from "react";
import { useEffect, useMemo, useState } from "react";

import { i18n } from "../../../../_i18n";
import { arrayHasLength } from "../../../../_lib/array-has-length";
import { isTruthy } from "../../../../_lib/is-truthy";
import { Box } from "../../../../box";
import { Button } from "../../../../button";
import { sprinkles } from "../../../../sprinkles/index.css";
import { FilterDialogTitle } from "../base/filter-dialog-title";
import { FilterPillMenu } from "../base/filter-pill-menu";
import {
    activeFilterStringCSS,
    multiFilterItemCSS,
    multiFilterItemCheckboxCSS,
    multiFilterItemTextCSS,
    multiFilterListCSS,
} from "./styles.css";

const ColumnMultiFilterItem = ({
    defaultChecked,
    handleSelection,
    label,
    value,
}: {
    defaultChecked: boolean | undefined;
    handleSelection: (value: string) => void;
    label?: string;
    value: string;
}) => {
    return (
        <Box
            alignItems="center"
            as="label"
            className={multiFilterItemCSS}
            display="flex"
            fontStyle="bodyMd"
            gap="space_2"
            htmlFor={`item_${value}`}
            marginBottom="space_4"
        >
            <Box
                as="input"
                className={multiFilterItemCheckboxCSS}
                defaultChecked={defaultChecked}
                id={`item_${value}`}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleSelection(e.target.value)
                }
                // tabIndex={-1}
                type="checkbox"
                value={value}
            />
            <div className={multiFilterItemTextCSS}>{label}</div>
        </Box>
    );
};

export function ColumnMultiFilter<TRowData>({
    column,
    strFilterDialogTitle,
    strFilterPillText,
    transformValueToString = (value) => value,
}: {
    column: Column<TRowData>;
    strFilterDialogTitle: string;
    strFilterPillText: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    transformValueToString?: (value: any) => string;
}) {
    const [isOpen, setIsOpen] = useState(false);

    const currentFilters: string[] = column.getFilterValue() as string[];

    const [selectedItems, setSelectedItems] =
        useState<Array<string>>(currentFilters);

    const handleSelection = useCallback((value: string) => {
        setSelectedItems((current) => {
            if (current?.includes(value)) {
                return current.filter((item) => item !== value);
            }

            return [...(current ?? []), value];
        });
    }, []);

    useEffect(() => {
        setSelectedItems(currentFilters);
    }, [currentFilters]);

    const isFiltered =
        column.getIsFiltered() &&
        arrayHasLength(currentFilters.filter(isTruthy));

    const pillText = isFiltered ? (
        <Box
            display="flex"
            gap="space_1"
        >
            {strFilterPillText}
            <div>|</div>
            {currentFilters.map((v, i) => {
                return (
                    <Box
                        as="span"
                        className={activeFilterStringCSS}
                        color="button_default"
                        key={v ?? i}
                    >
                        {transformValueToString ? transformValueToString(v) : v}
                        {i < currentFilters.length - 1 ? ", " : ""}
                    </Box>
                );
            })}
        </Box>
    ) : (
        strFilterPillText
    );

    /** -----------------------------------------------------------------------------
     * FILTER SELECT ITEMS
     * ------------------------------------------------------------------------------- */

    const facetKeys = useMemo(() => {
        return column.getCanFilter()
            ? Array.from(column.getFacetedUniqueValues().keys())
            : [];
    }, [column]);

    const items = useMemo(() => {
        if (!column.getCanFilter()) {
            return [];
        }

        return facetKeys.sort().map((v, i) => {
            return (
                <ColumnMultiFilterItem
                    defaultChecked={currentFilters?.includes(v)}
                    handleSelection={handleSelection}
                    key={v ?? i}
                    label={
                        transformValueToString ? transformValueToString(v) : v
                    }
                    value={v}
                />
            );
        });
    }, [
        facetKeys,
        handleSelection,
        currentFilters,
        column,
        transformValueToString,
    ]);

    if (!column.getCanFilter()) {
        return null;
    }

    return (
        <FilterPillMenu
            clearFilters={() => column.setFilterValue(undefined)}
            disabled={!arrayHasLength(facetKeys)}
            isFiltered={isFiltered}
            isOpen={isOpen}
            onIsOpenChange={setIsOpen}
            pillText={pillText}
        >
            <FilterDialogTitle strFilterDialogTitle={strFilterDialogTitle} />

            <div className={multiFilterListCSS}>{items}</div>

            <Box paddingX="space_4">
                <Button
                    className={sprinkles({
                        marginBottom: "space_4",
                        width: "100%",
                    })}
                    name="apply_filter"
                    onPress={() => {
                        column.setFilterValue(
                            arrayHasLength(selectedItems)
                                ? selectedItems
                                : undefined,
                        );
                        setIsOpen(false);
                    }}
                    size="sm"
                >
                    {i18n.apply_filter}
                </Button>
            </Box>
        </FilterPillMenu>
    );
}
