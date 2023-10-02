/* eslint-disable react-perf/jsx-no-new-array-as-prop */
import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import {
    forwardRef,
    isValidElement,
    useCallback,
    useEffect,
    useState,
} from "react";

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
    WithStateDisabled,
    WithStateInvalid,
    WithWrapperProps,
} from "../../common-types";
import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type {
    ChangeEvent,
    ComponentPropsWithoutRef,
    ForwardedRef,
    MouseEvent,
    MouseEventHandler,
    ReactNode,
} from "react";

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

type InputSlotWrapperProps = WithSlots &
    WithStateDisabled & {
        /**
         * The children to render inside the wrapper.
         */
        children: ReactNode;

        /**
         * Any additional CSS classes to apply to the wrapper.
         */
        className: string | undefined;

        /**
         * Method to focus the input element.
         */
        focus: () => void;

        /**
         * Whether the input should have a border.
         */
        hasBorder: boolean | undefined;

        /**
         * Whether the input is invalid.
         */
        invalid: boolean | undefined;

        /**
         * Method to call the input elements onClick handler.
         */
        onClick: MouseEventHandler<HTMLInputElement> | undefined;

        /**
         * The size of the input.
         */
        size: ElementSizeEnum | undefined;
    };

/**
 * Renders a wrapper around the input and its slots.
 */
export const InputSlotWrapper = forwardRef<
    HTMLSpanElement,
    InputSlotWrapperProps
>(
    (
        {
            children,
            className,
            disabled,
            focus,
            hasBorder,
            invalid,
            onClick,
            size,
            slotLeft,
            slotRight,
        },
        ref
    ) => {
        const handleClick = useCallback(
            (e: MouseEvent<HTMLElement>) => {
                focus();
                onClick?.(e as MouseEvent<HTMLInputElement>);
                e.stopPropagation();
            },
            [focus, onClick]
        );

        return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
            <span
                aria-disabled={disabled}
                className={clsx(
                    getSlotWrapperStyles({ hasBorder, size }),
                    className,
                    {
                        [a11yError]: invalid,
                    }
                )}
                onClick={handleClick}
                ref={ref}
            >
                {slotLeft}
                {children}
                {slotRight}
            </span>
        );
    }
);

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

        /**
         * A ref to the outer element. (e.g. for positioning an element along with the input)
         */
        outerRef?: ForwardedRef<HTMLSpanElement>;
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
        defaultValue,
        description,
        disabled,
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
        onChange,
        onClick,
        outerRef,
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
        value,
        wrapperProps,
        ...rest
    }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
) {
    const inputRef = useForwardRef(ref);

    const focus = useCallback(() => {
        inputRef.current?.focus();
    }, [inputRef]);

    const [inputValue, setInputValue] = useState(value || defaultValue || "");

    useEffect(() => {
        if (value !== undefined) {
            setInputValue(value);
        }
    }, [value]);

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
                    disabled={disabled}
                    focus={focus}
                    hasBorder={hasBorder}
                    invalid={invalid}
                    onClick={onClick}
                    ref={outerRef}
                    size={size}
                    slotLeft={slotLeft}
                    slotRight={
                        <>
                            {initialSlotRight}
                            {isVisibilityToggleable && (
                                <FieldActionButtonVisibility
                                    isVisible={isVisible}
                                    onClick={handleToggleVisibility}
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
                                    strCopied={strCopied}
                                    strCopy={strCopy}
                                />
                            )}
                            {isClearable &&
                                strClear &&
                                inputValue &&
                                !readOnly && (
                                    <FieldActionButtonClear
                                        onClick={() => {
                                            onChange?.({
                                                target: { value: "" },
                                            } as ChangeEvent<HTMLInputElement>);
                                            return setInputValue("");
                                        }}
                                        strClear={strClear}
                                    />
                                )}
                        </>
                    }
                >
                    <input
                        className={inputStyles}
                        disabled={disabled}
                        id={id}
                        onChange={(e) => {
                            onChange?.(e);
                            return setInputValue(e.target.value);
                        }}
                        readOnly={readOnly}
                        ref={inputRef}
                        type={
                            isVisibilityToggleable && !isVisible
                                ? "password"
                                : type
                        }
                        value={inputValue}
                        {...otherProps}
                    />
                </InputSlotWrapper>
            </InputAddonWrapper>
        </FieldWrapper>
    );
}

export const Input = forwardRef(PureInput);
