import { FormProvider, useForm } from "react-hook-form";

import { Box } from "../Box";

import type { BoxProps } from "../Box";
import type { ReactNode } from "react";
import type { FieldErrors, FieldValues, Resolver } from "react-hook-form";

/** ----------------------------------------------------------------------------- */

export type FormProps<TFieldValues extends FieldValues = FieldValues> = Omit<
  BoxProps,
  "children"
> & {
  children: ReactNode | ReactNode[];
  handleErrors?:
    | ((errors: FieldErrors) => Promise<void>)
    | ((errors: FieldErrors) => void);
  handleFormSubmission:
    | ((fieldValues: TFieldValues) => Promise<void>)
    | ((fieldValues: TFieldValues) => void);
  name: string;
  resolver?: Resolver<TFieldValues, any>;
};

export function Form<TFieldValues extends FieldValues>({
  children,
  handleErrors,
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
        onSubmit={formMethods.handleSubmit(handleFormSubmission, handleErrors)}
      >
        {children}
      </Box>
    </FormProvider>
  );
}
