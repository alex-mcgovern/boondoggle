/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";

import { TextArea } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";

import type { TextAreaProps } from "..";

const PROPS: TextAreaProps = {
	name: LOREM.name(),
	placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: TextAreaProps) => {
	return render(<TextArea {...props} />);
};

describe("<TextArea />", () => {
	describe("Basic smoke tests", () => {
		test("should render without throwing", () => {
			const { getByRole } = renderComponent(PROPS);

			expect(getByRole("textbox")).not.toBeNull();
		});
	});
});
