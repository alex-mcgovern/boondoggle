import { Box } from "../box";
import { Tooltip } from "../tooltip";

import type { BoxProps } from "../box";

export type FieldLabelProps = BoxProps & {
  htmlFor: string;
  label: string;
  labelTooltip?: string;
};

export function FieldLabel({
  htmlFor,
  label,
  labelTooltip,
  ...rest
}: FieldLabelProps) {
  return (
    <Box
      alignItems="center"
      as="label"
      color="text_low_contrast"
      display="flex"
      fontSize="body_sm"
      fontWeight="normal"
      gap="spacing_0.5"
      htmlFor={htmlFor}
      marginBottom="spacing_0.5"
      {...rest}
    >
      {label}
      {labelTooltip && (
        <Tooltip placement="middle-start" tooltipText={labelTooltip} />
      )}
    </Box>
  );
}
