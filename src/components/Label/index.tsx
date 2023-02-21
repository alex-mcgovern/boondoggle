import React from "react";
import type { GetSprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../Box";

export interface LabelProps extends GetSprinklesArgs {
  label: string;
  htmlFor: string;
}

export function Label({ label, htmlFor, ...rest }: LabelProps) {
  return (
    <Box
      as="label"
      color="neutral_text_lowContrast"
      display="block"
      fontSize="body_md"
      fontWeight="medium"
      marginBottom="spacing0"
      htmlFor={htmlFor}
      {...rest}
    >
      {label}
    </Box>
  );
}
