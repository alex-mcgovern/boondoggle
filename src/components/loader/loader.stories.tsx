import React from "react";

import { Loader as StoryComponent } from ".";
import { WithDarkLightMode } from "../../../.storybook/with_dark_light_mode";

import type { LoaderProps as StoryComponentProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "React components/Loader",
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
  decorators: [WithDarkLightMode],
};
