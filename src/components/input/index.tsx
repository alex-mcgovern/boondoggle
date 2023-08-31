import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import { a11yError } from "../../styles/common/a11y.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { FieldWrapper } from "../field_wrapper";
import { SlotWrapperInset } from "../slot_wrapper_inset";
import { useFieldActions } from "./lib/use_field_actions";
import { getInputStyles } from "./styles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type {
  WithColorOverlay,
  WithDescription,
  WithHideLastpass,
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
  WithWrapperProps,
} from "../../types";
import type { ComponentPropsWithoutRef, Ref } from "react";

/** ----------------------------------------------------------------------------- */

export type InputProps = Omit<
  ComponentPropsWithoutRef<"input">,
  "width" | "height" | "style" | "color" | "size" | "label" | "id"
> &
  SprinklesArgs &
  WithColorOverlay &
  WithDescription &
  WithHideLastpass &
  WithIsClearable &
  WithIsCopyable &
  WithIsVisibilityToggleable &
  WithName &
  WithOptionalLabel &
  WithPlaceholder &
  WithReadOnly &
  WithSize &
  WithSlots &
  WithStateInvalid &
  WithWrapperProps & {
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
      hideLastpass,
      id,
      invalid,
      isClearable,
      isCopyable,
      isVisibilityToggleable,
      isVisible: initialIsVisible,
      label,
      labelProps,
      labelTooltip,
      onChange,
      readOnly,
      size = "md",
      slotLeft,
      slotRight: initialSlotRight = [],
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
        readOnly,
        size,
        value,
      });

    return (
      <FieldWrapper
        colorOverlay={colorOverlay}
        description={description}
        errorMessage={errorMessage}
        hideLastpass={hideLastpass}
        id={id}
        invalid={invalid}
        label={label}
        labelProps={labelProps}
        labelTooltip={labelTooltip}
        wrapperProps={wrapperProps}
      >
        <SlotWrapperInset
          size={size}
          slotLeft={slotLeft}
          slotRight={[...actions, ...initialSlotRight]}
          // slotRight={arrayHasLength(actions) ? actions : initialSlotRight}
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
            onChange={handleUpdateInputValue}
            readOnly={readOnly}
            ref={ref}
            type={isVisibilityToggleable && !isVisible ? "password" : type}
            value={inputValue}
            {...otherProps}
          />
        </SlotWrapperInset>
      </FieldWrapper>
    );
  }
);
