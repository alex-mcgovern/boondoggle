import { waitFor, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import type { InputDateProps } from "../../src";
import type { ByRoleMatcher, ByRoleOptions } from "@testing-library/dom";

type SelectFromInputDateProps = {
  expectedValueIso: string;
  expectedValuePretty: string;
  getByRole: (
    role: ByRoleMatcher,
    options?: ByRoleOptions | undefined
  ) => HTMLElement;
  onChange?: InputDateProps["onChange"];
  selectLabel: string;
};

export const selectFromInputDate = async ({
  getByRole,
  selectLabel,
  expectedValuePretty,
  expectedValueIso,
  onChange,
}: SelectFromInputDateProps) => {
  const inputDateTrigger = getByRole("textbox", { name: selectLabel });

  const { getByRole: getByRoleScoped } = within(
    ((inputDateTrigger.parentNode as HTMLElement).parentNode as HTMLElement)
      .parentNode as HTMLElement
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
