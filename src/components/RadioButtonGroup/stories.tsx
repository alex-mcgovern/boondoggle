import { RadioButtonGroup as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { RADIO_BUTTONS_MOCK } from "./mocks";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  args: {
    errorMessage: LOREM.errorMessage(),
    id: LOREM.id(),
    items: RADIO_BUTTONS_MOCK,
    label: LOREM.label(),
    name: LOREM.name(),
  },
  component: StoryComp,
  title: "React components/RadioButton",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

/** -----------------------------------------------------------------------------
 * Default
 * ------------------------------------------------------------------------------- */

export const Default: Story = {};

/** -----------------------------------------------------------------------------
 * Invalid
 * ------------------------------------------------------------------------------- */

export const Invalid: Story = {
  args: {
    invalid: true,
    items: RADIO_BUTTONS_MOCK,
  },
};

/** -----------------------------------------------------------------------------
 * Default value
 * ------------------------------------------------------------------------------- */

export const DefaultValue: Story = {
  args: {
    defaultValue: RADIO_BUTTONS_MOCK[0].value,
    items: RADIO_BUTTONS_MOCK,
  },
};

/** -----------------------------------------------------------------------------
 * With hidden label
 * ------------------------------------------------------------------------------- */

export const WithHiddenLabel: Story = {
  args: {
    isLabelVisible: false,
    items: RADIO_BUTTONS_MOCK,
  },
};
