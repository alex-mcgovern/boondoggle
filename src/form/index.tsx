import type { ForwardedRef, ReactNode} from "react";
import type { DefaultValues, FieldErrors, FieldValues ,
	Resolver,
	WatchObserver} from "react-hook-form";

import { forwardRef } from "react";
import {
	FormProvider,
	useForm,
} from "react-hook-form";

import type { BoxProps } from "../box";

const debugFormErrors = (errors: FieldErrors) => {
	if (process.env.NODE_ENV === "production") {
		return;
	}

	for (const [field, error] of Object.entries(errors)) {
		console.error(`[${field}] ${error?.message as string}`);
	}
};

export type FormProps<TFieldValues extends FieldValues = FieldValues> = Omit<
	BoxProps,
	"children"
> & {
	/**
	 * Form field components & form submit button. They will be able to access `react-hook-form`'s form context.
	 */
	children: ((values: TFieldValues) => ReactNode) | ReactNode;

	/**
	 * Class name for the form.
	 */
	className?: string;

	/**
	 * Default values for the form fields.
	 */
	defaultValues?: DefaultValues<TFieldValues> | undefined;

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
	 * Custom resolver for `react-hook-form`.
	 */
	/**
	 * Whether the form is disabled or not.
	 */
	isDisabled?: boolean;

	/**
	 * Name of the form.
	 */
	name: string;

	
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	resolver?: Resolver<TFieldValues, any>;

	/**
	 * Whether the form should reset after it is submitted.
	 */
	shouldResetOnSubmit?: boolean;

	/**
	 * Function that will be called when a field value changes.
	 */
	watchCallback?: WatchObserver<TFieldValues>;
};

/**
 * Form component that wraps `react-hook-form`'s `FormProvider` and `useForm` hooks.
 */
function _Form<TFieldValues extends FieldValues>(
	{
		children,
		className,
		defaultValues,
		handleErrors = debugFormErrors,
		handleSubmit,
		isDisabled,
		name,
		resolver,
		shouldResetOnSubmit = false,
		watchCallback,
	}: FormProps<TFieldValues>,
	ref: ForwardedRef<HTMLFormElement>,
) {
	const formMethods = useForm<TFieldValues>({
		defaultValues,
		disabled: isDisabled,
		resolver,
	});

	if (watchCallback) {
		formMethods.watch(watchCallback);
	}

	return (
		<FormProvider {...formMethods}>
			<form
				className={className}
				name={name}
				onSubmit={formMethods.handleSubmit((fieldValues) => {
					handleSubmit(fieldValues);
					if (shouldResetOnSubmit) {
						formMethods.reset(defaultValues);
					}
				}, handleErrors)}
				ref={ref}
			>
				{typeof children === "function"
					? children(formMethods.getValues())
					: children}
			</form>
		</FormProvider>
	);
}

export const Form = forwardRef(_Form);
