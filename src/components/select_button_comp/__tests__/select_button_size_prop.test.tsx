/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SelectButton } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import "../../../../test/mocked_dependencies/dialog.mock";
import { elementFontSize } from "../../../styles/common/element_size.css";
import { mockSelectItems } from "../../select_comp/__mocks__/select.mock";

import type { SelectButtonProps } from "..";

/** ----------------------------------------------------------------------------- */

const PROPS: SelectButtonProps = {
  buttonText: LOREM.select,
  id: LOREM.id(),
  items: mockSelectItems({}),
  name: LOREM.text_xxs,
};

const renderComponent = (props: SelectButtonProps) => {
  return {
    user: userEvent.setup(),
    ...render(<SelectButton {...props} />),
  };
};

/** ----------------------------------------------------------------------------- */

describe("<SelectButton />", () => {
  describe("Size", () => {
    it("should have the `md` class name by default", async () => {
      const { getByRole } = await renderComponent(PROPS);

      expect(getByRole("combobox")).toHaveClass(elementFontSize.md);
    });

    it("should have the `sm` class name when size = sm", async () => {
      const { getByRole } = await renderComponent({ ...PROPS, size: "sm" });

      expect(getByRole("combobox")).toHaveClass(elementFontSize.sm);
    });

    it("should have the `md` class name when size = md", async () => {
      const { getByRole } = await renderComponent({ ...PROPS, size: "md" });

      expect(getByRole("combobox")).toHaveClass(elementFontSize.md);
    });

    it("should have the `lg` class name when size = lg", async () => {
      const { getByRole } = await renderComponent({ ...PROPS, size: "lg" });

      expect(getByRole("combobox")).toHaveClass(elementFontSize.lg);
    });
  });
});
