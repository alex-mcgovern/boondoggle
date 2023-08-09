import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef, useCallback, useEffect, useMemo, useState } from "react";

import { a11yError } from "../../styles/common/a11y.css";
import { variantColorOverlay } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../Box";
import { FieldClearButton } from "../FieldClearButton";
import { FieldDescription } from "../FieldDescription";
import { FieldErrorMessage } from "../FieldErrorMessage";
import { FieldLabel } from "../FieldLabel";
import { SlotWrapperInset } from "../SlotWrapperInset";
import { getInputStyles } from "./styles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type {
  LabelledElementCustomisation,
  WithColorOverlay,
  WithDescription,
  WithOptionalLabel,
  WithPlaceholder,
  WithSize,
  WithSlots,
  WithStateInvalid,
} from "../../types";
import type { ChangeEvent, ComponentPropsWithoutRef, Ref } from "react";

export type InputProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "width" | "height" | "style" | "color" | "size" | "label" | "id"
> &
  LabelledElementCustomisation &
  SprinklesArgs &
  WithColorOverlay &
  WithDescription &
  WithOptionalLabel &
  WithPlaceholder &
  WithSize &
  WithSlots &
  WithStateInvalid & {
    /** Whether to render the input with a border */
    hasBorder?: boolean;
    /** Whether to allow the user to clear the input with a button */
    isClearable?: boolean;
    /** Name of the form control. Submitted with the form as part of a name/value pair */
    name: string;
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
      label,
      labelProps,
      labelTooltip,
      name,
      onChange,
      size = "md",
      slotLeft,
      slotRight: initialSlotRight,
      value,
      wrapperProps,
      ...rest
    }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    /** --------------------------------------------- */

    const [inputValue, setInputValue] = useState<
      typeof value | typeof defaultValue
    >(() => {
      return value || defaultValue || "";
    });

    useEffect(() => {
      if (value !== undefined) {
        setInputValue(value);
      }
    }, [value]);

    /** --------------------------------------------- */

    const slotRight = useMemo(() => {
      if (!isClearable || !inputValue) {
        return initialSlotRight;
      }

      return (
        <FieldClearButton
          onClick={() => {
            onChange?.({
              target: { value: "" },
            } as ChangeEvent<HTMLInputElement>);

            return setInputValue("");
          }}
        />
      );
    }, [initialSlotRight, inputValue, isClearable, onChange]);

    /** --------------------------------------------- */

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

        <SlotWrapperInset size={size} slotLeft={slotLeft} slotRight={slotRight}>
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
