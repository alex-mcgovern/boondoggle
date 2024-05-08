import type { Meta, StoryObj } from "@storybook/react";

import { Card as StoryComp } from "..";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Box } from "../../box";
import { Button } from "../../button";
import { css } from "../../css/index.css";
import { FieldsGrid } from "../../fields-grid";

const meta = {
    args: {
        children: (
            <>
                <FieldsGrid>Test</FieldsGrid>
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
                <Box
                    as="h3"
                    fontStyle="h5"
                    marginBottom="none"
                >
                    Title
                </Box>{" "}
                <Button
                    className={css({ marginLeft: "auto" })}
                    name="action"
                >
                    Action
                </Button>
            </>
        ),
    },
};
