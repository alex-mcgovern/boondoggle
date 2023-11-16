/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@vanilla-extract/css/disableRuntimeStyles";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { FormTextArea } from "../../form-text-area";
import { FormTestProvider } from "../form_test_provider.comp";

import type { FormTextAreaProps } from "../../form-text-area";

const PROPS: FormTextAreaProps = {
	errorMessage: LOREM.errorMessage(),
	name: LOREM.name(),
	placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: FormTextAreaProps) => {
	return render(
		<FormTestProvider>
			<FormTextArea {...props} />
		</FormTestProvider>,
	);
};

describe("<FormTextArea />", () => {
	describe("Basic smoke tests", () => {
		test("should render without throwing", () => {
			const { getByRole } = renderComponent(PROPS);

			expect(getByRole("textbox")).not.toBeNull();
		});
	});

	describe("Updating the value", () => {
		test("should update value when the user types", async () => {
			const { getByRole } = renderComponent(PROPS);

			expect(getByRole("textbox")).toHaveValue("");

			await userEvent.type(getByRole("textbox"), "New value");

			expect(getByRole("textbox")).toHaveValue("New value");
		});
	});
});
