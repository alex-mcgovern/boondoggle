import type { Meta, StoryObj } from "@storybook/react";

import { TextField } from "..";
import { FieldDescription } from "../../field-description";
import { FieldError } from "../../field-error";
import { Group } from "../../group";
import { Input } from "../../input";
import { Label } from "../../label";
import { TextArea } from "../../text-area";
import { Toaster } from "../../toaster";
import { Tooltip } from "../../tooltip";

const meta = {
    component: TextField.Root,
    decorators: [
        (Story) => {
            return (
                <>
                    <Toaster />
                    <Story />
                </>
            );
        },
    ],
    title: "TextField/Root",
} satisfies Meta<typeof TextField.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Label>Full name</Label>
                <Input />
            </>
        ),
    },
};

export const CopyButton: Story = {
    args: {
        value: "7CDF1B04-2E38-4369-B0AE-A91D9F9B346D",
    },
    render: (args) => {
        return (
            <TextField.Root {...args}>
                <Label>Reference number</Label>
                <Group>
                    <Input unstyled />
                    <TextField.CopyButton />
                </Group>
            </TextField.Root>
        );
    },
};

export const ClearButton: Story = {
    args: {
        value: "Hello world",
    },
    render: (args) => {
        return (
            <TextField.Root {...args}>
                <Label>Search</Label>
                <Group>
                    <Input unstyled />
                    <TextField.ClearButton />
                </Group>
            </TextField.Root>
        );
    },
};

export const Description: Story = {
    render: (args) => {
        return (
            <TextField.Root {...args}>
                <Label>Preferred name</Label>
                <Input />
                <FieldDescription>What should we call you?</FieldDescription>
            </TextField.Root>
        );
    },
};

export const Invalid: Story = {
    args: {
        isInvalid: true,
    },
};

export const InvalidWithError: Story = {
    args: {
        isInvalid: true,
    },
    render: (args) => {
        return (
            <TextField.Root {...args}>
                <Label>First name</Label>
                <Input />
                <FieldError>This field is required</FieldError>
            </TextField.Root>
        );
    },
};

export const LabelTooltip: Story = {
    render: (args) => {
        return (
            <TextField.Root {...args}>
                <Label>
                    Label
                    <Tooltip.Root>
                        <Tooltip.InfoButton />
                        <Tooltip.Body placement="right">
                            Provide additional info about the field
                        </Tooltip.Body>
                    </Tooltip.Root>
                </Label>
                <Input />
            </TextField.Root>
        );
    },
};

export const Email: Story = {
    args: {
        autoComplete: "off",
        children: (
            <>
                <Label>Email address</Label>
                <Input />
            </>
        ),
        type: "email",
    },
};

export const Visibility: Story = {
    args: {
        autoComplete: "off",
        children: (
            <>
                <Label>Password</Label>
                <Group>
                    <Input unstyled />
                    <TextField.VisibilityButton />
                </Group>
            </>
        ),
        type: "password",
        value: "HYo2G$8Vvz",
    },
};

export const WithTextArea: Story = {
    args: {
        children: (
            <>
                <Label>Description of your issue</Label>
                <TextArea />
            </>
        ),
    },
};

export const KitchenSink: Story = {
    args: {
        value: "Hello world",
    },
    render: (args) => {
        return (
            <TextField.Root {...args}>
                <Label>Label</Label>
                <Group>
                    <Input unstyled />
                    <TextField.ClearButton />
                    <TextField.CopyButton />
                    <TextField.VisibilityButton />
                </Group>
            </TextField.Root>
        );
    },
};
