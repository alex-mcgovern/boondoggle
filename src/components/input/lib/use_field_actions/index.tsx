import { useCallback, useMemo, useState } from "react";

import { FieldActionButtonClear } from "../../../field_action_button_clear";
import { FieldActionButtonCopy } from "../../../field_action_button_copy";
import { useFieldCopyableState } from "../use_field_copyable_state";

import type { ElementSizeEnum } from "../../../../styles/common/element_size.css";
import type { ChangeEvent, ReactNode } from "react";

type UseFieldActionsArgs = {
  /** The default value of the input. */
  defaultValue: string | number | readonly string[] | undefined;
  /** Whether to allow the user to clear the input with a button */
  isClearable?: boolean;
  /** Whether the field is copyable. */
  isCopyable?: boolean;
  /** The function to call when the input value changes. */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Whether the field is read-only. */
  readonly?: boolean;
  /** The size of the field. */
  size?: ElementSizeEnum;
  /** The tooltip text to indicate is copyable. */
  strCopy?: string;
  /** The value of the input. */
  value?: string | number | readonly string[] | undefined;
};

/**
 * Returns an array of React nodes that represent actions that can be taken on a field.
 */
export function useFieldActions({
  defaultValue,
  isClearable,
  isCopyable,
  onChange,
  readonly,
  size,
  strCopy,
  value,
}: UseFieldActionsArgs) {
  /** --------------------------------------------- */

  // Manage the input value with state to allow it to be cleared.

  const [inputValue, setInputValue] = useState<
    typeof value | typeof defaultValue
  >(() => {
    return value || defaultValue || "";
  });

  // useEffect(() => {
  //   if (value !== undefined) {
  //     setInputValue(value);
  //   }
  // }, [value]);

  // Event handler for when the input value changes.

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }
      return setInputValue(e.target.value);
    },
    [onChange]
  );

  /** --------------------------------------------- */

  const { handleCopyValue, isCopied } = useFieldCopyableState({
    isCopyable,
    readonly,
  });

  /** --------------------------------------------- */

  const actions = useMemo(() => {
    const actionNodes: Array<ReactNode> = [];

    if (isCopyable && strCopy) {
      actionNodes.push(
        <FieldActionButtonCopy
          isCopied={isCopied}
          onClick={() => {
            handleCopyValue?.(inputValue);
          }}
          size={size}
          strCopy={strCopy}
        />
      );
    }

    if (isClearable && !readonly) {
      actionNodes.push(
        <FieldActionButtonClear
          onClick={() => {
            onChange?.({
              target: { value: "" },
            } as ChangeEvent<HTMLInputElement>);

            return setInputValue("");
          }}
          size={size}
        />
      );
    }

    return actionNodes;
  }, [
    handleCopyValue,
    inputValue,
    isClearable,
    isCopied,
    isCopyable,
    onChange,
    readonly,
    size,
    strCopy,
  ]);

  return { actions, handleChange, inputValue };
}
