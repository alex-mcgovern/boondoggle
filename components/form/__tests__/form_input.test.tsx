/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@vanilla-extract/css/disableRuntimeStyles";
import { LOREM } from "../../../mocks/LOREM.mock";
import { FormTestProvider } from "../form_test_provider.comp";
import { InputProps, Input } from "../../input";

const PROPS: InputProps = {
	errorMessage: LOREM.errorMessage(),
	name: LOREM.name(),
	placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: InputProps) => {
	return render(
		<FormTestProvider>
			<Input {...props} />
		</FormTestProvider>,
	);
};

describe("<Input />", () => {
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
