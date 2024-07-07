import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";

import { CollapsibleCard } from "..";

const meta = {
    args: {},
    component: CollapsibleCard.Root,
    parameters: {
        layout: "padded",
    },
    title: "CollapsibleCard",
} satisfies Meta<typeof CollapsibleCard.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
    render: (p) => {
        return (
            <CollapsibleCard.Root {...p}>
                <CollapsibleCard.Header>
                    <h3>What does this mean?</h3>
                </CollapsibleCard.Header>
                <CollapsibleCard.Body>
                    {faker.lorem.paragraphs(3)}
                </CollapsibleCard.Body>
            </CollapsibleCard.Root>
        );
    },
};
