import { forwardRef, useCallback, useState } from "react";

import { formatDate } from "../../utils/format_date";
import { DatePicker } from "../date_picker/date_picker.comp";
import { Dialog } from "../dialog/dialog.comp";
import { Input } from "../input/input.comp";
import * as styles from "./input_date.styles.css";

import type { InputProps } from "../input/input.comp";
import type { MouseEvent, Ref } from "react";

export type InputDateValue = {
  humanReadable: string;
  raw: string;
};

export type InputDateProps = Omit<InputProps, "value"> & {
  isOpen?: boolean;
  locale?: Intl.LocalesArgument;
  /**
   * On change handler designed to be used with React Hook Form's `register` method.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (...event: any[]) => void;
  rawValueTransformer?: (value: string) => string;
};

export const InputDate = forwardRef(
  (
    {
      className: userClassName,
      locale,
      rawValueTransformer,
      defaultValue,
      isOpen: controlledIsOpen,
      wrapperProps,
      onChange,
      ...rest
    }: InputDateProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean | undefined>(controlledIsOpen);

    /**
     * Callback for when a day is clicked in the date picker.
     */
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
        className={userClassName}
        isOpen={isOpen}
        onIsOpenChange={setIsOpen}
        ref={ref}
        triggerNode={
          <Input
            {...(rest as InputProps)}
            className={styles.inputDate}
            defaultValue={defaultValue ? formatDate(defaultValue) : undefined}
            readOnly
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
