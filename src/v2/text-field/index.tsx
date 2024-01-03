import { faCopy } from "@fortawesome/pro-solid-svg-icons/faCopy";
import { faEye } from "@fortawesome/pro-solid-svg-icons/faEye";
import { faEyeSlash } from "@fortawesome/pro-solid-svg-icons/faEyeSlash";
import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons/faTimesCircle";
import clsx from "clsx";
import * as React from "react";
import {
	Group as RACGroup,
	Input as RACInput,
	TextField as RACTextField,
	type TextFieldProps as RACTextFieldProps,
} from "react-aria-components";
import { FieldActionButton } from "../../v1/field-action-button";
import { FieldDescription } from "../../v1/field-description";
import { V2FieldError } from "../field-error";
import { Icon } from "../icon";
import { V2Label } from "../label";
import { useToastContext } from "../toast";
import {
	clearButtonCSS,
	groupCSS,
	slottedCSS,
	textFieldCSS,
	textFieldInputCSS,
	textFieldSlotCSS,
} from "./styles.css";
import { TextFieldProps } from "./types";

/** -----------------------------------------------------------------------------
 * HOOKS
 * ------------------------------------------------------------------------------- */

function useControlledInputValue({
	initialValue,
	defaultValue,
	onChange,
}: {
	initialValue: RACTextFieldProps["value"];
	defaultValue: RACTextFieldProps["defaultValue"];
	onChange: RACTextFieldProps["onChange"] | undefined;
}) {
	const [value, setValue] = React.useState(
		initialValue ?? defaultValue ?? "",
	);

	function handleChange(v: string) {
		setValue(v);
		onChange?.(v);
	}

	return { value, handleChange };
}

/**
 * Toggle the visibility of the field value.
 */
function useFieldVisibilityState({
	initialIsVisible,
}: {
	initialIsVisible?: boolean;
}) {
	const [isVisible, setIsVisible] = React.useState<boolean>(
		!!initialIsVisible,
	);

	const toggleVisibility = React.useCallback(() => {
		return setIsVisible((p) => !p);
	}, [setIsVisible]);

	return { toggleVisibility: toggleVisibility, isVisible };
}

/**
 * Offset the padding of the input by the width of the slot.
 */
function useSlotOffsetPadding({
	slotRightRef,
	slotLeftRef,
	inputRef,
}: {
	slotRightRef: React.RefObject<HTMLDivElement>;
	slotLeftRef: React.RefObject<HTMLDivElement>;
	inputRef: React.RefObject<HTMLInputElement>;
}) {
	return React.useEffect(() => {
		if (!inputRef.current) return;

		if (slotRightRef.current) {
			const slotRightWidth = slotRightRef.current?.offsetWidth ?? 0;
			inputRef.current.style.paddingRight = `${slotRightWidth}px`;
		}

		if (slotLeftRef.current) {
			const slotLeftWidth = slotLeftRef.current?.offsetWidth ?? 0;
			inputRef.current.style.paddingLeft = `${slotLeftWidth}px`;
		}
	}, [inputRef, slotLeftRef, slotRightRef]);
}

/** -----------------------------------------------------------------------------
 * SUB-COMPONENTS
 * ------------------------------------------------------------------------------- */

/**
 * Copy the value of the field to the clipboard.
 */
function CopyButton({
	strCopied,
	strCopy,
	value,
}: {
	strCopied: string;
	strCopy: string;
	value: string | undefined;
}) {
	const toastState = useToastContext();

	const copyValue = React.useCallback(
		(v: string) =>
			navigator.clipboard.writeText(v).then(() =>
				toastState?.add(
					{
						level: "success",
						title: strCopied,
					},
					{ timeout: 5000 },
				),
			),
		[strCopied, toastState],
	);

	if (!value) return null;

	return (
		<div
			className={slottedCSS({
				isClickable: true,
			})}
		>
			<FieldActionButton
				name="copy"
				data-testid="copy"
				onClick={() => copyValue(value)}
				slot={<Icon icon={faCopy} />}
				strTooltip={strCopy}
			/>
		</div>
	);
}

