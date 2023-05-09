import { Box } from "../box";
import { Tooltip } from "../tooltip";

import type { BoxProps } from "../box";

export type LabelProps = BoxProps & {
  label: string;
  labelTooltip?: string;
  htmlFor: string;
};

export function Label({ label, labelTooltip, htmlFor, ...rest }: LabelProps) {
  return (
    <Box
      alignItems="center"
      as="label"
      color="text_low_contrast"
      display="flex"
      fontSize="body_sm"
      fontWeight="medium"
      gap="spacing0"
      marginBottom="spacing0"
      htmlFor={htmlFor}
      {...rest}
    >
      {label}
      {labelTooltip && <Tooltip tooltipText={labelTooltip} side="top" />}
    </Box>
  );
}
