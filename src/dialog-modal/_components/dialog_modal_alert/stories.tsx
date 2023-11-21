import type { Meta, StoryObj } from "@storybook/react";
import { DialogModalAlert as StoryComp } from ".";
import { LOREM } from "../../../../mocks/LOREM.mock";

const meta = {
	args: {
		description: LOREM.text_md,
		title: LOREM.text_xxs,
	},
	component: StoryComp,
	title: "Components/DialogModalAlert",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Red: Story = {
	args: {
		colorOverlay: "red",
	},
};

export const Blue: Story = {
	args: {
		colorOverlay: "blue",
	},
};

export const Green: Story = {
	args: {
		colorOverlay: "green",
	},
};

export const Grey: Story = {
	args: {
		colorOverlay: "grey",
	},
};
