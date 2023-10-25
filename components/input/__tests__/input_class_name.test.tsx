/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react"; import { Input } from ".."; import type { InputProps } from ".."; import { LOREM } from "../../../mocks/LOREM.mock";
const PROPS: InputProps = {
	name: LOREM.name(),
	placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: InputProps) => {
	return render(<Input {...props} />);
};

describe("<Input />", () => {
	describe("class name", () => {
		test("should have the className passed to it", () => {
			const { getByRole } = renderComponent({
				className: "test-class",
				...PROPS,
			});

			expect(getByRole("textbox").parentNode).toHaveClass("test-class");
		});
	});
});
