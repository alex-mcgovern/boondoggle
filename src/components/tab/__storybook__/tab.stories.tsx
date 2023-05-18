import { faShapes } from "@fortawesome/free-solid-svg-icons";

import { Tab as StoryComp } from "..";
import { Icon } from "../../icon";

import type { TabProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  component: StoryComp,
  title: "React components/Tab",
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
  args: {
    children: "Tab",
  },
  name: "default",
  render: Template,
};

export const ColorOverlayBlue: StoryObj<StoryCompProps> = {
  args: {
    children: "Tab",
    colorOverlay: "blue",
    slotLeft: <Icon icon={faShapes} />,
  },
  name: "default",
  render: Template,
};

export const ColorOverlayAmber: StoryObj<StoryCompProps> = {
  args: {
    children: "Tab",
    colorOverlay: "amber",
    slotLeft: <Icon icon={faShapes} />,
  },
  name: "default",
  render: Template,
};

export const ColorOverlayGreen: StoryObj<StoryCompProps> = {
  args: {
    children: "Tab",
    colorOverlay: "green",
    slotLeft: <Icon icon={faShapes} />,
  },
  name: "default",
  render: Template,
};

export const ColorOverlayRed: StoryObj<StoryCompProps> = {
  args: {
    children: "Tab",
    colorOverlay: "red",
    slotLeft: <Icon icon={faShapes} />,
  },
  name: "default",
  render: Template,
};
