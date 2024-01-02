/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Slider } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/has_pointer_capture.mock";
import "../../../../test/mocked_dependencies/resize_observer.mock";

import type { SliderProps } from "..";

const PROPS: SliderProps = { name: LOREM.name() };

const renderComponent = ({ ...props }: SliderProps) => {
	return render(<Slider {...props} />);
};

describe("<Slider />", () => {
	describe("Basic smoke tests", () => {
		test("should render without throwing", () => {
			const { container } = renderComponent(PROPS);

			expect(container).not.toBeNull();
		});
	});

	describe("labelling", () => {
		/**
		 * RTL doesn't see this element ¯\_(ツ)_/¯
		 */
		it.skip("should assign name to the hidden input element", () => {
			const { getByRole } = renderComponent({
				name: LOREM.name(),
				placeholder: LOREM.placeholder(),
			});

			expect(
				(getByRole("textbox", { hidden: true }) as HTMLInputElement)
					.name,
			).toBe(LOREM.name());
		});

		test("should label element correctly", () => {
			const { getByLabelText } = renderComponent({
				id: LOREM.id(),
				label: LOREM.label(),
				name: LOREM.name(),
				placeholder: LOREM.placeholder(),
			});

			expect(getByLabelText(LOREM.label())).not.toBeNull();
		});
	});

	describe("setting new value", () => {
		test("should update value when user interacts", async () => {
			const onValueChange = jest.fn();

			const { getByRole } = renderComponent({
				name: LOREM.name(),
				onValueChange,
				placeholder: LOREM.placeholder(),
			});

			const sliderThumb = getByRole("slider");

			await userEvent.click(sliderThumb);

			await userEvent.keyboard("{arrowright}");

			expect(onValueChange).toBeCalledWith([1]);
		});
	});
});
