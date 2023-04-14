import React from "react";

import { Tag as StoryComponent } from ".";
import { WithDarkLightMode } from "../../../.storybook/with_dark_light_mode";

import type { TagProps as StoryComponentProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "React components/Tag",
  component: StoryComponent,
};

const Template: StoryFn<StoryComponentProps> = ({
  ...rest
}: StoryComponentProps) => {
  return <StoryComponent {...rest} />;
};

export const Default: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "default",
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: "Tag",
  },
  decorators: [WithDarkLightMode],
};
