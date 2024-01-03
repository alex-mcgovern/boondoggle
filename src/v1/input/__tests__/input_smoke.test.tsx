/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import { Input } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";

import type { InputProps } from "..";

const PROPS: InputProps = {
	label: "Input",
	name: LOREM.name(),
	placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: InputProps) => {
	return render(<Input {...props} />);
};

describe("<Input />", () => {
	describe("Basic smoke tests", () => {
		test("should render without throwing", () => {
			const { getByRole } = renderComponent(PROPS);

			expect(getByRole("textbox")).not.toBeNull();
		});
	});
});
