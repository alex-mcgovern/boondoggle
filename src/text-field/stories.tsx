import type { Meta, StoryObj } from "@storybook/react";

import { faInfoCircle } from "@fortawesome/pro-solid-svg-icons/faInfoCircle";
import { useRef } from "react";

import {
    TextField,
    TextFieldClearButton,
    TextFieldCopyButton,
    TextFieldVisibilityButton,
} from ".";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "../_DEPRECATED_tooltip";
import { Button } from "../button";
import { css } from "../css/index.css";
import { Group } from "../group";
import { Icon } from "../icon";
import { Input } from "../input";
import { Label } from "../label";
import { ToastProvider } from "../toast";

const meta = {
    args: {},
    component: TextField,
    decorators: [
        (Story) => {
            return (
                <ToastProvider>
                    <Story />
                </ToastProvider>
            );
        },
    ],
    render: (args) => {
        return (
            <TextField {...args}>
                <Label>Label</Label>
                <Input />
            </TextField>
        );
    },
    title: "TextField",
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Invalid: Story = {
    args: {
        isInvalid: true,
    },
};

export const WithLabelTooltip: Story = {
    render: (args) => {
        return (
            <TextField {...args}>
                <Label>
                    Label
                    <Tooltip placement="right">
                        <TooltipTrigger asChild>
                            <button type="button">
                                <Icon
                                    color="text_low_contrast"
                                    icon={faInfoCircle}
                                />
                            </button>
                        </TooltipTrigger>
                        <TooltipContent>
                            Provide additional info about the field
                        </TooltipContent>
                    </Tooltip>
                </Label>
                <Input />
            </TextField>
        );
    },
};

export const TypePassword: Story = {
    args: {
        type: "password",
        value: "Hello world",
    },
    render: (args) => {
        return (
            <TextField {...args}>
                <Label>Label</Label>
                <Group>
                    <Input variant="unstyled" />
                    <TextFieldVisibilityButton />
                </Group>
            </TextField>
        );
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
