/** @jest-environment jsdom */
import { render, waitFor } from "@testing-library/react";

import { InputDate, type InputDateProps } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";

const PROPS: InputDateProps = {
  name: LOREM.name(),
  placeholder: LOREM.placeholder(),
};

/** ----------------------------------------------------------------------------- */

const renderComponent = async ({ ...props }: InputDateProps) => {
  return waitFor(() => {
    return render(<InputDate {...props} />);
  });
};

describe("<InputDate />", () => {
  describe("Basic smoke tests", () => {
    it("should render without throwing", async () => {
      const { getByRole } = await renderComponent(PROPS);

      expect(getByRole("textbox")).not.toBeNull();
    });

    it("should match snapshot", async () => {
      const { getByRole } = await renderComponent(PROPS);

      expect(getByRole("textbox")).toMatchSnapshot();
    });

    it("should render placeholder when present", async () => {
      const { getByRole } = await renderComponent({
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
      });

      expect((getByRole("textbox") as HTMLInputElement).placeholder).toBe(
        LOREM.placeholder()
      );
    });
  });
});
