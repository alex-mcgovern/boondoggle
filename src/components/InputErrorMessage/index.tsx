import React from "react";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Box } from "../Box";
import { Icon } from "../Icon";

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
