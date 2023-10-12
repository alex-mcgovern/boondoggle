/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { RadioButtonGroup } from ".";
import { RADIO_BUTTONS_MOCK } from "./mocks";

import type { RadioButtonGroupProps } from ".";

const onChangeMock = jest.fn();

const PROPS: RadioButtonGroupProps = {
	id: "test",
	items: RADIO_BUTTONS_MOCK,
	label: "test",
	name: "test",
	onChange: onChangeMock,
};

const renderComponent = ({ ...props }: RadioButtonGroupProps) => {
	return render(<RadioButtonGroup {...props} />);
};

describe("<RadioButtonGroup />", () => {
	describe("Basic smoke tests", () => {
		test("should render without throwing", () => {
			const { container } = renderComponent(PROPS);

			expect(container).not.toBeNull();
		});
	});
});

describe("<RadioButtonGroup />", () => {
	describe("On change functionality", () => {
		test("should call onChange when item is selected", async () => {
			const { getAllByRole } = renderComponent(PROPS);

			const firstRadioItem = getAllByRole("radio")[0];

			await userEvent.click(firstRadioItem);

			expect(onChangeMock).toBeCalledWith(RADIO_BUTTONS_MOCK[0].value);
		});
	});
});
