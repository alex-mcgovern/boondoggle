import { Header as StoryComp } from ".";

import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Box } from "../box";

const meta = {
	title: "Components/Header",
	component: StoryComp,
	args: {
		children: (
			<>
				<Box as="h1" fontStyle="h4" marginBottom="none" fontWeight="semibold">Title</Box>
			</>
		),
	},
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithActions: Story = {
	args: {
		actions: <Button size="sm" name="primary">Primary action</Button>,
	},
};
