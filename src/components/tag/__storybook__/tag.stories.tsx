import { Tag as StoryComp } from "..";

import type { TagProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "React components/Tag",
  component: StoryComp,
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
  render: Template,
  name: "default",
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: "Tag",
  },
};

export const IntentGood: StoryObj<StoryCompProps> = {
  render: Template,
  name: "default",
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: "Tag",
    intent: "good",
  },
};

export const IntentBad: StoryObj<StoryCompProps> = {
  render: Template,
  name: "default",
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: "Tag",
    intent: "bad",
  },
};
