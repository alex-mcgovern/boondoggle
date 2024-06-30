import type { ComponentProps } from "react";
import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components";

import { faCopy } from "@fortawesome/pro-solid-svg-icons/faCopy";
import { faEye } from "@fortawesome/pro-solid-svg-icons/faEye";
import { faEyeSlash } from "@fortawesome/pro-solid-svg-icons/faEyeSlash";
import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons/faTimesCircle";
import clsx from "clsx";
import { useEffect } from "react";
import { forwardRef } from "react";
import { useCallback, useMemo, useState } from "react";
import {
    TextField as AriaTextField,
    ButtonContext as FieldButtonContext,
    useSlottedContext,
} from "react-aria-components";

import { FieldButton } from "../field-button";
import { i18n } from "../i18n";
import { Icon } from "../icon";
import { toast } from "../toaster";
import { Tooltip } from "../tooltip";
import "./styles.css";

/**
 * A `FieldButton` to clear the text field. [Built with React Button component](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
function TextFieldClearButton() {
    return (
        <Tooltip.Root>
            <FieldButton slot="clear">
                <Icon icon={faTimesCircle} />
            </FieldButton>
            <Tooltip.Body placement="top">{i18n.clear}</Tooltip.Body>
        </Tooltip.Root>
    );
}

/**
 * A `FieldButton` to copy the text field value to the clipboard. [Built with React Button component](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
function TextFieldCopyButton(props: ComponentProps<typeof FieldButton>) {
    return (
        <Tooltip.Root>
            <FieldButton
                {...props}
                slot="copy"
            >
                <Icon icon={faCopy} />
            </FieldButton>
            <Tooltip.Body placement="top">
                {i18n.copy_to_clipboard}
            </Tooltip.Body>
        </Tooltip.Root>
    );
}

/**
 * A `FieldButton` to toggle the visibility of the text field value. [Built with React Button component](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
function TextFieldVisibilityButton(props: ComponentProps<typeof FieldButton>) {
    const context = useSlottedContext(FieldButtonContext, "visibility");

    return (
        <Tooltip.Root>
            <FieldButton
                {...props}
                slot="visibility"
            >
                <Icon icon={context?.value === "hidden" ? faEyeSlash : faEye} />
            </FieldButton>
            <Tooltip.Body placement="top">
                {context?.value === "hidden" ? i18n.hide : i18n.show}
            </Tooltip.Body>
        </Tooltip.Root>
    );
}

/**
 * A text field allows a user to enter a plain text value with a keyboard.
 *
 * It is a thin layer on top of the
 * [React Aria TextField component](https://react-spectrum.adobe.com/react-aria/TextField.html)
 * with some additional props for styling / variants.
 */
export const TextFieldRoot = forwardRef<HTMLInputElement, AriaTextFieldProps>(
    (props, ref) => {
        const [value, setValue] = useState<AriaTextFieldProps["value"]>(
            props.value || props.defaultValue || "",
        );

        const [type, setType] = useState<AriaTextFieldProps["type"]>(
            props.type,
        );

        const clearValue = useCallback(() => {
            setValue("");
        }, []);

        const toggleVisibility = useCallback(() => {
            setType((c) => (c === "password" ? "text" : "password"));
        }, []);

        const copyValue = useCallback(() => {
            if (!value) return;

            return navigator.clipboard
                .writeText(value)
                .then(() => toast.success(i18n.copied_to_clipboard));
        }, [value]);

        useEffect(() => {
            setValue(props.value || props.defaultValue || "");
        }, [props.value, props.defaultValue]);

        const buttonContext: Record<
            "slots",
            Record<string, ComponentProps<typeof FieldButton>>
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
                <AriaTextField
                    {...props}
                    className={clsx(props.className, "text-field")}
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

export const TextField = {
    ClearButton: TextFieldClearButton,
    CopyButton: TextFieldCopyButton,
    Root: TextFieldRoot,
    VisibilityButton: TextFieldVisibilityButton,
};
