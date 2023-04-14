import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { Collapsible as StoryComponent } from ".";
import { WithDarkLightMode } from "../../../.storybook/with_dark_light_mode";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Box } from "../box";
import { Icon } from "../icon";

import type { CollapsibleProps as StoryComponentProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "React components/Collapsible",
  component: StoryComponent,
};

const TriggerNode = (
  <Box display="flex" alignItems="center">
    Open collapsible
    <Icon marginLeft="auto" icon={faAngleDown} />
  </Box>
);

const Template: StoryFn<StoryComponentProps> = ({
  ...rest
}: StoryComponentProps) => {
  return <StoryComponent {...rest} triggerNode={TriggerNode} />;
};

export const Default: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "default",
  parameters: {
    layout: "fullscreen",
  },
  decorators: [WithDarkLightMode],
  args: {
    children: LOREM.title_xl,
  },
};
