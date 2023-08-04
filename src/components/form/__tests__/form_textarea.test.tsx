/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@vanilla-extract/css/disableRuntimeStyles";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { FormTextArea } from "../../form.textarea";
import { FormTestProvider } from "../form_test_provider.comp";

import type { FormTextAreaProps } from "../../form.textarea";

const PROPS: FormTextAreaProps = {
  errorMessage: LOREM.errorMessage(),
  name: LOREM.name(),
  placeholder: LOREM.placeholder(),
};

const renderComponent = ({ ...props }: FormTextAreaProps) => {
  return render(
    <FormTestProvider>
      <FormTextArea {...props} />
    </FormTestProvider>
  );
};

describe("<FormTextArea />", () => {
  describe("Basic smoke tests", () => {
    it("should render without throwing", () => {
      const { getByRole } = renderComponent(PROPS);

      expect(getByRole("textbox")).not.toBeNull();
    });

    it("should match snapshot", () => {
      const { getByRole } = renderComponent(PROPS);

      expect(getByRole("textbox")).toMatchSnapshot();
    });
  });

  describe("Updating the value", () => {
    it("should update value when the user types", async () => {
      const { getByRole } = renderComponent(PROPS);
      expect(getByRole("textbox")).toHaveValue("");

      await userEvent.type(getByRole("textbox"), "New value");

      expect(getByRole("textbox")).toHaveValue("New value");
    });
  });
});
