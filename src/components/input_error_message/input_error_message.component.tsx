import { Box } from "../box";

export interface InputErrorMessageProps {
    message?: string;
}

export function InputErrorMessage({ message }: InputErrorMessageProps) {
    if (!message) {
        return null;
    }

    if (message) {
        return (
            <Box
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
