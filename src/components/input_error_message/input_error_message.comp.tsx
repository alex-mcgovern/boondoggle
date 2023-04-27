import clsx from "clsx";

import { variantColorOverlay } from "../../styles/color_palette.css";
import { Box } from "../box";

import type { BoxProps } from "../box";

export type InputErrorMessageProps = BoxProps & {
  message?: string;
};

export function InputErrorMessage({
  message,
  className: userClassName,
  ...rest
}: InputErrorMessageProps) {
  if (!message) {
    return null;
  }

  if (message) {
    return (
      <Box
        className={clsx(userClassName, variantColorOverlay.red)}
        role="alert"
        color="text_low_contrast"
        display="flex"
        gap="spacing0"
        alignItems="center"
        marginY="spacing0"
        fontStyle="body_sm"
        fontWeight="semibold"
        {...rest}
      >
        {message}
      </Box>
    );
  }
  return null;
}
