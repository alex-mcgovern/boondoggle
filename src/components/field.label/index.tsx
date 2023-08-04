import { Box } from "../core.box";
import { Tooltip } from "../display.tooltip";

import type { BoxProps } from "../core.box";

export type LabelProps = BoxProps & {
  htmlFor: string;
  label: string;
  labelTooltip?: string;
};

export function Label({ htmlFor, label, labelTooltip, ...rest }: LabelProps) {
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
        <Tooltip placement="bottom-center" tooltipText={labelTooltip} />
      )}
    </Box>
  );
}
