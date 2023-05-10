import { faShapes } from "@fortawesome/free-solid-svg-icons";

import { Icon as StoryComp } from "..";

import type { IconProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "React Components/Icon",
  component: StoryComp,
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
  render: Template,
  name: "default",
  args: {
    icon: faShapes,
  },
};
