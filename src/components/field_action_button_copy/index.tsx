import { faCheck, faCopy } from "@fortawesome/pro-solid-svg-icons";

import { Box } from "../box";
import { FieldActionButton } from "../field_action_button";
import { Icon } from "../icon";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip_comp";

import type { FieldActionButtonProps } from "../field_action_button";

export type FieldActionButtonCopyProps = {
    /**
     * Whether the user has just copied tha value of the field or not.
     */
    isCopied?: boolean;
    /**
     * A string to use in for the tooltip.
     */
    label?: string;
    labelTooltip?: string;
} & Omit<FieldActionButtonProps, "name" | "slot">;

/**
 * A button to copy the contents of a field.
 */
export function FieldActionButtonCopy({
    isCopied,
    label,
    labelTooltip,
    onClick,
    size,
}: FieldActionButtonCopyProps) {
    return (
        <Box>
            {labelTooltip ? (
                <Tooltip placement="right">
                    <TooltipTrigger asChild>
                        <FieldActionButton
                            colorOverlay={isCopied ? "green" : undefined}
                            label={label}
                            name="copy"
                            onClick={onClick}
                            size={size}
                            slot={[<Icon icon={isCopied ? faCheck : faCopy} />]}
                        />
                    </TooltipTrigger>
                    <TooltipContent>{labelTooltip}</TooltipContent>
                </Tooltip>
            ) : (
                <FieldActionButton
                    colorOverlay={isCopied ? "green" : undefined}
                    name="copy"
                    onClick={onClick}
                    size={size}
                    slot={[<Icon icon={isCopied ? faCheck : faCopy} />]}
                />
            )}
        </Box>
    );
}
