import type { ComponentProps, ReactNode } from "react";
import type {
	FieldValues,
	SubmitErrorHandler,
	SubmitHandler,
	UseFormProps,
} from "react-hook-form";

import {
	FormProvider,
	useController,
	useForm,
	useFormContext,
} from "react-hook-form";
import { FieldError } from "../field-error";
import { NumberField } from "../number-field";
import { TextField } from "../text-field";

function FormRoot<TFieldValues extends FieldValues>({
	children,
	className,
	onError,
	onSubmit,
	options,
}: {
	/**
	 * Form field components & form submit button. They will be able to access `react-hook-form`'s form context.
	 */
	children: ReactNode;

	/**
	 * Class name for the form.
	 */
	className?: string;

	/**
	 * Function that will be called when form validation errors occur.
	 */
	onError?: SubmitErrorHandler<TFieldValues>;

	/**
	 * Function that will be called when the form is submitted.
	 */
	onSubmit: SubmitHandler<TFieldValues>;

	/**
	 * Additional options passed to `react-hook-forms` `useForm` hook.
	 */
	options?: UseFormProps<TFieldValues>;
}) {
	const formMethods = useForm<TFieldValues>(options);

	return (
		<FormProvider {...formMethods}>
			<form
				className={className}
				onSubmit={formMethods.handleSubmit(onSubmit, onError)}
			>
				{children}
			</form>
		</FormProvider>
	);
}

/** -----------------------------------------------------------------------------
 * FormTextField
 * ------------------------------------------------------------------------------- */

/**
 * A form text field connects a `TextField` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/TextField.html)
 */
function FormTextField({
	children,
	...props
}: ComponentProps<typeof TextField>) {
	if (!props.name) {
		throw new Error("FormTextField requires a name prop");
	}

	const { control } = useFormContext();

	const {
		field: {
			disabled: isDisabled,
			name,
			onBlur,
			onChange,
			ref,
			value = "",
		},
		fieldState: { error, invalid },
	} = useController({
		control,
		defaultValue: props.value || props.defaultValue,
		name: props.name,
	});

	return (
		<TextField
			{...props}
			defaultValue={value}
			isDisabled={isDisabled}
			isInvalid={invalid}
			name={name}
			onBlur={onBlur}
			onChange={(v) => {
				onChange(v);
				props.onChange?.(v);
			}}
			ref={ref}
			validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
			value={value}
		>
			{(renderProps) => {
				return (
					<>
						{typeof children === "function"
							? children(renderProps)
							: children}
						<FieldError>{error?.message}</FieldError>
					</>
				);
			}}
		</TextField>
	);
}

/** -----------------------------------------------------------------------------
 * FormNumberField
 * ------------------------------------------------------------------------------- */

/**
 * A form number field connects a `NumberField` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/NumberField.html)
 */
function FormNumberField({
	children,
	...props
}: ComponentProps<typeof NumberField>) {
	if (!props.name) {
		throw new Error("FormNumberField requires a name prop");
	}

	const { control } = useFormContext();

	const {
		field: {
			disabled: isDisabled,
			name,
			onBlur,
			onChange,
			ref,
			value = "",
		},
		fieldState: { error, invalid },
	} = useController({
		control,
		defaultValue: props.value || props.defaultValue,
		disabled: props.isDisabled,
		name: props.name,
	});

	return (
		<NumberField
			{...props}
			defaultValue={value}
			isDisabled={isDisabled}
			isInvalid={invalid}
			name={name}
			onBlur={onBlur}
			onChange={(k) => {
				onChange(k);
				props.onChange?.(k);
			}}
			ref={ref}
			validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
			value={value}
		>
			{(renderProps) => {
				return (
					<>
						{typeof children === "function"
							? children(renderProps)
							: children}
						<FieldError>{error?.message}</FieldError>
					</>
				);
			}}
		</NumberField>
	);
}

/**
 * The `Form` namespace uses `react-hook-form` to connect UI components to form state.
 */
export const Form = {
	Root: FormRoot,
	TextField: FormTextField,
	NumberField: FormNumberField,
};
