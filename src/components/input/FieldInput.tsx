import { forwardRef } from "react";

import {
    getOptionalIsClearableProps,
    getOptionalIsCopyableProps,
    getOptionalIsVisibilityToggleableProps,
    getOptionalLabelProps,
} from "../../common-types";
import { FieldAddonWrapper } from "../field_addon_wrapper";
import { FieldWrapper } from "../field_wrapper";
import { BaseInput } from "./BaseInput";

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
import type { WithOptionalFieldAddons } from "../field_addon_wrapper";
import type { ComponentPropsWithoutRef } from "react";

export type InputProps = Partial<
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
    WithOptionalFieldAddons &
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
    };

export const FieldInput = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            addonLeft,
            addonRight,
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
            isVisible,
            label,
            labelProps,
            labelTooltip,
            name,
            onChange,
            readOnly,
            size = "md",
            slotLeft,
            slotRight,
            type,
            value,
            wrapperProps,
            ...rest
        },
        ref
    ) => {
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
                <FieldAddonWrapper
                    addonLeft={addonLeft}
                    addonRight={addonRight}
                    size={size}
                >
                    <BaseInput
                        className={userClassName}
                        colorOverlay={colorOverlay}
                        defaultValue={defaultValue}
                        hasBorder={hasBorder}
                        hideLastpass={hideLastpass}
                        id={id}
                        invalid={invalid}
                        name={name}
                        onChange={onChange}
                        readOnly={readOnly}
                        ref={ref}
                        size={size}
                        slotLeft={slotLeft}
                        slotRight={slotRight}
                        type={type}
                        value={value}
                        {...rest}
                        {...getOptionalIsCopyableProps({ isCopyable, readOnly })}
                        {...getOptionalIsClearableProps({ isClearable, readOnly })}
                        {...getOptionalIsVisibilityToggleableProps({
                            isVisibilityToggleable,
                            isVisible,
                        })}
                    />
                </FieldAddonWrapper>
            </FieldWrapper>
        );
    }
);
