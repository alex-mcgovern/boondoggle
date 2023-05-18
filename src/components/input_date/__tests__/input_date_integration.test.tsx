/** @jest-environment jsdom */
import { render, waitFor } from "@testing-library/react";
import "@vanilla-extract/css/disableRuntimeStyles";
import { createRef } from "react";

import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/dialog.mock";
import { selectFromInputDate } from "../../../../test/test_utils/select_date_from_input_date";
import { InputDate } from "../input_date.comp";

import type { InputDateProps } from "../input_date.comp";

const ON_CHANGE = jest.fn();

const PROPS: InputDateProps = {
  id: LOREM.id(),
  label: LOREM.label(),
  name: LOREM.name(),
  onChange: ON_CHANGE,
  placeholder: LOREM.placeholder(),
};

/** -----------------------------------------------------------------------------
 * Test setup
 * ------------------------------------------------------------------------------- */

jest.useFakeTimers().setSystemTime(new Date("2023-01-01"));

const renderComponent = async ({ ...props }: InputDateProps) => {
  const ref = createRef<HTMLInputElement>();

  return waitFor(() => {
    return render(<InputDate {...props} ref={ref} />);
  });
};

/** -----------------------------------------------------------------------------
 * Test cases
 * ------------------------------------------------------------------------------- */

describe.only("Integration test", () => {
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
