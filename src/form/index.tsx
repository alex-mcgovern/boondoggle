import React from "react";
import {
	DefaultValues,
	FormProvider,
	UseFormReturn,
	WatchObserver,
	useForm,
} from "react-hook-form";
import type { FieldErrors, FieldValues, Resolver } from "react-hook-form";
import type { BoxProps } from "../box";
import { handleHookFormErrors } from "./handle_hook_form_errors";

export type FormProps<TFieldValues extends FieldValues = FieldValues> = Omit<
	BoxProps,
	"children"
> & {
	/**
	 * Form field components & form submit button. They will be able to access `react-hook-form`'s form context.
	 */
	children:
		| React.ReactNode
		| ((
				// biome-ignore lint/suspicious/noExplicitAny: RHF uses `any` for the second type argument
				formMethods: UseFormReturn<TFieldValues, any, undefined>,
		  ) => React.ReactNode);

	/**
	 * Class name for the form.
	 */
	className?: string;

	/**
	 * Function that will be called when form validation errors occur.
	 */
	handleErrors?:
		| ((errors: FieldErrors) => Promise<void>)
		| ((errors: FieldErrors) => void);

	/**
	 * Function that will be called when the form is submitted.
	 */
	handleSubmit:
		| ((fieldValues: TFieldValues) => Promise<void>)
		| ((fieldValues: TFieldValues) => void);

	/**
	 * Name of the form.
	 */
	name: string;

	/**
	 * Custom resolver for `react-hook-form`.
	 */
	// biome-ignore lint/suspicious/noExplicitAny: required to be this way
	resolver?: Resolver<TFieldValues, any>;

	/**
	 * Default values for the form fields.
	 */
	defaultValues?: DefaultValues<TFieldValues> | undefined;

	/**
	 * Function that will be called when a field value changes.
	 */
	watchCallback?: WatchObserver<TFieldValues>;

	/**
	 * Whether the form should reset after it is submitted.
	 */
	shouldResetOnSubmit?: boolean;
};

/**
 * Form component that wraps `react-hook-form`'s `FormProvider` and `useForm` hooks.
 */
function BaseForm<TFieldValues extends FieldValues>(
	{
		children,
		handleErrors = handleHookFormErrors,
		handleSubmit,
		name,
		resolver,
		defaultValues,
		shouldResetOnSubmit = false,
		watchCallback,
		className,
	}: FormProps<TFieldValues>,
	ref: React.ForwardedRef<HTMLFormElement>,
) {
	const formMethods = useForm<TFieldValues>({ resolver, defaultValues });

	if (watchCallback) {
		formMethods.watch(watchCallback);
	}

	return (
		<FormProvider {...formMethods}>
			<form
				className={className}
				ref={ref}
				name={name}
				onSubmit={formMethods.handleSubmit((fieldValues) => {
					handleSubmit(fieldValues);
					if (shouldResetOnSubmit) {
						formMethods.reset(defaultValues);
					}
				}, handleErrors)}
			>
				{typeof children === "function"
					? children(formMethods)
					: children}
			</form>
		</FormProvider>
	);
}

export const Form = React.forwardRef(BaseForm);
