import { faCalendarAlt } from "@fortawesome/pro-light-svg-icons";
import clsx from "clsx";
import { forwardRef, useCallback, useState } from "react";

import { formatDate } from "../../utils/format_date";
import { DatePicker } from "../date_picker/date_picker.comp";
import { Dialog } from "../dialog/dialog.comp";
import { Icon } from "../icon/icon.comp";
import { Input } from "../input/input.comp";
import { datePickerDialogStyle, inputDateStyle } from "./input_date.styles.css";

import type { InputProps } from "../input/input.comp";
import type { MouseEvent } from "react";

/** ----------------------------------------------------------------------------- */

export type InputDateValue = {
  humanReadable: string;
  raw: string;
};

export type InputDateProps = InputProps & {
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
      locale,
      rawValueTransformer,
      defaultValue,
      isOpen: controlledIsOpen,
      wrapperProps,
      onChange,
      value,
      slotLeft = <Icon icon={faCalendarAlt} />,
      ...rest
    }: InputDateProps,
    ref
  ) => {
    const [inputValue, setInputValue] = useState<
      string | number | readonly string[]
    >(value || "");
    const [isOpen, setIsOpen] = useState<boolean | undefined>(controlledIsOpen);

    /** --------------------------------------------- */

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

    /** --------------------------------------------- */

    return (
      <Dialog
        className={clsx(userClassName, datePickerDialogStyle)}
        isOpen={isOpen}
        wrapperProps={wrapperProps}
        triggerNode={
          // eslint-disable-next-line react-perf/jsx-no-jsx-as-prop
          <Input
            {...(rest as InputProps)}
            className={inputDateStyle}
            defaultValue={defaultValue ? formatDate(defaultValue) : undefined}
            readOnly
            ref={ref}
            slotLeft={slotLeft}
            value={inputValue}
          />
        }
      >
        <DatePicker onDayClick={onDayClick} />
      </Dialog>
    );
  }
);
