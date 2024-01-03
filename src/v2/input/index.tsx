import { faCopy } from "@fortawesome/pro-solid-svg-icons/faCopy";
import { faEye } from "@fortawesome/pro-solid-svg-icons/faEye";
import { faEyeSlash } from "@fortawesome/pro-solid-svg-icons/faEyeSlash";
import { faTimesCircle } from "@fortawesome/pro-solid-svg-icons/faTimesCircle";
import clsx from "clsx";
import * as React from "react";
import {
	Input as RACInput,
	type InputProps as RACInputProps,
} from "react-aria-components";
import { useForwardRef } from "../../_hooks/use-forward-ref";
import { FieldActionButton } from "../../v1/field-action-button";
import { Group } from "../group";
import { Icon } from "../icon";
import { useToastContext } from "../toast";
import {
	clearButtonCSS,
	inputElementCSS,
	slotWrapperCSS,
	slottedCSS,
} from "./styles.css";
import { InputProps } from "./types";

const hasValue = (
	v: InputProps["value"],
): v is string | number | readonly string[] =>
	v !== undefined && v.toString().length > 0;

function createChangeEvent(str: string): React.ChangeEvent<HTMLInputElement> {
	return {
		target: {
			value: str,
		},
	} as React.ChangeEvent<HTMLInputElement>;
}

function useControlledInputValue({
	initialValue,
	defaultValue,
	onChange,
}: {
	initialValue: RACInputProps["value"];
	defaultValue: RACInputProps["defaultValue"];
	onChange: RACInputProps["onChange"] | undefined;
}) {
	const [localValue, setLocalValue] = React.useState(
		initialValue ?? defaultValue ?? "",
	);

	const handleChange: RACInputProps["onChange"] = (
		e: React.ChangeEvent<HTMLInputElement>,
	) => {
		setLocalValue(e.target.value);
		onChange?.(createChangeEvent(e.target.value));
	};

	return { localValue, handleChange };
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
 * "COPY-TO-CLIPBOARD" FUNCTIONALITY
 * ------------------------------------------------------------------------------- */

const hasCopyProps = (
	p: InputProps["copyButtonProps"],
): p is { strCopied: string; strCopy: string } => !!p?.strCopied && !!p.strCopy;

function CopyButton({
	strCopied,
	strCopy,
	value,
}: {
	value: Exclude<InputProps["value"], undefined>;
} & InputProps["copyButtonProps"]) {
	const toastState = useToastContext();

	const copyValue = React.useCallback(
		(v: InputProps["value"]) => {
			if (!v) return;

			navigator.clipboard.writeText(v.toString()).then(() =>
				toastState?.add(
					{
						level: "success",
						title: strCopied,
					},
					{ timeout: 5000 },
				),
			);
		},
		[strCopied, toastState],
	);

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

const getCopyButton = ({
	value,
	props,
}: {
	value: InputProps["value"];
	props: InputProps["copyButtonProps"];
}) => {
	if (!hasValue(value) || !hasCopyProps(props)) return null;

	return (
		<CopyButton
			value={value}
			strCopied={props.strCopied}
			strCopy={props.strCopy}
		/>
	);
};

/** -----------------------------------------------------------------------------
 * "CLEAR-VALUE" FUNCTIONALITY
 * ------------------------------------------------------------------------------- */

const hasClearButtonProps = (
	p: InputProps["clearButtonProps"],
): p is { strClear: string } => !!p?.strClear;

function ClearButton({
	onChange,
	strClear,
}: {
	onChange: Exclude<InputProps["onChange"], undefined>;
} & InputProps["clearButtonProps"]) {
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
					onChange(createChangeEvent(""));
				}}
				slot={<Icon icon={faTimesCircle} />}
				strTooltip={strClear}
			/>
		</div>
	);
}

const getClearButton = ({
	onChange,
	value,
	props,
}: {
	onChange: Exclude<InputProps["onChange"], undefined>;
	value: InputProps["value"];
	props: InputProps["clearButtonProps"];
}) => {
	if (!hasValue(value) || !hasClearButtonProps(props)) return null;

	return <ClearButton onChange={onChange} strClear={props.strClear} />;
};

/** -----------------------------------------------------------------------------
 * "TOGGLE-VISIBILITY" FUNCTIONALITY
 * ------------------------------------------------------------------------------- */

