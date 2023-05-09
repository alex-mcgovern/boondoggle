/* eslint-disable import/no-extraneous-dependencies */
import { jest } from "@storybook/jest";

import { SelectButton as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { mockSelectItems } from "../__mocks__/select.mock";

import type { SelectButtonProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

const ON_CHANGE = jest.fn();

const ITEMS = mockSelectItems({});

const PROPS: StoryCompProps = {
  items: ITEMS,
  id: LOREM.id(),
  name: LOREM.name(),
  onChange: ON_CHANGE,
  buttonText: LOREM.button,
};

export default {
  title: "Components/SelectButton",
  component: StoryComp,
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }) => {
  return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
  render: Template,
  args: PROPS,
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

export const ButtonProps: StoryObj<StoryCompProps> = {
  render: Template,
  args: {
    ...PROPS,
    buttonProps: {
      appearance: "tertiary",
      size: "sm",
    },
  },
};
