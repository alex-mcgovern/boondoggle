/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react"; import { TextArea } from ".."; import { LOREM } from "../../../mocks/LOREM.mock"; import "../../../test/mocked_dependencies/dialog.mock"; import type { TextAreaProps } from ".."; import { a11yError, theme } from "../../../style.css";
const PROPS: TextAreaProps = {
	name: LOREM.name(),
	placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: TextAreaProps) => {
	return render(<TextArea {...props} />);
};

describe("<TextArea />", () => {
	describe("Invalid", () => {
		test("should have error styling", () => {
			const { getByRole } = renderComponent({
				...PROPS,
				invalid: true,
			});

			const textbox = getByRole("textbox");

			expect(textbox).toHaveClass(a11yError);

			expect(textbox?.parentNode?.parentNode).toHaveClass(theme.red);
		});

		test("should render error message", () => {
			const { getByText } = renderComponent({
				...PROPS,
				errorMessage: LOREM.errorMessage(),
				invalid: true,
			});

			expect(getByText(LOREM.errorMessage())).not.toBeNull();
		});
	});
});
