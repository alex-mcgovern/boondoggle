import { faShapes } from "@fortawesome/free-solid-svg-icons";

import { Tag as StoryComp } from "..";
import { Icon } from "../../icon";

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
  args: {
    children: "Tag",
  },
};

export const ColorOverlayBlue: StoryObj<StoryCompProps> = {
  render: Template,
  name: "default",
  args: {
    children: "Tag",
    colorOverlay: "blue",
    slotLeft: <Icon icon={faShapes} />,
  },
};

export const ColorOverlayAmber: StoryObj<StoryCompProps> = {
  render: Template,
  name: "default",
  args: {
    children: "Tag",
    colorOverlay: "amber",
    slotLeft: <Icon icon={faShapes} />,
  },
};

export const ColorOverlayGreen: StoryObj<StoryCompProps> = {
  render: Template,
  name: "default",
  args: {
    children: "Tag",
    colorOverlay: "green",
    slotLeft: <Icon icon={faShapes} />,
  },
};

export const ColorOverlayRed: StoryObj<StoryCompProps> = {
  render: Template,
  name: "default",
  args: {
    children: "Tag",
    colorOverlay: "red",
    slotLeft: <Icon icon={faShapes} />,
  },
};
