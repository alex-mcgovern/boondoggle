/**
 * @jest-environment jsdom
 */
import { faSearch } from "@fortawesome/pro-solid-svg-icons/faSearch";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "..";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Link } from "../../../test/link.comp.mock";
import { Icon } from "../../icon";
import { variantColorOverlay } from "../../index.css";
import { getButtonStyles, variantButtonSize } from "../styles.css";

describe("<Button />", () => {
	describe("Basic smoke tests", () => {
		test("should render without throwing", () => {
			const { getByRole } = render(
				<Button id="button" name="Test button" />,
			);

			expect(getByRole("button")).not.toBeNull();
		});

		test("should render text passed as children", () => {
			const { getByText } = render(
				<Button id="button" name="Test button">
					{LOREM.button}
				</Button>,
			);

			expect(getByText(LOREM.button)).not.toBeNull();
		});
	});

	describe("a11y labelling", () => {
		test("Given a button, when an id is provided, should assign it to the element", () => {
			const { getByRole } = render(
				<Button id="button-test-id" name="Test button" />,
			);

			expect(getByRole("button")?.id).toBe("button-test-id");
		});

		test("Given a button, when a name is provided, should assign it to the element", () => {
			const { getByRole } = render(
				<Button id="button" name="Test button" />,
			);

			expect((getByRole("button") as HTMLButtonElement)?.name).toBe(
				"Test button",
			);
		});

		test("Given a button, when a tabIndex is provided, should assign it to the element", () => {
			const { getByRole } = render(
				<Button id="button" name="Test button" tabIndex={0} />,
			);

			expect(getByRole("button")?.tabIndex).toBe(0);
		});
	});

	describe("as prop (polymorphism)", () => {
		test("should render a button element by default", () => {
			const { getByRole } = render(
				<Button id="button" name="Test button" />,
			);

			expect(getByRole("button")).not.toBeNull();
		});

		test("should render a button element when as = `button`", () => {
			const { getByRole } = render(
				<Button as="button" id="button" name="Test button" />,
			);

			expect(getByRole("button")).not.toBeNull();
		});

		test("should render a link element when as = `a`", () => {
			const { getByRole } = render(
				<Button as="a" href="https://www.google.com" name="Test button">
					{LOREM.link}
				</Button>,
			);

			expect(getByRole("link")).not.toBeNull();
		});

		test("should render a link element when as = `Link`", () => {
			const { getByRole } = render(
				<Button
					as={Link}
					href="https://www.google.com"
					name="Test button"
				>
					{LOREM.link}
				</Button>,
			);

			expect(getByRole("link")).not.toBeNull();
		});
	});

	describe("`appearance` prop", () => {
		test("should have the primary class name by default", () => {
			const { getByRole } = render(
				<Button id="button" name="Test button" />,
			);

			expect(getByRole("button")).toHaveClass(
				getButtonStyles({ appearance: "primary" }),
			);
		});

		test("should have the primary class name when appearance = primary", () => {
			const { getByRole } = render(
				<Button appearance="primary" id="button" name="Test button" />,
			);

			expect(getByRole("button")).toHaveClass(
				getButtonStyles({ appearance: "primary" }),
			);
		});

		test("should have the secondary class name when appearance = secondary", () => {
			const { getByRole } = render(
				<Button
					appearance="secondary"
					id="button"
					name="Test button"
				/>,
			);

			expect(getByRole("button")).toHaveClass(
				getButtonStyles({ appearance: "secondary" }),
			);
		});

		test("should have the ghost class name when appearance = ghost", () => {
			const { getByRole } = render(
				<Button appearance="ghost" id="button" name="Test button" />,
			);

			expect(getByRole("button")).toHaveClass(
				getButtonStyles({ appearance: "ghost" }),
			);
		});
	});

	describe("`color` prop", () => {
		test("should have the correct class name when colorOverlay = blue", () => {
			const { getByRole } = render(
				<Button colorOverlay="blue" id="button" name="Test button" />,
			);

			expect(getByRole("button")).toHaveClass(variantColorOverlay.blue);
		});

		test("should have the correct class name when colorOverlay = amber", () => {
			const { getByRole } = render(
				<Button colorOverlay="amber" id="button" name="Test button" />,
			);

			expect(getByRole("button")).toHaveClass(variantColorOverlay.amber);
		});

		test("should have the correct class name when colorOverlay = red", () => {
			const { getByRole } = render(
				<Button colorOverlay="red" id="button" name="Test button" />,
			);

			expect(getByRole("button")).toHaveClass(variantColorOverlay.red);
		});

		test("should have the correct class name name when colorOverlay = green", () => {
			const { getByRole } = render(
				<Button colorOverlay="green" id="button" name="Test button" />,
			);

			expect(getByRole("button")).toHaveClass(variantColorOverlay.green);
		});
	});

	describe("`className` prop", () => {
		test("should have the classname passed to it", () => {
			const { getByRole } = render(
				<Button
					className="test-class"
					id="button"
					name="Test button"
				/>,
			);

			expect(getByRole("button")).toHaveClass("test-class");
		});
	});

	describe("Event handlers", () => {
		describe("`onClick`", () => {
			test("should call `onClick` when enabled", async () => {
				const onClick = jest.fn();

				const { getByRole } = render(
					<Button id="button" name="Test button" onClick={onClick} />,
				);

				await userEvent.click(getByRole("button"));

				expect(onClick).toHaveBeenCalled();
			});

			test("should not call `onClick` when disabled", async () => {
				const onClick = jest.fn();

				const { getByRole } = render(
					<Button
						disabled
						id="button"
						name="Test button"
						onClick={onClick}
					/>,
				);

				await userEvent.click(getByRole("button"));

				expect(onClick).not.toHaveBeenCalled();
			});
		});

		describe("`onMouseOver`", () => {
			test("should call `onMouseOver` when enabled", () => {
				const onMouseOver = jest.fn();

				const { getByRole } = render(
					<Button
						id="button"
						name="Test button"
						onMouseOver={onMouseOver}
					/>,
				);

				fireEvent.mouseEnter(getByRole("button"));

				expect(onMouseOver).toHaveBeenCalled();
			});

			test("should call `onMouseOver` when disabled", () => {
				const onMouseOver = jest.fn();

				const { getByRole } = render(
					<Button
						disabled
						name="Test button"
						onMouseOver={onMouseOver}
					/>,
				);

				fireEvent.mouseEnter(getByRole("button"));

				expect(onMouseOver).toHaveBeenCalled();
			});
		});

		describe("`onMouseLeave`", () => {
			test("should call `onMouseLeave` when enabled", () => {
				const onMouseLeave = jest.fn();

				const { getByRole } = render(
					<Button
						id="button"
						name="Test button"
						onMouseLeave={onMouseLeave}
					/>,
				);

				fireEvent.mouseLeave(getByRole("button"));

				expect(onMouseLeave).toHaveBeenCalled();
			});

			test("should call `onMouseLeave` when disabled", () => {
				const onMouseLeave = jest.fn();

				const { getByRole } = render(
					<Button
						disabled
						name="Test button"
						onMouseLeave={onMouseLeave}
					/>,
				);

				fireEvent.mouseLeave(getByRole("button"));

				expect(onMouseLeave).toHaveBeenCalled();
			});
		});

		describe("`onFocus`", () => {
			test("should call `onFocus` when enabled", () => {
				const onFocus = jest.fn();

				const { getByRole } = render(
					<Button
						name="Test button"
						onClick={jest.fn()}
						onFocus={onFocus}
						title="Test button"
					/>,
				);

				getByRole("button").focus();

				expect(onFocus).toHaveBeenCalled();
			});

			test("should not call `onFocus` when disabled", () => {
				const onFocus = jest.fn();

				const { getByRole } = render(
					<Button
						disabled
						id="button"
						name="Test button"
						onFocus={onFocus}
					/>,
				);

				getByRole("button").focus();

				expect(onFocus).not.toHaveBeenCalled();
			});
		});

		describe("`onBlur`", () => {
			test("should call `onBlur` when enabled", () => {
				const onBlur = jest.fn();

				const { getByRole } = render(
					<Button id="button" name="Test button" onBlur={onBlur} />,
				);

				getByRole("button").focus();

				getByRole("button").blur();

				expect(onBlur).toHaveBeenCalled();
			});

			test("should not call `onBlur` when disabled", () => {
				const onBlur = jest.fn();

				const { getByRole } = render(
					<Button
						disabled
						id="button"
						name="Test button"
						onBlur={onBlur}
					/>,
				);

				getByRole("button").focus();

				getByRole("button").blur();

				expect(onBlur).not.toHaveBeenCalled();
			});
		});
	});

	describe("`size` prop", () => {
		test("should have the `sm` class name by default", () => {
			const { getByRole } = render(
				<Button id="button" name="Test button" />,
			);

			expect(getByRole("button")).toHaveClass(variantButtonSize.sm);
		});

		test("should have the `sm` class name when size = sm", () => {
			const { getByRole } = render(
				<Button id="button" name="Test button" size="sm" />,
			);

			expect(getByRole("button")).toHaveClass(variantButtonSize.sm);
		});

		test("should have the `md` class name when size = md", () => {
			const { getByRole } = render(
				<Button id="button" name="Test button" size="md" />,
			);

			expect(getByRole("button")).toHaveClass(variantButtonSize.md);
		});

		test("should have the `lg` class name when size = lg", () => {
			const { getByRole } = render(
				<Button id="button" name="Test button" size="lg" />,
			);

			expect(getByRole("button")).toHaveClass(variantButtonSize.lg);
		});

		test("should have the `square_md` class name when size = square_md", () => {
			const { getByRole } = render(
				<Button id="button" name="Test button" size="square_md" />,
			);

			expect(getByRole("button")).toHaveClass(
				getButtonStyles({ size: "square_md" }),
			);
		});

		test("should have the `square_sm` class name when size = square_sm", () => {
			const { getByRole } = render(
				<Button id="button" name="Test button" size="square_sm" />,
			);

			expect(getByRole("button")).toHaveClass(
				getButtonStyles({ size: "square_sm" }),
			);
		});
	});

	describe("Slot props", () => {
		test("should render node passed to `slotLeft`", () => {
			const { getByTestId } = render(
				<Button
					name="Test button"
					slotLeft={<Icon data-testid="icon" icon={faSearch} />}
				/>,
			);

			expect(getByTestId("icon")).not.toBeNull();
		});

		test("should render node passed to `slotRight`", () => {
			const { getByTestId } = render(
				<Button
					name="Test button"
					slotRight={<Icon data-testid="icon" icon={faSearch} />}
				/>,
			);

			expect(getByTestId("icon")).not.toBeNull();
		});
	});
});
