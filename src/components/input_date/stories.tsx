import { expect } from "@storybook/jest";
import { userEvent, waitFor, within } from "@storybook/testing-library";

import { InputDate as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
    component: StoryComp,
    title: "Components/InputDate",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        id: LOREM.id(),
        label: LOREM.label(),
        name: LOREM.name(),
        placeholder: LOREM.placeholder(),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        const buttonElement = canvas.getByRole("button");

        expect(buttonElement).not.toBeNull();

        await waitFor(() => {
            userEvent.click(buttonElement);
        });
    },
};
