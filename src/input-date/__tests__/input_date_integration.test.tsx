/**
 * @jest-environment jsdom
 */
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@vanilla-extract/css/disableRuntimeStyles";
import { createRef } from "react";
import { InputDate } from "..";
import "../../../test/mocked_dependencies/dialog.mock";

import type { InputDateProps } from "..";
import { LOREM } from "../../../mocks/LOREM.mock";
import { selectFromDatePicker } from "../../../test/select_from_date_picker";

const renderComponent = async ({ ...props }: InputDateProps) => {
	const ref = createRef<HTMLInputElement>();

	return waitFor(() => {
		return render(<InputDate {...props} ref={ref} />);
	});
};

const ON_CHANGE = jest.fn();

const PROPS: InputDateProps = {
	label: LOREM.label(),
	name: LOREM.name(),
	onChange: ON_CHANGE,
	placeholder: LOREM.placeholder(),
};

jest.useFakeTimers().setSystemTime(new Date("2023-01-01"));

describe("<InputDate />", () => {
	test("works with mouse input", async () => {
		const { getByLabelText, getByTestId } = await renderComponent(PROPS);

		await selectFromDatePicker({
			expectedValue: "2023-01-01",
			getByLabelText,
			getByTestId,
			labelText: PROPS.label as string,
			onChange: ON_CHANGE,
		});
	});

	test("works with keyboard input", async () => {
		const { getByLabelText } = await renderComponent({ ...PROPS });

		const inputDate = getByLabelText(LOREM.label());

		await waitFor(() => {
			return userEvent.type(inputDate, "2023-01-01");
		});

		expect(inputDate).toHaveValue("2023-01-01");

		expect(ON_CHANGE).toHaveBeenCalledWith("2023-01-01");
	});
});
