/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextArea } from "..";
import { LOREM } from "../../../mocks/LOREM.mock";
import "../../../test/mocked_dependencies/dialog.mock";
import type { TextAreaProps } from "..";
import { disabled } from "../../../style.css";

const ON_CHANGE = jest.fn();
const ON_CLICK = jest.fn();
const ON_MOUSE_OVER = jest.fn();
const ON_FOCUS = jest.fn();

const PROPS: TextAreaProps = {
	disabled: true,
	name: LOREM.name(),
	onChange: ON_CHANGE,
	onClick: ON_CLICK,
	onFocus: ON_FOCUS,
	onMouseOver: ON_MOUSE_OVER,
	placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: TextAreaProps) => {
	return render(<TextArea {...props} />);
};

describe("<TextArea />", () => {
	describe("Disabled", () => {
		test("should have disabled styling", () => {
			const { getByRole } = renderComponent(PROPS);

			const textbox = getByRole("textbox");

			expect(textbox).toHaveClass(disabled);
		});

		test("should not call `onChange()` when user types", async () => {
			const { getByRole } = renderComponent(PROPS);

			await userEvent.type(getByRole("textbox"), LOREM.text_xxs);

			expect(ON_CHANGE).not.toHaveBeenCalled();
		});

		test("should not call `onClick()` when user types", () => {
			const { getByRole } = renderComponent(PROPS);

			getByRole("textbox").click();

			expect(ON_CLICK).not.toHaveBeenCalled();
		});

		test("should not call `onFocus()` when `disabled`", async () => {
			renderComponent(PROPS);

			await userEvent.tab();

			expect(ON_FOCUS).not.toHaveBeenCalled();
		});
	});
});
