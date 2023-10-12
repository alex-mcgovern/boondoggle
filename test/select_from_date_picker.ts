import { waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import type {
	ByRoleMatcher,
	ByRoleOptions,
	Matcher,
	MatcherOptions,
} from "@testing-library/react";
import type { InputDateProps } from "../src/components/input_date";

type SelectFromInputDateArgs = {
	expectedValue: string;

	getByLabelText: (
		role: ByRoleMatcher,
		options?: ByRoleOptions | undefined,
	) => HTMLElement;

	getByTestId: (
		id: Matcher,
		options?: MatcherOptions | undefined,
	) => HTMLElement;

	labelText: string;

	onChange?: InputDateProps["onChange"];
};

export const selectFromDatePicker = async ({
	expectedValue,
	getByLabelText,
	getByTestId,
	labelText,
	onChange,
}: SelectFromInputDateArgs) => {
	// Get the input element
	const inputDate = getByLabelText(labelText);
	expect(inputDate).not.toBeNull();

	// Get the parent of the input element, used to scope the getByRole function
	const inputDateParent = inputDate.parentNode as HTMLElement;
	expect(inputDateParent).not.toBeNull();

	// Get the trigger button
	const inputDateTrigger = getByTestId("field-action-button-date");
	expect(inputDateTrigger).not.toBeNull();

	// Get a "scoped" getByRole function, that only searches within the input date parent
	const { getByRole: getByRoleScoped } = within(
		inputDateParent as HTMLElement,
	);

	// Activate the date picker dialog
	await waitFor(() => {
		return userEvent.click(inputDateTrigger);
	});

	// Select a day
	await waitFor(async () => {
		return userEvent.click(
			getByRoleScoped("button", {
				name: "01",
			}),
		);
	});

	await waitFor(() => {
		// Assert that input has the correct value
		expect(inputDate).toHaveValue(expectedValue);

		// Assert that the onChange has been called with the correct value
		if (onChange) {
			expect(onChange).toHaveBeenCalledWith(expectedValue);
		}
	});
};
