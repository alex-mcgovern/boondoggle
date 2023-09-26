import { InputCurrency as StoryComp } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    args: {
        currency: "USD",
        name: "input_currency",
        onChange: (e) => {
            console.info(e.target.value);
        },
        region: "en-US",
    },
    component: StoryComp,
    title: "Components/InputCurrency",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
