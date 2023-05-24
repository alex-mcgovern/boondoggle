import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { mockSelectItems } from "../../select/__mocks__/select.mock";
import { Form } from "../form.comp";
import { FormInput } from "../sub_components/form_input.comp";
import { FormSelectSingle } from "../sub_components/form_select_single.comp";
import { FormSlider } from "../sub_components/form_slider.comp";
import { FormSubmitButton } from "../sub_components/form_submit_button.comp";
import { FormTextArea } from "../sub_components/form_textarea.comp";

import type { BoxProps } from "../../box";
import type { FormProps } from "../form.comp";

/** -----------------------------------------------------------------------------
 * Form validation Zod schema
 * ------------------------------------------------------------------------------- */

const mockFormSchema = z.object({
  amount: z.number().min(1),
  // date: z.string().min(1),
  description: z.string().min(1),
  email: z.string().email().min(2),
  select: z.string().min(1),
});

/** -----------------------------------------------------------------------------
 * Common props for all form components
 * ------------------------------------------------------------------------------- */

const WRAPPER_PROPS: BoxProps = {
  marginBottom: "spacing3",
};

/** -----------------------------------------------------------------------------
 * Function for composing form component for testing
 * ------------------------------------------------------------------------------- */

type MockFormProps = Pick<
  FormProps,
  "handleFormSubmission" | "handleErrors"
> & {
  withDefaultValues?: boolean;
};

export function MockForm({
  handleFormSubmission = async () => {},
  handleErrors = async () => {},
  withDefaultValues = false,
}: MockFormProps) {
  const formMethods = useForm({ resolver: zodResolver(mockFormSchema) });

  return (
    <Form
      formMethods={formMethods}
      handleErrors={handleErrors}
      handleFormSubmission={handleFormSubmission}
      name={LOREM.name()}
    >
      <FormInput
        defaultValue={withDefaultValues ? LOREM.email() : undefined}
        errorMessage="Enter a valid email address"
        id="email"
        label={LOREM.labelEmail()}
        name="email"
        placeholder="Enter your email address"
        wrapperProps={WRAPPER_PROPS}
      />
      <FormTextArea
        defaultValue={withDefaultValues ? LOREM.textXxs : undefined}
        errorMessage="Enter a valid description"
        id="description"
        label={LOREM.labelDescription()}
        name="description"
        placeholder="Enter your description"
        wrapperProps={WRAPPER_PROPS}
      />
      <FormSelectSingle
        errorMessage="Select an option"
        id="select"
        initialSelectedItem={withDefaultValues ? mockSelectItems({})[0] : null}
        items={mockSelectItems({})}
        label={LOREM.labelDropdown()}
        name="select"
        placeholder="Select an option from the dropdown"
        wrapperProps={WRAPPER_PROPS}
      />
      <FormSlider
        defaultValue={withDefaultValues ? [50] : undefined}
        errorMessage="Pick a value from the range"
        id="amount"
        label={LOREM.labelSlider()}
        name="amount"
        placeholder="Enter an amount"
        wrapperProps={WRAPPER_PROPS}
      />
      <FormSubmitButton width="100%">Submit</FormSubmitButton>
    </Form>
  );
}
