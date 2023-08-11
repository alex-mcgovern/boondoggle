import { Box } from "../box_comp";

import type { BoxProps } from "../box_comp";
import type { ReactNode } from "react";

export type FieldDescriptionProps = BoxProps & {
  description?: ReactNode;
};

export function FieldDescription({
  className: userClassName,
  description,
  ...rest
}: FieldDescriptionProps) {
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
