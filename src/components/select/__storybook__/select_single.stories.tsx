/* eslint-disable import/no-extraneous-dependencies */
import { jest } from "@storybook/jest";

import { SelectSingle as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { mockSelectItems } from "../__mocks__/select.mock";

import type { Meta, StoryObj } from "@storybook/react";

const ON_CHANGE = jest.fn();

const ITEMS = mockSelectItems({});

const meta = {
  title: "React components/SelectSingle",
  component: StoryComp,
  args: {
    items: ITEMS,
    id: LOREM.id(),
    label: LOREM.label(),
    name: LOREM.name(),
    onChange: ON_CHANGE,
    placeholder: LOREM.placeholder(),
  },
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
    invalid: true,
    errorMessage: LOREM.errorMessage(),
  },
};

export const Filterable: Story = {
  args: {
    isFilterable: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const SlotLeft: Story = {
  args: {
    items: mockSelectItems({ withIcon: true }),
  },
};
