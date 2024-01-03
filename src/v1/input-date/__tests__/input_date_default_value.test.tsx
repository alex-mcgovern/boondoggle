/**
 * @jest-environment jsdom
 */
import { render, waitFor } from "@testing-library/react";
import { InputDate } from "..";
import type { InputDateProps } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";

const PROPS: InputDateProps = {
	defaultValue: "2021-01-01",
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
	test("default value", async () => {
		const { getByLabelText } = await renderComponent(PROPS);

		const textbox = getByLabelText("date picker");

		expect(textbox).toHaveValue("2021-01-01");
	});
});
