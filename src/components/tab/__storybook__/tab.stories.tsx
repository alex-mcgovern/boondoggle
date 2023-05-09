import { faShapes } from "@fortawesome/free-solid-svg-icons";

import { Tab as StoryComp } from "..";
import { Icon } from "../../icon";

import type { TabProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "Components/Tab",
  component: StoryComp,
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
  render: Template,
  name: "default",
  args: {
    children: "Tab",
  },
};

export const ColorOverlayBlue: StoryObj<StoryCompProps> = {
  render: Template,
  name: "default",
  args: {
    children: "Tab",
    colorOverlay: "blue",
    slotLeft: <Icon icon={faShapes} />,
  },
};

export const ColorOverlayAmber: StoryObj<StoryCompProps> = {
  render: Template,
  name: "default",
  args: {
    children: "Tab",
    colorOverlay: "amber",
    slotLeft: <Icon icon={faShapes} />,
  },
};

export const ColorOverlayGreen: StoryObj<StoryCompProps> = {
  render: Template,
  name: "default",
  args: {
    children: "Tab",
    colorOverlay: "green",
    slotLeft: <Icon icon={faShapes} />,
  },
};

export const ColorOverlayRed: StoryObj<StoryCompProps> = {
  render: Template,
  name: "default",
  args: {
    children: "Tab",
    colorOverlay: "red",
    slotLeft: <Icon icon={faShapes} />,
  },
};
