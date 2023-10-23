import { DialogModalAlert as StoryComp } from "./DialogModalAlert";
import { LOREM } from "../../../mocks/LOREM.mock";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	args: {
		description: LOREM.text_md,
		title: LOREM.text_xxs,
	},
	component: StoryComp,
	parameters: {
		layout: "centered",
	},
	title: "Components/DialogModalAlert",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Red: Story = {
	args: {
		color: "red",
	},
};

export const Blue: Story = {
	args: {
		color: "blue",
	},
};

export const Green: Story = {
	args: {
		color: "green",
	},
};

export const Grey: Story = {
	args: {
		color: "grey",
	},
};
