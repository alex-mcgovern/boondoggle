import { faker } from "@faker-js/faker";
import {
	faExclamationCircle,
	faWarning,
} from "@fortawesome/pro-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/pro-solid-svg-icons/faCircleCheck";
import { Meta, StoryObj } from "@storybook/react";
import { ToastProvider, useToastContext } from ".";
import { variantColorOverlay } from "../index.css";
import { Button } from "../v2-button";
import { Icon } from "../v2-icon";

const meta = {
	title: "Components/ToastProvider",
	component: ToastProvider,
	args: {},
	decorators: [
		(Story) => (
			<ToastProvider>
				<Story />
			</ToastProvider>
		),
	],
	render: () => {
		const state = useToastContext();

		return (
			<>
				<Button
					appearance="secondary"
					onPress={() =>
						state.add(
							{
								level: faker.helpers.arrayElement([
									"info",
									"success",
									"warning",
									"error",
								]),
								title: faker.lorem.sentence(3),
								description: faker.lorem.sentence(7),
							},
							{ timeout: 5000 },
						)
					}
				>
					Show toast
				</Button>
			</>
		);
	},
} satisfies Meta<typeof ToastProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
