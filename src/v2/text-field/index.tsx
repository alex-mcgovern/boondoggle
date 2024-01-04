import clsx from "clsx";
import * as React from "react";
import {
	TextField as RACTextField,
	type TextFieldProps as RACTextFieldProps,
} from "react-aria-components";
import { FieldDescription } from "../../v1/field-description";
import { V2FieldError } from "../field-error";
import { Input } from "../input";
import { InputProps } from "../input/types";
import { textFieldCSS } from "./styles.css";
import { V2Label } from "../../types";
import { Label } from "../label";

export type TextFieldProps = Omit<
	RACTextFieldProps,
	"children" | "ref" | "aria-label" | "aria-labelledby"
> & {
	name: string;
	description?: string | null;
	errorMessage?: string | null;
	placeholder?: string;
	label: V2Label;
	slotRightProps?: InputProps["slotRightProps"];
	slotLeftProps?: InputProps["slotLeftProps"];
	addonClearButton?: InputProps["addonClearButton"];
	addonCopyButton?: InputProps["addonCopyButton"];
	addonVisibilityToggle?: InputProps["addonVisibilityToggle"];
};

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>((
	{className, ...props},
	ref,
) => {
	return (
		<RACTextField
			className={clsx(
				className,
				textFieldCSS({
					isDisabled: props.isDisabled,
					isInvalid: props.isInvalid,
				}),
			)}
			id={props.name}
			ref={ref}
			{...props}
		>
			<Label label={props.label} name={props.name} />

			<Input
				addonClearButton={props.addonClearButton}
				addonCopyButton={props.addonCopyButton}
				defaultValue={props.defaultValue}
				disabled={props.isDisabled}
				invalid={props.isInvalid}
				name={props.name}
				slotLeftProps={props.slotLeftProps}
				slotRightProps={props.slotRightProps}
				value={props.value}
				addonVisibilityToggle={props.addonVisibilityToggle}
			/>

			{props.description && !props.isInvalid && props.errorMessage ? (
				<FieldDescription description={props.description} />
			) : null}

			{props.isInvalid && props.errorMessage && (
				<V2FieldError>{props.errorMessage}</V2FieldError>
			)}
		</RACTextField>
	);
});
