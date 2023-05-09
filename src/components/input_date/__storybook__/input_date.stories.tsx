import { LOREM } from "../../../../mocks/LOREM.mock";
import { InputDate as StoryComp } from "../input_date.comp";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/InputDate",
  component: StoryComp,
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
  args: {
    placeholder: LOREM.placeholder(),
    label: LOREM.label(),
    id: LOREM.id(),
    name: LOREM.name(),
  },
};
