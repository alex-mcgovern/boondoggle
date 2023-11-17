import { FlagIe as StoryComp } from "./ie";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	args: {},
	component: StoryComp,
	title: "Components/IconFlag",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		border: "border_default",
		borderRadius: "50%",
		height: "space_8",
		width: "space_8",
	},
};
