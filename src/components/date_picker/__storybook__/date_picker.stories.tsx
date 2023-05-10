import { DatePicker as StoryComp } from "../date_picker.comp";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "React components/DatePicker",
  component: StoryComp,
  args: {},
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
