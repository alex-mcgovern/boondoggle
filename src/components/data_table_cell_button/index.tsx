import { Box } from "../box";
import { Button } from "../button";
import {
  dataTableCellButtonInnerStyle,
  dataTableCellButtonStyle,
} from "./styles.css";

import type { ButtonProps } from "../button";

export type DataTableCellButtonProps = Omit<
  ButtonProps,
  "color" | "children" | "appearance" | "className" | "name"
> & {
  /** The DataTable cell value */
  value: string | number;
};

/**
 * Button component for use in a DataTable cell.
 */
export function DataTableCellButton({
  value,
  ...rest
}: DataTableCellButtonProps) {
  return (
    <Button
      appearance="link"
      className={dataTableCellButtonStyle}
      color="text_high_contrast"
      name={`cell_button_${value}`}
      {...rest}
    >
      <Box className={dataTableCellButtonInnerStyle}>{value}</Box>
    </Button>
  );
}
