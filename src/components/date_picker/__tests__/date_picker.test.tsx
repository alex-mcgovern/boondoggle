/**
 * @jest-environment jsdom
 */
import { userEvent } from "@storybook/testing-library";
import { render, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { DatePicker } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";

import type { DatePickerProps } from "..";

const onDayClick = jest.fn();

const PROPS: DatePickerProps = {
    onDayClick,
};

jest.useFakeTimers().setSystemTime(new Date("2023-01-01"));

const renderComponent = async ({ ...props }: DatePickerProps) =>
    waitFor(() => render(<DatePicker {...props}>{LOREM.button}</DatePicker>));

describe("<DatePicker />", () => {
    describe("Basic smoke tests", () => {
        test("should render without throwing", async () => {
            const { container } = await renderComponent(PROPS);

            expect(container).not.toBeNull();
        });
    });

    describe("Basic functionality", () => {
        test("should have updated value when user selects a date by clicking", async () => {
            const { getByRole } = await renderComponent(PROPS);

            const janSecondButton = getByRole("button", {
                name: "02",
            });

            await act(() => userEvent.click(janSecondButton));

            expect(onDayClick).toHaveBeenCalledWith(
                expect.anything(),
                new Date("2023-01-02T00:00:00.000Z")
            );
        });
    });
});
