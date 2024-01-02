import { faLock, faRefresh } from "@fortawesome/pro-solid-svg-icons";
import { Textfield } from ".";

import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../v2-button";
import { Icon } from "../../v2-icon";
import { ToastProvider } from "../../v2-toast";

const meta = {
	title: "Components/V2/Textfield",
	component: Textfield,
	args: {
		labelConfig: {
			label: "Text field",
			labelTooltip: "This is a tooltip",
		},
		name: "text_field",
		textFieldProps: {},
	},
	decorators: [
		(Story) => {
			return (
				<ToastProvider>
					<Story />
				</ToastProvider>
			);
		},
	],
} satisfies Meta<typeof Textfield>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

/** -----------------------------------------------------------------------------
 * STATES
 * ------------------------------------------------------------------------------- */

export const IsDisabled: Story = {
	args: {
		isDisabled: true,
	},
};

export const IsInvalid: Story = {
	args: {
		isInvalid: true,
	},
};

/** -----------------------------------------------------------------------------
 * SLOTS
 * ------------------------------------------------------------------------------- */

export const SlotLeftIcon: Story = {
	args: {
		slotLeftProps: {
			isClickable: false,
			children: <Icon icon={faLock} />,
		},
	},
};

export const SlotLeftButton: Story = {
	args: {
		slotLeftProps: {
			isClickable: true,
			children: (
				<Button
					appearance="ghost"
					name="reset"
					size="sm"
					// slotLeft={<Icon icon={faRefresh} />}
				>
					Reset
				</Button>
			),
		},
	},
};

export const SlotRightIcon: Story = {
	args: {
		slotRightProps: {
			isClickable: false,
			children: <Icon icon={faLock} />,
		},
	},
};

export const SlotRightButton: Story = {
	args: {
		slotRightProps: {
			isClickable: true,
			children: (
				<Button
					appearance="ghost"
					colorOverlay="red"
					name="reset"
					size="sm"
					// slotRight={<Icon icon={faRefresh} />}
				>
					Reset
					<Icon icon={faRefresh} />
				</Button>
			),
		},
	},
};

export const SlotRightButtonIcon: Story = {
	args: {
		slotRightProps: {
			isClickable: true,
			children: (
				<>
					<Icon icon={faLock} />
					<Button
						appearance="ghost"
						colorOverlay="red"
						name="reset"
						size="sm"
						// slotRight={<Icon icon={faRefresh} />}
					>
						Reset
						<Icon icon={faRefresh} />
					</Button>
				</>
			),
		},
	},
};

/** -----------------------------------------------------------------------------
 * COPYABLE FUNCTIONALITY
 * ------------------------------------------------------------------------------- */

export const CopyableNoValue: Story = {
	args: {
		isCopyable: true,
		strCopied: "Copied to clipboard",
		strCopy: "Copy",
	},
};

export const CopyableDefaultValue: Story = {
	args: {
		defaultValue: "Copy me daddy",
		isCopyable: true,
		strCopied: "Copied to clipboard",
		strCopy: "Copy",
	},
};

export const CopyableControlledValue: Story = {
	args: {
		value: "Copy me daddy",
		isCopyable: true,
		strCopied: "Copied to clipboard",
		strCopy: "Copy",
	},
};

export const CopyableSlotRight: Story = {
	args: {
		value: "Copy me daddy",
		isCopyable: true,
		strCopied: "Copied to clipboard",
		strCopy: "Copy",

		slotRightProps: {
			isClickable: false,
			children: <Icon icon={faLock} />,
		},
	},
};

/** -----------------------------------------------------------------------------
 * CLEARABLE FUNCTIONALITY
 * ------------------------------------------------------------------------------- */

export const ClearableControlledValue: Story = {
	name: "Clearable: Controlled value",
	args: {
		value: "Clear me daddy",

		isClearable: true,
		strClear: "Clear",

		onChange: (v: string) => alert(`New value: ${v}`),
	},
};
export const ClearableDefaultValue: Story = {
	name: "Clearable: Default value",
	args: {
		defaultValue: "Clear me daddy",

		isClearable: true,
		strClear: "Clear",

		onChange: (v: string) => alert(`New value: ${v}`),
	},
};

export const ClearableSlotRight: Story = {
	name: "Clearable: Slot right",
	args: {
		defaultValue: "Clear me daddy",

		isClearable: true,
		strClear: "Clear",

		slotRightProps: {
			isClickable: false,
			children: <Icon icon={faLock} />,
		},

		onChange: (v: string) => alert(`New value: ${v}`),
	},
};

export const ActionCopyableVisibilitySlotRight: Story = {
	args: {
		isVisibilityToggleable: true,
		defaultValue: "my-secret-password",
		copyableProps: {
			strCopy: "Copy",
			strCopied: "Copied to clipboard",
		},
		visibilityProps: {
			initialIsVisible: true,
			strHide: "Hide",
			strShow: "Show",
		},
		slotRightProps: {
			isClickable: false,
			children: <Icon icon={faLock} />,
		},
	},
};
export const SlotKitchenSink: Story = {
	args: {
		copyableProps: {
			strCopy: "Copy",
			strCopied: "Copied to clipboard",
		},
		visibilityProps: {
			initialIsVisible: true,
			strHide: "Hide",
			strShow: "Show",
		},
		slotRightProps: {
			isClickable: false,
			children: <Icon icon={faLock} />,
		},
		slotLeftProps: {
			isClickable: false,
			children: <Icon icon={faLock} />,
		},
	},
};
