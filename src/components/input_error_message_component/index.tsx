import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { Icon } from "../Icon";
import { Box } from "../box_component/box.component";

export interface InputErrorMessageProps {
  message?: string;
}

export function InputErrorMessage({ message }: InputErrorMessageProps) {
  if (message) {
    return (
      <Box
        color="semantic_red_highContrast"
        display="flex"
        gap="spacing0"
        alignItems="center"
        marginY="spacing0"
      >
        <Icon icon={faCircleExclamation} />
        <Box fontStyle="body_sm" fontWeight="semibold">
          {message}
        </Box>
      </Box>
    );
  }
  return null;
}
