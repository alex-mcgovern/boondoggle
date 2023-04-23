import { FormProvider, useForm } from "react-hook-form";

import { Box } from "../box";

import type { BoxProps } from "../box";
import type { ReactNode } from "react";
import type { FieldErrors, FieldValues, Resolver } from "react-hook-form";

export type FormProps = Omit<BoxProps, "children"> & {
  children: ReactNode | ReactNode[];
  disabled?: boolean;
  handleFormSubmission:
    | ((fieldValues: Record<string, unknown>) => Promise<void>)
    | ((fieldValues: Record<string, unknown>) => void);
  handleErrors?:
    | ((errors: FieldErrors) => Promise<void>)
    | ((errors: FieldErrors) => void);
  name: string;
  resolver: Resolver<FieldValues, any>;
};

export function Form({
  children,
  handleFormSubmission,
  name,
  handleErrors,
  resolver,
}: FormProps) {
  const formMethods = useForm({ resolver });

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
