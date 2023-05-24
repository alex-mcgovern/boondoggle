/** @jest-environment jsdom */
import { act, fireEvent, render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@vanilla-extract/css/disableRuntimeStyles";

import { Form } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/dialog.mock";
import "../../../../test/has_pointer_capture.mock";
import "../../../../test/resize_observer.mock";
import { mockSelectItems } from "../../select/__mocks__/select.mock";
import { MockForm } from "../__mocks__/mock_form.mock";

import type { FormProps } from "..";

const handleFormSubmissionMock = jest.fn();
const handleErrorsMock = jest.fn();

const PROPS: FormProps = MockForm({
  handleErrors: handleErrorsMock,
  handleFormSubmission: handleFormSubmissionMock,
});

const renderComponent = async ({ ...props }: FormProps) => {
  return waitFor(() => {
    return render(<Form {...props} />);
  });
};

describe("<Form />", () => {
  describe("Basic smoke tests", () => {
    it("should render without throwing", async () => {
      const { getByRole } = await renderComponent(PROPS);

      expect(getByRole("form")).not.toBeNull();
    });

    it("should match snapshot", async () => {
      const { getByRole } = await renderComponent(PROPS);

      expect(getByRole("form")).toMatchSnapshot();
    });
  });

  describe("Renders the correct elements", () => {
    it("should render the email input", async () => {
      const { getByLabelText } = await renderComponent(PROPS);

      expect(getByLabelText(LOREM.labelEmail())).not.toBeNull();
    });

    it("should render the description textarea", async () => {
      const { getByLabelText } = await renderComponent(PROPS);

      expect(getByLabelText(LOREM.labelDescription())).not.toBeNull();
    });

    it("should render the dropdown", async () => {
      const { getByLabelText } = await renderComponent(PROPS);

      expect(
        getByLabelText(LOREM.labelDropdown(), { selector: "input" })
      ).not.toBeNull();
    });

    it("should render the slider, and an `<input>' component to hold the value", async () => {
      const { getByLabelText } = await renderComponent(PROPS);

      expect(getByLabelText(LOREM.labelSlider())).not.toBeNull();
    });

    it("should render the form submit button", async () => {
      const { getByRole } = await renderComponent(PROPS);

      expect(getByRole("button", { name: "Submit" })).not.toBeNull();
    });
  });

  describe("Happy path", () => {
    it("should submit successfully when user inputs values", async () => {
      const { getByRole, getByLabelText } = await renderComponent(PROPS);

      const emailInput = getByLabelText(LOREM.labelEmail());
      const descriptionTextArea = getByLabelText(LOREM.labelDescription());
      const selectComponent = getByRole("combobox");
      const sliderThumb = getByRole("slider");

      await act(async () => {
        await userEvent.type(emailInput, LOREM.email());
        await userEvent.type(descriptionTextArea, LOREM.textXxs);
      });

      expect(emailInput).toHaveValue(LOREM.email());
      expect(descriptionTextArea).toHaveValue(LOREM.textXxs);

      await act(async () => {
        await userEvent.click(selectComponent);
        await userEvent.keyboard("{arrowdown}");
        await userEvent.keyboard("{enter}");

        await userEvent.click(sliderThumb);
        await userEvent.keyboard("{arrowright}");
      });

      await act(async () => {
        fireEvent.submit(getByRole("form"));
      });

      await waitFor(() => {
        expect(handleFormSubmissionMock).toHaveBeenCalledWith(
          expect.objectContaining({
            amount: 1,
            description: LOREM.textXxs,
            email: LOREM.email(),
            select: mockSelectItems({})[0].value,
          }),
          expect.objectContaining({
            type: "submit",
          })
        );
      });
    });

    it("should submit successfully when default values are provided", async () => {
      const handleFormSubmissionDefaultValuesMock = jest.fn();

      const { getByRole } = await renderComponent(
        MockForm({
          handleErrors: handleErrorsMock,
          handleFormSubmission: handleFormSubmissionDefaultValuesMock,
          withDefaultValues: true,
        })
      );

      await act(async () => {
        fireEvent.submit(getByRole("form"));
      });

      await waitFor(() => {
        expect(handleFormSubmissionDefaultValuesMock).toHaveBeenCalledWith(
          expect.objectContaining({
            amount: 50,
            description: LOREM.textXxs,
            email: LOREM.email(),
            select: mockSelectItems({})[0].value,
          }),
          expect.objectContaining({
            type: "submit",
          })
        );
      });
    });
  });

  describe("Unhappy path", () => {
    it("should call handleErrors when the form submission fails", async () => {
      const { getByRole, getAllByRole } = await renderComponent(PROPS);

      await act(async () => {
        fireEvent.submit(getByRole("form"));
      });

      await waitFor(() => {
        expect(handleErrorsMock).toHaveBeenCalledWith(
          expect.objectContaining({
            amount: expect.objectContaining({
              message: "Required",
            }),
            description: expect.objectContaining({
              message: "Required",
            }),
            email: expect.objectContaining({
              message: "Required",
            }),
            select: expect.objectContaining({
              message: "Required",
            }),
          }),
          expect.objectContaining({
            type: "submit",
          })
        );

        /** Should display error message for all 4 inputs */
        expect(getAllByRole("alert")).toHaveLength(4);
      });
    });
  });
});
