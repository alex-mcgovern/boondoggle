import {
  faArrowRightArrowLeft,
  faBank,
  faShapes,
} from "@fortawesome/pro-light-svg-icons";

import { LOREM } from "../../../../mocks/LOREM.mock";
import { Icon } from "../../icon";
import { RadioButtonCards as StoryComp } from "../radio_button_cards.comp";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  args: {
    errorMessage: LOREM.errorMessage(),
    id: LOREM.id(),
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
    label: LOREM.label(),
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

export const Invalid: Story = {
  args: {
    invalid: true,
    items: [
      {
        adornment: <Icon icon={faBank} size="xl" />,
        body: LOREM.text_md,
        title: "Invalid 1",
      },
      {
        adornment: <Icon icon={faArrowRightArrowLeft} size="xl" />,
        body: LOREM.text_md,
        title: "Invalid 2",
      },
      {
        adornment: <Icon icon={faShapes} size="xl" />,
        body: LOREM.text_md,
        title: "Invalid 3",
      },
    ],
  },
  name: "default",
};
