import { faCopy } from "@fortawesome/pro-solid-svg-icons/faCopy";
import { faEye } from "@fortawesome/pro-solid-svg-icons/faEye";
import { faEyeSlash } from "@fortawesome/pro-solid-svg-icons/faEyeSlash";
import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons/faTimesCircle";
import clsx from "clsx";
import { forwardRef, useCallback, useMemo, useState } from "react";
import {
    ButtonContext as FieldButtonContext,
    TextField as RACTextField,
    type TextFieldProps as RACTextFieldProps,
    useSlottedContext,
} from "react-aria-components";

import { i18n } from "../_i18n";
import { FieldButton, type FieldButtonProps } from "../field-button";
import { Icon } from "../icon";
import { toast } from "../toaster";
import { Tooltip, TooltipTrigger } from "../tooltip";
import { textFieldCSS } from "./styles.css";

/**
 * A `FieldButton` to clear the text field. [Built with React Button component](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
export function TextFieldClearButton() {
    return (
        <TooltipTrigger>
            <FieldButton slot="clear">
                <Icon icon={faTimesCircle} />
            </FieldButton>
            <Tooltip placement="top">{i18n.clear}</Tooltip>
        </TooltipTrigger>
    );
}

/**
 * A `FieldButton` to copy the text field value to the clipboard. [Built with React Button component](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
export function TextFieldCopyButton(props: FieldButtonProps) {
    return (
        <TooltipTrigger>
            <FieldButton
                {...props}
                slot="copy"
            >
                <Icon icon={faCopy} />
            </FieldButton>
            <Tooltip placement="top">{i18n.copy_to_clipboard}</Tooltip>
        </TooltipTrigger>
    );
}

/**
 * A `FieldButton` to toggle the visibility of the text field value. [Built with React Button component](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
export function TextFieldVisibilityButton(props: FieldButtonProps) {
    const context = useSlottedContext(FieldButtonContext, "visibility");

    return (
        <TooltipTrigger>
            <FieldButton
                {...props}
                slot="visibility"
            >
                <Icon icon={context?.value === "hidden" ? faEyeSlash : faEye} />
            </FieldButton>
            <Tooltip placement="top">
                {context?.value === "hidden" ? i18n.hide : i18n.show}
            </Tooltip>
        </TooltipTrigger>
    );
}

export type TextFieldProps = RACTextFieldProps;

/**
 * A text field allows a user to enter a plain text value with a keyboard.
 *
 * It is a thin layer on top of the
 * [React Aria TextField component](https://react-spectrum.adobe.com/react-aria/TextField.html)
 * with some additional props for styling / variants.
 */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    (props, ref) => {
        const [value, setValue] = useState<TextFieldProps["value"]>(
            props.value || props.defaultValue,
        );

        const [type, setType] = useState<TextFieldProps["type"]>(props.type);

        const clearValue = useCallback(() => {
            setValue("");
        }, [setValue]);

        const toggleVisibility = useCallback(() => {
            setType((c) => (c === "password" ? "text" : "password"));
        }, [setType]);

        const copyValue = useCallback(() => {
            if (!value) return;

            return navigator.clipboard
                .writeText(value)
                .then(() => toast.success(i18n.copied_to_clipboard));
        }, [value]);

        const buttonContext: Record<
            "slots",
            Record<string, FieldButtonProps>
        > = useMemo(() => {
            return {
                slots: {
                    clear: {
                        isDisabled: !value,
                        onPress: clearValue,
                    },
                    copy: {
                        isDisabled: !value,
                        onPress: copyValue,
                    },
                    tooltip_trigger: {},
                    visibility: {
                        onPress: toggleVisibility,
                        value: type === "password" ? "hidden" : "visible",
                    },
                },
            };
        }, [clearValue, copyValue, toggleVisibility, value, type]);

        return (
            <FieldButtonContext.Provider value={buttonContext}>
                <RACTextField
                    {...props}
                    className={(p) => clsx(props.className, textFieldCSS(p))}
                    onChange={(v) => {
                        setValue(v);
                        props.onChange?.(v);
                    }}
                    ref={ref}
                    type={type}
                    value={value}
                />
            </FieldButtonContext.Provider>
        );
    },
);
