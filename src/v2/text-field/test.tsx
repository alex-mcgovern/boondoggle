/**
 * @jest-environment jsdom
 */

import { faker } from "@faker-js/faker";
import { faSearch } from "@fortawesome/pro-solid-svg-icons/faSearch";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TextField, TextFieldProps } from ".";
import { a11yDisabled, variantColorOverlay } from "../../index.css";
import { Icon } from "../icon";
import { ToastProvider } from "../toast";

const LABEL = "Label text";
const NAME = "test_name";
const PLACEHOLDER = "I am a placeholder";
const ERROR_MESSAGE = "I am an error message";

const ON_CHANGE = jest.fn();
const ON_FOCUS = jest.fn();
const ON_BLUR = jest.fn();

/**
 * Mock `navigator.clipboard.writeText()` to assert that it was called.
 */

const WRITE_TEXT = jest.fn().mockImplementation(() => Promise.resolve());

Object.assign(navigator, {
	clipboard: {
		writeText: WRITE_TEXT,
	},
});

const renderComponent = ({
	...props
}: Omit<
	TextFieldProps,
	"name" | "label" | "onChange" | "onBlur" | "onFocus"
>) => {
	return render(
		<ToastProvider>
			<TextField
				{...(props as TextFieldProps)}
				onBlur={ON_BLUR}
				onFocus={ON_FOCUS}
				onChange={ON_CHANGE}
				name={NAME}
				label={LABEL}
			/>
		</ToastProvider>,
	);
};

beforeEach(() => {
	jest.clearAllMocks();
});

