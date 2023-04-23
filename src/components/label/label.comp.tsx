import { Box } from "../box";

import type { BoxProps } from "../box";

export type LabelProps = BoxProps & {
  label: string;
  htmlFor: string;
};

export function Label({ label, htmlFor, ...rest }: LabelProps) {
  return (
    <Box
      as="label"
      color="text_low_contrast"
      display="block"
      fontSize="body_sm"
      fontWeight="medium"
      marginBottom="spacing0"
      htmlFor={htmlFor}
      {...rest}
    >
      {label}
    </Box>
  );
}
