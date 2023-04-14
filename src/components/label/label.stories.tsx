import React from "react";

import { Label as StoryComponent } from ".";
import { WithDarkLightMode } from "../../../.storybook/with_dark_light_mode";
import { LOREM } from "../../../mocks/LOREM.mock";

import type { LabelProps as StoryComponentProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "React components/Label",
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
  args: {
    label: LOREM.text_xxs,
  },
};
