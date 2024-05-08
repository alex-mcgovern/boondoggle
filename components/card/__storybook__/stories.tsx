import type { Meta, StoryObj } from "@storybook/react";

import { Card as StoryComp } from "..";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Button } from "../../button";
import { Grid } from "../../grid";

const meta = {
    args: {
        children: (
            <>
                <Grid>Test</Grid>
            </>
        ),
    },
    component: StoryComp,
    parameters: {
        layout: "padded",
    },
    title: "Components/Card",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTitle: Story = {
    args: {
        title: LOREM.text_xxs,
    },
};

export const WithTitleAndDescription: Story = {
    args: {
        description: LOREM.text_md,
        title: LOREM.text_xxs,
    },
};

export const WithHeader: Story = {
    args: {
        header: (
            <>
                <h3 className="mb-none">Title</h3>{" "}
                <Button
                    className="ml-auto"
                    name="action"
                >
                    Action
                </Button>
            </>
        ),
    },
};
