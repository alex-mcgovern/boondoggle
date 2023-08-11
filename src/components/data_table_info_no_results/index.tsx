import {
  faCircleExclamation,
  faTimesCircle,
} from "@fortawesome/pro-light-svg-icons";

import { arrayHasLength } from "../../lib/array_has_length";
import { Box } from "../box";
import { Button } from "../button";
import { Icon } from "../icon";

import type { ColumnFiltersState } from "@tanstack/react-table";
import type { Dispatch, SetStateAction } from "react";

type DataTableInfoNoResultsProps = {
  /** The current column filters state */
  columnFilters: ColumnFiltersState;
  /** The function to set the column filters state */
  setColumnFilters: Dispatch<SetStateAction<ColumnFiltersState>>;
  /** The text to display for the clear all filters button. */
  strClearAllFilters: string;
  /** The description of the no results message */
  strNoResultsDescription: string;
  /** The title of the no results message */
  strNoResultsTitle: string;
};

/**
 * Renders a message to the user when there are no results in the data table.
 */
export function DataTableInfoNoResults({
  columnFilters,
  setColumnFilters,
  strClearAllFilters,
  strNoResultsDescription,
  strNoResultsTitle,
}: DataTableInfoNoResultsProps) {
  if (!arrayHasLength(columnFilters)) {
    return null;
  }

  return (
    <Box
      alignItems="center"
      background="tint_default"
      borderTop="border_default"
      color="text_low_contrast"
      display="flex"
      flexDirection="column"
      fontStyle="body_sm"
      gap="spacing_2"
      justifyContent="center"
      paddingX="spacing_2"
      paddingY="spacing_6"
      textAlign="center"
    >
      {}

      <Icon icon={faCircleExclamation} size="2xl" />

      <Box fontStyle="body_lg" fontWeight="semibold">
        {strNoResultsTitle}
      </Box>

      <Box __maxWidth="25rem">{strNoResultsDescription}</Box>

      <Button
        name="clear_filters"
        onClick={() => {
          return setColumnFilters([]);
        }}
        slotRight={<Icon icon={faTimesCircle} />}
      >
        {strClearAllFilters}
      </Button>
    </Box>
  );
}
