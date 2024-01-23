import type { RowData, Table } from "@tanstack/react-table";

import type { PaginationOptions } from "../../types";

import { Box } from "../../../box";
import { Button } from "../../../button";

export function TablePagination<TRowData extends RowData>({
    paginationOptions,
    table,
}: {
    paginationOptions: PaginationOptions | undefined;
    table: Table<TRowData>;
}) {
    if (!paginationOptions) {
        return null;
    }

    const { strNext, strPage, strPrev, strResults } = paginationOptions;

    return (
        <Box
            alignItems="center"
            display="flex"
            gap="space_2"
            marginY="space_3"
            paddingX="space_4"
        >
            <Box
                alignItems="center"
                as="span"
                display="flex"
                fontSize="bodyMd"
                gap="space_1"
                marginRight="auto"
                marginY="space_1"
            >
                <Box fontWeight="semibold">
                    {table.getPrePaginationRowModel().rows.length}
                </Box>
                <Box>{strResults}.</Box>

                {!!table.getPageCount() && (
                    <>
                        <Box>{strPage}</Box>
                        <Box
                            fontWeight="semibold"
                            whiteSpace="nowrap"
                        >
                            {table.getState().pagination.pageIndex + 1} of{" "}
                            {table.getPageCount()}
                        </Box>
                    </>
                )}
            </Box>

            <Box
                alignItems="center"
                display="flex"
                gap="space_2"
            >
                <Button
                    appearance="secondary"
                    isDisabled={!table.getCanPreviousPage()}
                    name="button_previous_page"
                    onPress={() => table.previousPage()}
                    size="sm"
                >
                    {strPrev}
                </Button>
                <Button
                    appearance="secondary"
                    isDisabled={!table.getCanNextPage()}
                    name="button_next_page"
                    onPress={() => table.nextPage()}
                    size="sm"
                >
                    {strNext}
                </Button>
            </Box>
        </Box>
    );
}
