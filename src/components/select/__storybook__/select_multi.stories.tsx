import { jest } from "@storybook/jest";

import { SelectMulti as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { mockSelectItems } from "../__mocks__/select.mock";

import type { SelectMultiProps as StoryCompProps } from "../select_multi.comp";
import type { StoryFn, StoryObj } from "@storybook/react";

const ON_CHANGE = jest.fn();

const ITEMS = mockSelectItems();

const PROPS: StoryCompProps = {
  items: ITEMS,
  id: LOREM.id(),
  label: LOREM.label(),
  name: LOREM.name(),
  onChange: ON_CHANGE,
  placeholder: LOREM.placeholder(),
};

export default {
  title: "React components/SelectMulti",
  component: StoryComp,
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
  render: Template,
  args: PROPS,
};

export const InitialSelectedItems: StoryObj<StoryCompProps> = {
  render: Template,
  args: {
    ...PROPS,
    initialSelectedItems: [ITEMS[0]],
  },
};
