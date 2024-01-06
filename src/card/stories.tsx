import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "react-aria-components";

import { Card as StoryComp } from ".";
import { LOREM } from "../../mocks/LOREM.mock";
import { Box } from "../box";
import { FieldsGrid } from "../fields-grid";
import { SkeletonInput } from "../skeleton-input";
import { sprinkles } from "../sprinkles/index.css";

const meta = {
    args: {
        children: (
            <>
                <FieldsGrid>
                    <SkeletonInput />
                    <SkeletonInput />
                    <SkeletonInput />
                    <SkeletonInput />
                </FieldsGrid>
            </>
        ),
    },
    component: StoryComp,
    title: "Card",
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
                    className={sprinkles({ marginLeft: "auto" })}
                    name="action"
                >
                    Action
                </Button>
            </>
        ),
    },
};
