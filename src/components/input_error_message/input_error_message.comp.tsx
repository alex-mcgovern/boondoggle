import { Box } from "../box";

export type InputErrorMessageProps = {
  message?: string;
};

export function InputErrorMessage({ message }: InputErrorMessageProps) {
  if (!message) {
    return null;
  }

  if (message) {
    return (
      <Box
        role="alert"
        color="text_low_contrast"
        display="flex"
        gap="spacing0"
        alignItems="center"
        marginY="spacing0"
        fontStyle="body_sm"
        fontWeight="semibold"
      >
        {message}
      </Box>
    );
  }
  return null;
}
