import { Slider as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "React Components/Slider",
  component: StoryComp,
  args: {
    name: LOREM.name(),
  },
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
