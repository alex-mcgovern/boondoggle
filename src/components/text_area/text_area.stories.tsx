import { faTriangleCircleSquare } from "@fortawesome/free-solid-svg-icons";
import React from "react";

import { TextArea as StoryComponent } from ".";
import { Icon } from "../icon";
import { Loader } from "../loader";

import type { TextAreaProps as StoryComponentProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

export default {
  title: "React components/TextArea",
  component: StoryComponent,
};
const Template: StoryFn<StoryComponentProps> = ({
  placeholder = "Type something",
  name,
  ...rest
}: StoryComponentProps) => {
  return <StoryComponent placeholder={placeholder} name={name} {...rest} />;
};

/**
 * Customisation examples
 */
export const CustomisationMargin: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "customisation/margin",
  args: { margin: "spacing5" },
};

/**
 * Size
 */
export const SizeSm: StoryObj<StoryComponentProps> = {
  name: "size/sm",
  render: Template,
  args: { size: "sm" },
};
export const SizeMd: StoryObj<StoryComponentProps> = {
  name: "size/md",
  render: Template,
  args: { size: "md" },
};
export const SizeLg: StoryObj<StoryComponentProps> = {
  name: "size/lg",
  render: Template,
  args: { size: "lg" },
};

/**
 * Slot props
 */
export const SlotLeftIcon: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "slotLeft/icon",
  args: { slotLeft: <Icon icon={faTriangleCircleSquare} /> },
};
export const SlotRightIcon: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "slotRight/icon",
  args: { slotRight: <Icon icon={faTriangleCircleSquare} /> },
};
export const SlotRightLoader: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "slotRight/loader",
  args: { slotRight: <Loader /> },
};

/**
 * State
 */
export const StateHover: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "state/hover",
  parameters: { pseudo: { hover: true } },
};
export const StateFocusVisible: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "state/focus-visible",
  parameters: { pseudo: { focusVisible: true } },
};
export const StateDisabled: StoryObj<StoryComponentProps> = {
  render: Template,
  name: "state/disabled",
  args: { disabled: true },
};
