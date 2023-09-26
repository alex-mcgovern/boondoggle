import NumberParser from "intl-number-parser";
import { forwardRef, useCallback, useState } from "react";

import { formatNumber } from "../../lib/format_number";
import { Box } from "../box";
import { Input } from "../input";

import type {
    WithColorOverlay,
    WithDescription,
    WithHideLastpass,
    WithId,
    WithName,
    WithOptionalIsClearable,
    WithOptionalIsCopyable,
    WithOptionalIsVisibilityToggleable,
    WithOptionalLabel,
    WithOptionalPlaceholder,
    WithReadOnly,
    WithSize,
    WithSlots,
    WithStateInvalid,
    WithWrapperProps,
} from "../../common-types";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { ChangeEvent, ComponentPropsWithoutRef } from "react";

export type InputCurrencyProps = Partial<
    Pick<
        ComponentPropsWithoutRef<"input">,
        | "defaultValue"
        | "value"
        | "onChange"
        | "onClick"
        | "onFocus"
        | "onMouseOver"
        | "onMouseLeave"
        | "className"
        | "autoComplete"
        | "type"
        | "onBlur"
        | "disabled"
    >
> &
    SprinklesArgs &
    WithColorOverlay &
    WithHideLastpass &
    WithId &
    WithOptionalIsClearable &
    WithOptionalIsCopyable &
    WithOptionalIsVisibilityToggleable &
    WithOptionalLabel &
    WithOptionalPlaceholder &
    WithReadOnly &
    WithSize &
    WithSlots &
    WithWrapperProps &
    WithDescription &
    WithStateInvalid &
    WithName & {
        /**
         * The currency to use in formatting.
         */
        currency: Intl.NumberFormatOptions["currency"];
        /**
         * The currency display to use in formatting.
         */
        currencyDisplay?: Intl.NumberFormatOptions["currencyDisplay"];
        /**
         * Whether to render the input with a border.
         */
        hasBorder?: boolean;
        /**
         * The locale to use in formatting.
         */
        region?: string;
    };

export const InputCurrency = forwardRef<HTMLInputElement, InputCurrencyProps>(
    ({ currency, defaultValue, onChange, region, ...rest }, ref) => {
        const parser = NumberParser(region, {
            currency,
        });

        const [inputValue, setInputValue] = useState(
            formatNumber(parser(Number(defaultValue).toString()), {
                region,
            })
        );

        const onChangeHandler = useCallback(
            (e: ChangeEvent<HTMLInputElement>) => {
                setInputValue(
                    formatNumber(parser(e.target.value), {
                        region,
                    })
                );
                onChange?.({
                    ...e,
                    target: {
                        ...e.target,
                        value: parser(e.target.value).toString(),
                    },
                });
            },
            [onChange, parser, region]
        );

        return (
            <Input
                onChange={onChangeHandler}
                ref={ref}
                role="spinbutton"
                slotLeft={[
                    <Box
                        color="text_low_contrast"
                        fontWeight="medium"
                    >
                        {currency}
                    </Box>,
                ]}
                value={inputValue}
                {...rest}
            />
        );
    }
);
