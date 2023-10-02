import { useCallback, useEffect, useState } from "react";

import { currencyFormatter } from "./currency_formatter";
import { currencyParser } from "./currency_parser";
import { getCursorPosition } from "./get_cursor_position";

import type { NativeEventInputType } from "./get_cursor_position";
import type { ChangeEvent, ChangeEventHandler } from "react";

type UseFormattedCurrencyArgs = {
    /**
     * The initial value passed to the `InputCurrency` component.
     */
    defaultValue: number | undefined;
    /**
     * The locale to use in formatting.
     */
    locale: string;
    /**
     * The callback to call when the value changes.
     */
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
    /**
     * The controlled value of the `InputCurrency` component.
     */
    value: number | undefined;
};

type InputValue = {
    formatted: string | undefined;
    raw: string | undefined;
    selection?: { end: number | null; start: number | null };
};

export function useFormattedCurrency({
    defaultValue,
    locale,
    onChange: initOnChange,
    value: controlledValue,
}: UseFormattedCurrencyArgs) {
    const [value, setValue] = useState<InputValue>({
        formatted:
            currencyFormatter({
                locale,
                value: defaultValue?.toString() || controlledValue?.toString(),
            }) ?? "",
        raw: (defaultValue?.toString() || controlledValue?.toString()) ?? "",
    });

    useEffect(() => {
        setValue((old) => {
            return {
                formatted: currencyFormatter({
                    locale,
                    value: old.raw,
                }),
                raw: old.raw,
            };
        });
    }, [controlledValue, defaultValue, locale]);

    const onChange = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            const { selectionEnd, selectionStart, value: val } = e.target;

            const parsed = currencyParser({ locale, value: val });
            const formatted = currencyFormatter({ locale, value: parsed });

            const { end, start } = getCursorPosition({
                formattedValue: formatted,
                incomingValue: val,
                inputType: (e.nativeEvent as InputEvent)
                    .inputType as NativeEventInputType,
                selectionEnd,
                selectionStart,
            });

            initOnChange?.({
                ...e,
                target: {
                    ...e.target,
                    value: parsed ?? "",
                },
            });

            setValue({
                formatted,
                raw: parsed ?? "",
                selection: { end, start },
            });
        },
        [initOnChange, locale]
    );

    return { onChange, value };
}
