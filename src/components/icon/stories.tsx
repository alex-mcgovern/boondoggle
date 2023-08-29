import { faShapes } from "@fortawesome/sharp-regular-svg-icons";
import { type StoryObj } from "@storybook/react";

import { Icon as StoryComp } from ".";

import type { IconProps as StoryCompProps } from ".";
import type { StoryFn } from "@storybook/react";

export default {
  component: StoryComp,
  title: "Components/Icon",
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
  args: {
    icon: faShapes,
  },
  render: Template,
};
