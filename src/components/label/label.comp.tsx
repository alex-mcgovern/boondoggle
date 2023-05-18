import { Box } from "../box";
import { Tooltip } from "../tooltip";

import type { BoxProps } from "../box";

export type LabelProps = BoxProps & {
  htmlFor: string;
  label: string;
  labelTooltip?: string;
};

export function Label({ label, labelTooltip, htmlFor, ...rest }: LabelProps) {
  return (
    <Box
      alignItems="center"
      as="label"
      color="text_low_contrast"
      display="flex"
      fontSize="body_sm"
      fontWeight="normal"
      gap="spacing0"
      htmlFor={htmlFor}
      marginBottom="spacing0"
      {...rest}
    >
      {label}
      {labelTooltip && <Tooltip side="top" tooltipText={labelTooltip} />}
    </Box>
  );
}
