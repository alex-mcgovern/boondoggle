import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { FormProps } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { MOCK_CURRENCY_SELECT_ITEMS } from "../../../../test/mock_data/input_currency";
import type { MockCurrency } from "../../../../test/mock_data/input_currency";
import { FormSubmitButton } from "../../../v2/form-submit-button";
import type { BoxProps } from "../../box";
import { FormInput } from "../../form-input";
import { FormInputDate } from "../../form-input-date";
import { FormRadioButtonCardGroup } from "../../form-radio-button-card-group";
import { FormSelectSingle } from "../../form-select-single";
import { FormSlider } from "../../form-slider";
import { FormTextArea } from "../../form-text-area";
import { RADIO_BUTTON_CARDS_MOCK } from "../../radio-button-card-group/__mocks__/radio_button_cards.mock";
import { mockSelectItems } from "../../select/__mocks__/select.mock";
import { sprinkles } from "../../sprinkles/index.css";

const mockFormSchema = z.object({
	amount: z.coerce.number().min(1),
	date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	description: z.string().min(1).max(20),
	email: z.string().email().min(2),
	radio: z.string().min(1),
	select: z.string().min(1),
	value: z.coerce.number().min(1),
});

const mockFormSchemaOptional = mockFormSchema.partial();

const WRAPPER_PROPS: BoxProps = {
	marginBottom: "space_6",
};

type MockFormProps = Pick<FormProps, "handleSubmit" | "handleErrors"> & {
	/**
	 * Whether to populate the form fields with default values or not.
	 */
	withDefaultValues?: boolean;
	/**
	 * Whether to make fields optional or required.
	 */
	withOptionalFields?: boolean;
};

export const mockForm = ({
	handleErrors = async () => {},
	handleSubmit = async () => {},
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
					label={LOREM.labelEmail()}
					name="email"
					placeholder="Enter your email address"
				/>
				<FormInputDate label="Date" name="date" />

				<FormTextArea
					defaultValue={
						withDefaultValues ? LOREM.text_xxs : undefined
					}
					label={LOREM.labelDescription()}
					name="description"
					placeholder="Enter your description"
					required={false}
					wrapperProps={WRAPPER_PROPS}
				/>
				<FormSelectSingle
					defaultValue={
						withDefaultValues
							? mockSelectItems({})[0].value
							: undefined
					}
					items={mockSelectItems({})}
					label={LOREM.labelDropdown()}
					name="select"
					placeholder="Select an option from the dropdown"
				/>

				<FormSlider
					defaultValue={withDefaultValues ? [50] : undefined}
					id="amount"
					label={LOREM.labelSlider()}
					name="amount"
					placeholder="Enter an amount"
					wrapperProps={WRAPPER_PROPS}
				/>
				<FormRadioButtonCardGroup
					defaultValue={
						withDefaultValues
							? RADIO_BUTTON_CARDS_MOCK[0].value
							: undefined
					}
					errorMessage="Select an option"
					id="radio"
					items={RADIO_BUTTON_CARDS_MOCK}
					label={LOREM.labelRadioButtons()}
					name="radio"
					wrapperProps={WRAPPER_PROPS}
				/>
				<FormSubmitButton
					className={sprinkles({
						width: "100%",
					})}
				>
					Submit
				</FormSubmitButton>
			</>
		),
		handleErrors,
		handleSubmit,
		name: LOREM.name(),
		resolver: zodResolver(
			withOptionalFields ? mockFormSchemaOptional : mockFormSchema,
		),
	};
};
