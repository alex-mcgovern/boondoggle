import { faInfoCircle } from "@fortawesome/pro-light-svg-icons";

import { Box } from "../box";
import { Icon } from "../icon";

import type { BoxProps } from "../box";

export type InputDescriptionProps = BoxProps & {
  description?: string;
};

export function InputDescription({
  description,
  className: userClassName,
  ...rest
}: InputDescriptionProps) {
  if (!description) {
    return null;
  }

  if (description) {
    return (
      <Box
        alignItems="center"
        className={userClassName}
        color="text_low_contrast"
        display="flex"
        fontStyle="body_sm"
        gap="spacing_0.5"
        marginY="spacing_0.5"
        role="alert"
        {...rest}
      >
        <Icon icon={faInfoCircle} />
        {description}
      </Box>
    );
  }
  return null;
}
