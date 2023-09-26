import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import { arrayHasLength } from "../../lib/array_has_length";
import { variantColorOverlay } from "../../styles/color_palette.css";
import { a11yError } from "../../styles/common/a11y.css";
import { hideLastpassStyle } from "../../styles/common/hide_lastpass.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { SlotWrapperInset } from "../slot_wrapper_inset";
import { getBaseInputStyles } from "./BaseInput.css";
import { useFieldActions } from "./lib/use_field_actions";

import type {
    WithColorOverlay,
    WithHideLastpass,
    WithId,
    WithName,
    WithOptionalIsClearable,
    WithOptionalIsCopyable,
    WithOptionalIsVisibilityToggleable,
    WithOptionalPlaceholder,
    WithReadOnly,
    WithSize,
    WithSlots,
    WithStateInvalid,
} from "../../common-types";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { ComponentPropsWithoutRef } from "react";

export type BaseInputProps = Partial<
    Pick<
        ComponentPropsWithoutRef<"input">,
        | "autoComplete"
        | "className"
        | "defaultValue"
        | "disabled"
        | "onBlur"
        | "onChange"
        | "onClick"
        | "onFocus"
        | "onMouseLeave"
        | "onMouseOver"
        | "role"
        | "type"
        | "value"
    >
> &
    SprinklesArgs &
    WithColorOverlay &
    WithHideLastpass &
    WithId &
    WithOptionalIsClearable &
    WithOptionalIsCopyable &
    WithOptionalIsVisibilityToggleable &
    WithOptionalPlaceholder &
    WithReadOnly &
    WithSize &
    WithSlots &
    WithStateInvalid &
    WithName & {
        /**
         * Whether to render the input with a border.
         */
        hasBorder?: boolean;
    };

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
    (
        {
            className: userClassName,
            colorOverlay,
            defaultValue,
            hasBorder,
            hideLastpass,
            id,
            invalid,
            isClearable,
            isCopyable,
            isVisibilityToggleable,
            isVisible: initialIsVisible,
            onChange,
            readOnly,
            size = "md",
            slotLeft,
            slotRight: initialSlotRight,
            type,
            value,
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
            value,
        });

        return (
            <SlotWrapperInset
                size={size}
                slotLeft={slotLeft}
                slotRight={arrayHasLength(actions) ? actions : initialSlotRight}
            >
                <input
                    className={clsx(
                        getBaseInputStyles({ hasBorder, size }),
                        getSprinkles(atomProps),
                        userClassName,
                        colorOverlay ? variantColorOverlay[colorOverlay] : null,
                        {
                            [a11yError]: invalid,
                            [hideLastpassStyle]: hideLastpass,
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
        );
    }
);
