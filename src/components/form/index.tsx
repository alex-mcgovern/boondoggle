import { FormProvider, useForm } from "react-hook-form";

import { Box } from "../box/_components/Box";
import { handleHookFormErrors } from "./handle_hook_form_errors";

import type { ReactNode } from "react";
import type { FieldErrors, FieldValues, Resolver } from "react-hook-form";
import type { BoxProps } from "../box/_components/Box";

export type FormProps<TFieldValues extends FieldValues = FieldValues> = Omit<
	BoxProps,
	"children"
> & {
	/**
	 * Form field components & form submit button. They will be able to access `react-hook-form`'s form context.
	 */
	children: ReactNode | ReactNode[];

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
};

/**
 * Form component that wraps `react-hook-form`'s `FormProvider` and `useForm` hooks.
 */
export function Form<TFieldValues extends FieldValues>({
	children,
	handleErrors = handleHookFormErrors,
	handleSubmit,
	name,
	resolver,
}: FormProps<TFieldValues>) {
	const formMethods = useForm<TFieldValues>({ resolver });

	return (
		<FormProvider {...formMethods}>
			<Box
				as="form"
				name={name}
				onSubmit={formMethods.handleSubmit(handleSubmit, handleErrors)}
			>
				{children}
			</Box>
		</FormProvider>
	);
}
