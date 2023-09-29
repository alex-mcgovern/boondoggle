/**
 * @jest-environment jsdom
 */
import { render, waitFor } from "@testing-library/react";
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

describe("<InputDate />", () => {
    test("input has correct value after clicking date when in timezone with negative offset", async () => {
        jest.useFakeTimers().setSystemTime(new Date("2023-01-01T00:00:00.000-02:00"));

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

    test("input has correct value after clicking date when in timezone with positive offset", async () => {
        jest.useFakeTimers().setSystemTime(new Date("2023-01-01T00:00:00.000-02:00"));

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
});
