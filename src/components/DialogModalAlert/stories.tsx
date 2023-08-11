import { DialogModalAlert as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  args: {
    description: LOREM.text_md,
    title: LOREM.text_xxs,
  },
  component: StoryComp,
  title: "Components/DialogModalAlert",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

/** -----------------------------------------------------------------------------
 * Default
 * ------------------------------------------------------------------------------- */

export const Default: Story = {};

/** -----------------------------------------------------------------------------
 * Red
 * ------------------------------------------------------------------------------- */

export const Red: Story = {
  args: {
    colorOverlay: "red",
  },
};

/** -----------------------------------------------------------------------------
 * Blue
 * ------------------------------------------------------------------------------- */

export const Blue: Story = {
  args: {
    colorOverlay: "blue",
  },
};

/** -----------------------------------------------------------------------------
 * Green
 * ------------------------------------------------------------------------------- */

export const Green: Story = {
  args: {
    colorOverlay: "green",
  },
};

/** -----------------------------------------------------------------------------
 * Green
 * ------------------------------------------------------------------------------- */

export const Grey: Story = {
  args: {
    colorOverlay: "grey",
  },
};
