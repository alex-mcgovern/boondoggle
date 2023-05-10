import { createRef, useCallback, useRef, useState } from "react";

import { useClickOutside } from "../../hooks/use_click_outside";
import { useEnterWhileFocused } from "../../hooks/use_enter_while_focused";
import { animateAppear } from "../../styles/common/animations.css";
import { formatDate } from "../../utils/format_date";
import { Box } from "../box";
import { DatePicker } from "../date_picker/date_picker.comp";
import { Input } from "../input/input.comp";
import * as styles from "./input_date.styles.css";

import type { InputProps } from "../input/input.comp";
import type { MouseEvent, Ref } from "react";

type InputValue = {
  humanReadable: string;
  raw: string;
};

export type InputDateProps = Omit<InputProps, "value"> & {
  locale?: Intl.LocalesArgument;
  rawValueTransformer?: (value: string) => string;
  isOpen?: boolean;
};

export function InputDate({
  locale,
  rawValueTransformer,
  defaultValue,
  isOpen: controlledIsOpen,
  ...rest
}: InputDateProps) {
  const dialogRef = useRef<HTMLDialogElement>();
  const triggerRef = createRef<HTMLInputElement>();
  const [inputValue, setInputValue] = useState<InputValue>({
    humanReadable: "",
    raw: "",
  });

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
    triggerRef,
    callback: toggleIsOpen,
  });

  /**
   * Handle click outside dialog
   */
  useClickOutside<HTMLDialogElement, HTMLInputElement>({
    contentRef: dialogRef,
    triggerRef,
    callback: () => {
      return dialogRef.current?.close();
    },
  });

  /**
   * Callback for when a day is clicked in the date picker.
   */

  const onDayClick = useCallback(
    (_: MouseEvent<HTMLElement>, date: Date) => {
      setInputValue({
        humanReadable: date.toLocaleDateString(locale),
        raw: rawValueTransformer
          ? rawValueTransformer(date.toISOString())
          : date.toISOString(),
      });
    },
    [rawValueTransformer, locale]
  );

  return (
    <Box position="relative">
      <Input
        readOnly
        {...(rest as InputProps)}
        onClick={toggleIsOpen}
        ref={triggerRef}
        defaultValue={defaultValue ? formatDate(defaultValue) : undefined}
        className={styles.inputDate}
        value={inputValue.humanReadable}
        data-raw={inputValue.raw}
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
