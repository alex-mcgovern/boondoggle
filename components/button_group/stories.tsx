import { ButtonGroup as StoryComp } from ".";
import { Button } from "../button/Button";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	args: {
		children: (
			<>
				<Button variant="secondary" name="one">
					One
				</Button>
				<Button variant="secondary" name="two">
					Two
				</Button>
				<Button variant="secondary" name="three">
					Three
				</Button>
			</>
		),
	},
	component: StoryComp,
	title: "Components/ButtonGroup",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
