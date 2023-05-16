/** @jest-environment jsdom */
import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@vanilla-extract/css/disableRuntimeStyles";
import { createRef } from "react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/dialog.mock";
// import "../../../../test/resize_observer.mock";
import { InputDate } from "../input_date.comp";

import type { InputDateProps } from "../input_date.comp";

const PROPS: InputDateProps = {
  name: LOREM.name(),
  placeholder: LOREM.placeholder(),
};

/** -----------------------------------------------------------------------------
 * Force a specific date for tests
 * ------------------------------------------------------------------------------- */

jest.useFakeTimers().setSystemTime(new Date("2023-01-01"));

/** -----------------------------------------------------------------------------
 * Integration test
 * ------------------------------------------------------------------------------- */

const renderComponent = async ({ ...props }: InputDateProps) => {
  const ref = createRef<HTMLInputElement>();

  return waitFor(() => {
    return render(<InputDate {...props} ref={ref} />);
  });
};

/** -----------------------------------------------------------------------------
 * Integration test
 * ------------------------------------------------------------------------------- */

describe.only("Integration test", () => {
  it("should have updated value when user selects a date", async () => {
    const { getByRole } = await renderComponent(PROPS);

    const triggerElement = getByRole("textbox");
    expect(triggerElement).not.toBeNull();

    await waitFor(() => {
      return userEvent.click(triggerElement);
    });

    const newDateButton = getByRole("button", {
      name: "01",
    });

    await waitFor(() => {
      userEvent.click(newDateButton);
    });

    await waitFor(() => {
      expect(triggerElement).toHaveValue("01/01/2023");
      expect(triggerElement).toHaveAttribute(
        "data-raw",
        "2023-01-01T00:00:00.000Z"
      );
    });
  });

  it("should have updated value when user selects a date", async () => {
    const { getByRole } = await renderComponent(PROPS);

    const triggerElement = getByRole("textbox");
    expect(triggerElement).not.toBeNull();

    await waitFor(() => {
      return userEvent.click(triggerElement);
    });

    const newDateButton = getByRole("button", {
      name: "01",
    });

    await waitFor(() => {
      userEvent.click(newDateButton);
    });

    await waitFor(() => {
      expect(triggerElement).toHaveValue("01/01/2023");
      expect(triggerElement).toHaveAttribute(
        "data-raw",
        "2023-01-01T00:00:00.000Z"
      );
    });
  });

  it("should have correct value when user selects date, and is passed a data transformer", async () => {
    const { getByRole } = await renderComponent({
      ...PROPS,
      rawValueTransformer: (value: string) => {
        return value.substring(0, 10);
      },
    });

    const triggerElement = getByRole("textbox");
    expect(triggerElement).not.toBeNull();

    await waitFor(() => {
      return userEvent.click(triggerElement);
    });

    const newDateButton = getByRole("button", {
      name: "01",
    });

    await waitFor(() => {
      userEvent.click(newDateButton);
    });

    await waitFor(() => {
      expect(triggerElement).toHaveValue("01/01/2023");
      expect(triggerElement).toHaveAttribute("data-raw", "2023-01-01");
    });
  });
});
