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
        alignItems="center"
        className={clsx(userClassName, variantColorOverlay.red)}
        color="text_low_contrast"
        display="flex"
        fontStyle="body_sm"
        fontWeight="semibold"
        gap="spacing0"
        marginY="spacing0"
        role="alert"
        {...rest}
      >
        {message}
      </Box>
    );
  }
  return null;
}
