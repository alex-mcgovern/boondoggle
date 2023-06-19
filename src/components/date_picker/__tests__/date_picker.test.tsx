/** @jest-environment jsdom */
import { userEvent } from "@storybook/testing-library";
import { render, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { DatePicker } from "../date_picker.comp";

import type { DatePickerProps } from "../date_picker.comp";

const onDayClick = jest.fn();

const PROPS: DatePickerProps = {
  onDayClick,
};

/** -----------------------------------------------------------------------------
 * Force a specific date for tests
 * ------------------------------------------------------------------------------- */

jest.useFakeTimers().setSystemTime(new Date("2023-01-01"));

/** ----------------------------------------------------------------------------- */

const renderComponent = async ({ ...props }: DatePickerProps) => {
  return waitFor(() => {
    return render(<DatePicker {...props}>{LOREM.button}</DatePicker>);
  });
};

describe("<DatePicker />", () => {
  describe("Basic smoke tests", () => {
    it("should render without throwing", async () => {
      const { container } = await renderComponent(PROPS);

      expect(container).not.toBeNull();
    });

    it("should match snapshot", async () => {
      const { container } = await renderComponent(PROPS);

      expect(container).toMatchSnapshot();
    });
  });

  describe("Basic functionality", () => {
    it("should have updated value when user selects a date by clicking", async () => {
      const { getByRole } = await renderComponent(PROPS);

      const janSecondButton = getByRole("button", {
        name: "02",
      });

      await act(() => {
        return userEvent.click(janSecondButton);
      });

      expect(onDayClick).toHaveBeenCalledWith(
        expect.anything(),
        new Date("2023-01-02T00:00:00.000Z")
      );
    });
  });
});
