/**
 * @jest-environment jsdom
 */
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@vanilla-extract/css/disableRuntimeStyles";
import { createRef } from "react";

import { InputDate } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { selectFromDatePicker } from "../lib";

import type { InputDateProps } from "..";

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

    test("should have the correct value when user enters the date manually", async () => {
        const { getByLabelText } = await renderComponent({ ...PROPS });

        const inputDate = getByLabelText(LOREM.label());

        await waitFor(() => {
            return userEvent.type(inputDate, "2023-01-01");
        });

        expect(inputDate).toHaveValue("2023-01-01");

        if (ON_CHANGE) {
            expect(ON_CHANGE).toHaveBeenCalledWith("2023-01-01");
        }
    });
});
