import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef } from "react";

import {
    type WithHideLastpass,
    type WithId,
    type WithOptionalIsClearable,
    type WithOptionalIsCopyable,
    type WithOptionalLabel,
    type WithSize,
    type WithSlots,
    getOptionalLabelProps,
} from "../../common-types";
import { arrayHasLength } from "../../lib/array_has_length";
import { a11yError } from "../../styles/common/a11y.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { FieldWrapper } from "../field_wrapper";
import { SlotWrapperInset } from "../slot_wrapper_inset";
import { useFieldActions } from "./lib/use_field_actions";
import { getInputStyles } from "./styles.css";

import type { WithOptionalPlaceholder } from "../../common-types";
import type { ColorOverlay } from "../../styles/color_palette.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { BoxProps } from "../box";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

/**
 * -----------------------------------------------------------------------------
 */

export type InputProps = Partial<
    Pick<ComponentPropsWithoutRef<"input">, "defaultValue" | "value" | "onChange" | "className">
> &
    SprinklesArgs &
    WithHideLastpass &
    WithId &
    WithOptionalIsClearable &
    WithOptionalIsCopyable &
    WithOptionalLabel &
    WithSize &
    WithSlots &
    WithOptionalPlaceholder & {
        /**
         * Allows setting a color to indicate semantic meaning associated with an action. Redefines color variables via CSS custom properties.
         */
        colorOverlay?: ColorOverlay;
        /**
         * Description shown under the field (when there is no error message).
         */
        description?: ReactNode;
        /**
         * Message shown when field fails validation.
         */
        errorMessage?: string;
        /**
         * Whether to render the input with a border.
         */
        hasBorder?: boolean;
        /**
         * Whether the value of the field fails validation.
         */
        invalid?: boolean;
        /**
         * Whether the input field value visibility can be toggled or not.
         */
        isVisibilityToggleable?: boolean;
        /**
         * Whether the input field value is visible or not.
         */
        isVisible?: boolean;
        /**
         * Name of the component. If field is connected as a form field, will be used to key the value in the form field values.
         */
        name: string;
        /**
         * Placeholder shown on empty field.
         */
        placeholder?: string;
        /**
         * Whether the input is read-only or not.
         */
        readOnly?: boolean;
        /**
         * Props for the wrapper component.
         */
        wrapperProps?: BoxProps;
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
