import * as React from "react";
import {
	ButtonContext as RACButtonContext,
	Button as RACButton,
	type ButtonProps as RACButtonProps,
	TextField as RACTextField,
	type TextFieldProps as RACTextFieldProps,
	useSlottedContext,
} from "react-aria-components";
import { useToastContext } from "../toast";
import { i18n } from "../_i18n";
import { Tooltip, TooltipContent, TooltipTrigger } from "../v1/tooltip";
import { Icon } from "../v2/icon";
import { faTimesCircle } from "@fortawesome/pro-regular-svg-icons/faTimesCircle";
import { faClipboard } from "@fortawesome/pro-regular-svg-icons/faClipboard";
import { faEyeSlash } from "@fortawesome/pro-regular-svg-icons/faEyeSlash";
import { faEye } from "@fortawesome/pro-regular-svg-icons/faEye";
import { textFieldButtonCSS, textFieldCSS } from "./styles.css";
import clsx from "clsx";
import { useController, useFormContext } from "react-hook-form";
import { FieldErrorMessage } from "../v1/field-error-message";

/** -----------------------------------------------------------------------------
 * TEXT FIELD CLEAR BUTTON
 * ------------------------------------------------------------------------------- */

export const TextFieldClearButton = (props: RACButtonProps) => {
	return (
		<Tooltip placement="top">
			<TooltipTrigger asChild>
				<RACButton
					{...props}
					className={textFieldButtonCSS}
					excludeFromTabOrder
					slot="clear"
				>
					<Icon icon={faTimesCircle} />
				</RACButton>
			</TooltipTrigger>
			<TooltipContent>{i18n.clear}</TooltipContent>
		</Tooltip>
	);
};

/** -----------------------------------------------------------------------------
 * TEXT FIELD COPY BUTTON
 * ------------------------------------------------------------------------------- */

export const TextFieldCopyButton = (props: RACButtonProps) => {
	return (
		<Tooltip placement="top">
			<TooltipTrigger asChild>
				<RACButton
					{...props}
					className={textFieldButtonCSS}
					excludeFromTabOrder
					slot="copy"
				>
					<Icon icon={faClipboard} />
				</RACButton>
			</TooltipTrigger>
			<TooltipContent>{i18n.copy_to_clipboard}</TooltipContent>
		</Tooltip>
	);
};

/** -----------------------------------------------------------------------------
 * TEXT FIELD VISIBILITY BUTTON
 * ------------------------------------------------------------------------------- */

export const TextFieldVisibilityButton = (props: RACButtonProps) => {
	const context = useSlottedContext(RACButtonContext, "visibility");

	return (
		<Tooltip placement="top">
			<TooltipTrigger asChild>
				<RACButton
					{...props}
					className={textFieldButtonCSS}
					excludeFromTabOrder
					slot="visibility"
				>
					<Icon
						icon={context?.value === "hidden" ? faEyeSlash : faEye}
					/>
				</RACButton>
			</TooltipTrigger>
			<TooltipContent>
				{context?.value === "hidden" ? i18n.hide : i18n.show}
			</TooltipContent>
		</Tooltip>
	);
};

/** -----------------------------------------------------------------------------
 * TEXT FIELD
 * ------------------------------------------------------------------------------- */

export type TextFieldProps = RACTextFieldProps;

/**
 * A text field allows a user to enter a plain text value with a keyboard.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/TextField.html)
 */
export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
	(props, ref) => {
		const [value, setValue] = React.useState<TextFieldProps["value"]>(
			props.value || props.defaultValue,
		);

		const [type, setType] = React.useState<TextFieldProps["type"]>(
			props.type,
		);

		const toastState = useToastContext();

		const clearValue = React.useCallback(() => {
			setValue("");
		}, [setValue]);

		const toggleVisibility = React.useCallback(() => {
			setType((c) => (c === "password" ? "text" : "password"));
		}, [setType]);

		const copyValue = React.useCallback(() => {
			if (!value) return;

			return navigator.clipboard.writeText(value).then(() =>
				toastState?.add(
					{
						level: "success",
						title: i18n.copied_to_clipboard,
					},
					{ timeout: 5000 },
				),
			);
		}, [toastState, value]);

		const buttonContext: Record<
			"slots",
			Record<string, RACButtonProps>
		> = React.useMemo(() => {
			return {
				slots: {
					clear: {
						onPress: clearValue,
						isDisabled: !value,
					},
					copy: {
						onPress: copyValue,
						isDisabled: !value,
					},
					visibility: {
						onPress: toggleVisibility,
						value: type === "password" ? "hidden" : "visible",
					},
				},
			};
		}, [clearValue, copyValue, toggleVisibility, value, type]);

		return (
			<RACButtonContext.Provider value={buttonContext}>
				<RACTextField
					{...props}
					className={clsx(props.className, textFieldCSS)}
					value={value}
					onChange={setValue}
					type={type}
					ref={ref}
				/>
			</RACButtonContext.Provider>
		);
	},
);

/** -----------------------------------------------------------------------------
 * FORM TEXT FIELD
 * ------------------------------------------------------------------------------- */

/**
 * A form text field connects a `TextField` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/TextField.html)
 */
export function FormTextField({ children, ...props }: TextFieldProps) {
	if (!props.name) {
		throw new Error("FormTextField requires a name prop");
	}

	const { control } = useFormContext();

	const {
		field: { disabled, ...field },
		fieldState: { error, invalid },
	} = useController({
		control,
		defaultValue: props.defaultValue,
		name: props.name,
	});

	return (
		<TextField
			{...props}
			{...field}
			isDisabled={disabled || props.isDisabled}
			isInvalid={invalid || props.isInvalid}
		>
			{({ isInvalid }) => {
				return (
					<>
						{children}
						{isInvalid && error?.message ? (
							<FieldErrorMessage>
								{error.message}
							</FieldErrorMessage>
						) : null}
					</>
				);
			}}
		</TextField>
	);
}
