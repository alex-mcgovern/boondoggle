/** @jest-environment jsdom */
import { faSearch } from "@fortawesome/sharp-regular-svg-icons";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { LOREM } from "../../../mocks/LOREM.mock";
import "../../../test/mocked_dependencies/dialog.mock";
import { variantColorOverlay } from "../../styles/color_palette.css";
import { a11yError } from "../../styles/common/a11y.css";
import { elementFontSize } from "../../styles/common/element_size.css";
import { Icon } from "../icon";
import { SelectSingle } from "./SelectSingle";
import { mockSelectItems } from "./__mocks__/select.mock";

import type { SelectSingleProps } from "./SelectSingle";

/** ----------------------------------------------------------------------------- */

const ON_CHANGE = jest.fn();

const PROPS: SelectSingleProps = {
  errorMessage: LOREM.errorMessage(),
  id: LOREM.id(),
  items: mockSelectItems({}),
  label: LOREM.label(),
  name: LOREM.text_xxs,
  onChange: ON_CHANGE,
  placeholder: LOREM.select,
};

const renderComponent = (props: SelectSingleProps) => {
  return {
    user: userEvent.setup(),
    ...render(<SelectSingle {...props} />),
  };
};

/** ----------------------------------------------------------------------------- */

describe("<SelectSingle />", () => {
  describe("Basic smoke tests", () => {
    test("should render without throwing", async () => {
      const { getByRole } = renderComponent(PROPS);

      expect(getByRole("combobox")).not.toBeNull();
    });
  });
});

/** ----------------------------------------------------------------------------- */

describe("<SelectSingle />", () => {
  describe("Slot props", () => {
    test("should render node passed to `slotLeft`", async () => {
      const { getByTestId } = renderComponent({
        ...PROPS,
        slotLeft: [<Icon data-testid="icon" icon={faSearch} />],
      });

      expect(getByTestId("icon")).not.toBeNull();
    });

    test("should render node passed to `slotRight`", async () => {
      const { getByTestId } = renderComponent({
        ...PROPS,
        slotRight: [<Icon data-testid="icon" icon={faSearch} />],
      });
      expect(getByTestId("icon")).not.toBeNull();
    });
  });
});

/** ----------------------------------------------------------------------------- */

describe("<SelectSingle />", () => {
  describe("Size", () => {
    test("should have the `md` class name by default", () => {
      const { getByRole } = renderComponent(PROPS);

      expect(getByRole("combobox")).toHaveClass(elementFontSize.md);
    });

    test("should have the `sm` class name when size = sm", () => {
      const { getByRole } = renderComponent({ ...PROPS, size: "sm" });

      expect(getByRole("combobox")).toHaveClass(elementFontSize.sm);
    });

    test("should have the `md` class name when size = md", () => {
      const { getByRole } = renderComponent({ ...PROPS, size: "md" });

      expect(getByRole("combobox")).toHaveClass(elementFontSize.md);
    });

    test("should have the `lg` class name when size = lg", () => {
      const { getByRole } = renderComponent({ ...PROPS, size: "lg" });

      expect(getByRole("combobox")).toHaveClass(elementFontSize.lg);
    });
  });
});

/** ----------------------------------------------------------------------------- */

describe("<SelectSingle />", () => {
  test("should render placeholder", async () => {
    const { getByRole } = renderComponent(PROPS);

    const combobox = getByRole("combobox");
    expect((combobox as HTMLInputElement).placeholder).toBe(PROPS.placeholder);
  });
});

/** ----------------------------------------------------------------------------- */

describe("<SelectSingle />", () => {
  test("mouse navigation", async () => {
    const ON_CLICK = jest.fn();
    const ITEMS_AS_BUTTONS = mockSelectItems({ onClick: ON_CLICK });

    const { getByRole, getByText, user } = renderComponent({
      ...PROPS,
      items: ITEMS_AS_BUTTONS,
    });

    // Use the mouse to select the first item in the list

    await user.click(getByRole("combobox"));
    await user.click(getByText(ITEMS_AS_BUTTONS[0].label));

    expect(ON_CHANGE).toHaveBeenCalledWith(
      expect.objectContaining({
        selectedItem: ITEMS_AS_BUTTONS[0],
      })
    );

    expect(ON_CLICK).toHaveBeenCalledTimes(1);

    expect((getByRole("combobox") as HTMLInputElement).value).toBe(
      ITEMS_AS_BUTTONS[0].label
    );

    // Now use the mouse to select the second item in the list

    await user.click(getByRole("combobox"));
    await user.click(getByText(ITEMS_AS_BUTTONS[1].label));

    expect(ON_CHANGE).toHaveBeenLastCalledWith(
      expect.objectContaining({
        selectedItem: ITEMS_AS_BUTTONS[1],
      })
    );
    expect(ON_CLICK).toHaveBeenCalledTimes(2);
    expect((getByRole("combobox") as HTMLInputElement).value).toBe(
      ITEMS_AS_BUTTONS[1].label
    );
  });
});

