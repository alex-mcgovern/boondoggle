/* eslint-disable import/no-extraneous-dependencies */
import { faGlobeAfrica } from "@fortawesome/pro-light-svg-icons";
import { expect, jest } from "@storybook/jest";
import { userEvent, waitFor, within } from "@storybook/testing-library";

import { SelectSingle as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Icon } from "../icon";
import { mockSelectItems } from "../select/__mocks__/select.mock";

import type { SelectItemShape } from "../select/types";
import type { Meta, StoryObj } from "@storybook/react";
import type { UseComboboxStateChange } from "downshift";

const ON_CHANGE = jest.fn();

const ITEMS = mockSelectItems({});

const meta = {
  args: {
    id: LOREM.id(),
    items: ITEMS,
    label: LOREM.label(),
    name: LOREM.name(),
    onChange: ON_CHANGE,
    placeholder: LOREM.placeholder(),
  },
  component: StoryComp,
  title: "Components/SelectSingle",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InitialSelectedItem: Story = {
  args: {
    initialSelectedItem: ITEMS[0],
  },
};

export const Invalid: Story = {
  args: {
    errorMessage: LOREM.errorMessage(),
    invalid: true,
  },
};

export const Filterable: Story = {
  args: {
    isFilterable: true,
  },
};

export const Customisation: Story = {
  args: {
    wrapperProps: {
      marginBottom: "spacing_3",
    },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const SizeSm: Story = {
  args: {
    size: "sm",
  },
};
export const SizeMd: Story = {
  args: {
    size: "md",
  },
};
export const SizeLg: Story = {
  args: {
    size: "lg",
  },
};

export const OnChange: Story = {
  args: {
    onChange: (changes: UseComboboxStateChange<SelectItemShape>) => {
      alert(changes.selectedItem?.label);
    },
  },
};

export const ItemOnClick: Story = {
  args: {
    items: [
      {
        as: "button",
        label: "United Kingdom",
        onClick: () => {
          alert("clicked");
        },
        value: "uk",
      },
    ],
  },
};

export const ItemsWithIsSelectedTrue: Story = {
  args: {
    items: [
      {
        isSelected: true,
        label: "United Kingdom",
        value: "uk",
      },
      {
        isSelected: false,
        label: "France",
        value: "fr",
      },
      {
        isSelected: false,
        label: "Germany",
        value: "de",
      },
    ],
  },
};

export const PlayKeyboardNavigation: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole("combobox");

    // await userEvent.click(combobox);

    await userEvent.keyboard("{tab}");
    await userEvent.keyboard("{tab}");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{arrowdown}");
    await userEvent.keyboard("{enter}");

    await waitFor(() => {
      expect((combobox as HTMLInputElement).value).toBe(ITEMS[0].label);
    });
  },
};

export const SlotLeft: Story = {
  args: {
    items: mockSelectItems({ withIcon: true }),
    slotLeft: <Icon icon={faGlobeAfrica} />,
  },
};