describe("<TextField />", () => {
	describe("a11y", () => {
		it("has name", () => {
			const { getByRole } = renderComponent({});

			expect((getByRole("textbox") as HTMLInputElement).name).toBe(
				"test_name",
			);
		});

		it("renders label", () => {
			const { container, getByLabelText } = renderComponent({});

			const label = container.querySelector("label");

			expect(label).not.toBeNull();
			expect(label?.getAttribute("for")).toBe("test_name");
			expect(label?.textContent).toBe(LABEL);

			expect(getByLabelText(LABEL, { selector: "input" })).not.toBeNull();
		});
	});

	test("should render placeholder", () => {
		const { getByRole } = renderComponent({
			placeholder: PLACEHOLDER,
		});

		const textbox = getByRole("textbox");

		expect(textbox).toHaveAttribute("placeholder", PLACEHOLDER);
	});

	describe("Slot props", () => {
		test("should render node passed to `slotLeft`", () => {
			const { getByTestId } = renderComponent({
				slotLeftProps: {
					isClickable: false,
					children: <Icon data-testid="icon" icon={faSearch} />,
				},
			});

			expect(getByTestId("icon")).not.toBeNull();
		});

		test("should render node passed to `slotRight`", () => {
			const { getByTestId } = renderComponent({
				slotRightProps: {
					isClickable: false,
					children: <Icon data-testid="icon" icon={faSearch} />,
				},
			});

			expect(getByTestId("icon")).not.toBeNull();
		});
	});

	describe("styling", () => {
		it("forwards class name to outer element", () => {
			const { getByRole } = renderComponent({
				className: "test-class",
			});

			expect(getByRole("textbox").parentNode?.parentNode).toHaveClass(
				"test-class",
			);
		});

		it("applies red color overlay to outer element when invalid", () => {
			const { getByRole } = renderComponent({
				isInvalid: true,
			});

			expect(getByRole("textbox").parentNode?.parentNode).toHaveClass(
				variantColorOverlay.red,
			);
		});
	});

	describe("Invalid", () => {
		test("should render error message", () => {
			const { getByText } = renderComponent({
				errorMessage: ERROR_MESSAGE,
				isInvalid: true,
			});

			expect(getByText(ERROR_MESSAGE)).not.toBeNull();
		});
	});

	describe("disabled", () => {
		const disabledProps = {
			isDisabled: true,
		} satisfies Omit<TextFieldProps, "name" | "label">;

		it("has disabled styling", () => {
			const { getByRole } = renderComponent(disabledProps);

			const textbox = getByRole("textbox");

			expect(textbox).toHaveAttribute("disabled");
			expect(textbox).toHaveClass(a11yDisabled);
		});

		it("doesn't `onChange()` when user types", async () => {
			const { getByRole } = renderComponent(disabledProps);

			await userEvent.type(getByRole("textbox"), faker.lorem.word());
			expect(ON_CHANGE).not.toHaveBeenCalled();
		});

		it("doesn't `onFocus()` when `disabled`", async () => {
			renderComponent(disabledProps);

			await userEvent.tab();
			expect(ON_FOCUS).not.toHaveBeenCalled();
		});
	});

	describe("value", () => {
		it("updates value", async () => {
			const { getByRole } = renderComponent({});

			const textBox = getByRole("textbox");
			expect(textBox).toHaveValue("");

			await userEvent.type(textBox, "New value");
			expect(textBox).toHaveValue("New value");

			expect(ON_CHANGE).toHaveBeenLastCalledWith("New value");
		});

		it("updates value with default value", async () => {
			const { getByRole } = renderComponent({
				defaultValue: "Default value",
			});

			expect(getByRole("textbox")).toHaveValue("Default value");

			await userEvent.clear(getByRole("textbox"));
			await userEvent.type(getByRole("textbox"), "New value");

			expect(getByRole("textbox")).toHaveValue("New value");
			expect(ON_CHANGE).toHaveBeenLastCalledWith("New value");
		});

		it("updates value with controlled value", async () => {
			const { getByRole } = renderComponent({
				value: "Controlled value",
			});

			expect(getByRole("textbox")).toHaveValue("Controlled value");

			await userEvent.clear(getByRole("textbox"));
			await userEvent.type(getByRole("textbox"), "New value");

			expect(getByRole("textbox")).toHaveValue("New value");
			expect(ON_CHANGE).toHaveBeenLastCalledWith("New value");
		});

		it("shouldn't update when readonly", async () => {
			const { getByRole } = renderComponent({
				value: "Controlled value",

				isReadOnly: true,
			});

			await userEvent.type(getByRole("textbox"), "New value");

			expect(getByRole("textbox")).toHaveValue("Controlled value");
			expect(ON_CHANGE).not.toHaveBeenCalled();
		});

		it("shouldn't update when disabled", async () => {
			const { getByRole } = renderComponent({
				isDisabled: true,
				value: "Controlled value",
			});

			await userEvent.type(getByRole("textbox"), "New value");

			expect(getByRole("textbox")).toHaveValue("Controlled value");
			expect(ON_CHANGE).not.toHaveBeenCalled();
		});
	});

	describe("onFocus", () => {
		it("calls onFocus", async () => {
			const { getByRole } = renderComponent({});

			await userEvent.click(getByRole("textbox"));
			expect(ON_FOCUS).toHaveBeenCalled();
		});

		it("calls onFocus when isReadonly", async () => {
			const { getByRole } = renderComponent({
				isReadOnly: true,
			});

			await userEvent.click(getByRole("textbox"));
			expect(ON_FOCUS).toHaveBeenCalled();
		});

		it("Given a disabled input, when clicking, it should not call onFocus", async () => {
			const { getByRole } = renderComponent({
				isDisabled: true,
			});

			await userEvent.click(getByRole("textbox"));
			expect(ON_FOCUS).not.toHaveBeenCalled();
		});
	});

	/**
	 * onBlur — Particular attention paid to this event
	 * because it is used in the React Hook Form integration.
	 */
	describe("`onBlur`", () => {
		it("calls onBlur", async () => {
			const { getByRole } = renderComponent({});

			await userEvent.click(getByRole("textbox"));
			await userEvent.tab();

			expect(ON_BLUR).toHaveBeenCalled();
		});

		it("calls onBlur when readOnly", async () => {
			const { getByRole } = renderComponent({
				isReadOnly: true,
			});

			await userEvent.click(getByRole("textbox"));
			await userEvent.tab();

			expect(ON_BLUR).toHaveBeenCalled();
		});

		it("doesn't onBlur when disabled", async () => {
			const { getByRole } = renderComponent({
				isDisabled: true,
			});

			await userEvent.click(getByRole("textbox"));
			await userEvent.tab();

			expect(ON_BLUR).not.toHaveBeenCalled();
		});
	});
});
