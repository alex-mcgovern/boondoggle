import { faInfoCircle } from "@fortawesome/pro-solid-svg-icons";

import { Box } from "../box";
import { Icon } from "../icon";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip_comp";

import type { BoxProps } from "../box";

export type FieldLabelProps = BoxProps & {
    /**
     * The `id` of the element being labelled.
     */
    htmlFor: string;

    /**
     * The string to use as the label.
     */
    label: string;

    /**
     * The string to render when the user hovers on the tooltip trigger for this element.
     */
    labelTooltip?: string;
};

/**
 * HTML label element for use with a form field or other labelled element.
 */
export function FieldLabel({ htmlFor, label, labelTooltip, ...rest }: FieldLabelProps) {
    return (
        <Box
            alignItems="center"
            as="label"
            color="text_low_contrast"
            display="flex"
            fontSize="body_sm"
            fontWeight="normal"
            gap="space_1"
            htmlFor={htmlFor}
            marginBottom="space_1"
            {...rest}
        >
            {label}

            {labelTooltip && (
                <Tooltip placement="right">
                    <TooltipTrigger asChild>
                        <button type="button">
                            <Icon
                                color="text_low_contrast"
                                icon={faInfoCircle}
                            />
                        </button>
                    </TooltipTrigger>
                    <TooltipContent>{labelTooltip}</TooltipContent>
                </Tooltip>
            )}
        </Box>
    );
}
