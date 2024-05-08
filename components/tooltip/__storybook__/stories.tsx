import type { Meta, StoryObj } from "@storybook/react";

import { useState } from "react";
import { Link } from "react-aria-components";

import type { TooltipProps } from "..";

import { Tooltip, TooltipTrigger, TooltipTriggerButton } from "..";
import { Button } from "../../button";

const meta = {
    args: {
        children: "I am a tooltip",
    },
    component: Tooltip,
    title: "Components/Tooltip",
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <TooltipTrigger delay={0}>
            <TooltipTriggerButton />
            <Tooltip {...args} />
        </TooltipTrigger>
    ),
};

export const Delay: Story = {
    render: (args) => (
        <div style={{ display: "flex", gap: 8 }}>
            <TooltipTrigger>
                <Button appearance="secondary">Hover me</Button>
                <Tooltip {...args}>I come up after a delay.</Tooltip>
            </TooltipTrigger>
            <TooltipTrigger>
                <Button appearance="secondary">Then hover me</Button>
                <Tooltip {...args}>
                    If you did it quickly, I appear immediately.
                </Tooltip>
            </TooltipTrigger>
        </div>
    ),
};

export const Trigger: Story = {
    render: (args) => (
        <TooltipTrigger trigger="focus">
            <Button appearance="secondary">Focus me</Button>
            <Tooltip {...args}>I come up when the button is focused.</Tooltip>
        </TooltipTrigger>
    ),
};

export function ControlledOpenStateTemplate(args: TooltipProps) {
    const [isOpen, setOpen] = useState(false);

    return (
        <div style={{ alignItems: "center", display: "flex", gap: 8 }}>
            <TooltipTrigger
                isOpen={isOpen}
                onOpenChange={setOpen}
            >
                <Button appearance="secondary">Focus me</Button>
                <Tooltip {...args}>Notifications</Tooltip>
            </TooltipTrigger>
            <span>Tooltip is {isOpen ? "showing" : "not showing"}</span>
        </div>
    );
}

export const ControlledOpenState: Story = {
    render: ControlledOpenStateTemplate,
};

export const WithButtonAsTrigger: Story = {
    render: (args) => (
        <TooltipTrigger>
            <Button>Test</Button>
            <Tooltip {...args} />
        </TooltipTrigger>
    ),
};

export const WithLinkAsTrigger: Story = {
    render: (args) => (
        <TooltipTrigger>
            <Link>Test</Link>
            <Tooltip {...args} />
        </TooltipTrigger>
    ),
};

export const Placement: Story = {
    args: {
        placement: "top",
    },
    render: (args) => (
        <TooltipTrigger delay={0}>
            <TooltipTriggerButton />
            <Tooltip {...args} />
        </TooltipTrigger>
    ),
};