function useFieldVisibilityState(props: InputProps["visibilityToggleProps"]) {
	const [isVisible, setIsVisible] = React.useState<boolean>(
		!!props?.isVisible,
	);

	const toggleVisibility = React.useCallback(() => {
		return setIsVisible((p) => !p);
	}, [setIsVisible]);

	return { toggleVisibility: toggleVisibility, isVisible };
}

const hasVisibilityToggleProps = (
	p: InputProps["visibilityToggleProps"],
): p is {
	isVisible: boolean;
	strHide: string;
	strShow: string;
} => {
	return typeof p?.isVisible === "boolean" && !!p?.strHide && !!p.strShow;
};

function VisibilityButton({
	isVisible,
	toggleVisibility,
	strHide,
	strShow,
}: {
	toggleVisibility: () => void;
} & InputProps["visibilityToggleProps"]) {
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

const getVisibilityButton = ({
	props,
	toggleVisibility,
}: {
	props: InputProps["visibilityToggleProps"];
	toggleVisibility: ReturnType<
		typeof useFieldVisibilityState
	>["toggleVisibility"];
}) => {
	if (!hasVisibilityToggleProps(props)) return null;

	return (
		<VisibilityButton
			isVisible={props.isVisible}
			toggleVisibility={toggleVisibility}
			strHide={props.strHide}
			strShow={props.strShow}
		/>
	);
};

/** -----------------------------------------------------------------------------
 * SLOTS
 * ------------------------------------------------------------------------------- */

export type SlotProps = {
	className?: string;
	children: React.ReactNode;
	side?: "left" | "right";
};

const Slot = React.forwardRef<HTMLDivElement, SlotProps>(
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
				className={clsx(slotWrapperCSS({ side }), className)}>
				{children}
			</div>
		);
	},
);

const getSlotLeft = (
	props: InputProps["slotLeftProps"],
	ref: React.RefObject<HTMLDivElement>,
) => {
	if (!props || !ref) return null;

	return (
		<Slot side="left" ref={ref}>
			{getSlotContent(props)}
		</Slot>
	);
};

const getSlotContent = (
	props: InputProps["slotLeftProps"] | InputProps["slotRightProps"],
) => {
	if (!props) return null;

	return (
		<div
			className={slottedCSS({
				isClickable: props.isClickable,
			})}
		>
			{props.children}
		</div>
	);
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
	(
		/**
		 * @note Props prefixed with an underscore may have 
		 * augmented functionality and should be used carefully.
		 */
		{ 
			clearButtonProps,
			copyButtonProps,
			defaultValue,
			disabled,
			invalid,
			label,
			onChange,
			readOnly,
			slotLeftProps,
			slotRightProps,
			value, 
			visibilityToggleProps,
			name,
			placeholder,
			type,
			  ...props },
		ref,
	) => {
		const inputRef = useForwardRef(ref);
		const slotLeftRef = React.useRef<HTMLDivElement>(null);
		const slotRightRef = React.useRef<HTMLDivElement>(null);

		const { localValue, handleChange } = useControlledInputValue({
			defaultValue: defaultValue,
			onChange: onChange,
			initialValue: value,
		});

		const { toggleVisibility, isVisible } = useFieldVisibilityState(
			visibilityToggleProps,
		);

		/** Offset the padding of the input by the width of the slot */
		useSlotOffsetPadding({ inputRef, slotLeftRef, slotRightRef });

		return (
			<Group isDisabled={disabled} isInvalid={invalid}>
				{getSlotLeft(slotLeftProps, slotLeftRef)}

				<RACInput
					aria-label={label}
					readOnly={readOnly}
					disabled={disabled}
					className={inputElementCSS({
						hasSlotLeft: !!slotLeftProps?.children,
						hasSlotRight: !!slotRightProps?.children,
					})}
					id={name}
					name={name}
					onChange={handleChange}
					placeholder={placeholder}
					ref={inputRef}
					type={
						visibilityToggleProps && !isVisible
							? "password"
							: type
					}
					value={localValue}
					{...props}
				/>

				<Slot side="right" ref={slotRightRef}>
					{getClearButton({
						onChange: handleChange,
						props: clearButtonProps,
						value: localValue,
					})}
					{getCopyButton({
						props: copyButtonProps,
						value: localValue,
					})}
					{getVisibilityButton({
						props: visibilityToggleProps,
						toggleVisibility,
					})}
					{getSlotContent(slotRightProps)}
				</Slot>
			</Group>
		);
	},
);
