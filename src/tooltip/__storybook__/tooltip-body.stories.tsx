import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "..";

const meta = {
    argTypes: {
        placement: {
            control: {
                type: "select",
            },
            options: ["top", "right", "bottom", "left"],
        },
    },
    component: Tooltip.Body,
    render: (p) => (
        <Tooltip.Root>
            <Tooltip.InfoButton />
            <Tooltip.Body {...p}>
                <p>Some helpful information</p>
            </Tooltip.Body>
        </Tooltip.Root>
    ),
    title: "Tooltip/Body",
} satisfies Meta<typeof Tooltip.Body>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Placement: Story = {
    name: "Placement: Top",
    render: (p) => (
        <Tooltip.Root>
            <Tooltip.InfoButton />
            <Tooltip.Body {...p}>
                <p>I appear on the {p.placement}</p>
            </Tooltip.Body>
        </Tooltip.Root>
    ),
};