/**
 * Clear the value of the field.
 */
function ClearButton({
	handleChange,
	strClear,
}: { handleChange: (value: string) => void; strClear: string }) {
	return (
		<div
			className={slottedCSS({
				isClickable: true,
			})}
		>
			<FieldActionButton
				data-testid="clear"
				name="clear"
				className={clearButtonCSS}
				onClick={() => {
					handleChange("");
				}}
				slot={<Icon icon={faTimesCircle} />}
				strTooltip={strClear}
			/>
		</div>
	);
}

/**
 * Toggle the visibility of the field value.
 */

function VisibilityButton({
	isVisible,
	toggleVisibility,
	strHide,
	strShow,
}: {
	isVisible: boolean;
	toggleVisibility: () => void;
	strHide: string;
	strShow: string;
}) {
	return (
		<div
			className={slottedCSS({
				isClickable: true,
			})}
		>
			<FieldActionButton
				name="toggle_visibility"
				data-testid="toggle_visibility"
				onClick={toggleVisibility}
				slot={<Icon icon={isVisible ? faEyeSlash : faEye} />}
				strTooltip={isVisible ? strHide : strShow}
			/>
		</div>
	);
}

/** -----------------------------------------------------------------------------
 * SLOTS
 * ------------------------------------------------------------------------------- */

export type TextFieldSlotProps = {
	className?: string;
	children: React.ReactNode;
	side?: "left" | "right";
};

export const TextFieldSlot = React.forwardRef<HTMLDivElement, TextFieldSlotProps>(
	(
		{
			children,
			className,
			side,
		},
		ref,
	) => {
		return (
			<div
				ref={ref}
				className={clsx(textFieldSlotCSS({ side }), className)}>
				{children}
			</div>
		);
	},
);

/**
 * Additional content shown on the right hand side of the field.
 */
const ContentRight = React.forwardRef<HTMLDivElement, {

	slotRightProps: TextFieldProps["slotRightProps"];
	
	value: string | undefined;
	defaultValue: string | undefined;
	handleChange: (v: string) => void;


	isClearable: boolean | undefined;
	strClear: string | undefined;


	isCopyable: boolean | undefined;
	strCopied: string | undefined;
	strCopy: string | undefined;


	isVisible: boolean;
	toggleVisibility: () => void;
	strHide: string | undefined;
	strShow: string | undefined;
}>(
	(
		{
			slotRightProps,

			value,
			handleChange,
			defaultValue,


			toggleVisibility,
			isVisible,
			strHide,
			strShow,


			isCopyable,
			strCopied,
			strCopy,


			isClearable,
			strClear,
		},
		ref,
	) => {
		const hasCopyable = (!!defaultValue || !!value) && isCopyable && !!strCopy && !!strCopied;
		const hasClearable = (!!defaultValue || !!value) && !!isClearable && !!strClear;
		const hasVisibility = !!strHide && !!strShow;

		const hasActions = hasCopyable || hasClearable || hasVisibility;

		if (!slotRightProps?.children && !hasActions) return null;

		return (
			<TextFieldSlot side="right" ref={ref}>
				{hasVisibility ? (
					<VisibilityButton
						toggleVisibility={toggleVisibility}
						isVisible={isVisible}
						strHide={strHide}
						strShow={strShow}
					/>
				) : null}

				{hasCopyable ? (
					<CopyButton
						strCopied={strCopied}
						strCopy={strCopy}
						value={value}
					/>
				) : null}

				{hasClearable ? (
					<ClearButton handleChange={handleChange} strClear={strClear} />
				) : null}

				{slotRightProps?.children ? (
					<div
						className={slottedCSS({
							isClickable: slotRightProps.isClickable,
						})}
					>
						{slotRightProps.children}
					</div>
				) : null}
			</TextFieldSlot>
		);
	},
);

