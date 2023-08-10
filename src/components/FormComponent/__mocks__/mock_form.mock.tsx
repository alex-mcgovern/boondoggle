import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { FormInput } from "../../FormInput";
import { FormRadioButtonCardGroup } from "../../FormRadioButtonCardGroup";
import { FormSelectSingle } from "../../FormSelectSingle";
import { FormSlider } from "../../FormSlider";
import { FormSubmitButton } from "../../FormSubmitButton";
import { FormTextArea } from "../../FormTextArea";
import { RADIO_BUTTON_CARDS_MOCK } from "../../RadioButtonCardGroup/__mocks__/radio_button_cards.mock";
import { mockSelectItems } from "../../Select/__mocks__/select.mock";

import type { FormProps } from "..";
import type { BoxProps } from "../../Box";

/** ----------------------------------------------------------------------------- */

const mockFormSchema = z.object({
  amount: z.number().min(1),
  // date: z.string().min(1),
  description: z.string().min(1),
  email: z.string().email().min(2),
  radio: z.string().min(1),
  select: z.string().min(1),
});

const mockFormSchemaOptional = mockFormSchema.partial();

/** ----------------------------------------------------------------------------- */

const WRAPPER_PROPS: BoxProps = {
  marginBottom: "spacing_3",
};

/** ----------------------------------------------------------------------------- */

type MockFormProps = Pick<
  FormProps,
  "handleFormSubmission" | "handleErrors"
> & {
  withDefaultValues?: boolean;
  withOptionalFields?: boolean;
};

export const mockForm = ({
  handleErrors = async () => {},
  handleFormSubmission = async () => {},
  withDefaultValues = false,
  withOptionalFields = false,
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
          required={false}
          wrapperProps={WRAPPER_PROPS}
        />
        <FormSelectSingle
          defaultValue={
            withDefaultValues ? mockSelectItems({})[0].value : undefined
          }
          errorMessage="Select an option"
          id="select"
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
        <FormRadioButtonCardGroup
          defaultValue={
            withDefaultValues ? RADIO_BUTTON_CARDS_MOCK[0].value : undefined
          }
          errorMessage="Select an option"
          id="radio"
          items={RADIO_BUTTON_CARDS_MOCK}
          label={LOREM.labelRadioButtons()}
          name="radio"
          wrapperProps={WRAPPER_PROPS}
        />
        <FormSubmitButton width="100%">Submit</FormSubmitButton>
      </>
    ),
    handleErrors,
    handleFormSubmission,
    name: LOREM.name(),
    resolver: zodResolver(
      withOptionalFields ? mockFormSchemaOptional : mockFormSchema
    ),
  };
};
