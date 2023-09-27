/**
 * @jest-environment jsdom
 */
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@vanilla-extract/css/disableRuntimeStyles";
import { createRef } from "react";

import { InputDate } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";

import type { InputDateProps } from "..";
import type { ByRoleMatcher, ByRoleOptions, Matcher, MatcherOptions } from "@testing-library/react";

type SelectFromInputDateArgs = {
    expectedValueIso: string;

    expectedValuePretty: string;

    getByLabelText: (role: ByRoleMatcher, options?: ByRoleOptions | undefined) => HTMLElement;

    getByTestId: (id: Matcher, options?: MatcherOptions | undefined) => HTMLElement;

    labelText: string;

    onChange?: InputDateProps["onChange"];
};

const selectFromDatePicker = async ({
    expectedValueIso,
    expectedValuePretty,
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
    const { getByRole: getByRoleScoped } = within(inputDateParent as HTMLElement);

    // Activate the date picker dialog
    await waitFor(() => {
        return userEvent.click(inputDateTrigger);
    });

    // Select a day
    await waitFor(async () => {
        return userEvent.click(
            getByRoleScoped("button", {
                name: "01",
            })
        );
    });

    await waitFor(() => {
        // Assert that input has the correct value
        expect(inputDate).toHaveValue(expectedValuePretty);

        // Assert that the onChange has been called with the correct value
        if (onChange) {
            expect(onChange).toHaveBeenCalledWith(expectedValueIso);
        }
    });
};

const renderComponent = async ({ ...props }: InputDateProps) => {
    const ref = createRef<HTMLInputElement>();

    return waitFor(() => {
        return render(
            <InputDate
                {...props}
                ref={ref}
            />
        );
    });
};

const ON_CHANGE = jest.fn();

const PROPS: InputDateProps = {
    id: LOREM.id(),
    label: LOREM.label(),
    name: LOREM.name(),
    onChange: ON_CHANGE,
    placeholder: LOREM.placeholder(),
};

jest.useFakeTimers().setSystemTime(new Date("2023-01-01"));

describe("<InputDate />", () => {
    test("works without `rawValueTransformer`", async () => {
        const { getByLabelText, getByTestId } = await renderComponent(PROPS);

        await selectFromDatePicker({
            expectedValueIso: "2023-01-01T00:00:00.000Z",
            expectedValuePretty: "2023-01-01",
            getByLabelText,
            getByTestId,
            labelText: PROPS.label as string,
            onChange: ON_CHANGE,
        });
    });

    test("should have correct value when user selects date, and is passed a data transformer", async () => {
        const { getByLabelText, getByTestId } = await renderComponent({
            ...PROPS,
            rawValueTransformer: (value: string) => {
                return value.substring(0, 10);
            },
        });

        await selectFromDatePicker({
            expectedValueIso: "2023-01-01",
            expectedValuePretty: "2023-01-01",
            getByLabelText,
            getByTestId,
            labelText: PROPS.label as string,
        });
    });
});
