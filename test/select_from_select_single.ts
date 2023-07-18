import { within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import type { ByRoleMatcher, ByRoleOptions } from "@testing-library/dom";

type SelectSingleSelectItemProps = {
  expected_value: string;
  getByRole: (
    role: ByRoleMatcher,
    options?: ByRoleOptions | undefined
  ) => HTMLElement;
  item_label: string;
  select_label: string;
};

export const selectFromSingleSelect = async ({
  expected_value,
  getByRole,
  item_label,
  select_label,
}: SelectSingleSelectItemProps) => {
  const select = getByRole("combobox", { name: select_label });

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { getByRole: getByRoleScoped } = within(
    (
      ((select.parentNode as HTMLElement).parentNode as HTMLElement)
        .parentNode as HTMLElement
    ).parentNode as HTMLElement
  );

  await userEvent.click(select);

  const item = getByRoleScoped("option", { name: item_label });

  await userEvent.click(item);

  expect(select).toHaveValue(expected_value);
};
