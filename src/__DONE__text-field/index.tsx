import * as React from "react";
import {
	ButtonContext as FieldButtonContext,
	TextField as RACTextField,
	type TextFieldProps as RACTextFieldProps,
	useSlottedContext,
} from "react-aria-components";
import { useToastContext } from "../__DONE__toast";
import { i18n } from "../_i18n";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "../_DEPRECATED_tooltip";
import { Icon } from "../__DONE__icon";
import { faTimesCircle } from "@fortawesome/pro-regular-svg-icons/faTimesCircle";
import { faClipboard } from "@fortawesome/pro-regular-svg-icons/faClipboard";
import { faEyeSlash } from "@fortawesome/pro-regular-svg-icons/faEyeSlash";
import { faEye } from "@fortawesome/pro-regular-svg-icons/faEye";
import { textFieldCSS } from "./styles.css";
import clsx from "clsx";
import { useController, useFormContext } from "react-hook-form";
import { FieldError } from "../__DONE__field-error";
import { FieldButton, type FieldButtonProps } from "../__DONE__field-button";

/** -----------------------------------------------------------------------------
 * TEXT FIELD CLEAR BUTTON
 * ------------------------------------------------------------------------------- */

export const TextFieldClearButton = () => {
	return (
		<Tooltip placement="top">
			<TooltipTrigger asChild>
				<FieldButton slot="clear">
					<Icon icon={faTimesCircle} />
				</FieldButton>
			</TooltipTrigger>
			<TooltipContent>{i18n.clear}</TooltipContent>
		</Tooltip>
	);
};

/** -----------------------------------------------------------------------------
 * TEXT FIELD COPY BUTTON
 * ------------------------------------------------------------------------------- */

export const TextFieldCopyButton = (props: FieldButtonProps) => {
	return (
		<Tooltip placement="top">
			<TooltipTrigger asChild>
				<FieldButton {...props} slot="copy">
					<Icon icon={faClipboard} />
				</FieldButton>
			</TooltipTrigger>
			<TooltipContent>{i18n.copy_to_clipboard}</TooltipContent>
		</Tooltip>
	);
};

/** -----------------------------------------------------------------------------
 * TEXT FIELD VISIBILITY BUTTON
 * ------------------------------------------------------------------------------- */

export const TextFieldVisibilityButton = (props: FieldButtonProps) => {
	const context = useSlottedContext(FieldButtonContext, "visibility");

	return (
		<Tooltip placement="top">
			<TooltipTrigger asChild>
				<FieldButton {...props} slot="visibility">
					<Icon
						icon={context?.value === "hidden" ? faEyeSlash : faEye}
					/>
				</FieldButton>
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
			Record<string, FieldButtonProps>
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
			<FieldButtonContext.Provider value={buttonContext}>
				<RACTextField
					{...props}
					className={clsx(props.className, textFieldCSS)}
					value={value}
					onChange={(v) => {
						setValue(v);
						props.onChange?.(v);
					}}
					type={type}
					ref={ref}
				/>
			</FieldButtonContext.Provider>
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
		field: { ref, value = "", disabled: isDisabled, ...field },
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
			value={value}
			validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
			isInvalid={invalid}
		>
			{() => {
				return (
					<>
						{children}
						<FieldError>{error?.message}</FieldError>
					</>
				);
			}}
		</TextField>
	);
}
