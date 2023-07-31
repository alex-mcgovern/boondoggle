import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { RADIO_BUTTON_CARDS_MOCK } from "../../radio_button_cards/__mocks__/radio_button_cards.mock";
import { mockSelectItems } from "../../select/__mocks__/select.mock";
import { FormInput } from "../sub_components/form_input.comp";
import { FormRadioButtonCards } from "../sub_components/form_radio_button_cards.comp";
import { FormSelectSingle } from "../sub_components/form_select_single.comp";
import { FormSlider } from "../sub_components/form_slider.comp";
import { FormSubmitButton } from "../sub_components/form_submit_button.comp";
import { FormTextArea } from "../sub_components/form_textarea.comp";

import type { BoxProps } from "../../box";
import type { FormProps } from "../form.comp";

/** ----------------------------------------------------------------------------- */

const mockFormSchema = z.object({
  amount: z.number().min(1),
  // date: z.string().min(1),
  description: z.string().min(1),
  email: z.string().email().min(2),
  radio: z.string().min(1),
  select: z.string().min(1),
}); /** ----------------------------------------------------------------------------- */

const WRAPPER_PROPS: BoxProps = {
  marginBottom: "spacing_3",
};

/** ----------------------------------------------------------------------------- */

type MockFormProps = Pick<
  FormProps,
  "handleFormSubmission" | "handleErrors"
> & {
  withDefaultValues?: boolean;
};

export const mockForm = ({
  handleErrors = async () => {},
  handleFormSubmission = async () => {},
  withDefaultValues = false,
}: MockFormProps): FormProps => {
  return {
    children: (
      <>
        {/* <FormInputDate
          defaultValue={withDefaultValues ? LOREM.dateISO : undefined}
          errorMessage="Date is required"
          id="date"
          label={LOREM.labelDate()}
          name="date"
          placeholder="Select a date"
          wrapperProps={WRAPPER_PROPS}
        /> */}
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
          defaultValue={withDefaultValues ? LOREM.text_xxs : undefined}
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
          items={mockSelectItems({})}
          label={LOREM.labelDropdown()}
          name="select"
          placeholder="Select an option from the dropdown"
          wrapperProps={WRAPPER_PROPS}
          initialSelectedItem={
            withDefaultValues ? mockSelectItems({})[0] : null
          }
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
        <FormRadioButtonCards
          errorMessage="Select an option"
          id="radio"
          items={RADIO_BUTTON_CARDS_MOCK}
          label={LOREM.labelRadioButtons()}
          name="radio"
          wrapperProps={WRAPPER_PROPS}
          defaultValue={
            withDefaultValues ? RADIO_BUTTON_CARDS_MOCK[0].value : undefined
          }
        />
        <FormSubmitButton width="100%">Submit</FormSubmitButton>
      </>
    ),
    handleErrors,
    handleFormSubmission,
    name: LOREM.name(),
    resolver: zodResolver(mockFormSchema),
  };
};
