import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import { getOptionalLabelProps } from "../../common-types";
import { arrayHasLength } from "../../lib/array_has_length";
import { a11yError } from "../../styles/common/a11y.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { FieldWrapper } from "../field_wrapper";
import { SlotWrapperInset } from "../slot_wrapper_inset";
import { useFieldActions } from "./lib/use_field_actions";
import { getInputStyles } from "./styles.css";

import type {
    WithColorOverlay,
    WithDescription,
    WithHideLastpass,
    WithId,
    WithName,
    WithOptionalIsClearable,
    WithOptionalIsCopyable,
    WithOptionalIsVisibilityToggleable,
    WithOptionalLabel,
    WithOptionalPlaceholder,
    WithReadOnly,
    WithSize,
    WithSlots,
    WithStateInvalid,
    WithWrapperProps,
} from "../../common-types";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { ComponentPropsWithoutRef } from "react";

export type InputProps = Partial<
    Pick<
        ComponentPropsWithoutRef<"input">,
        | "defaultValue"
        | "value"
        | "onChange"
        | "onClick"
        | "onFocus"
        | "onMouseOver"
        | "onMouseLeave"
        | "className"
        | "autoComplete"
        | "type"
        | "onBlur"
        | "disabled"
    >
> &
    SprinklesArgs &
    WithColorOverlay &
    WithHideLastpass &
    WithId &
    WithOptionalIsClearable &
    WithOptionalIsCopyable &
    WithOptionalIsVisibilityToggleable &
    WithOptionalLabel &
    WithOptionalPlaceholder &
    WithReadOnly &
    WithSize &
    WithSlots &
    WithWrapperProps &
    WithDescription &
    WithStateInvalid &
    WithName & {
        /**
         * Whether to render the input with a border.
         */
        hasBorder?: boolean;
        tooltipStr?: string;
    };

export const Input = forwardRef<HTMLInputElement, InputProps>(
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
            slotRight: initialSlotRight,
            tooltipStr,
            type,
            value,
            wrapperProps,
            ...rest
        },
        ref
    ) => {
        const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

        const { actions, handleUpdateInputValue, inputValue, isVisible } = useFieldActions({
            defaultValue,
            isClearable,
            isCopyable,
            isVisibilityToggleable,
            isVisible: initialIsVisible,
            onChange,
            readOnly,
            size,
            tooltipStr,
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
                wrapperProps={wrapperProps}
                {...getOptionalLabelProps({ id, label, labelProps, labelTooltip })}
            >
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
