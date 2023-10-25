import { Slider as StoryComp } from ".";
import { LOREM } from "../../mocks/LOREM.mock";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
	args: {
		name: LOREM.name(),
	},
	component: StoryComp,
	parameters: {
		layout: "centered",
	},
	title: "Components/Slider",
} satisfies Meta<typeof StoryComp>;


export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {};
