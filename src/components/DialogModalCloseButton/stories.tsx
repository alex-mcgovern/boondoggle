import { DialogModalCloseButton as StoryComp } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  args: {
    closeDialog: () => {
      return alert("closed");
    },
  },
  component: StoryComp,
  title: "Components/DialogModalCloseButton",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

/** -----------------------------------------------------------------------------
 * Default
 * ------------------------------------------------------------------------------- */

export const Default: Story = {};
