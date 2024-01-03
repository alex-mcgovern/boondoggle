/**
 * @jest-environment jsdom
 */
import { render, waitFor } from "@testing-library/react";
import { InputDate } from "..";
import type { InputDateProps } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";

const PROPS: InputDateProps = {
	label: "date picker",
	name: LOREM.name(),
	placeholder: LOREM.placeholder(),
};

const renderComponent = async ({ ...props }: InputDateProps) => {
	return waitFor(() => {
		return render(<InputDate {...props} />);
	});
};

describe("<InputDate />", () => {
	describe("Basic smoke tests", () => {
		test("should render without throwing", async () => {
			const { getByLabelText } = await renderComponent(PROPS);

			const textbox = getByLabelText("date picker");

			expect(textbox).not.toBeNull();
		});
	});
});
