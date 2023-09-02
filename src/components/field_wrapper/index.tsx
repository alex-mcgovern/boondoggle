import clsx from "clsx";

import { variantColorOverlay } from "../../styles/color_palette.css";
import { hideLastpassStyle } from "../../styles/common/hide_lastpass.css";
import { Box } from "../box";
import { FieldDescription } from "../field_description";
import { FieldErrorMessage } from "../field_error_message";
import { FieldLabel } from "../field_label";

import type {
    WithColorOverlay,
    WithDescription,
    WithHideLastpass,
    WithOptionalLabel,
    WithStateInvalid,
    WithWrapperProps,
} from "../../common-types";
import type { ReactNode } from "react";

type FieldWrapperProps = WithColorOverlay &
    WithOptionalLabel &
    WithHideLastpass &
    WithDescription &
    WithStateInvalid &
    WithWrapperProps &
    WithStateInvalid & {
        /**
         * The field element to wrap.
         */
        children: ReactNode;
    };

/**
 * A wrapper for a field.
 */
export function FieldWrapper({
    children,
    colorOverlay,
    description,
    errorMessage,
    hideLastpass,
    id,
    invalid,
    label,
    labelProps,
    labelTooltip,
    wrapperProps,
}: FieldWrapperProps) {
    return (
        <Box
            className={clsx(colorOverlay ? variantColorOverlay[colorOverlay] : undefined, {
                [variantColorOverlay.red]: invalid,
                [hideLastpassStyle]: hideLastpass,
            })}
            color="text_low_contrast"
            position="relative"
            {...wrapperProps}
        >
            {label && id && (
                <FieldLabel
                    htmlFor={id}
                    label={label}
                    labelTooltip={labelTooltip}
                    {...labelProps}
                />
            )}

            {children}

            {invalid && errorMessage && <FieldErrorMessage message={errorMessage} />}

            {description && !invalid && <FieldDescription description={description} />}
        </Box>
    );
}
