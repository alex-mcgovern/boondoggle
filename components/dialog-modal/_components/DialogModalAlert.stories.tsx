import { DialogModalAlert as StoryComp } from "./DialogModalAlert"; import { LOREM } from "../../../mocks/LOREM.mock";
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
		theme: "red",
	},
};


export const Blue: Story = {
	args: {
		theme: "blue",
	},
};


export const Green: Story = {
	args: {
		theme: "green",
	},
};


export const Grey: Story = {
	args: {
		theme: "grey",
	},
};
