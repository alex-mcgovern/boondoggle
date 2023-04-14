import React from "react";

import { Dialog as StoryComponent } from ".";
import { WithDarkLightMode } from "../../../.storybook/with_dark_light_mode";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Button } from "../button";

import type { DialogProps as StoryComponentProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "React components/Dialog",
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
    triggerNode: <Button name="Dialog button">Open dialog</Button>,
    children: LOREM.text_xxl,
    title: LOREM.text_xxs,
  },
};
