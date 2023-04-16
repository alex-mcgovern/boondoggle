import { faTriangleCircleSquare } from "@fortawesome/free-solid-svg-icons";

import { Input as StoryComp } from "..";
import { Icon } from "../../icon";
import { Loader } from "../../loader";

import type { InputProps as StoryCompProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "React components/Input",
  component: StoryComp,
};
const Template: StoryFn<StoryCompProps> = ({
  placeholder = "Type something",
  name,
  ...rest
}: StoryCompProps) => {
  return <StoryComp placeholder={placeholder} name={name} {...rest} />;
};

/**
 * Customisation examples
 */
export const CustomisationMargin: StoryObj<StoryCompProps> = {
  render: Template,
  name: "customisation/margin",
  args: { margin: "spacing5" },
};

/**
 * Size
 */
export const SizeSm: StoryObj<StoryCompProps> = {
  name: "size/sm",
  render: Template,
  args: { size: "sm" },
};
export const SizeMd: StoryObj<StoryCompProps> = {
  name: "size/md",
  render: Template,
  args: { size: "md" },
};
export const SizeLg: StoryObj<StoryCompProps> = {
  name: "size/lg",
  render: Template,
  args: { size: "lg" },
};

/**
 * Slot props
 */
export const SlotLeftIcon: StoryObj<StoryCompProps> = {
  render: Template,
  name: "slotLeft/icon",
  args: { slotLeft: <Icon icon={faTriangleCircleSquare} /> },
};
export const SlotRightIcon: StoryObj<StoryCompProps> = {
  render: Template,
  name: "slotRight/icon",
  args: { slotRight: <Icon icon={faTriangleCircleSquare} /> },
};
export const SlotRightLoader: StoryObj<StoryCompProps> = {
  render: Template,
  name: "slotRight/loader",
  args: { slotRight: <Loader /> },
};

/**
 * State
 */
export const StateHover: StoryObj<StoryCompProps> = {
  render: Template,
  name: "state/hover",
  parameters: { pseudo: { hover: true } },
};
export const StateFocusVisible: StoryObj<StoryCompProps> = {
  render: Template,
  name: "state/focus-visible",
  parameters: { pseudo: { focusVisible: true } },
};
export const StateDisabled: StoryObj<StoryCompProps> = {
  render: Template,
  name: "state/disabled",
  args: { disabled: true },
};
