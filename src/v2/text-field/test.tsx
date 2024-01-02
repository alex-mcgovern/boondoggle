/**
 * @jest-environment jsdom
 */

import { render } from "@testing-library/react";
import { TextFieldProps } from "./types";
import { TextField } from ".";
import { a11yDisabled, variantColorOverlay } from "../../index.css";
import userEvent from "@testing-library/user-event";
import { faker } from "@faker-js/faker";
import { faSearch } from "@fortawesome/pro-solid-svg-icons/faSearch";
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
			const { getByRole } = renderComponent({
				isLabelVisible: true,
			});

			expect((getByRole("textbox") as HTMLInputElement).name).toBe(
				"test_name",
			);
		});

		it("renders label", () => {
			const { container, getByLabelText } = renderComponent({
				isLabelVisible: true,
			});

			const label = container.querySelector("label");

			expect(label).not.toBeNull();
			expect(label?.getAttribute("for")).toBe("test_name");
			expect(label?.textContent).toBe(LABEL);

			expect(getByLabelText(LABEL, { selector: "input" })).not.toBeNull();
		});

		it("has aria-label attribute", () => {
			const { getByRole } = renderComponent({
				isLabelVisible: false,
			});

			const input = getByRole("textbox");
			expect(input?.getAttribute("aria-label")).toBe(LABEL);
		});
	});

	test("should render placeholder", () => {
		const { getByRole } = renderComponent({
			placeholder: PLACEHOLDER,
			isLabelVisible: true,
		});

		const textbox = getByRole("textbox");

		expect(textbox).toHaveAttribute("placeholder", PLACEHOLDER);
	});

	describe("Slot props", () => {
		test("should render node passed to `slotLeft`", () => {
			const { getByTestId } = renderComponent({
				isLabelVisible: true,
				slotLeftProps: {
					isClickable: false,
					children: <Icon data-testid="icon" icon={faSearch} />,
				},
			});

			expect(getByTestId("icon")).not.toBeNull();
		});

		test("should render node passed to `slotRight`", () => {
			const { getByTestId } = renderComponent({
				isLabelVisible: true,
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
				isLabelVisible: true,
			});

			expect(getByRole("textbox").parentNode?.parentNode).toHaveClass(
				"test-class",
			);
		});

		it("applies red color overlay to outer element when invalid", () => {
			const { getByRole } = renderComponent({
				isInvalid: true,
				isLabelVisible: true,
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
				isLabelVisible: true,
			});

			expect(getByText(ERROR_MESSAGE)).not.toBeNull();
		});
	});

	describe("disabled", () => {
		const disabledProps = {
			isDisabled: true,
			isLabelVisible: true,
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
			const { getByRole } = renderComponent({
				isLabelVisible: true,
			});

			const textBox = getByRole("textbox");
			expect(textBox).toHaveValue("");

			await userEvent.type(textBox, "New value");
			expect(textBox).toHaveValue("New value");

			expect(ON_CHANGE).toHaveBeenLastCalledWith("New value");
		});

		it("updates value with default value", async () => {
			const { getByRole } = renderComponent({
				defaultValue: "Old value",
				isLabelVisible: true,
			});

			expect(getByRole("textbox")).toHaveValue("Old value");

			await userEvent.clear(getByRole("textbox"));
			await userEvent.type(getByRole("textbox"), "New value");

			expect(getByRole("textbox")).toHaveValue("New value");
			expect(ON_CHANGE).toHaveBeenLastCalledWith("New value");
		});

		it("updates value with controlled value", async () => {
			const { getByRole } = renderComponent({
				value: "Old value",

				isLabelVisible: true,
			});

			expect(getByRole("textbox")).toHaveValue("Old value");

			await userEvent.clear(getByRole("textbox"));
			await userEvent.type(getByRole("textbox"), "New value");

			expect(getByRole("textbox")).toHaveValue("New value");
			expect(ON_CHANGE).toHaveBeenLastCalledWith("New value");
		});

		it("shouldn't update when readonly", async () => {
			const { getByRole } = renderComponent({
				value: "Old value",

				isReadOnly: true,
				isLabelVisible: true,
			});

			await userEvent.type(getByRole("textbox"), "New value");

			expect(getByRole("textbox")).toHaveValue("Old value");
			expect(ON_CHANGE).not.toHaveBeenCalled();
		});

		it("shouldn't update when disabled", async () => {
			const { getByRole } = renderComponent({
				isDisabled: true,
				value: "Old value",

				isLabelVisible: true,
			});

			await userEvent.type(getByRole("textbox"), "New value");

			expect(getByRole("textbox")).toHaveValue("Old value");
			expect(ON_CHANGE).not.toHaveBeenCalled();
		});
	});

	describe("onFocus", () => {
		it("calls onFocus", async () => {
			const { getByRole } = renderComponent({
				isLabelVisible: true,
			});

			await userEvent.click(getByRole("textbox"));
			expect(ON_FOCUS).toHaveBeenCalled();
		});

		it("calls onFocus when isReadonly", async () => {
			const { getByRole } = renderComponent({
				isReadOnly: true,
				isLabelVisible: true,
			});

			await userEvent.click(getByRole("textbox"));
			expect(ON_FOCUS).toHaveBeenCalled();
		});

		it("Given a disabled input, when clicking, it should not call onFocus", async () => {
			const { getByRole } = renderComponent({
				isDisabled: true,

				isLabelVisible: true,
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
			const { getByRole } = renderComponent({
				isLabelVisible: true,
			});

			await userEvent.click(getByRole("textbox"));
			await userEvent.tab();

			expect(ON_BLUR).toHaveBeenCalled();
		});

		it("calls onBlur when readOnly", async () => {
			const { getByRole } = renderComponent({
				isReadOnly: true,
				isLabelVisible: true,
			});

			await userEvent.click(getByRole("textbox"));
			await userEvent.tab();

			expect(ON_BLUR).toHaveBeenCalled();
		});

		it("doesn't onBlur when disabled", async () => {
			const { getByRole } = renderComponent({
				isDisabled: true,
				isLabelVisible: true,
			});

			await userEvent.click(getByRole("textbox"));
			await userEvent.tab();

			expect(ON_BLUR).not.toHaveBeenCalled();
		});
	});

	describe("clear button", () => {
		it("doesn't render clear button when empty", () => {
			const { queryByTestId } = renderComponent({
				isLabelVisible: true,
				strClear: "Clear",
				isClearable: true,
			});

			expect(queryByTestId("clear")).not.toBeInTheDocument();
		});

		it("clears value with default value", async () => {
			const { getByRole, getByTestId } = renderComponent({
				isLabelVisible: true,
				strClear: "Clear",
				isClearable: true,
				defaultValue: "Clear me",
			});

			const textbox = getByRole("textbox");
			const clearButton = getByTestId("clear");

			expect(textbox).toHaveValue("Clear me");
			expect(clearButton).not.toBeNull();

			await userEvent.click(clearButton);
			expect(textbox).toHaveValue("");
		});

		it("clears value with controlled value", async () => {
			const { getByRole, getByTestId } = renderComponent({
				isLabelVisible: true,
				strClear: "Clear",
				isClearable: true,
				value: "Clear me",
			});

			const textbox = getByRole("textbox");
			const clearButton = getByTestId("clear");

			expect(textbox).toHaveValue("Clear me");
			expect(clearButton).not.toBeNull();

			await userEvent.click(clearButton);
			expect(textbox).toHaveValue("");
		});
	});

	describe("copy button", () => {
		it("doesn't render copy button when empty", () => {
			const { queryByTestId } = renderComponent({
				isLabelVisible: true,
				isCopyable: true,
				strCopy: "Copy",
				strCopied: "Copied",
			});

			expect(queryByTestId("clear")).not.toBeInTheDocument();
		});

		it("copies default value", async () => {
			const { getByRole, getByTestId } = renderComponent({
				isLabelVisible: true,
				isCopyable: true,
				strCopy: "Copy",
				strCopied: "Copied",
				defaultValue: "Copy me",
			});

			const textbox = getByRole("textbox");
			const copyButton = getByTestId("copy");

			expect(textbox).toHaveValue("Copy me");
			expect(copyButton).not.toBeNull();

			await userEvent.click(copyButton);
			expect(window.navigator.clipboard.writeText).toHaveBeenCalledWith(
				"Copy me",
			);
		});

		it("copies controlled value", async () => {
			const { getByRole, getByTestId } = renderComponent({
				isLabelVisible: true,
				isCopyable: true,
				strCopy: "Copy",
				strCopied: "Copied",
				value: "Copy me",
			});

			const textbox = getByRole("textbox");
			const copyButton = getByTestId("copy");

			expect(textbox).toHaveValue("Copy me");
			expect(copyButton).not.toBeNull();

			await userEvent.click(copyButton);
			expect(window.navigator.clipboard.writeText).toHaveBeenCalledWith(
				"Copy me",
			);
		});
	});

	describe("visibility toggle", () => {
		it("shouldn't display value when hidden", async () => {
			const { getByTestId, getByLabelText } = renderComponent({
				isVisibilityToggleable: true,
				isVisible: false,
				strHide: "Hide",
				strShow: "Show",
				value: "password",
				isLabelVisible: true,
			});

			const textbox = getByLabelText(LABEL, { selector: "input" });
			expect(textbox).toHaveAttribute("type", "password");

			const toggle = getByTestId("toggle_visibility");
			await userEvent.click(toggle);

			expect(textbox).toHaveAttribute("type", "text");
			expect(textbox).toHaveValue("password");
		});
	});
});
