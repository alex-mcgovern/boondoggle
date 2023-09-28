import { InputDate as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    component: StoryComp,
    title: "Components/InputDate",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: LOREM.id(),
        label: LOREM.label(),
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
    },
};

export const WithDefaultValue: Story = {
    args: {
        defaultValue: "2021-01-01",
        id: LOREM.id(),
        label: LOREM.label(),
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
    },
};
