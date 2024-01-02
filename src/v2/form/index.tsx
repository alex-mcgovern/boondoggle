import React from "react";
import {
	DefaultValues,
	FormProvider as RHFormProvider,
	UseFormReturn,
	WatchObserver,
	useForm,
	useFormContext,
} from "react-hook-form";
import type { FieldErrors, FieldValues, Resolver } from "react-hook-form";
import type { BoxProps } from "../../v1/box";
import { handleHookFormErrors } from "./handle_hook_form_errors";

/** -----------------------------------------------------------------------------
 * FORM PROVIDER
 * ------------------------------------------------------------------------------- */

export type FormProviderProps<TFieldValues extends FieldValues = FieldValues> =
	Omit<BoxProps, "children"> & {
		children:
			| React.ReactNode
			| ((
					// biome-ignore lint/suspicious/noExplicitAny: RHF uses `any` for the second type argument
					formMethods: UseFormReturn<TFieldValues, any, undefined>,
			  ) => React.ReactNode);

		/**
		 * Custom resolver for `react-hook-form`.
		 */
		// biome-ignore lint/suspicious/noExplicitAny: required to be this way
		resolver?: Resolver<TFieldValues, any>;

		/**
		 * Default values for the form fields.
		 */
		defaultValues?: DefaultValues<TFieldValues> | undefined;
	};

/**
 * Form component that wraps `react-hook-form`'s `FormProvider` and `useForm` hooks.
 */
export function FormProvider<TFieldValues extends FieldValues>({
	children,
	resolver,
	defaultValues,
}: FormProviderProps<TFieldValues>) {
	const formMethods = useForm<TFieldValues>({ resolver, defaultValues });

	return (
		<RHFormProvider {...formMethods}>
			{typeof children === "function" ? children(formMethods) : children}
		</RHFormProvider>
	);
}

/** -----------------------------------------------------------------------------
 * FORM COMPONENT
 * ------------------------------------------------------------------------------- */

export type FormProps<TFieldValues extends FieldValues = FieldValues> = Omit<
	React.HtmlHTMLAttributes<HTMLFormElement>,
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
	 * Function that will be called when a field value changes.
	 */
	watchCallback?: WatchObserver<TFieldValues>;
};

/**
 * Form component that wraps `react-hook-form`'s `FormProvider` and `useForm` hooks.
 */
function BaseForm<TFieldValues extends FieldValues>(
	{
		children,
		handleErrors = handleHookFormErrors,
		handleSubmit,
		watchCallback,
		...rest
	}: FormProps<TFieldValues>,
	ref: React.ForwardedRef<HTMLFormElement>,
) {
	const formMethods = useFormContext<TFieldValues>();

	if (watchCallback) {
		formMethods.watch(watchCallback);
	}

	return (
		<form
			ref={ref}
			onSubmit={formMethods.handleSubmit(handleSubmit, handleErrors)}
			{...rest}
		>
			{typeof children === "function" ? children(formMethods) : children}
		</form>
	);
}

export const Form = React.forwardRef(BaseForm);
