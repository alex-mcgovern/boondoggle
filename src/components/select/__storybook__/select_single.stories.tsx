/* eslint-disable import/no-extraneous-dependencies */
import { jest } from "@storybook/jest";

import { SelectSingle as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { mockSelectItems } from "../__mocks__/select.mock";

import type { SelectSingleProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

const ON_CHANGE = jest.fn();

const ITEMS = mockSelectItems({});

const PROPS: StoryCompProps = {
  items: ITEMS,
  id: LOREM.id(),
  label: LOREM.label(),
  name: LOREM.name(),
  onChange: ON_CHANGE,
  placeholder: LOREM.placeholder(),
};

export default {
  title: "React components/SelectSingle",
  component: StoryComp,
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }) => {
  return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
  render: Template,
  args: PROPS,
};

export const InitialSelectedItem: StoryObj<StoryCompProps> = {
  render: Template,
  args: {
    ...PROPS,
    initialSelectedItem: ITEMS[0],
  },
};

export const Invalid: StoryObj<StoryCompProps> = {
  render: Template,
  args: {
    ...PROPS,
    invalid: true,
    errorMessage: LOREM.errorMessage(),
  },
};

export const Filterable: StoryObj<StoryCompProps> = {
  render: Template,
  args: {
    ...PROPS,
    isFilterable: true,
  },
};

export const Disabled: StoryObj<StoryCompProps> = {
  render: Template,
  args: {
    ...PROPS,
    disabled: true,
  },
};

export const SlotLeft: StoryObj<StoryCompProps> = {
  render: Template,
  args: {
    ...PROPS,
    items: mockSelectItems({ withIcon: true }),
  },
};
