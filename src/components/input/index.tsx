/* eslint-disable react-perf/jsx-no-new-array-as-prop */
import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { forwardRef, isValidElement } from "react";

import { getOptionalLabelProps } from "../../common-types";
import { useForwardRef } from "../../hooks/use_forward_ref";
import { a11yError } from "../../styles/common/a11y.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { FieldActionButtonClear } from "../field_action_button_clear";
import { FieldActionButtonCopy } from "../field_action_button_copy";
import { FieldActionButtonVisibility } from "../field_action_button_visibility";
import {
    addonChildrenStyle,
    getAddonTabStyle,
    getAddonWrapperStyle,
} from "../field_addon_wrapper/styles.css";
import { FieldWrapper } from "../field_wrapper";
import { getSlotWrapperStyles, inputStyles } from "./styles.css";
import { useFieldCopyableState } from "./use_field_copyable_state";
import { useFieldVisibilityState } from "./use_field_visibility_state";

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
import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { ComponentPropsWithoutRef, ForwardedRef, ReactNode } from "react";

type AddonTabProps = WithSize & {
    children: ReactNode;
    side: "right" | "left";
};

export function AddonTab({ children, side, size }: AddonTabProps) {
    if (isValidElement(children)) {
        return (
            <div className={getAddonTabStyle({ hasBorder: false, side, size })}>
                {children}
            </div>
        );
    }
    return (
        <div
            className={getAddonTabStyle({
                hasBorder: true,
                padding: size,
                side,
                size,
            })}
        >
            {children}
        </div>
    );
}

export type WithOptionalInputAddons = {
    /**
     * Addon to be rendered on the left side of the field.
     */
    addonLeft?: ReactNode;
    /**
     * Addon to be rendered on the right side of the field.
     */
    addonRight?: ReactNode;
};

type InputAddonWrapperProps = WithOptionalInputAddons &
    WithSize & {
        /**
         * The children to be rendered inside the wrapper.
         */
        children: ReactNode;
    };

/**
 * Wraps the children with optional addons, left & right.
 */
export function InputAddonWrapper({
    addonLeft,
    addonRight,
    children,
    size,
}: InputAddonWrapperProps) {
    return (
        <div
            className={getAddonWrapperStyle({
                hasAddonLeft: !!addonLeft,
                hasAddonRight: !!addonRight,
            })}
        >
            {addonLeft && (
                <AddonTab
                    side="left"
                    size={size}
                >
                    {addonLeft}
                </AddonTab>
            )}

            <div className={addonChildrenStyle}>{children}</div>

            {addonRight && (
                <AddonTab
                    side="right"
                    size={size}
                >
                    {addonRight}
                </AddonTab>
            )}
        </div>
    );
}

type InputSlotWrapperProps = WithSlots & {
    /**
     * The children to render inside the wrapper.
     */
    children: ReactNode;

    /**
     * Any additional CSS classes to apply to the wrapper.
     */
    className: string | undefined;

    /**
     * Whether the input should have a border.
     */
    hasBorder: boolean | undefined;

    /**
     * Whether the input is invalid.
     */
    invalid: boolean | undefined;

    /**
     * The size of the input.
     */
    size: ElementSizeEnum | undefined;
};

/**
 * Renders a wrapper around the input and its slots.
 */
export function InputSlotWrapper({
    children,
    className,
    hasBorder,
    invalid,
    size,
    slotLeft,
    slotRight,
}: InputSlotWrapperProps) {
    return (
        <span
            className={clsx(
                getSlotWrapperStyles({ hasBorder, size }),
                className,
                {
                    [a11yError]: invalid,
                }
            )}
        >
            {slotLeft}
            {children}
            {slotRight}
        </span>
    );
}

export type InputProps = Partial<
    Pick<
        ComponentPropsWithoutRef<"input">,
        | "defaultValue"
        | "value"
        | "onChange"
        | "onClick"
        | "onFocus"
        | "onMouseOver"
        | "inputMode"
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
    WithOptionalInputAddons &
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
    };

/**
 * A component to render an input.
 * @private Is a base component that should be wrapped with `ForwardRef`.
 */
function PureInput(
    {
        addonLeft,
        addonRight,
        className: userClassName,
        colorOverlay,
        description,
        errorMessage,
        hasBorder,
        hideLastpass,
        id,
        invalid,
        isClearable,
        isCopyable,
        isLabelVisible,
        isVisibilityToggleable,
        isVisible: initialIsVisible,
        label,
        labelProps,
        labelTooltip,
        readOnly,
        size = "md",
        slotLeft,
        slotRight: initialSlotRight,
        strClear,
        strCopied,
        strCopy,
        strHide,
        strShow,
        type,
        wrapperProps,
        ...rest
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
) {
    const inputRef = useForwardRef(ref);

    const { atomProps, otherProps } = extractAtomsFromProps(rest, getSprinkles);

    const { handleToggleVisibility, isVisible } = useFieldVisibilityState({
        initialIsVisible,
    });

    const { handleCopyValue, isCopied } = useFieldCopyableState({
        isCopyable,
        readOnly,
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
            {...getOptionalLabelProps({
                id,
                isLabelVisible,
                label,
                labelProps,
                labelTooltip,
            })}
        >
            <InputAddonWrapper
                addonLeft={addonLeft}
                addonRight={addonRight}
                size={size}
            >
                <InputSlotWrapper
                    className={clsx(getSprinkles(atomProps), userClassName)}
                    hasBorder={hasBorder}
                    invalid={invalid}
                    size={size}
                    slotLeft={slotLeft}
                    slotRight={
                        <>
                            {initialSlotRight}

                            {isVisibilityToggleable && (
                                <FieldActionButtonVisibility
                                    isVisible={isVisible}
                                    onClick={handleToggleVisibility}
                                    size="md"
                                    strHide={strHide}
                                    strShow={strShow}
                                />
                            )}

                            {isCopyable && (
                                <FieldActionButtonCopy
                                    isCopied={isCopied}
                                    onClick={() => {
                                        handleCopyValue?.(
                                            inputRef?.current?.value
                                        );
                                    }}
                                    size="md"
                                    strCopied={strCopied}
                                    strCopy={strCopy}
                                />
                            )}

                            {isClearable && !readOnly && (
                                <FieldActionButtonClear
                                    onClick={() => {
                                        if (inputRef?.current.value) {
                                            inputRef.current.value = "";
                                        }
                                    }}
                                    size="md"
                                    strClear={strClear}
                                />
                            )}
                        </>
                    }
                >
                    <input
                        className={inputStyles}
                        id={id}
                        readOnly={readOnly}
                        ref={inputRef}
                        type={
                            isVisibilityToggleable && !isVisible
                                ? "password"
                                : type
                        }
                        {...otherProps}
                    />
                </InputSlotWrapper>
            </InputAddonWrapper>
        </FieldWrapper>
    );
}

export const Input = forwardRef(PureInput);
