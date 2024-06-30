import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from "..";
import { Button, LinkButton } from "../../button";
import { Grid } from "../../grid";

const meta = {
    args: {
        children: null,
        closeDelay: 500,
        delay: 1500,
    },
    argTypes: {
        closeDelay: {
            control: {
                step: 100,
                type: "number",
            },
        },
        delay: {
            control: {
                step: 100,
                type: "number",
            },
        },
    },
    component: Tooltip.Root,
    render: (p) => (
        <Tooltip.Root {...p}>
            <Tooltip.InfoButton />
            <Tooltip.Body>
                <p>Some helpful information</p>
            </Tooltip.Body>
        </Tooltip.Root>
    ),
    title: "Tooltip/Root",
} satisfies Meta<typeof Tooltip.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * The `Tooltip` component exports a re-usable button, with a relevant icon
 * that can be used to trigger a tooltip.
 */
export const TriggerInfoButton: Story = {
    name: "Trigger: Tooltip.InfoButton",
    render: (p) => (
        <Tooltip.Root {...p}>
            <Tooltip.InfoButton />
            <Tooltip.Body>
                <p>Some helpful information</p>
            </Tooltip.Body>
        </Tooltip.Root>
    ),
};

export const TriggerButton: Story = {
    name: "Trigger: Button",
    render: (p) => (
        <Tooltip.Root {...p}>
            <Button appearance="secondary">Button</Button>
            <Tooltip.Body>
                <p>You can use a button as a trigger</p>
            </Tooltip.Body>
        </Tooltip.Root>
    ),
};

export const TriggerLink: Story = {
    name: "Trigger: Link",
    render: (p) => (
        <Tooltip.Root {...p}>
            <LinkButton appearance="secondary">Link</LinkButton>
            <Tooltip.Body>
                <p>You can use a link as a trigger</p>
            </Tooltip.Body>
        </Tooltip.Root>
    ),
};

export const Delay: Story = {
    name: "Delay",
    render: (p) => (
        <Grid columns={2}>
            <Tooltip.Root {...p}>
                <Button appearance="secondary">Hover me</Button>
                <Tooltip.Body>
                    <p>I come up after a delay</p>
                </Tooltip.Body>
            </Tooltip.Root>
            <Tooltip.Root {...p}>
                <Button appearance="secondary">Then hover me</Button>
                <Tooltip.Body>
                    <p>If you did it quickly, I appear immediately</p>
                </Tooltip.Body>
            </Tooltip.Root>
        </Grid>
    ),
};
