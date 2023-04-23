import { InputErrorMessage as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "React components/InputErrorMessage",
  component: StoryComp,
  args: {
    message: LOREM.errorMessage(),
  },
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
