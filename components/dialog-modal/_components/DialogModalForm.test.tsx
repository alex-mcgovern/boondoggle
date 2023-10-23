/**
 * @jest-environment jsdom
 */
import { zodResolver } from "@hookform/resolvers/zod";
import { render, waitFor } from "@testing-library/react";
import "@vanilla-extract/css/disableRuntimeStyles";
import { createRef } from "react";
import { z } from "zod";
import { DialogModalForm } from "./DialogModalForm";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Button } from "../../button/Button";
import { FormInput } from "../../form-input/FormInput";
import { FormRadioButtonGroup } from "../../form-radio-button-group/FormRadioButtonGroup";
import { FormSelectSingle } from "../../form-select-single/FormSelectSingle";
import { FormTextArea } from "../../form-text-area/FormTextArea";
import type { DialogModalFormProps } from "./DialogModalForm";
import { RADIO_BUTTONS_MOCK } from "../../radio-button-group/mocks";
import { mockSelectItems } from "../../select/__mocks__/select.mock";

const mockFormSchema = z.object({
	description: z.string().min(1),
	email: z.string().email().min(2),
	radio: z.string().min(1),
	select: z.string().min(1),
});

const renderComponent = async (props: DialogModalFormProps) => {
	const dialogRef = createRef<HTMLDialogElement>();

	const openDialogRemoveTeamMember = () => {
		dialogRef.current?.showModal();
	};

	return waitFor(() => {
		return render(
			<>
				<button onClick={openDialogRemoveTeamMember} type="button">
					Open
				</button>
				<DialogModalForm ref={dialogRef} {...props} />
			</>,
		);
	});
};

const handleFormSubmissionMock = jest.fn();

const PROPS: DialogModalFormProps = {
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
			/>
		</>
	),
	formSubmitButtonText: "Submit",
	handleSubmit: handleFormSubmissionMock,

	resolver: zodResolver(mockFormSchema),
	title: "Dialog modal form",
	triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
	width: "lg",
};

describe("<DialogModalForm />", () => {
	describe("Basic smoke tests", () => {
		test("should render without throwing", async () => {
			const { container } = await renderComponent(PROPS);

			expect(container).not.toBeNull();
		});
	});
});
