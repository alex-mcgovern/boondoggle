import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";
import type { StoryFn, StoryObj } from "@storybook/react";
import { createRef, useCallback } from "react";
import { DialogModal as StoryComp } from ".";
import type { DialogModalProps as StoryCompProps } from ".";
import { LOREM } from "../../mocks/LOREM.mock";
import { Box } from "../box";
import { Button } from "../button";
import { DialogInfoBullet } from "../dialog-info-bullet";
import { Icon } from "../icon";
import { ModalActionConfirm } from "../modal-action-confirm";
import { DialogModalAlert } from "./_components/dialog_modal_alert";

export default {
	component: StoryComp,
	title: "Components/DialogModal",
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }: StoryCompProps) => {
	return <StoryComp {...rest} />;
};

const DialogContent = () => {
	return (
		<Box>
			{Array.from({ length: 8 }).map((_, index) => {
				return (
					<DialogInfoBullet
						// eslint-disable-next-line react/no-array-index-key
						key={`key-${index}`}
						slotLeft={<Icon icon={faShapes} />}
						text={LOREM.text_lg}
					/>
				);
			})}
		</Box>
	);
};

export const Default: StoryObj<StoryCompProps> = {
	args: {
		children: <DialogContent />,
		title: LOREM.text_md,
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
	},
	render: Template,
};

const ControlledTemplate: StoryFn<StoryCompProps> = ({
	...rest
}: StoryCompProps) => {
	const dialogRef = createRef<HTMLDialogElement>();

	const openDialog = useCallback(() => {
		dialogRef.current?.showModal();
	}, [dialogRef]);

	const closeDialog = useCallback(() => {
		dialogRef.current?.close();
	}, [dialogRef]);

	return (
		<>
			<Box
				alignItems="center"
				background="tint_2"
				borderRadius="sm"
				display="flex"
				gap="space_2"
				marginBottom="space_4"
				padding="space_4"
			>
				<Box fontStyle="bodySm">Simulate programmatic control</Box>
				<Button
					appearance="secondary"
					name="open_dialog"
					onClick={openDialog}
					size="sm"
					type="button"
				>
					Open dialog
				</Button>
				<Button
					appearance="secondary"
					name="close_dialog"
					onClick={closeDialog}
					size="sm"
					type="button"
				>
					Close dialog
				</Button>
			</Box>
			<StoryComp ref={dialogRef} {...rest} />
		</>
	);
};

export const ControlledElement: StoryObj<StoryCompProps> = {
	args: {
		children: <DialogContent />,
		title: LOREM.text_md,
	},
	render: ControlledTemplate,
};

export const IsLoading: StoryObj<StoryCompProps> = {
	args: {
		children: <DialogContent />,
		isLoading: true,
		title: LOREM.text_md,
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
		width: "sm",
	},
	render: Template,
};

export const WidthSm: StoryObj<StoryCompProps> = {
	args: {
		children: <DialogContent />,
		title: LOREM.text_md,
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
		width: "sm",
	},
	render: Template,
};

export const WidthLg: StoryObj<StoryCompProps> = {
	args: {
		children: <DialogContent />,
		title: LOREM.text_md,
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
		width: "lg",
	},
	render: Template,
};

export const WithAlert: StoryObj<StoryCompProps> = {
	args: {
		alert: (
			<DialogModalAlert
				description="This is a description for the alert"
				title="This is an alert"
			/>
		),
		children: <DialogContent />,
		title: LOREM.text_md,
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
		width: "lg",
	},
	render: Template,
};

export const WithAlertWithColorOverlay: StoryObj<StoryCompProps> = {
	args: {
		alert: (
			<DialogModalAlert
				colorOverlay="red"
				description="This is a description for the alert"
				title="This is an alert"
			/>
		),
		children: <DialogContent />,
		title: LOREM.text_md,
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
		width: "lg",
	},
	render: Template,
};

export const With1Action: StoryObj<StoryCompProps> = {
	args: {
		actions: (
			<Button
				name="dialog_button"
				onClick={() => {
					alert("Confirmed");
				}}
			>
				Confirm
			</Button>
		),
		children: <DialogContent />,
		title: LOREM.text_md,
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
	},
	render: Template,
};

export const With2Actions: StoryObj<StoryCompProps> = {
	args: {
		actions: [
			<Button
				appearance="secondary"
				colorOverlay="red"
				name="cancel"
				onClick={() => {
					alert("Cancelled");
				}}
			>
				Cancel
			</Button>,
			<Button
				name="confirm"
				onClick={() => {
					alert("Confirmed");
				}}
			>
				Confirm
			</Button>,
		],

		children: <DialogContent />,
		title: LOREM.text_md,
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
	},
	render: Template,
};

export const WithConfirmationAction: StoryObj<StoryCompProps> = {
	args: {
		actions: (
			<ModalActionConfirm
				strButtonText="Freeze account"
				strConfirmText="freeze account"
				onClick={() => {
					alert("Confirmed");
				}}
				strInvalid="The text you have entered is incorrect"
				strPromptPrefix="Please type"
				strPromptSuffix="to continue"
			/>
		),

		children: <DialogContent />,
		title: LOREM.text_md,
		triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
	},
	render: Template,
};

export const WithConfirmationActionWithColorOverlay: StoryObj<StoryCompProps> =
	{
		args: {
			actions: (
				<ModalActionConfirm
					strButtonText="Freeze account"
					colorOverlay="red"
					strConfirmText="freeze account"
					onClick={() => {
						alert("Confirmed");
					}}
					strInvalid="The text you have entered is incorrect"
					strPromptPrefix="Please type"
					strPromptSuffix="to continue"
				/>
			),

			children: <DialogContent />,
			title: LOREM.text_md,
			triggerNode: <Button name="dialog_trigger">Open dialog</Button>,
		},
		render: Template,
	};
