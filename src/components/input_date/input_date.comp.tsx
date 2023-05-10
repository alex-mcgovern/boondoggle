import { forwardRef, useCallback, useRef, useState } from "react";

import { useClickOutside } from "../../hooks/use_click_outside";
import { useEnterWhileFocused } from "../../hooks/use_enter_while_focused";
import { animateAppear } from "../../styles/common/animations.css";
import { formatDate } from "../../utils/format_date";
import { Box } from "../box";
import { DatePicker } from "../date_picker/date_picker.comp";
import { Input } from "../input/input.comp";
import * as styles from "./input_date.styles.css";

import type { InputProps } from "../input/input.comp";
import type { MouseEvent, Ref, RefObject } from "react";

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
    const dialogRef = useRef<HTMLDialogElement>();
    const [inputValue, setInputValue] = useState<string>("");

    /**
     * Callback for when the input is clicked or focused.
     */
    const toggleIsOpen = useCallback(() => {
      return dialogRef.current?.open
        ? dialogRef.current?.close()
        : dialogRef.current?.show();
    }, []);

    /**
     * When input is focused and user presses enter, open the date picker.
     */
    useEnterWhileFocused<HTMLInputElement>({
      triggerRef: ref as RefObject<HTMLInputElement | undefined>,
      callback: toggleIsOpen,
    });

    /**
     * Handle click outside dialog
     */
    useClickOutside<HTMLDialogElement, HTMLInputElement>({
      contentRef: dialogRef,
      triggerRef: ref as RefObject<HTMLInputElement | undefined>,
      callback: () => {
        return dialogRef.current?.close();
      },
    });

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
      },
      [locale, rawValueTransformer, onChange]
    );

    return (
      <Box position="relative">
        <Input
          readOnly
          {...(rest as InputProps)}
          onClick={toggleIsOpen}
          ref={ref}
          defaultValue={defaultValue ? formatDate(defaultValue) : undefined}
          className={styles.inputDate}
          value={inputValue}
        />

        <DatePicker
          open={controlledIsOpen}
          className={animateAppear}
          marginTop="spacing1"
          as="dialog"
          ref={dialogRef as Ref<HTMLElement>}
          onDayClick={onDayClick}
        />
      </Box>
    );
  }
);
