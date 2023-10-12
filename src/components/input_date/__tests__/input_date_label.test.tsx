/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { InputDate } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";

import type { InputDateProps } from "..";

const PROPS: InputDateProps = {
	label: LOREM.label(),
	name: LOREM.name(),
	placeholder: LOREM.placeholder(),
};

const renderComponent = (props: InputDateProps) => {
	return {
		user: userEvent.setup(),
		...render(<InputDate {...props} />),
	};
};

describe("<InputDate />", () => {
	test("should be labelled", async () => {
		const { container, getByLabelText } = await renderComponent(PROPS);

		const label = container.querySelector("label");

		expect(label).not.toBeNull();

		expect(label?.getAttribute("for")).toBe(PROPS.name);

		expect(label?.textContent).toBe(PROPS.label);

		expect(
			getByLabelText(PROPS.label as string, { selector: "input" }),
		).not.toBeNull();
	});
});
