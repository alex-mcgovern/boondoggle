import { faExclamationCircle } from "@fortawesome/pro-light-svg-icons";
import clsx from "clsx";

import { variantColorOverlay } from "../../styles/color_palette.css";
import { Box } from "../box";
import { Icon } from "../icon";

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
        gap="spacing0"
        marginY="spacing0"
        role="alert"
        {...rest}
      >
        <Icon icon={faExclamationCircle} />
        {message}
      </Box>
    );
  }
  return null;
}
