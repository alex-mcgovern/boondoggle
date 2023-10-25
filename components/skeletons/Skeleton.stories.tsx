import { Skeleton as StoryComp } from "./Skeleton";
import type { Meta, StoryObj } from "@storybook/react";
const meta = {
	component: StoryComp,
	parameters: {
		layout: "centered",
	},
	title: "Components/Skeleton",
} satisfies Meta<typeof StoryComp>;


export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {};
