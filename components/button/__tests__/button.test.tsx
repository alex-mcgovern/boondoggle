/**
 * @jest-environment jsdom
 */
import { faSearch } from "@fortawesome/pro-solid-svg-icons"; import { fireEvent, render } from "@testing-library/react"; import userEvent from "@testing-library/user-event"; import { Button } from ".."; import { LOREM } from "../../../mocks/LOREM.mock"; import { Link } from "../../../test/link.comp.mock"; import { Icon } from "../../icon"; import { btn } from "../styles.css"; import { theme } from "../../../style.css";
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

	describe("`variant` prop", () => {
		test("should have the primary class name by default", () => {
			const { getByRole } = render(
				<Button id="button" name="Test button" />,
			);

			expect(getByRole("button")).toHaveClass(
				btn({ variant: "primary" }),
			);
		});

		test("should have the primary class name when variant = primary", () => {
			const { getByRole } = render(
				<Button variant="primary" id="button" name="Test button" />,
			);

			expect(getByRole("button")).toHaveClass(
				btn({ variant: "primary" }),
			);
		});

		test("should have the secondary class name when variant = secondary", () => {
			const { getByRole } = render(
				<Button variant="secondary" id="button" name="Test button" />,
			);

			expect(getByRole("button")).toHaveClass(
				btn({ variant: "secondary" }),
			);
		});

		test("should have the ghost class name when variant = ghost", () => {
			const { getByRole } = render(
				<Button variant="ghost" id="button" name="Test button" />,
			);

			expect(getByRole("button")).toHaveClass(btn({ variant: "ghost" }));
		});
	});

	describe("`color` prop", () => {
		test("should have the correct class name when color = blue", () => {
			const { getByRole } = render(
				<Button color="blue" id="button" name="Test button" />,
			);

			expect(getByRole("button")).toHaveClass(theme.blue);
		});

		test("should have the correct class name when color = amber", () => {
			const { getByRole } = render(
				<Button color="amber" id="button" name="Test button" />,
			);

			expect(getByRole("button")).toHaveClass(theme.amber);
		});

		test("should have the correct class name when color = red", () => {
			const { getByRole } = render(
				<Button color="red" id="button" name="Test button" />,
			);

			expect(getByRole("button")).toHaveClass(theme.red);
		});

		test("should have the correct class name name when color = green", () => {
			const { getByRole } = render(
				<Button color="green" id="button" name="Test button" />,
			);

			expect(getByRole("button")).toHaveClass(theme.green);
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
