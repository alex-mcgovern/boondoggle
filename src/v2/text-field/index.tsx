import clsx from "clsx";
import * as React from "react";
import { TextField as RACTextField } from "react-aria-components";
import { FieldDescription } from "../../v1/field-description";
import { V2FieldError } from "../field-error";
import { Input } from "../input";
import { V2Label } from "../label";
import { textFieldCSS } from "./styles.css";
import { TextFieldProps } from "./types";

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
			<V2Label
				htmlFor={props.name}
				isInvalid={props.isInvalid}
				isLabelVisible={props.isLabelVisible}
				label={props.label}
				labelTooltip={props.labelTooltip}
			/>

			<Input
				clearButtonProps={props.clearButtonProps}
				copyButtonProps={props.copyButtonProps}
				defaultValue={props.defaultValue}
				disabled={props.isDisabled}
				invalid={props.isInvalid}
				label={props.label}
				name={props.name}
				slotLeftProps={props.slotLeftProps}
				slotRightProps={props.slotRightProps}
				value={props.value}
				visibilityToggleProps={props.visibilityToggleProps}
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
