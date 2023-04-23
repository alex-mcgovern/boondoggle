import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { mockSelectItems } from "../../select/__mocks__/select.mock";
import { FormInput } from "../sub_components/form_input.comp";
import { FormSelectSingle } from "../sub_components/form_select_single.comp";
import { FormSlider } from "../sub_components/form_slider.comp";
import { FormSubmitButton } from "../sub_components/form_submit_button.comp";
import { FormTextArea } from "../sub_components/form_textarea.comp";

import type { FormProps } from "../form.comp";

const mockFormSchema = z.object({
  email: z.string().email().min(2),
  description: z.string().min(1),
  select: z.string().min(1),
  amount: z.number().min(1),
});

type MockFormProps = Pick<FormProps, "handleFormSubmission" | "handleErrors">;

export const mockForm = ({
  handleFormSubmission = async () => {},
  handleErrors = async () => {},
}: MockFormProps): FormProps => {
  return {
    handleFormSubmission,
    handleErrors,
    name: LOREM.name(),
    resolver: zodResolver(mockFormSchema),
    children: (
      <>
        <FormInput
          errorMessage="Enter a valid email address"
          label={LOREM.labelEmail()}
          name="email"
          id="email"
          placeholder="Enter your email address"
        />
        <FormTextArea
          errorMessage="Enter a valid description"
          label={LOREM.labelDescription()}
          name="description"
          id="description"
          placeholder="Enter your description"
        />
        <FormSelectSingle
          items={mockSelectItems({})}
          errorMessage="Select an option"
          label={LOREM.labelDropdown()}
          id="select"
          name="select"
          placeholder="Select an option from the dropdown"
        />
        <FormSlider
          errorMessage="Pick a value from the range"
          label={LOREM.labelSlider()}
          name="amount"
          id="amount"
          placeholder="Enter an amount"
        />
        <FormSubmitButton>Submit</FormSubmitButton>
      </>
    ),
  };
};