/** ----------------------------------------------------------------------------- */

describe("<SelectSingle />", () => {
  test("should be labelled", async () => {
    const { container, getByRole } = renderComponent(PROPS);

    const combobox = getByRole("combobox");
    const label = container.querySelector("label");
    const labelId = label?.getAttribute("id");

    expect(combobox.getAttribute("aria-labelledby")).toBe(labelId);
    expect(label).not.toBeNull();
    expect(label?.getAttribute("for")).toBe(PROPS.id);
    expect(label?.textContent).toBe(PROPS.label);
  });

  test("should match snapshot", async () => {
    const { getByRole } = renderComponent(PROPS);

    expect(getByRole("combobox")).toMatchSnapshot();
  });
});

/** ----------------------------------------------------------------------------- */

describe("<SelectSingle />", () => {
  test("keyboard navigation", async () => {
    const ON_CLICK = jest.fn();
    const ITEMS_AS_BUTTONS = mockSelectItems({ onClick: ON_CLICK });

    const { getByRole, user } = renderComponent({
      ...PROPS,
      items: ITEMS_AS_BUTTONS,
    });

    await user.tab();

    await user.keyboard("{arrowdown}");
    await user.keyboard("{enter}");

    expect(ON_CHANGE).toHaveBeenCalledWith(
      expect.objectContaining({
        selectedItem: ITEMS_AS_BUTTONS[0],
      })
    );
    expect(ON_CLICK).toHaveBeenCalledTimes(1);
    expect((getByRole("combobox") as HTMLInputElement).value).toBe(
      ITEMS_AS_BUTTONS[0].label
    );

    await user.keyboard("{arrowdown}");
    await user.keyboard("{arrowdown}");
    await user.keyboard("{enter}");

    expect(ON_CHANGE).toHaveBeenLastCalledWith(
      expect.objectContaining({
        selectedItem: ITEMS_AS_BUTTONS[1],
      })
    );
    expect(ON_CLICK).toHaveBeenCalledTimes(2);
    expect((getByRole("combobox") as HTMLInputElement).value).toBe(
      ITEMS_AS_BUTTONS[1].label
    );
  });
});

/** ----------------------------------------------------------------------------- */

describe("<SelectSingle />", () => {
  test("should have error styling", () => {
    const { getByRole, getByText } = renderComponent({
      ...PROPS,
      invalid: true,
    });

    const combobox = getByRole("combobox");

    expect(combobox).toHaveClass(a11yError);
    expect(combobox.parentElement?.parentElement).toHaveClass(
      variantColorOverlay.red
    );
    expect(getByText(LOREM.errorMessage())).not.toBeNull();
  });
});

/** ----------------------------------------------------------------------------- */

describe("<SelectSingle />", () => {
  describe("Initial selected item", () => {
    test("should have value of initial selected item", async () => {
      const { getByRole } = renderComponent({
        ...PROPS,
        initialSelectedItem: PROPS.items[0],
      });

      const combobox = getByRole("combobox");
      expect((combobox as HTMLInputElement).value).toBe(PROPS.items[0].label);
    });
  });
});

/** ----------------------------------------------------------------------------- */

describe("<SelectSingle />", () => {
  describe("Disabled state", () => {
    test("should not show dropdown menu when user clicks", async () => {
      const { getByRole } = renderComponent({ ...PROPS, disabled: true });

      const combobox = getByRole("combobox");
      await userEvent.click(combobox);

      const menu = getByRole("listbox", { hidden: true });
      expect(menu).not.toBeVisible();
    });

    test("should not show dropdown menu when user attempts keyboard navigation", async () => {
      const { getByRole } = renderComponent({ ...PROPS, disabled: true });

      await userEvent.tab();
      await userEvent.keyboard("{arrowdown}");

      const menu = getByRole("listbox", { hidden: true });
      expect(menu).not.toBeVisible();
    });
  });
});

/** ----------------------------------------------------------------------------- */

describe("<SelectSingle />", () => {
  describe("dialog / dropdown menu", () => {
    test("should not be visible on first mount", () => {
      const { getByRole } = renderComponent(PROPS);

      const menu = getByRole("listbox", { hidden: true });
      expect(menu).not.toBeVisible();
    });

    test("should be visible after user clicks on select", async () => {
      const { getByRole, user } = renderComponent(PROPS);

      const combobox = getByRole("combobox");
      await user.click(combobox);

      const menu = getByRole("listbox");
      expect(menu).toBeVisible();
    });

    test("should be visible after user opens select with keyboard", async () => {
      const { getByRole, user } = renderComponent(PROPS);

      await user.tab();
      await user.keyboard("{arrowdown}");

      const menu = getByRole("listbox");
      expect(menu).toBeVisible();
    });
  });
});
