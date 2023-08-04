import { faShapes } from "@fortawesome/pro-light-svg-icons";

import { Tag as StoryComp } from "..";
import { Icon } from "../../decorative.icon";

import type { TagProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  component: StoryComp,
  title: "React components/Tag",
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
  args: {
    children: "Tag",
  },
  render: Template,
};

export const SizeSm: StoryObj<StoryCompProps> = {
  args: {
    children: "Tag",
    size: "sm",
    slotLeft: <Icon icon={faShapes} />,
  },
  render: Template,
};

export const SizeMd: StoryObj<StoryCompProps> = {
  args: {
    children: "Tag",
    size: "md",
    slotLeft: <Icon icon={faShapes} />,
  },

  render: Template,
};

export const SizeLg: StoryObj<StoryCompProps> = {
  args: {
    children: "Tag",
    size: "lg",
    slotLeft: <Icon icon={faShapes} />,
  },
  render: Template,
};

export const ColorOverlayBlue: StoryObj<StoryCompProps> = {
  args: {
    children: "Tag",
    colorOverlay: "blue",
    slotLeft: <Icon icon={faShapes} />,
  },
  render: Template,
};

export const ColorOverlayAmber: StoryObj<StoryCompProps> = {
  args: {
    children: "Tag",
    colorOverlay: "amber",
    slotLeft: <Icon icon={faShapes} />,
  },
  render: Template,
};

export const ColorOverlayGreen: StoryObj<StoryCompProps> = {
  args: {
    children: "Tag",
    colorOverlay: "green",
    slotLeft: <Icon icon={faShapes} />,
  },
  render: Template,
};

export const ColorOverlayRed: StoryObj<StoryCompProps> = {
  args: {
    children: "Tag",
    colorOverlay: "red",
    slotLeft: <Icon icon={faShapes} />,
  },
  render: Template,
};
