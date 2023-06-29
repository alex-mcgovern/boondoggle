import { faTriangleCircleSquare } from "@fortawesome/pro-light-svg-icons";

import { Input as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { Icon } from "../../icon";
import { Loader } from "../../loader";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  args: {
    name: LOREM.name(),
    placeholder: LOREM.placeholder(),
  },
  component: StoryComp,
  title: "React components/Input",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Customisation examples
 */
export const CustomisationMargin: Story = {
  args: {
    wrapperProps: {
      margin: "spacing_5",
    },
  },
  name: "customisation/margin",
};

/**
 * Label
 */
export const Label: Story = {
  args: {
    id: LOREM.id(),
    label: LOREM.label(),
  },
  name: "label",
};

export const Invalid: Story = {
  args: {
    id: LOREM.id(),
    invalid: true,
    label: LOREM.label(),
  },
  name: "invalid",
};

export const HasBorderFalse: Story = {
  args: {
    hasBorder: false,
    id: LOREM.id(),
    label: LOREM.label(),
  },
  name: "has-border/false",
};

/**
 * Size
 */
export const SizeSm: Story = {
  args: { size: "sm" },

  name: "size/sm",
};
export const SizeMd: Story = {
  args: { size: "md" },

  name: "size/md",
};
export const SizeLg: Story = {
  args: { size: "lg" },

  name: "size/lg",
};

/**
 * Slot props
 */
export const SlotLeftIcon: Story = {
  args: { slotLeft: <Icon icon={faTriangleCircleSquare} /> },
  name: "slotLeft/icon",
};
export const SlotRightIcon: Story = {
  args: { slotRight: <Icon icon={faTriangleCircleSquare} /> },
  name: "slotRight/icon",
};
export const SlotRightLoader: Story = {
  args: { slotRight: <Loader /> },
  name: "slotRight/loader",
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
  args: { disabled: true },
  name: "state/disabled",
};
export const StateReadOnly: Story = {
  args: { readOnly: true },
  name: "state/readOnly",
};
