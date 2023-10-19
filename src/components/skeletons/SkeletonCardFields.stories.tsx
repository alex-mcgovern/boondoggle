import { SkeletonCardFields as StoryComp } from "./SkeletonCardFields";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	args: {},
	component: StoryComp,
	title: "Components/SkeletonCardFields",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
