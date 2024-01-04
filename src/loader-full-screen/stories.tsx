import { LoaderFullScreen as StoryComp } from ".";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	args: {},
	component: StoryComp,
	title: "Components/V1/LoaderFullScreen",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLoadingText: Story = {
	args: {
		loadingText: "Loading...",
	},
};
