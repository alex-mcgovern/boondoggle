/* eslint-disable react-perf/jsx-no-new-array-as-prop */
import clsx from "clsx";
import { forwardRef, useCallback, useState } from "react";

import { DatePicker } from "../date_picker";
import { Dialog } from "../dialog";
import { FieldActionButtonDate } from "../field_action_button_date";
import { Input } from "../input";
import { datePickerDialogStyle, inputDateStyle } from "./styles.css";

import type {
    WithOptionalLabel,
    WithOptionalPlaceholder,
} from "../../common-types";
import type { InputProps } from "../input";
import type { MouseEvent } from "react";

/**
 * Converts a local date to a UTC date.
 */
function convertLocalToUTCDate(date: Date) {
    return new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
    );
}

export type InputDateProps = Omit<
    InputProps,
    | "isClearable"
    | "isCopyable"
    | "isVisibilityToggleable"
    | "strClear"
    | "placeholder"
    | "strCopy"
    | "strCopied"
    | "strHide"
    | "strShow"
    | "isVisibilityToggleable"
> &
    WithOptionalLabel &
    WithOptionalPlaceholder & {
        /**
         * Controls whether the date picker is open or not.
         */
        isOpen?: boolean;

        /**
         * The locale to use for formatting the date.
         */
        locale?: Intl.LocalesArgument;

        /**
         * Callback to be called when the date changes.
         */
        onChange?:
            | ((date: string) => unknown)
            | ((date: string) => Promise<unknown>);
    };

export const InputDate = forwardRef<HTMLInputElement, InputDateProps>(
    (
        {
            className: userClassName,
            defaultValue,
            isOpen: controlledIsOpen,
            onChange,
            size,
            slotLeft,
            value,
            wrapperProps,
            ...rest
        }: InputDateProps,
        ref
    ) => {
        const [inputValue, setInputValue] = useState<
            string | number | readonly string[]
        >(value || defaultValue || "");

        const [isOpen, setIsOpen] = useState<boolean | undefined>(
            controlledIsOpen
        );

        const onDayClick = useCallback(
            (_: MouseEvent<HTMLElement>, date: Date) => {
                const utcDate = convertLocalToUTCDate(date);
                const isoString = utcDate.toISOString();
                const isoDate = isoString.slice(0, 10);

                setInputValue(isoDate);

                if (onChange) {
                    onChange(isoDate);
                }
                setIsOpen(false);
            },
            [onChange]
        );

        return (
            <Input
                {...(rest as InputProps)}
                className={inputDateStyle}
                defaultValue={defaultValue}
                onChange={(e) => {
                    return onChange?.(e.target.value);
                }}
                ref={ref}
                size={size}
                slotLeft={slotLeft}
                slotRight={
                    <Dialog
                        className={clsx(userClassName, datePickerDialogStyle)}
                        isOpen={isOpen}
                        placement="bottom-end"
                        triggerNode={
                            // eslint-disable-next-line react-perf/jsx-no-jsx-as-prop
                            <FieldActionButtonDate size={size} />
                        }
                    >
                        <DatePicker onDayClick={onDayClick} />
                    </Dialog>
                }
                type="date"
                value={inputValue}
                wrapperProps={wrapperProps}
            />
        );
    }
);
