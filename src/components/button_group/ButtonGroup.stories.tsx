import { ButtonGroup as StoryComp } from "./ButtonGroup";
import { Button } from "../button/Button";

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
	title: "Components/ButtonGroup",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
