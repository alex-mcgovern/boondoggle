import { jest } from "@storybook/jest";

import { SelectMulti as StoryComp } from "../..";
import { LOREM } from "../../../../../mocks/LOREM.mock";
import { mockSelectItems } from "../../__mocks__/select.mock";

import type { Meta, StoryObj } from "@storybook/react";

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
  title: "React components/SelectMulti",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InitialSelectedItems: Story = {
  args: {
    initialSelectedItems: [ITEMS[0]],
  },
};

export const SlotLeft: Story = {
  args: {
    items: mockSelectItems({ withIcon: true }),
  },
};
