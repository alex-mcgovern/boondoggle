import { zodResolver } from "@hookform/resolvers/zod";
import { jest } from "@storybook/jest";
import { z } from "zod";

import { DialogModalForm as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Button } from "../button";
import { FormInput } from "../form_input";
import { FormRadioButtonGroup } from "../form_radio_button_group";
import { FormSelectSingle } from "../form_select_single";
import { FormTextArea } from "../form_text_area";
import { RADIO_BUTTONS_MOCK } from "../radio_button_group/mocks";
import { mockSelectItems } from "../select/__mocks__/select.mock";

import type { DialogModalFormProps as StoryCompProps } from ".";
import type { BoxProps } from "../box";
import type { StoryFn, StoryObj } from "@storybook/react";

const mockFormSchema = z.object({
	description: z.string().min(1),
	email: z.string().email().min(2),
	radio: z.string().min(1),
	select: z.string().min(1),
});

const handleFormSubmissionMock = jest.fn(async (fieldValues: unknown) => {
	return alert(
		`Form submitted successfully \n ${JSON.stringify(
			fieldValues,
			null,
			2,
		)}`,
	);
});

const FORM_FIELD_WRAPPER_PROPS: BoxProps = {
	marginBottom: "space_6",
};

export default {
	component: StoryComp,
	title: "Components/DialogModalForm",
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
	return <StoryComp {...rest} />;
};

export const WidthSm: StoryObj<StoryCompProps> = {
	args: {
		children: (
			<>
				<FormInput
					errorMessage="Enter a valid email address"
					label={LOREM.labelEmail()}
					name="email"
					placeholder="Enter your email address"
					wrapperProps={FORM_FIELD_WRAPPER_PROPS}
				/>
				<FormTextArea
					errorMessage="Enter a valid description"
					label={LOREM.labelDescription()}
					name="description"
					placeholder="Enter your description"
					wrapperProps={FORM_FIELD_WRAPPER_PROPS}
				/>
				<FormSelectSingle
					errorMessage="Select an option"
					items={mockSelectItems({})}
					label={LOREM.labelDropdown()}
					name="select"
					placeholder="Select an option from the dropdown"
					wrapperProps={FORM_FIELD_WRAPPER_PROPS}
				/>
				<FormRadioButtonGroup
					errorMessage="Select an option"
					id="select"
					items={RADIO_BUTTONS_MOCK}
					label={LOREM.labelDropdown()}
					name="radio"
					wrapperProps={FORM_FIELD_WRAPPER_PROPS}
				/>
			</>
		),
		formSubmitButtonText: "Submit",
		handleSubmit: handleFormSubmissionMock,
		resolver: zodResolver(mockFormSchema),
		title: "Dialog modal form",
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
	},
	render: Template,
};

export const WidthLg: StoryObj<StoryCompProps> = {
	args: {
		children: (
			<>
				<FormInput
					errorMessage="Enter a valid email address"
					label={LOREM.labelEmail()}
					name="email"
					placeholder="Enter your email address"
					wrapperProps={FORM_FIELD_WRAPPER_PROPS}
				/>
				<FormTextArea
					errorMessage="Enter a valid description"
					label={LOREM.labelDescription()}
					name="description"
					placeholder="Enter your description"
					wrapperProps={FORM_FIELD_WRAPPER_PROPS}
				/>
				<FormSelectSingle
					errorMessage="Select an option"
					items={mockSelectItems({})}
					label={LOREM.labelDropdown()}
					name="select"
					placeholder="Select an option from the dropdown"
					wrapperProps={FORM_FIELD_WRAPPER_PROPS}
				/>
			</>
		),
		formSubmitButtonText: "Submit",
		handleSubmit: handleFormSubmissionMock,
		resolver: zodResolver(mockFormSchema),
		title: "Dialog modal form",
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
		width: "lg",
	},
	render: Template,
};
