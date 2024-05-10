import type { ComponentProps, ForwardedRef } from "react";
import type { TextFieldProps as AriaTextFieldProps } from "react-aria-components";

import { faCopy } from "@fortawesome/pro-solid-svg-icons/faCopy";
import { faEye } from "@fortawesome/pro-solid-svg-icons/faEye";
import { faEyeSlash } from "@fortawesome/pro-solid-svg-icons/faEyeSlash";
import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons/faTimesCircle";
import clsx from "clsx";
import { useCallback, useMemo, useState } from "react";
import {
    TextField as AriaTextField,
    ButtonContext as FieldButtonContext,
    useSlottedContext,
} from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";

import { FieldButton } from "../field-button";
import { FieldError } from "../field-error";
import { i18n } from "../i18n";
import { Icon } from "../icon";
import { toast } from "../toaster";
import { Tooltip, TooltipTrigger } from "../tooltip";
import "./styles.css";

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
export function TextFieldCopyButton(props: ComponentProps<typeof FieldButton>) {
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
export function TextFieldVisibilityButton(
    props: ComponentProps<typeof FieldButton>,
) {
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

/**
 * A text field allows a user to enter a plain text value with a keyboard.
 *
 * It is a thin layer on top of the
 * [React Aria TextField component](https://react-spectrum.adobe.com/react-aria/TextField.html)
 * with some additional props for styling / variants.
 */
export function TextField({
    ref,
    ...props
}: AriaTextFieldProps & { ref?: ForwardedRef<HTMLInputElement> }) {
    const [value, setValue] = useState<AriaTextFieldProps["value"]>(
        props.value || props.defaultValue,
    );

    const [type, setType] = useState<AriaTextFieldProps["type"]>(props.type);

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
}

/** -----------------------------------------------------------------------------
 * FormTextField
 * ------------------------------------------------------------------------------- */

/**
 * A form text field connects a `TextField` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/TextField.html)
 */
export function FormTextField({
    children,
    ...props
}: ComponentProps<typeof TextField>) {
    if (!props.name) {
        throw new Error("FormTextField requires a name prop");
    }

    const { control } = useFormContext();

    const {
        field: { disabled: isDisabled, onChange, ref, value = "", ...field },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue: props.defaultValue,
        name: props.name,
    });

    return (
        <TextField
            {...props}
            {...field}
            defaultValue={value}
            isDisabled={isDisabled}
            isInvalid={invalid}
            onChange={(v) => {
                onChange(v);
                props.onChange?.(v);
            }}
            ref={ref}
            validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
            value={value}
        >
            {() => {
                return (
                    <>
                        {children}
                        <FieldError>{error?.message}</FieldError>
                    </>
                );
            }}
        </TextField>
    );
}
