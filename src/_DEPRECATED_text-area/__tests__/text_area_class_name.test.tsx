/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import { TextArea } from "..";
import { LOREM } from "../../../mocks/LOREM.mock";

import type { TextAreaProps } from "..";

const PROPS: TextAreaProps = {
	label: "text area",
	name: LOREM.name(),
	placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: TextAreaProps) => {
	return render(<TextArea {...props} />);
};

describe("<TextArea />", () => {
	describe("class name", () => {
		test("should have the className passed to it", () => {
			const { getByRole } = renderComponent({
				className: "test-class",
				...PROPS,
			});

			expect(getByRole("textbox")).toHaveClass("test-class");
		});
	});
});
