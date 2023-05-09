import * as Popover from "@radix-ui/react-popover";
import { useCallback, useState } from "react";

import { formatDate } from "../../utils/format_date";
import { DatePicker } from "../date_picker/date_picker.comp";
import { Input } from "../input/input.comp";
import * as styles from "./input_date.styles.css";

import type { InputProps } from "../input/input.comp";
import type { MouseEvent } from "react";

type InputValue = {
  humanReadable?: string;
  raw?: string;
};

export type InputDateProps = Omit<InputProps, "value"> & {
  locale?: Intl.LocalesArgument;
  rawValueTransformer?: (value: string) => string;
};

export function InputDate({
  locale,
  rawValueTransformer,
  defaultValue,
  ...rest
}: InputDateProps) {
  const [inputValue, setInputValue] = useState<InputValue>({});

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
    <Popover.Root>
      <Popover.Trigger asChild>
        <Input
          defaultValue={defaultValue ? formatDate(defaultValue) : undefined}
          className={styles.inputDate}
          value={inputValue.humanReadable}
          data-raw={inputValue.raw}
          {...(rest as InputProps)}
        />
      </Popover.Trigger>
      <Popover.Content align="start" sideOffset={8} asChild>
        <DatePicker onDayClick={onDayClick} />
      </Popover.Content>
    </Popover.Root>
  );
}
