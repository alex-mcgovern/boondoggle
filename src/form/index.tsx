import type { ReactNode } from "react";
import type {
	FieldValues,
	SubmitErrorHandler,
	SubmitHandler,
	UseFormProps,
} from "react-hook-form";

import { FormProvider, useForm } from "react-hook-form";

/**
 * Form component that wraps `react-hook-form`'s `FormProvider` and `useForm` hooks.
 */
export function Form<TFieldValues extends FieldValues>({
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
