import { forwardRef, useCallback, useState } from "react";

import { animateAppear } from "../../styles/common/animations.css";
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
  locale?: Intl.LocalesArgument;
  rawValueTransformer?: (value: string) => string;
  isOpen?: boolean;
  /**
   * On change handler designed to be used with React Hook Form's `register` method.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (...event: any[]) => void;
};

export const InputDate = forwardRef(
  (
    {
      locale,
      rawValueTransformer,
      defaultValue,
      isOpen: controlledIsOpen,
      onChange,
      ...rest
    }: InputDateProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);

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
        ref={ref}
        triggerNode={
          <Input
            readOnly
            defaultValue={defaultValue ? formatDate(defaultValue) : undefined}
            className={styles.inputDate}
            value={inputValue}
            {...(rest as InputProps)}
          />
        }
      >
        <DatePicker
          isOpen={isOpen}
          open={controlledIsOpen}
          className={animateAppear}
          marginTop="spacing1"
          onDayClick={onDayClick}
        />
      </Dialog>
    );
  }
);
