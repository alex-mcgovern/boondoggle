import { faExclamationCircle } from "@fortawesome/pro-light-svg-icons";
import clsx from "clsx";

import { variantColorOverlay } from "../../styles/color_palette.css";
import { Box } from "../Box";
import { Icon } from "../Icon";

import type { BoxProps } from "../Box";

export type FieldErrorMessageProps = BoxProps & {
  message?: string;
};

export function FieldErrorMessage({
  className: userClassName,
  message,
  ...rest
}: FieldErrorMessageProps) {
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
        gap="spacing_0.5"
        marginY="spacing_0.5"
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
