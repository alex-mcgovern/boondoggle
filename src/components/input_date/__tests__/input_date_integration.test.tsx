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
import type { ByRoleMatcher, ByRoleOptions } from "@testing-library/react";

type SelectFromInputDateArgs = {
    expectedValueIso: string;

    expectedValuePretty: string;

    getByRole: (role: ByRoleMatcher, options?: ByRoleOptions | undefined) => HTMLElement;

    onChange?: InputDateProps["onChange"];

    selectLabel: string;
};

const selectFromInputDate = async ({
    expectedValueIso,
    expectedValuePretty,
    getByRole,
    onChange,
    selectLabel,
}: SelectFromInputDateArgs) => {
    const inputDateTrigger = getByRole("textbox", { name: selectLabel });

    const { getByRole: getByRoleScoped } = within(
        (
            ((inputDateTrigger.parentNode as HTMLElement).parentNode as HTMLElement)
                .parentNode as HTMLElement
        ).parentNode as HTMLElement
    );

    expect(inputDateTrigger).not.toBeNull();

    await waitFor(() => {
        return userEvent.click(inputDateTrigger);
    });

    const newDateButton = getByRoleScoped("button", {
        name: "01",
    });

    await waitFor(() => {
        userEvent.click(newDateButton);
    });

    await waitFor(() => {
        expect(inputDateTrigger).toHaveValue(expectedValuePretty);

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
    describe("Integration test", () => {
        it("should have updated value when user selects a date", async () => {
            const { getByRole } = await renderComponent(PROPS);

            await selectFromInputDate({
                expectedValueIso: "2023-01-01T00:00:00.000Z",
                expectedValuePretty: "01/01/2023",
                getByRole,
                onChange: ON_CHANGE,
                selectLabel: PROPS.label as string,
            });
        });

        it("should have correct value when user selects date, and is passed a data transformer", async () => {
            const { getByRole } = await renderComponent({
                ...PROPS,
                rawValueTransformer: (value: string) => {
                    return value.substring(0, 10);
                },
            });

            await selectFromInputDate({
                expectedValueIso: "2023-01-01",
                expectedValuePretty: "01/01/2023",
                getByRole,
                onChange: ON_CHANGE,
                selectLabel: PROPS.label as string,
            });
        });
    });
});
