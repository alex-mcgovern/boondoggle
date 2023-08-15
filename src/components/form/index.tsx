import { FormProvider, useForm } from "react-hook-form";

import { handleHookFormErrors } from "../../lib/handle_hook_form_errors";
import { Box } from "../box";

import type { BoxProps } from "../box";
import type { ReactNode } from "react";
import type { FieldValues, Resolver } from "react-hook-form";

export type FormProps<TFieldValues extends FieldValues = FieldValues> = Omit<
  BoxProps,
  "children"
> & {
  /** Form field components & form submit button. They will be able to access `react-hook-form`'s form context. */
  children: ReactNode | ReactNode[];
  /** Function that will be called when the form is submitted. */
  handleFormSubmission:
    | ((fieldValues: TFieldValues) => Promise<void>)
    | ((fieldValues: TFieldValues) => void);
  /** Name of the form. */
  name: string;
  /** Custom resolver for `react-hook-form`. */
  resolver?: Resolver<TFieldValues, any>;
};

/**
 * Form component that wraps `react-hook-form`'s `FormProvider` and `useForm` hooks.
 */
export function Form<TFieldValues extends FieldValues>({
  children,
  handleFormSubmission,
  name,
  resolver,
}: FormProps<TFieldValues>) {
  const formMethods = useForm<TFieldValues>({ resolver });

  return (
    <FormProvider {...formMethods}>
      <Box
        as="form"
        name={name}
        onSubmit={formMethods.handleSubmit(
          handleFormSubmission,
          handleHookFormErrors
        )}
      >
        {children}
      </Box>
    </FormProvider>
  );
}
