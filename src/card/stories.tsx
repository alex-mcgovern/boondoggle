import { Meta, StoryObj } from "@storybook/react";
import { Button } from "react-aria-components";
import { Card as StoryComp } from ".";
import { LOREM } from "../../mocks/LOREM.mock";
import { Box } from "../box";
import { FieldsGrid } from "../fields-grid";
import { SkeletonInput } from "../skeleton-input";
import { sprinkles } from "../sprinkles/index.css";

const meta = {
	title: "Card",
	component: StoryComp,
	args: {
		children: (
			<>
				<FieldsGrid>
					<SkeletonInput />
					<SkeletonInput />
					<SkeletonInput />
					<SkeletonInput />
				</FieldsGrid>
			</>
		),
	},
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTitle: Story = {
	args: {
		title: LOREM.text_xxs,
	},
};

export const WithTitleAndDescription: Story = {
	args: {
		title: LOREM.text_xxs,
		description: LOREM.text_md,
	},
};

export const WithHeader: Story = {
	args: {
		header: (
			<>
				<Box as="h3" fontStyle="h5" marginBottom="none">
					Title
				</Box>{" "}
				<Button
					name="action"
					className={sprinkles({ marginLeft: "auto" })}
				>
					Action
				</Button>
			</>
		),
	},
};
