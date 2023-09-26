import { faCalendarAlt } from "@fortawesome/pro-solid-svg-icons";
import clsx from "clsx";
import { forwardRef, useCallback, useState } from "react";

import { formatDate } from "../../utils/format_date";
import { DatePicker } from "../date_picker";
import { Dialog } from "../dialog";
import { FieldActionButtonDate } from "../field_action_button_date";
import { Icon } from "../icon";
import { Input } from "../input";
import { datePickerDialogStyle, inputDateStyle } from "./styles.css";

import type { WithOptionalLabel, WithOptionalPlaceholder } from "../../common-types";
import type { InputProps } from "../input";
import type { MouseEvent } from "react";

export type InputDateProps = Omit<
    InputProps,
    "isClearable" | "isCopyable" | "isVisibilityToggleable"
> &
    WithOptionalLabel &
    WithOptionalPlaceholder & {
        isOpen?: boolean;

        locale?: Intl.LocalesArgument;

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange?: (...event: any[]) => void;

        rawValueTransformer?: (value: string) => string;
    };

export const InputDate = forwardRef<HTMLInputElement, InputDateProps>(
    (
        {
            className: userClassName,
            defaultValue,
            isOpen: controlledIsOpen,
            locale,
            onChange,
            rawValueTransformer,
            size,
            slotLeft = [<Icon icon={faCalendarAlt} />],
            value,
            wrapperProps,
            ...rest
        }: InputDateProps,
        ref
    ) => {
        const [inputValue, setInputValue] = useState<string | number | readonly string[]>(
            value || ""
        );

        const [isOpen, setIsOpen] = useState<boolean | undefined>(controlledIsOpen);

        const onDayClick = useCallback(
            (_: MouseEvent<HTMLElement>, date: Date) => {
                setInputValue(date.toLocaleDateString());

                if (onChange) {
                    onChange(
                        rawValueTransformer
                            ? rawValueTransformer(date.toISOString())
                            : date.toISOString()
                    );
                }

                setIsOpen(false);
            },
            [locale, rawValueTransformer, onChange]
        );

        return (
            <Input
                {...rest}
                className={inputDateStyle}
                defaultValue={defaultValue ? formatDate(defaultValue, locale) : undefined}
                isVisibilityToggleable={undefined}
                isVisible={undefined}
                ref={ref}
                size={size}
                slotLeft={slotLeft}
                slotRight={[
                    <Dialog
                        className={clsx(userClassName, datePickerDialogStyle)}
                        isOpen={isOpen}
                        placement="bottom-end"
                        triggerNode={
                            // eslint-disable-next-line react-perf/jsx-no-jsx-as-prop
                            <FieldActionButtonDate
                                onClick={() => {}}
                                size={size}
                            />
                        }
                        wrapperProps={wrapperProps}
                    >
                        <DatePicker onDayClick={onDayClick} />
                    </Dialog>,
                ]}
                type="date"
                value={inputValue}
            />
        );
    }
);
