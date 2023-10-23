/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import { Input } from "..";
import type { InputProps } from "..";
import { LOREM } from "../../../mocks/LOREM.mock";

const PROPS: InputProps = {
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
