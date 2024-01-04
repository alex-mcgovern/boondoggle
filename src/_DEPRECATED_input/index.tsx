import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import * as React from "react";
import type {
	ChangeEvent,
	ComponentPropsWithoutRef,
	ForwardedRef,
} from "react";
import { useForwardRef } from "../_hooks/use-forward-ref";
import {
	WithColorOverlay,
	WithDescription,
	WithHideLastpass,
	WithName,
	WithOptionalIsClearable,
	WithOptionalIsCopyable,
	WithOptionalIsVisibilityToggleable,
	WithOptionalPlaceholder,
	WithReadOnly,
	WithSize,
	WithSlots,
	WithStateInvalid,
} from "../types";
import { FieldActionButtonClear } from "../field-action-button-clear";
import { FieldActionButtonCopy } from "../field-action-button-copy";
import { FieldActionButtonVisibility } from "../field-action-button-visibility";
import { FieldWrapper, FieldWrapperProps } from "../field-wrapper";
import { type Sprinkles, sprinkles } from "../sprinkles/index.css";
import {
	InputAddonWrapper,
	WithOptionalInputAddons,
} from "./InputAddonWrapper";
import { InputSlotWrapper } from "./InputSlotWrapper";
import { clearButtonStyle, inputStyles } from "./styles.css";
import { useFieldCopyableState } from "./use_field_copyable_state";
import { useFieldVisibilityState } from "./use_field_visibility_state";

export type InputProps = Partial<
	Pick<
		ComponentPropsWithoutRef<"input">,
		| "defaultValue"
		| "value"
		| "autoFocus"
		| "min"
		| "max"
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
	WithColorOverlay &
	WithDescription &
	WithHideLastpass &
	WithName &
	WithOptionalInputAddons &
	WithOptionalIsClearable &
	WithOptionalIsCopyable &
	WithOptionalIsVisibilityToggleable &
	WithOptionalPlaceholder &
	WithReadOnly &
	WithSize &
	WithSlots &
	WithStateInvalid & {
		/**
		 * The bottom margin applied to the input element.
		 * @default "space_6" (1.5rem / 24px)
		 */
		marginBottom?: Sprinkles["marginBottom"];

		/**
		 * Whether to render the input with a border.
		 */
		hasBorder?: boolean;

		/**
		 * A ref to the outer element. (e.g. for positioning an element along with the input)
		 */
		outerRef?: ForwardedRef<HTMLDivElement>;

		selectionRange?: {
			end: number | null;
			start: number | null;
		};

		wrapperProps?: Partial<FieldWrapperProps["wrapperProps"]>;

		/**
		 * Label config for the field.
		 */
		label?: string;
	};

/**
 * A component to render an input.
 * @private Is a base component that should be wrapped with `ForwardRef`.
 */
function InputBase(
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
		invalid,
		isClearable,
		isCopyable,
		isVisibilityToggleable,
		isVisible: initialIsVisible,
		label,
		name,
		onChange,
		onClick,
		outerRef,
		readOnly,
		selectionRange,
		size = "sm",
		slotLeft,
		slotRight: initialSlotRight,
		strClear,
		strCopied,
		strCopy,
		strHide,
		marginBottom = "space_4",
		strShow,
		type,
		value,
		wrapperProps,
		...rest
	}: InputProps,
	ref: React.ForwardedRef<HTMLInputElement>,
) {
	const inputRef = useForwardRef(ref);

	React.useEffect(() => {
		if (selectionRange !== undefined) {
			inputRef?.current?.setSelectionRange(
				selectionRange.start,
				selectionRange.end,
			);
		}
	}, [inputRef, selectionRange]);

	const focus = React.useCallback(() => {
		inputRef.current?.focus();
	}, [inputRef]);

	const { atomProps, otherProps } = React.useMemo(() => {
		return extractAtomsFromProps(rest, sprinkles);
	}, [rest]);

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
			invalid={invalid}
			wrapperProps={{ marginBottom, ...wrapperProps }}
			label={label}
			name={name}
		>
			<InputAddonWrapper
				addonLeft={addonLeft}
				addonRight={addonRight}
				size={size}
			>
				<InputSlotWrapper
					className={clsx(sprinkles(atomProps), userClassName)}
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
											inputRef?.current?.value,
										);
									}}
									strCopied={strCopied}
									strCopy={strCopy}
								/>
							)}
							{isClearable && strClear && !readOnly && (
								<FieldActionButtonClear
									className={clearButtonStyle}
									onClick={() => {
										onChange?.({
											target: { value: "" },
										} as ChangeEvent<HTMLInputElement>);
										if (inputRef.current) {
											inputRef.current.value = "";
										}
									}}
									strClear={strClear}
								/>
							)}
						</>
					}
				>
					<input
						className={inputStyles}
						defaultValue={defaultValue}
						disabled={disabled}
						id={name}
						name={name}
						onChange={onChange}
						readOnly={readOnly}
						ref={inputRef}
						type={
							isVisibilityToggleable && !isVisible
								? "password"
								: type
						}
						value={value}
						{...otherProps}
					/>
				</InputSlotWrapper>
			</InputAddonWrapper>
		</FieldWrapper>
	);
}

export const Input = React.forwardRef(InputBase);
