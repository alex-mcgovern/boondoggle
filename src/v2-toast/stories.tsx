import { ToastProvider, useToastContext } from ".";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../v2-button";
import { faCircleCheck } from "@fortawesome/pro-solid-svg-icons/faCircleCheck";
import { Icon } from "../v2-icon";
import { variantColorOverlay } from "../index.css";
import { faker } from "@faker-js/faker";
import {
	faExclamationCircle,
	faWarning,
} from "@fortawesome/pro-solid-svg-icons";

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
								icon: faker.helpers.arrayElement([
									<Icon
										className={variantColorOverlay.green}
										color="text_low_contrast"
										icon={faCircleCheck}
									/>,
									<Icon
										className={variantColorOverlay.amber}
										color="text_low_contrast"
										icon={faWarning}
									/>,
									<Icon
										className={variantColorOverlay.red}
										color="text_low_contrast"
										icon={faExclamationCircle}
									/>,
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
