import type { ComponentProps } from "react";
import type {
	RadioGroupProps as AriaRadioGroupProps,
	RadioProps as AriaRadioProps,
} from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import {
	Radio as AriaRadio,
	RadioGroup as AriaRadioGroup,
} from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";

import { FieldError } from "../field-error";
import "./styles.css";

function Item(props: AriaRadioProps) {
	return (
		<AriaRadio
			{...props}
			className={clsx(props.className, "radio-item")}
		/>
	);
}

const RadioGroup = forwardRef<HTMLDivElement, AriaRadioGroupProps>(
	(props: AriaRadioGroupProps, ref) => {
		return (
			<AriaRadioGroup
				{...props}
				className={clsx(props.className, "radio-group")}
				ref={ref}
			/>
		);
	},
);

function FormGroup({
	children,
	defaultValue,
	...props
}: ComponentProps<typeof RadioGroup>) {
	if (!props.name) {
		throw new Error("FormTextField requires a name prop");
	}

	const { control } = useFormContext();

	const {
		field: { disabled: isDisabled, onChange, ref, value = "", ...field },
		fieldState: { error, invalid },
	} = useController({
		control,
		defaultValue: props.value,
		disabled: props.isDisabled,
		name: props.name,
	});

	return (
		<RadioGroup
			{...props}
			{...field}
			defaultValue={defaultValue}
			isDisabled={isDisabled}
			isInvalid={invalid}
			onChange={(v) => {
				onChange(v);
				props.onChange?.(v);
			}}
			ref={ref}
			value={value}
		>
			{() => {
				return (
					<>
						{children}
						<FieldError>{error?.message}</FieldError>
					</>
				);
			}}
		</RadioGroup>
	);
}

/**
 * A radio group allows a user to select a single item from a list of mutually exclusive options.
 */
export const Radio = {
	FormGroup: FormGroup,
	Group: RadioGroup,
	RadioItem: Item,
};
