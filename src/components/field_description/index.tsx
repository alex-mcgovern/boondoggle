import { Box } from "../box";

import type { BoxProps } from "../box";
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
                gap="space_1"
                marginY="space_1"
                {...rest}
            >
                {description}
            </Box>
        );
    }
    return null;
}
