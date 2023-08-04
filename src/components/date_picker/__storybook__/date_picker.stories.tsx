import { DatePicker as StoryComp } from "..";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  args: {},
  component: StoryComp,
  title: "React components/DatePicker",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
