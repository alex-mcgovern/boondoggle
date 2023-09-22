import { faCalendarAlt } from "@fortawesome/pro-solid-svg-icons";
import clsx from "clsx";
import { forwardRef, useCallback, useState } from "react";

import { formatDate } from "../../utils/format_date";
import { DatePicker } from "../date_picker";
import { Dialog } from "../dialog";
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
                setInputValue(date.toLocaleDateString(locale));

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
            <Dialog
                className={clsx(userClassName, datePickerDialogStyle)}
                isOpen={isOpen}
                triggerNode={
                    // eslint-disable-next-line react-perf/jsx-no-jsx-as-prop
                    <Input
                        {...rest}
                        className={inputDateStyle}
                        defaultValue={defaultValue ? formatDate(defaultValue, locale) : undefined}
                        isVisibilityToggleable={undefined}
                        isVisible={undefined}
                        // readOnly
                        ref={ref}
                        slotLeft={slotLeft}
                        // type="date"
                        value={inputValue}
                    />
                }
                wrapperProps={wrapperProps}
            >
                <DatePicker onDayClick={onDayClick} />
            </Dialog>
        );
    }
);
