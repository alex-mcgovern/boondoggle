import {
  faCircleExclamation,
  faTimesCircle,
} from "@fortawesome/pro-light-svg-icons";

import { I18N } from "../../../core/constants/I18N";
import { arrayHasLength } from "../../../core/lib/validation/array_has_length";
import { Box } from "../Box";
import { Button } from "../Button";
import { Icon } from "../Icon";

import type { ColumnFiltersState } from "@tanstack/react-table";
import type { Dispatch, SetStateAction } from "react";

type DataTableInfoNoResultsProps = {
  column_filters: ColumnFiltersState;
  setColumnFilters: Dispatch<SetStateAction<ColumnFiltersState>>;
};

export function DataTableInfoNoResults({
  column_filters,
  setColumnFilters,
}: DataTableInfoNoResultsProps) {
  if (!arrayHasLength(column_filters)) {
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
        {I18N.data_table_no_results_title}
      </Box>

      <Box __maxWidth="25rem">{I18N.data_table_no_results_description}</Box>

      <Button
        name="clear_filters"
        onClick={() => {
          return setColumnFilters([]);
        }}
        slotRight={<Icon icon={faTimesCircle} />}
      >
        {I18N.data_table_no_results_button_text}
      </Button>
    </Box>
  );
}