/** -----------------------------------------------------------------------------
 * PUBLIC COMPONENT
 * ------------------------------------------------------------------------------- */

const BaseTextfield = (
	{
		// ===== Input props =====
		name,
		value: initialValue,
		defaultValue,
		type,
		className,

		onChange,

		isReadOnly,
		isDisabled,

		description,
		placeholder,

		// ===== Validation props =====

		isInvalid,
		errorMessage,

		// ===== Slot props =====

		slotLeftProps,
		slotRightProps,

		// ===== Label props =====

		label,
		labelTooltip,
		isLabelVisible,

		// ===== Copyable functionality =====

		isCopyable,
		strCopied,
		strCopy,

		//  ===== Clearable functionality =====

		isClearable,
		strClear,

		// ====== Visibility functionality =====

		isVisibilityToggleable,
		isVisible: initialIsVisible,
		strHide,
		strShow,

		...rest
	}: TextFieldProps,
	ref: React.ForwardedRef<HTMLInputElement>,
) => {
	const inputRef = React.useRef<HTMLInputElement>(null);
	const slotLeftRef = React.useRef<HTMLDivElement>(null);
	const slotRightRef = React.useRef<HTMLDivElement>(null);

	const { value, handleChange } = useControlledInputValue({
		defaultValue,
		onChange,
		initialValue,
	});

	const { toggleVisibility, isVisible } = useFieldVisibilityState({
		initialIsVisible,
	});

	/** Offset the padding of the input by the width of the slot */
	useSlotOffsetPadding({ inputRef, slotLeftRef, slotRightRef });

	return (
		<RACTextField
			{...rest}
			className={clsx(className, textFieldCSS({ isDisabled, isInvalid }))}
			isInvalid={isInvalid}
			isDisabled={isDisabled}
			value={value}
			onChange={handleChange}
			defaultValue={defaultValue}
			isReadOnly={isReadOnly}
			type={isVisibilityToggleable && !isVisible ? "password" : type}
			ref={ref}
		>
			<V2Label
				htmlFor={name}
				isInvalid={isInvalid}
				isLabelVisible={isLabelVisible}
				label={label}
				labelTooltip={labelTooltip}
			/>

			<RACGroup
				isDisabled={isDisabled}
				isInvalid={isInvalid}
				className={groupCSS({ isInvalid })}
			>
				{slotLeftProps ? (
					<TextFieldSlot
						{...slotLeftProps}
						side="left"
						ref={slotLeftRef}
					>
						{slotLeftProps?.children ? (
							<div
								className={slottedCSS({
									isClickable: slotLeftProps.isClickable,
								})}
							>
								{slotLeftProps.children}
							</div>
						) : null}
					</TextFieldSlot>
				) : null}

				<RACInput
					className={textFieldInputCSS({
						hasSlotLeft: !!slotLeftProps?.children,
						hasSlotRight: !!slotRightProps?.children,
					})}
					aria-label={label}
					ref={inputRef}
					placeholder={placeholder}
					name={name}
					id={name}
				/>

				<ContentRight
					ref={slotRightRef}
					slotRightProps={slotRightProps}
					handleChange={handleChange}
					value={value}
					defaultValue={defaultValue}
					/**
					 * Clearable functionality
					 */
					isClearable={isClearable}
					strClear={strClear}
					/**
					 * Copyable functionality
					 */
					isCopyable={isCopyable}
					strCopied={strCopied}
					strCopy={strCopy}
					/**
					 * Visibility functionality
					 */
					isVisible={isVisible}
					toggleVisibility={toggleVisibility}
					strHide={strHide}
					strShow={strShow}
				/>
			</RACGroup>

			{description && !isInvalid && errorMessage ? (
				<FieldDescription description={description} />
			) : null}

			{isInvalid && errorMessage && (
				<V2FieldError>{errorMessage}</V2FieldError>
			)}
		</RACTextField>
	);
};

export const TextField = React.forwardRef(BaseTextfield);
