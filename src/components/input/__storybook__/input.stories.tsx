import { faTriangleCircleSquare } from "@fortawesome/free-solid-svg-icons";

import { Input as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { Icon } from "../../icon";
import { Loader } from "../../loader";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "React Components/Input",
  component: StoryComp,
  args: {
    placeholder: LOREM.placeholder(),
    name: LOREM.name(),
  },
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Customisation examples
 */
export const CustomisationMargin: Story = {
  name: "customisation/margin",
  args: {
    margin: "spacing5",
  },
};

/**
 * Label
 */
export const Label: Story = {
  name: "label",
  args: {
    label: LOREM.label(),
    id: LOREM.id(),
  },
};

/**
 * Size
 */
export const SizeSm: Story = {
  name: "size/sm",

  args: { size: "sm" },
};
export const SizeMd: Story = {
  name: "size/md",

  args: { size: "md" },
};
export const SizeLg: Story = {
  name: "size/lg",

  args: { size: "lg" },
};

/**
 * Slot props
 */
export const SlotLeftIcon: Story = {
  name: "slotLeft/icon",
  args: { slotLeft: <Icon icon={faTriangleCircleSquare} /> },
};
export const SlotRightIcon: Story = {
  name: "slotRight/icon",
  args: { slotRight: <Icon icon={faTriangleCircleSquare} /> },
};
export const SlotRightLoader: Story = {
  name: "slotRight/loader",
  args: { slotRight: <Loader /> },
};

/**
 * State
 */
export const StateHover: Story = {
  name: "state/hover",
  parameters: { pseudo: { hover: true } },
};
export const StateFocusVisible: Story = {
  name: "state/focus-visible",
  parameters: { pseudo: { focusVisible: true } },
};
export const StateDisabled: Story = {
  name: "state/disabled",
  args: { disabled: true },
};
export const StateReadOnly: Story = {
  name: "state/readOnly",
  args: { readOnly: true },
};
