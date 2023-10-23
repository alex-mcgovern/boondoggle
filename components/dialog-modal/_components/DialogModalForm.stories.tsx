import { zodResolver } from "@hookform/resolvers/zod";
import { jest } from "@storybook/jest";
import { z } from "zod";
import { DialogModalForm as StoryComp } from "./DialogModalForm";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Button } from "../../button/Button";
import { FormRadioButtonGroup } from "../../form-radio-button-group/FormRadioButtonGroup";
import { FormSelectSingle } from "../../form-select-single/FormSelectSingle";
import { FormTextArea } from "../../form-text-area/FormTextArea";
import type { StoryFn, StoryObj } from "@storybook/react";
import type { DialogModalFormProps as StoryCompProps } from "./DialogModalForm";
import type { BoxProps } from "../../box/Box";
import { FormInput } from "../../form-input";
import { Input } from "../../input";
import { RADIO_BUTTONS_MOCK } from "../../radio-button-group/mocks";
import { mockSelectItems } from "../../select/__mocks__/select.mock";

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
	parameters: {
		layout: "centered",
	},
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
				<Input
					errorMessage="Enter a valid email address"
					label={LOREM.labelEmail()}
					name="email"
					placeholder="Enter your email address"
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

export const IsLoading: StoryObj<StoryCompProps> = {
	args: {
		children: (
			<>
				<Input
					errorMessage="Enter a valid email address"
					label={LOREM.labelEmail()}
					name="email"
					placeholder="Enter your email address"
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
				/>
			</>
		),
		formSubmitButtonText: "Submit",
		handleSubmit: handleFormSubmissionMock,
		resolver: zodResolver(mockFormSchema),
		isLoading: true,
		title: "Dialog modal form",
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
		width: "lg",
	},
	render: Template,
};
