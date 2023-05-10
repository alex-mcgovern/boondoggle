import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { mockSelectItems } from "../../select/__mocks__/select.mock";
import { FormInput } from "../sub_components/form_input.comp";
import { FormInputDate } from "../sub_components/form_input_date.comp";
import { FormSelectSingle } from "../sub_components/form_select_single.comp";
import { FormSlider } from "../sub_components/form_slider.comp";
import { FormSubmitButton } from "../sub_components/form_submit_button.comp";
import { FormTextArea } from "../sub_components/form_textarea.comp";

import type { FormProps } from "../form.comp";

const mockFormSchema = z.object({
  date: z.string().min(1),
  email: z.string().email().min(2),
  description: z.string().min(1),
  select: z.string().min(1),
  amount: z.number().min(1),
});

type MockFormProps = Pick<
  FormProps,
  "handleFormSubmission" | "handleErrors"
> & {
  withDefaultValues?: boolean;
};

export const mockForm = ({
  handleFormSubmission = async () => {},
  handleErrors = async () => {},
  withDefaultValues = false,
}: MockFormProps): FormProps => {
  return {
    handleFormSubmission,
    handleErrors,
    name: LOREM.name(),
    resolver: zodResolver(mockFormSchema),
    children: (
      <>
        <FormInputDate
          marginBottom="spacing3"
          errorMessage="Date is required"
          label={LOREM.labelDate()}
          name="date"
          id="date"
          placeholder="Select a date"
          defaultValue={withDefaultValues ? LOREM.email() : undefined}
        />
        <FormInput
          marginBottom="spacing3"
          errorMessage="Enter a valid email address"
          label={LOREM.labelEmail()}
          name="email"
          id="email"
          placeholder="Enter your email address"
          defaultValue={withDefaultValues ? LOREM.email() : undefined}
        />
        <FormTextArea
          marginBottom="spacing3"
          errorMessage="Enter a valid description"
          label={LOREM.labelDescription()}
          name="description"
          id="description"
          placeholder="Enter your description"
          defaultValue={withDefaultValues ? LOREM.textXxs : undefined}
        />
        <FormSelectSingle
          marginBottom="spacing3"
          items={mockSelectItems({})}
          errorMessage="Select an option"
          label={LOREM.labelDropdown()}
          id="select"
          name="select"
          placeholder="Select an option from the dropdown"
          initialSelectedItem={
            withDefaultValues ? mockSelectItems({})[0] : null
          }
        />
        <FormSlider
          marginBottom="spacing3"
          errorMessage="Pick a value from the range"
          label={LOREM.labelSlider()}
          name="amount"
          id="amount"
          placeholder="Enter an amount"
          defaultValue={withDefaultValues ? [50] : undefined}
        />
        <FormSubmitButton width="100%">Submit</FormSubmitButton>
      </>
    ),
  };
};
