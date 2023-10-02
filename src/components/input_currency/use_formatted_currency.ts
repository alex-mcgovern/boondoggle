import { useCallback, useEffect, useState } from "react";

import { currencyFormatter } from "./currency_formatter";
import { currencyParser } from "./currency_parser";

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
};

export function useFormattedCurrency({
    defaultValue,
    locale,
    onChange: initOnChange,
    value: controlledValue,
}: UseFormattedCurrencyArgs) {
    const [value, setValue] = useState<InputValue>({
        formatted: currencyFormatter({
            locale,
            value: defaultValue?.toString() || controlledValue?.toString(),
        }),
        raw: defaultValue?.toString() || controlledValue?.toString(),
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
            const parsed = currencyParser({ locale, value: e.target.value });
            const formatted = currencyFormatter({ locale, value: parsed });

            initOnChange?.({
                ...e,
                target: {
                    ...e.target,
                    value: parsed ?? "",
                },
            });

            setValue({ formatted, raw: parsed ?? "" });
        },
        [initOnChange, locale]
    );

    return { onChange, value };
}
