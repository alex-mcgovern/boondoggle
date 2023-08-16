import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import { arrayHasLength } from "../../lib/array_has_length";
import { a11yError } from "../../styles/common/a11y.css";
import { variantColorOverlay } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box";
import { FieldDescription } from "../field_description";
import { FieldErrorMessage } from "../field_error_message";
import { FieldLabel } from "../field_label";
import { SlotWrapperInset } from "../slot_wrapper_inset";
import { useFieldActions } from "./lib/use_field_actions";
import { getInputStyles } from "./styles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type {
  LabelledElementCustomisation,
  WithColorOverlay,
  WithDescription,
  WithName,
  WithOptionalLabel,
  WithPlaceholder,
  WithSize,
  WithSlots,
  WithStateInvalid,
} from "../../types";
import type { ComponentPropsWithoutRef, Ref } from "react";

/** ----------------------------------------------------------------------------- */

type WithIsCopyable =
  | {
      /** Whether the input is copyable or not. */
      isCopyable: true;
      /** Whether the input is readonly or not. */
      readonly: true;
      /** The tooltip text to indicate is copyable. */
      strCopy: string;
    }
  | {
      /** Whether the input is copyable or not. */
      isCopyable?: never;
      /** Whether the input is readonly or not. */
      readonly?: boolean;
      /** The tooltip text to indicate is copyable. */
      strCopy?: never;
    };

type WithIsClearable =
  | {
      /** Whether the input is clearable or not. */
      isClearable: true;
      /** Whether the input is readonly or not. */
      readonly?: never;
    }
  | {
      /** Whether the input is clearable or not. */
      isClearable?: never;
      /** Whether the input is readonly or not. */
      readonly?: boolean;
    };

/** ----------------------------------------------------------------------------- */

export type InputProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "width" | "height" | "style" | "color" | "size" | "label" | "id"
> &
  LabelledElementCustomisation &
  SprinklesArgs &
  WithColorOverlay &
  WithDescription &
  WithIsClearable &
  WithIsCopyable &
  WithName &
  WithOptionalLabel &
  WithPlaceholder &
  WithSize &
  WithSlots &
  WithStateInvalid & {
    /** Whether to render the input with a border */
    hasBorder?: boolean;
  };

export const Input = forwardRef(
  (
    {
      className: userClassName,
      colorOverlay,
      defaultValue,
      description,
      errorMessage,
      hasBorder,
      id,
      invalid,
      isClearable,
      isCopyable,
      label,
      labelProps,
      labelTooltip,
      name,
      onChange,
      readonly,
      size = "md",
      slotLeft,
      slotRight: initialSlotRight,
      strCopy,
      value,
      wrapperProps,
      ...rest
    }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    /** --------------------------------------------- */

    // const [inputValue, setInputValue] = useState<
    //   typeof value | typeof defaultValue
    // >(() => {
    //   return value || defaultValue || "";
    // });

    // useEffect(() => {
    //   if (value !== undefined) {
    //     setInputValue(value);
    //   }
    // }, [value]);

    /** --------------------------------------------- */

    // const { handleCopyValue, isCopied } = useFieldCopyableState({
    //   isCopyable,
    //   readonly,
    // });

    /** --------------------------------------------- */

    // const slotRight = useMemo(() => {
    //   if (isCopyable) {
    //     return (
    //       <FieldActionButtonCopy
    //         isCopied={isCopied}
    //         onClick={() => {
    //           handleCopyValue?.(inputValue);
    //         }}
    //         size={size}
    //         strCopy={strCopy}
    //       />
    //     );
    //   }

    //   if (isClearable) {
    //     return (
    //       <FieldActionButtonClear
    //         onClick={() => {
    //           onChange?.({
    //             target: { value: "" },
    //           } as ChangeEvent<HTMLInputElement>);

    //           return setInputValue("");
    //         }}
    //         size={size}
    //       />
    //     );
    //   }

    //   return initialSlotRight;
    // }, [
    //   handleCopyValue,
    //   initialSlotRight,
    //   inputValue,
    //   isClearable,
    //   isCopied,
    //   isCopyable,
    //   onChange,
    //   size,
    //   strCopy,
    // ]);

    // console.debug("debug  slotRight:", slotRight);

    /** --------------------------------------------- */

    // const handleChange = useCallback(
    //   (e: ChangeEvent<HTMLInputElement>) => {
    //     if (onChange) {
    //       onChange(e);
    //     }
    //     return setInputValue(e.target.value);
    //   },
    //   [onChange]
    // );

    const { actions, handleChange, inputValue } = useFieldActions({
      defaultValue,
      isClearable,
      isCopyable,
      onChange,
      size,
      strCopy,
      value,
    });

    /** --------------------------------------------- */
    return (
      <Box
        className={clsx(
          colorOverlay ? variantColorOverlay[colorOverlay] : undefined,
          { [variantColorOverlay.red]: invalid }
        )}
        color="text_low_contrast"
        {...wrapperProps}
      >
        {label && id && (
          <FieldLabel
            htmlFor={id}
            label={label}
            labelTooltip={labelTooltip}
            {...labelProps}
          />
        )}

        <SlotWrapperInset
          size={size}
          slotLeft={slotLeft}
          slotRight={arrayHasLength(actions) ? actions : initialSlotRight}
        >
          <input
            className={clsx(
              getInputStyles({ hasBorder, size }),
              getSprinkles(atomProps),
              userClassName,
              {
                [a11yError]: invalid,
              }
            )}
            id={id}
            name={name}
            onChange={handleChange}
            readOnly={readonly}
            ref={ref}
            value={inputValue}
            {...otherProps}
          />
        </SlotWrapperInset>

        {invalid && errorMessage && (
          <FieldErrorMessage message={errorMessage} />
        )}
        {description && !invalid && (
          <FieldDescription description={description} />
        )}
      </Box>
    );
  }
);
