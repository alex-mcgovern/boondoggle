/* eslint-disable jsdoc/multiline-blocks */
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { FormInput } from "../../form_input";
import { FormInputCurrency } from "../../form_input_currency";
import { FormRadioButtonCardGroup } from "../../form_radio_button_card_group";
import { FormSelectSingle } from "../../form_select_single";
import { FormSlider } from "../../form_slider";
import { FormSubmitButton } from "../../form_submit_button";
import { FormTextArea } from "../../form_text_area";
import { FlagAe, FlagFr, FlagUs } from "../../icon_flag";
import { RADIO_BUTTON_CARDS_MOCK } from "../../radio_button_card_group/__mocks__/radio_button_cards.mock";
import { mockSelectItems } from "../../select/__mocks__/select.mock";

import type { FormProps } from "..";
import type { Slot } from "../../../common-types";
import type { BoxProps } from "../../box";
import type { SelectItemShape } from "../../select/types";

const mockFormSchema = z.object({
    amount: z.number().min(1),
    description: z.string().min(1).max(20),
    email: z.string().email().min(2),
    radio: z.string().min(1),
    select: z.string().min(1),
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
                    id="email"
                    label={LOREM.labelEmail()}
                    name="email"
                    placeholder="Enter your email address"
                    wrapperProps={WRAPPER_PROPS}
                />
                {/** @ts-expect-error Props are busted */}
                <FormInputCurrency<"AED" | "USD" | "EUR">
                    currencySelectItems={
                        [
                            {
                                label: "USD",
                                slotLeft: [
                                    <FlagUs
                                        height="space_4"
                                        width="space_4"
                                    />,
                                ] as Slot,
                                value: "USD",
                            },
                            {
                                label: "AED",
                                slotLeft: [
                                    <FlagAe
                                        height="space_4"
                                        width="space_4"
                                    />,
                                ] as Slot,
                                value: "AED",
                            },
                            {
                                label: "EUR",
                                slotLeft: [
                                    <FlagFr
                                        height="space_4"
                                        width="space_4"
                                    />,
                                ] as Slot,
                                value: "EUR",
                            },
                        ] as Array<SelectItemShape<"USD" | "AED">>
                    }
                    defaultValue={withDefaultValues ? LOREM.email() : undefined}
                    id="amount"
                    initialCurrency="USD"
                    isCurrencyEditable
                    label="Amount"
                    name="amount"
                    placeholder="Enter an amount"
                    region="en-US"
                    wrapperProps={WRAPPER_PROPS}
                />
                <FormTextArea
                    defaultValue={withDefaultValues ? LOREM.text_xxs : undefined}
                    id="description"
                    label={LOREM.labelDescription()}
                    name="description"
                    placeholder="Enter your description"
                    required={false}
                    wrapperProps={WRAPPER_PROPS}
                />
                <FormSelectSingle
                    defaultValue={withDefaultValues ? mockSelectItems({})[0].value : undefined}
                    id="select"
                    items={mockSelectItems({})}
                    label={LOREM.labelDropdown()}
                    name="select"
                    placeholder="Select an option from the dropdown"
                    wrapperProps={WRAPPER_PROPS}
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
                    defaultValue={withDefaultValues ? RADIO_BUTTON_CARDS_MOCK[0].value : undefined}
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
        handleSubmit,
        name: LOREM.name(),
        resolver: zodResolver(withOptionalFields ? mockFormSchemaOptional : mockFormSchema),
    };
};
