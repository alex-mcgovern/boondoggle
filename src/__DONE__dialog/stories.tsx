import { faker } from "@faker-js/faker";
import { Meta, StoryObj } from "@storybook/react";
import {
	V2Dialog as StoryComp,
	V2DialogFooter,
	V2DialogHeader,
	V2ScrollableDialogContent,
} from ".";
import { sprinkles } from "../__DONE__sprinkles/index.css";
import { Button } from "../__DONE__button";
import { V2DialogAlert } from "../__DONE__dialog-alert";
import { V2DialogErrorMessage } from "../__DONE__dialog-error-message";

const meta = {
	title: "Components/V2/Dialog",
	component: StoryComp,
	args: {
		modalOverlayProps: {
			isDismissable: true,
		},
		buttonProps: {
			children: "Open Dialog",
		},
		children: ({ close }) => (
			<>
				<V2DialogHeader close={close} title="Dialog Title" />
				<V2ScrollableDialogContent>
					<>
						<p>
							A modal dialog component powered by{" "}
							<a href="https://react-spectrum.adobe.com/react-aria/Dialog.html">
								React Aria Components
							</a>
						</p>
						{Array.from({ length: 10 }, () => {
							return <p>{faker.lorem.paragraphs(1)}</p>;
						})}
					</>
				</V2ScrollableDialogContent>
				<V2DialogFooter>
					<Button
						className={sprinkles({ width: "100%" })}
						onPress={() => {
							alert("Confirmed");
							close();
						}}
					>
						Confirm
					</Button>
				</V2DialogFooter>
			</>
		),
	},
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WidthSm: Story = {
	args: {
		width: "sm",
	},
};

export const WidthLg: Story = {
	args: {
		width: "lg",
	},
};

export const WithDialogErrorMessage: Story = {
	args: {
		dialogTriggerProps: {
			defaultOpen: true,
		},
		colorOverlay: "red",
		children: ({ close }) => (
			<>
				<V2DialogHeader close={close} title="Dialog Title" />
				<V2DialogErrorMessage
					strCancel="Cancel"
					strTryAgain="Try Again"
					error={{ message: "This is an error message" }}
					onPressCancel={close}
					onPressTryAgain={close}
				/>
			</>
		),
	},
};

export const WithDialogAlert: Story = {
	args: {
		dialogTriggerProps: {
			defaultOpen: true,
		},
		children: ({ close }) => (
			<>
				<V2DialogHeader close={close} title="Dialog Title" />
				<V2DialogAlert
					colorOverlay="red"
					description="This is a description for the alert"
					title="This is an alert"
				/>
				<V2ScrollableDialogContent>
					<>
						<p>
							A modal dialog component powered by{" "}
							<a href="https://react-spectrum.adobe.com/react-aria/Dialog.html">
								React Aria Components
							</a>
						</p>
						{Array.from({ length: 10 }, () => {
							return <p>{faker.lorem.paragraphs(1)}</p>;
						})}
					</>
				</V2ScrollableDialogContent>
				<V2DialogFooter>
					<Button
						className={sprinkles({ width: "100%" })}
						onPress={() => {
							alert("Confirmed");
							close();
						}}
					>
						Confirm
					</Button>
				</V2DialogFooter>
			</>
		),
	},
};
