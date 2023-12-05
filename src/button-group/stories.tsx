import { ButtonGroup as StoryComp } from ".";
import { Button } from "../button";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	args: {
		children: (
			<>
				<Button appearance="secondary" name="one">
					One
				</Button>
				<Button appearance="secondary" name="two">
					Two
				</Button>
				<Button appearance="secondary" name="three">
					Three
				</Button>
			</>
		),
	},
	component: StoryComp,
	title: "Components/V1/ButtonGroup",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
