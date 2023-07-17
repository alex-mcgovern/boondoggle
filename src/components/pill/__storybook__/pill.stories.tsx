import { faShapes } from "@fortawesome/pro-light-svg-icons";

import { Pill as StoryComp } from "..";
import { Icon } from "../../icon";

import type { PillProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  component: StoryComp,
  title: "React components/Pill",
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
  return <StoryComp {...rest} />;
};

export const Default: StoryObj<StoryCompProps> = {
  args: {
    children: "Pill",
  },
  render: Template,
};

export const SizeSm: StoryObj<StoryCompProps> = {
  args: {
    children: "Pill",
    size: "sm",
    slotLeft: <Icon icon={faShapes} />,
  },
  render: Template,
};

export const SizeMd: StoryObj<StoryCompProps> = {
  args: {
    children: "Pill",
    size: "md",
    slotLeft: <Icon icon={faShapes} />,
  },

  render: Template,
};

export const SizeLg: StoryObj<StoryCompProps> = {
  args: {
    children: "Pill",
    size: "lg",
    slotLeft: <Icon icon={faShapes} />,
  },
  render: Template,
};

export const ColorOverlayBlue: StoryObj<StoryCompProps> = {
  args: {
    children: "Pill",
    colorOverlay: "blue",
    slotLeft: <Icon icon={faShapes} />,
  },
  render: Template,
};

export const ColorOverlayAmber: StoryObj<StoryCompProps> = {
  args: {
    children: "Pill",
    colorOverlay: "amber",
    slotLeft: <Icon icon={faShapes} />,
  },
  render: Template,
};

export const ColorOverlayGreen: StoryObj<StoryCompProps> = {
  args: {
    children: "Pill",
    colorOverlay: "green",
    slotLeft: <Icon icon={faShapes} />,
  },
  render: Template,
};

export const ColorOverlayRed: StoryObj<StoryCompProps> = {
  args: {
    children: "Pill",
    colorOverlay: "red",
    slotLeft: <Icon icon={faShapes} />,
  },
  render: Template,
};
