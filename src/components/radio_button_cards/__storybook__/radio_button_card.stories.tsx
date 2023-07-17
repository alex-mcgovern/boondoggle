import {
  faArrowRightArrowLeft,
  faBank,
  faShapes,
} from "@fortawesome/pro-light-svg-icons";

import { RadioButtonCards as StoryComp } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { Icon } from "../../icon";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  args: {
    items: [
      {
        adornment: <Icon icon={faBank} size="xl" />,
        body: LOREM.text_md,
        title: "Item 1",
      },
      {
        adornment: <Icon icon={faArrowRightArrowLeft} size="xl" />,
        body: LOREM.text_md,
        title: "Item 2",
      },
      {
        adornment: <Icon icon={faShapes} size="xl" />,
        body: LOREM.text_md,
        title: "Item 3",
      },
    ],
    name: LOREM.name(),
  },
  component: StoryComp,
  title: "React components/RadioButtonCard",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "default",
};
