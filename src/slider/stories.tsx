import type { Meta, StoryObj } from "@storybook/react";
import { Slider as StoryComp } from ".";
import { LOREM } from "../../mocks/LOREM.mock";

const meta = {
	args: {
		name: LOREM.name(),
	},
	component: StoryComp,
	title: "Components/V1/Slider",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
