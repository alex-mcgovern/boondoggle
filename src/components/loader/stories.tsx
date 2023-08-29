import { type StoryObj } from "@storybook/react";

import { Loader as StoryComp, type LoaderProps as StoryCompProps } from ".";

import type { StoryFn } from "@storybook/react";

export default {
  component: StoryComp,
  title: "Components/Loader",
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
  render: Template,
};
