import { Box } from "../box";

import type { WithDescription } from "../../common-types";
import type { BoxProps } from "../box";

export type FieldDescriptionProps = BoxProps & WithDescription;

/**
 * A description rendered under a field element.
 */
export function FieldDescription({
    className: userClassName,
    description,
    ...rest
}: FieldDescriptionProps) {
    if (!description) {
        return null;
    }

    return (
        <Box
            alignItems="start"
            className={userClassName}
            color="text_low_contrast"
            display="flex"
            fontStyle="bodySm"
            gap="space_1"
            marginY="space_1"
            {...rest}
        >
            {description}
        </Box>
    );
}
