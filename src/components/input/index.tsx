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
  WithIsClearable,
  WithIsCopyable,
  WithIsVisibilityToggleable,
  WithName,
  WithOptionalLabel,
  WithPlaceholder,
  WithReadOnly,
  WithSize,
  WithSlots,
  WithStateInvalid,
} from "../../types";
import type { ComponentPropsWithoutRef, Ref } from "react";

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
  WithIsVisibilityToggleable &
  WithName &
  WithOptionalLabel &
  WithPlaceholder &
  WithReadOnly &
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
      isVisibilityToggleable,
      isVisible: initialIsVisible,
      label,
      labelProps,
      labelTooltip,
      name,
      onChange,
      readonly,
      size = "md",
      slotLeft,
      slotRight: initialSlotRight,
      type,
      value,
      wrapperProps,
      ...rest
    }: InputProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    const { actions, handleUpdateInputValue, inputValue, isVisible } =
      useFieldActions({
        defaultValue,
        isClearable,
        isCopyable,
        isVisibilityToggleable,
        isVisible: initialIsVisible,
        onChange,
        size,
        value,
      });

    return (
      <Box
        className={clsx(
          colorOverlay ? variantColorOverlay[colorOverlay] : undefined,
          { [variantColorOverlay.red]: invalid }
        )}
        color="text_low_contrast"
        position="relative"
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
            onChange={handleUpdateInputValue}
            readOnly={readonly}
            ref={ref}
            type={isVisibilityToggleable && !isVisible ? "password" : type}
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
