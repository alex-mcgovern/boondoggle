import type { Meta, StoryObj } from "@storybook/react";

import { useRef } from "react";

import {
    TextField,
    TextFieldClearButton,
    TextFieldCopyButton,
    TextFieldVisibilityButton,
} from ".";
import { Button } from "../button";
import { css } from "../css/index.css";
import { FieldDescription } from "../field-description";
import { FieldError } from "../field-error";
import { Group } from "../group";
import { Input } from "../input";
import { Label } from "../label";
import { TextArea } from "../text-area";
import { Toaster } from "../toaster";
import { Tooltip, TooltipTrigger, TooltipTriggerButton } from "../tooltip";

const meta = {
    component: TextField,
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
    title: "TextField",
} satisfies Meta<typeof TextField>;

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
            <TextField {...args}>
                <Label>Reference number</Label>
                <Group>
                    <Input variant="unstyled" />
                    <TextFieldCopyButton />
                </Group>
            </TextField>
        );
    },
};

export const ClearButton: Story = {
    args: {
        value: "Hello world",
    },
    render: (args) => {
        return (
            <TextField {...args}>
                <Label>Search</Label>
                <Group>
                    <Input variant="unstyled" />
                    <TextFieldClearButton />
                </Group>
            </TextField>
        );
    },
};

export const Description: Story = {
    render: (args) => {
        return (
            <TextField {...args}>
                <Label>Preferred name</Label>
                <Input />
                <FieldDescription>What should we call you?</FieldDescription>
            </TextField>
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
            <TextField {...args}>
                <Label>First name</Label>
                <Input />
                <FieldError>This field is required</FieldError>
            </TextField>
        );
    },
};

export const LabelTooltip: Story = {
    render: (args) => {
        return (
            <TextField {...args}>
                <Label>
                    Label
                    <TooltipTrigger>
                        <TooltipTriggerButton />
                        <Tooltip placement="right">
                            Provide additional info about the field
                        </Tooltip>
                    </TooltipTrigger>
                </Label>
                <Input />
            </TextField>
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
                    <Input variant="unstyled" />
                    <TextFieldVisibilityButton />
                </Group>
            </>
        ),
        type: "password",
        value: "HYo2G$8Vvz",
    },
};

export const TestRef: Story = {
    args: {
        value: "Hello world",
    },
    render: (args) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const ref = useRef<HTMLInputElement>(null);

        return (
            <>
                <TextField
                    {...args}
                    className={css({ marginBottom: "space_2" })}
                    ref={ref}
                >
                    <Label>Label</Label>
                    <Input ref={ref} />
                </TextField>
                <Button
                    appearance="secondary"
                    className={css({ width: "100%" })}
                    onPress={() => {
                        ref.current?.focus();
                    }}
                >
                    Focus field
                </Button>
            </>
        );
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
            <TextField {...args}>
                <Label>Label</Label>
                <Group>
                    <Input variant="unstyled" />
                    <TextFieldClearButton />
                    <TextFieldCopyButton />
                    <TextFieldVisibilityButton />
                </Group>
            </TextField>
        );
    },
};
