import { useCallback, useEffect, useMemo, useState } from "react";

import { FieldActionButtonClear } from "../../../field_action_button_clear";
import { FieldActionButtonCopy } from "../../../field_action_button_copy";
import { FieldActionButtonVisibility } from "../../../field_action_button_visibility";
import { useFieldCopyableState } from "../use_field_copyable_state";
import { useFieldVisibilityState } from "../use_field_visibility_state";

import type { ElementSizeEnum } from "../../../../styles/common/element_size.css";
import type { ChangeEvent, ReactNode } from "react";

type UseFieldActionsArgs = {
    /**
     * The default value of the input.
     */
    defaultValue: string | number | readonly string[] | undefined;

    /**
     * Whether to allow the user to clear the input with a button
     */
    isClearable: boolean | undefined;

    /**
     * Whether the field is copyable.
     */
    isCopyable: boolean | undefined;

    /**
     * Whether the field value can be optionally visible.
     */
    isVisibilityToggleable: boolean | undefined;

    /**
     * Whether the field value is visible.
     */
    isVisible: boolean | undefined;

    /**
     * The function to call when the input value changes.
     */
    onChange: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;

    /**
     * Whether the field is read-only.
     */
    readOnly: boolean | undefined;

    /**
     * The size of the field.
     */
    size: ElementSizeEnum | undefined;
    /**
     * A string to use as the toolip.
     */
    tooltipStr?: string;

    /**
     * The value of the input.
     */
    value: string | number | readonly string[] | undefined;
};

/**
 * Returns an array of React nodes that represent actions that can be taken on a field.
 */
export function useFieldActions({
    defaultValue,
    isClearable,
    isCopyable,
    isVisibilityToggleable,
    isVisible: initialIsVisible,
    onChange,
    readOnly,
    size,
    tooltipStr,
    value,
}: UseFieldActionsArgs) {
    // Manage the input value with state to allow it to be cleared.

    const [inputValue, setInputValue] = useState<typeof value | typeof defaultValue>(() => {
        return value || defaultValue || "";
    });

    useEffect(() => {
        if (value !== undefined) {
            setInputValue(value);
        }
    }, [value]);

    // Event handler for when the input value changes.

    const handleUpdateInputValue = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            if (onChange) {
                onChange(e);
            }
            return setInputValue(e.target.value);
        },
        [onChange]
    );

    const { handleToggleVisibility, isVisible } = useFieldVisibilityState({
        initialIsVisible,
    });

    const { handleCopyValue, isCopied } = useFieldCopyableState({
        isCopyable,
        readOnly,
    });

    const actions = useMemo(() => {
        const actionNodes: Array<ReactNode> = [];

        if (isVisibilityToggleable) {
            actionNodes.push(
                <FieldActionButtonVisibility
                    isVisible={isVisible}
                    onClick={handleToggleVisibility}
                    size={size}
                    strVisible={tooltipStr}
                />
            );
        }
        if (isCopyable) {
            actionNodes.push(
                <FieldActionButtonCopy
                    isCopied={isCopied}
                    onClick={() => {
                        handleCopyValue?.(inputValue);
                    }}
                    size={size}
                    strCopy={tooltipStr}
                />
            );
        }

        if (isClearable && !readOnly && !!inputValue) {
            actionNodes.push(
                <FieldActionButtonClear
                    onClick={() => {
                        onChange?.({
                            target: { value: "" },
                        } as ChangeEvent<HTMLInputElement>);

                        return setInputValue("");
                    }}
                    size={size}
                    strClear={tooltipStr}
                />
            );
        }

        return actionNodes;
    }, [
        handleCopyValue,
        handleToggleVisibility,
        inputValue,
        isClearable,
        isCopied,
        isCopyable,
        isVisibilityToggleable,
        isVisible,
        onChange,
        readOnly,
        size,
        tooltipStr,
    ]);

    return {
        actions,
        handleUpdateInputValue,
        inputValue,
        isVisible,
    };
}
