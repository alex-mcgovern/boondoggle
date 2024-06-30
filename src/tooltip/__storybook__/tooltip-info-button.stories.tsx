import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "..";

const meta = {
    component: Tooltip.InfoButton,
    render: (p) => (
        <Tooltip.Root>
            <Tooltip.InfoButton {...p} />
            <Tooltip.Body>
                <p>Some helpful information</p>
            </Tooltip.Body>
        </Tooltip.Root>
    ),
    title: "Tooltip/InfoButton",
} satisfies Meta<typeof Tooltip.InfoButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
