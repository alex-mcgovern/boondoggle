/** @jest-environment jsdom */
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../../../mocks/LOREM.mock";
import "../../../../../test/dialog.mock";
import { elementFontSize } from "../../../../styles/common/element_size.css";
import { mockSelectItems } from "../../__mocks__/select.mock";
import { SelectMulti } from "../select_multi.comp";

import type { SelectMultiProps } from "../select_multi.comp";

/** -----------------------------------------------------------------------------
 * Test setup
 * ------------------------------------------------------------------------------- */

const PROPS: SelectMultiProps = {
  id: LOREM.id(),
  items: mockSelectItems({}),
  label: LOREM.label(),
  name: LOREM.textXxs,
  placeholder: LOREM.select,
};

const renderComponent = (props: SelectMultiProps) => {
  return {
    user: userEvent.setup(),
    ...render(<SelectMulti {...props} />),
  };
};

/** -----------------------------------------------------------------------------
 * Test cases
 * ------------------------------------------------------------------------------- */

describe("<SelectMulti />", () => {
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
