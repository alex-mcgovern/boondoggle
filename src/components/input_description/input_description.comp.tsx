import { Box } from "../box";

import type { BoxProps } from "../box";
import type { ReactNode } from "react";

export type InputDescriptionProps = BoxProps & {
  description?: ReactNode;
};

export function InputDescription({
  className: userClassName,
  description,
  ...rest
}: InputDescriptionProps) {
  if (!description) {
    return null;
  }

  if (description) {
    return (
      <Box
        alignItems="start"
        className={userClassName}
        color="text_low_contrast"
        display="flex"
        fontStyle="body_sm"
        gap="spacing_0.5"
        marginY="spacing_0.5"
        {...rest}
      >
        {description}
      </Box>
    );
  }
  return null;
}
