import { FormProvider, useForm } from "react-hook-form";

import { Box } from "../box";

import type { BoxProps } from "../box";
import type { KeyboardEvent, ReactNode } from "react";
import type { FieldErrors, FieldValues, Resolver } from "react-hook-form";

/** -----------------------------------------------------------------------------
 * Util function to prevent misfires of the form on an enter keypress
 * ------------------------------------------------------------------------------- */

const preventEnterKeySubmission = (e: KeyboardEvent<HTMLFormElement>) => {
  const target = e.target as HTMLInputElement | HTMLTextAreaElement;
  if (e.key === "Enter" && !["TEXTAREA"].includes(target.tagName)) {
    e.preventDefault();
  }
};

/** -----------------------------------------------------------------------------
 * Layout for form component
 * ------------------------------------------------------------------------------- */

export type FormProps<TFieldValues extends FieldValues = FieldValues> = Omit<
  BoxProps,
  "children"
> & {
  children: ReactNode | ReactNode[];
  disabled?: boolean;
  handleErrors?:
    | ((errors: FieldErrors) => Promise<void>)
    | ((errors: FieldErrors) => void);
  handleFormSubmission:
    | ((fieldValues: TFieldValues) => Promise<void>)
    | ((fieldValues: TFieldValues) => void);
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
        onKeyPress={preventEnterKeySubmission}
        onSubmit={formMethods.handleSubmit(handleFormSubmission, handleErrors)}
      >
        {children}
      </Box>
    </FormProvider>
  );
}
