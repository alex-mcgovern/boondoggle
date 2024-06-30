import type { Meta, StoryObj } from "@storybook/react";

import { faEllipsis } from "@fortawesome/pro-solid-svg-icons/faEllipsis";

import { PageHeader as StoryComp } from "..";
import { Button } from "../../button";
import { Icon } from "../../icon";

const meta = {
    component: StoryComp,
    parameters: {
        layout: "padded",
    },
    title: "PageHeader",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <h1>Title</h1>
            </>
        ),
    },
};

export const WithActions: Story = {
    args: {
        actions: (
            <>
                <Button
                    appearance="secondary"
                    name="icon"
                    size="sm"
                    square
                >
                    <Icon icon={faEllipsis} />
                </Button>
                <Button
                    appearance="secondary"
                    name="secondary"
                    size="sm"
                >
                    Secondary
                </Button>
                <Button
                    name="primary"
                    size="sm"
                >
                    Primary action
                </Button>
            </>
        ),
        children: (
            <>
                <h1>Title</h1>
            </>
        ),
    },
};
