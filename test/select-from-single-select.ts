import { within } from "@testing-library/dom";
import type { ByRoleMatcher, ByRoleOptions } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

export const selectFromSingleSelect = async ({
    expectedValue,
    getByRole,
    itemLabel,
    selectLabel,
}: {
    expectedValue: string;
    getByRole: (
        role: ByRoleMatcher,
        options?: ByRoleOptions | undefined,
    ) => HTMLElement;
    itemLabel: string;
    selectLabel: string;
}) => {
    const select = getByRole("combobox", { name: selectLabel });

    const { getByRole: getByRoleScoped } = within(
        (
            ((select.parentNode as HTMLElement).parentNode as HTMLElement)
                .parentNode as HTMLElement
        ).parentNode as HTMLElement,
    );

    await userEvent.click(select);

    const item = getByRoleScoped("option", { name: itemLabel });

    await userEvent.click(item);

    expect(select).toHaveValue(expectedValue);
};
