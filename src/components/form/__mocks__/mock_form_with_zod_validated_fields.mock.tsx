import { z } from "zod";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { FormInput } from "../../form_input";
import { FormSubmitButton } from "../../form_submit_button";

import type { FormProps } from "..";
import type { BoxProps } from "../../box";

/** ----------------------------------------------------------------------------- */

const zodSchemaEmail = z.string().email().min(2);

/** ----------------------------------------------------------------------------- */

const WRAPPER_PROPS: BoxProps = {
  marginBottom: "spacing_3",
};

/** ----------------------------------------------------------------------------- */

type MockFormWithZodValidatedFieldsProps = Pick<
  FormProps,
  "handleFormSubmission" | "handleErrors"
>;

export const mockFormWithZodValidatedFields = ({
  handleErrors = async () => {},
  handleFormSubmission = async () => {},
}: MockFormWithZodValidatedFieldsProps): FormProps => {
  return {
    children: (
      <>
        <FormInput
          errorMessage="Enter a valid email address"
          id="email"
          label={LOREM.labelEmail()}
          name="email"
          placeholder="Enter your email address"
          validate={(value: string) => {
            return zodSchemaEmail.safeParse(value).success;
          }}
          wrapperProps={WRAPPER_PROPS}
        />

        <FormSubmitButton width="100%">Submit</FormSubmitButton>
      </>
    ),
    handleErrors,
    handleFormSubmission,
    name: LOREM.name(),
  };
};
