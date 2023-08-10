import { DialogModalActionConfirm as StoryComp } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  args: {
    buttonText: "Freeze account",
    confirmText: "freeze account",
    onClick: () => {
      alert("Confirmed");
    },
    promptPrefix: "Please type",
    promptSuffix: "to continue",
  },
  component: StoryComp,
  title: "Components/DialogModalActionConfirm",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

/** -----------------------------------------------------------------------------
 * Default
 * ------------------------------------------------------------------------------- */

export const Default: Story = {};

/** -----------------------------------------------------------------------------
 * With color overlay
 * ------------------------------------------------------------------------------- */

export const WithColorOverlay: Story = {
  args: {
    colorOverlay: "red",
  },
};
