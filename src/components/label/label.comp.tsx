import { Box } from "../box";

import type { BoxProps } from "../box";

export type LabelProps = BoxProps & {
  htmlFor: string;
  label: string;
};

export function Label({ label, htmlFor, ...rest }: LabelProps) {
  return (
    <Box
      as="label"
      color="text_low_contrast"
      display="block"
      fontSize="body_sm"
      fontWeight="medium"
      htmlFor={htmlFor}
      marginBottom="spacing0"
      {...rest}
    >
      {label}
    </Box>
  );
}
