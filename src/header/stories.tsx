import type { Meta, StoryObj } from "@storybook/react";

import { faEllipsis } from "@fortawesome/pro-solid-svg-icons/faEllipsis";

import { Header as StoryComp } from ".";
import { Box } from "../box";
import { Button } from "../button";
import { Icon } from "../icon";

const meta = {
    component: StoryComp,
    parameters: {
        layout: "padded",
    },
    title: "Components/Header",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Box
                    as="h1"
                    fontStyle="h4"
                    fontWeight="semibold"
                    marginBottom="none"
                >
                    Title
                </Box>
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
                    size="square_sm"
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
                <Box
                    as="h1"
                    fontStyle="h4"
                    fontWeight="semibold"
                    marginBottom="none"
                >
                    Title
                </Box>
            </>
        ),
    },
};
