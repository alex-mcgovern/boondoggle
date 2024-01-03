/**
 * @jest-environment jsdom
 */

import { faker } from "@faker-js/faker";
import { faSearch } from "@fortawesome/pro-solid-svg-icons/faSearch";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from ".";
import { a11yDisabled, variantColorOverlay } from "../../index.css";
import { Icon } from "../icon";
import { ToastProvider } from "../toast";
import { InputProps } from "./types";

const LABEL = "Label text";
const NAME = "test_name";
const PLACEHOLDER = "I am a placeholder";

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
}: Omit<InputProps, "name" | "label" | "onChange" | "onBlur" | "onFocus">) => {
	return render(
		<ToastProvider>
			<Input
				{...(props as InputProps)}
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

describe("<Input />", () => {
	describe("a11y", () => {
		it("has name", () => {
			const { getByRole } = renderComponent({
				defaultValue: undefined,
				value: undefined,
				disabled: undefined,
				invalid: undefined,
			});

			expect((getByRole("textbox") as HTMLInputElement).name).toBe(
				"test_name",
			);
		});

		it("has aria-label attribute", () => {
			const { getByRole } = renderComponent({
				defaultValue: undefined,
				value: undefined,
				disabled: undefined,
				invalid: undefined,
			});

			const input = getByRole("textbox");
			expect(input?.getAttribute("aria-label")).toBe(LABEL);
		});
	});

	test("should render placeholder", () => {
		const { getByRole } = renderComponent({
			defaultValue: undefined,
			value: undefined,
			disabled: undefined,
			invalid: undefined,
			placeholder: PLACEHOLDER,
		});

		const textbox = getByRole("textbox");

		expect(textbox).toHaveAttribute("placeholder", PLACEHOLDER);
	});

	describe("Slot props", () => {
		test("should render node passed to `slotLeft`", () => {
			const { getByTestId } = renderComponent({
				defaultValue: undefined,
				value: undefined,
				disabled: undefined,
				invalid: undefined,
				slotLeftProps: {
					isClickable: false,
					children: <Icon data-testid="icon" icon={faSearch} />,
				},
			});

			expect(getByTestId("icon")).not.toBeNull();
		});

		test("should render node passed to `slotRight`", () => {
			const { getByTestId } = renderComponent({
				defaultValue: undefined,
				value: undefined,
				disabled: undefined,
				invalid: undefined,
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
				defaultValue: undefined,
				value: undefined,
				disabled: undefined,
				invalid: undefined,
				className: "test-class",
			});

			expect(getByRole("textbox")).toHaveClass("test-class");
		});

		it("applies red color overlay to outer element when invalid", () => {
			const { getByRole } = renderComponent({
				defaultValue: undefined,
				value: undefined,
				disabled: undefined,
				invalid: true,
			});

			expect(getByRole("textbox").parentNode).toHaveClass(
				variantColorOverlay.red,
			);
		});
	});

	describe("disabled", () => {
		const disabledProps = {
			defaultValue: undefined,
			value: undefined,
			invalid: undefined,
			disabled: true,
		} satisfies Omit<InputProps, "name" | "label">;

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
				defaultValue: undefined,
				value: undefined,
				disabled: undefined,
				invalid: undefined,
			});

			const textBox = getByRole("textbox");
			expect(textBox).toHaveValue("");

			await userEvent.type(textBox, "New value");
			expect(textBox).toHaveValue("New value");

			expect(ON_CHANGE).toHaveBeenLastCalledWith(
				expect.objectContaining({
					target: expect.objectContaining({
						value: "New value",
					}),
				}),
			);
		});

		it("updates value with default value", async () => {
			const { getByRole } = renderComponent({
				value: undefined,
				disabled: undefined,
				invalid: undefined,
				defaultValue: "Default value",
			});

			expect(getByRole("textbox")).toHaveValue("Default value");

			await userEvent.clear(getByRole("textbox"));
			await userEvent.type(getByRole("textbox"), "New value");

			expect(getByRole("textbox")).toHaveValue("New value");
			expect(ON_CHANGE).toHaveBeenLastCalledWith(
				expect.objectContaining({
					target: expect.objectContaining({
						value: "New value",
					}),
				}),
			);
		});

		it("updates value with controlled value", async () => {
			const { getByRole } = renderComponent({
				defaultValue: undefined,
				disabled: undefined,
				invalid: undefined,
				value: "Controlled value",
			});

			expect(getByRole("textbox")).toHaveValue("Controlled value");

			await userEvent.clear(getByRole("textbox"));
			await userEvent.type(getByRole("textbox"), "New value");

			expect(getByRole("textbox")).toHaveValue("New value");
			expect(ON_CHANGE).toHaveBeenLastCalledWith(
				expect.objectContaining({
					target: expect.objectContaining({
						value: "New value",
					}),
				}),
			);
		});

		it("shouldn't update when readonly", async () => {
			const { getByRole } = renderComponent({
				value: "Controlled value",
				defaultValue: undefined,
				disabled: undefined,
				invalid: undefined,
				readOnly: true,
			});

			await userEvent.type(getByRole("textbox"), "New value");

			expect(getByRole("textbox")).toHaveValue("Controlled value");
			expect(ON_CHANGE).not.toHaveBeenCalled();
		});

		it("shouldn't update when disabled", async () => {
			const { getByRole } = renderComponent({
				defaultValue: undefined,
				invalid: undefined,
				disabled: true,
				value: "Controlled value",
			});

			await userEvent.type(getByRole("textbox"), "New value");

			expect(getByRole("textbox")).toHaveValue("Controlled value");
			expect(ON_CHANGE).not.toHaveBeenCalled();
		});
	});

	describe("onFocus", () => {
		it("calls onFocus", async () => {
			const { getByRole } = renderComponent({
				defaultValue: undefined,
				value: undefined,
				disabled: undefined,
				invalid: undefined,
			});

			await userEvent.click(getByRole("textbox"));
			expect(ON_FOCUS).toHaveBeenCalled();
		});

		it("calls onFocus when isReadonly", async () => {
			const { getByRole } = renderComponent({
				defaultValue: undefined,
				value: undefined,
				disabled: undefined,
				invalid: undefined,
				readOnly: true,
			});

			await userEvent.click(getByRole("textbox"));
			expect(ON_FOCUS).toHaveBeenCalled();
		});

		it("Given a disabled input, when clicking, it should not call onFocus", async () => {
			const { getByRole } = renderComponent({
				defaultValue: undefined,
				value: undefined,
				invalid: undefined,
				disabled: true,
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
				defaultValue: undefined,
				value: undefined,
				disabled: undefined,
				invalid: undefined,
			});

			await userEvent.click(getByRole("textbox"));
			await userEvent.tab();

			expect(ON_BLUR).toHaveBeenCalled();
		});

		it("calls onBlur when readOnly", async () => {
			const { getByRole } = renderComponent({
				defaultValue: undefined,
				value: undefined,
				disabled: undefined,
				invalid: undefined,
				readOnly: true,
			});

			await userEvent.click(getByRole("textbox"));
			await userEvent.tab();

			expect(ON_BLUR).toHaveBeenCalled();
		});

		it("doesn't onBlur when disabled", async () => {
			const { getByRole } = renderComponent({
				defaultValue: undefined,
				value: undefined,
				invalid: undefined,
				disabled: true,
			});

			await userEvent.click(getByRole("textbox"));
			await userEvent.tab();

			expect(ON_BLUR).not.toHaveBeenCalled();
		});
	});

	describe("clear button", () => {
		it("doesn't render clear button when empty", () => {
			const { queryByTestId } = renderComponent({
				defaultValue: undefined,
				value: undefined,
				disabled: undefined,
				invalid: undefined,
				clearButtonProps: {
					strClear: "Clear",
				},
			});

			expect(queryByTestId("clear")).not.toBeInTheDocument();
		});

		it("clears value with default value", async () => {
			const { getByRole, getByTestId } = renderComponent({
				value: undefined,
				disabled: undefined,
				invalid: undefined,
				clearButtonProps: {
					strClear: "Clear",
				},
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
				value: "Clear me",
				disabled: undefined,
				invalid: undefined,
				clearButtonProps: {
					strClear: "Clear",
				},
				defaultValue: undefined,
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
				defaultValue: undefined,
				value: undefined,
				disabled: undefined,
				invalid: undefined,
				copyButtonProps: {
					strCopy: "Copy",
					strCopied: "Copied",
				},
			});

			expect(queryByTestId("clear")).not.toBeInTheDocument();
		});

		it("copies default value", async () => {
			const { getByRole, getByTestId } = renderComponent({
				defaultValue: "Copy me",
				value: undefined,
				disabled: undefined,
				invalid: undefined,
				copyButtonProps: {
					strCopy: "Copy",
					strCopied: "Copied",
				},
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
				value: "Copy me",
				defaultValue: undefined,
				disabled: undefined,
				invalid: undefined,
				copyButtonProps: {
					strCopy: "Copy",
					strCopied: "Copied",
				},
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

	describe.skip("visibility toggle", () => {
		it("shouldn't display defaultValue when hidden", async () => {
			const { getByTestId, getByLabelText } = renderComponent({
				defaultValue: "password",
				disabled: undefined,
				invalid: undefined,
				visibilityToggleProps: {
					isVisible: false,
					strHide: "Hide",
					strShow: "Show",
				},
				value: undefined,
			});

			const textbox = getByLabelText(LABEL, { selector: "input" });
			// expect(textbox).toHaveAttribute("type", "password");

			const toggle = getByTestId("toggle_visibility");
			await userEvent.click(toggle);

			expect(textbox).toHaveAttribute("type", "text");
			expect(textbox).toHaveValue("password");
		});

		it("shouldn't display value when hidden", async () => {
			const { getByTestId, getByLabelText } = renderComponent({
				defaultValue: undefined,
				disabled: undefined,
				invalid: undefined,
				visibilityToggleProps: {
					isVisible: false,

					strHide: "Hide",
					strShow: "Show",
				},
				value: "password",
			});

			const textbox = getByLabelText(LABEL, { selector: "input" });
			console.debug("debug  textbox:", textbox);
			// expect(textbox).toHaveAttribute("type", "password");

			const toggle = getByTestId("toggle_visibility");
			await userEvent.click(toggle);

			expect(textbox).toHaveAttribute("type", "text");
			expect(textbox).toHaveValue("password");
		});
	});
});
