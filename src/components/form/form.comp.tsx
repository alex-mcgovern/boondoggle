import { FormProvider, useForm } from "react-hook-form";

import { Box } from "../box";

import type { BoxProps } from "../box";
import type { ReactNode } from "react";
import type { FieldErrors, FieldValues, Resolver } from "react-hook-form";

export type FormProps<TFieldValues extends FieldValues> = Omit<
  BoxProps,
  "children"
> & {
  children: ReactNode | ReactNode[];
  disabled?: boolean;
  handleFormSubmission:
    | ((fieldValues: TFieldValues) => Promise<void>)
    | ((fieldValues: TFieldValues) => void);
  handleErrors?:
    | ((errors: FieldErrors) => Promise<void>)
    | ((errors: FieldErrors) => void);
  name: string;
  resolver: Resolver<TFieldValues, any>;
};

export function Form<TFieldValues extends FieldValues>({
  children,
  handleFormSubmission,
  name,
  handleErrors,
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
