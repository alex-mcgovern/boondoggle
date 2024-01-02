import { faLock, faRefresh } from "@fortawesome/pro-solid-svg-icons";
import { Meta, StoryObj } from "@storybook/react";
import { TextField } from ".";
import { Button } from "../button";
import { Icon } from "../icon";
import { ToastProvider } from "../toast";
import { TextFieldProps } from "./types";

const meta = {
	title: "Components/V2/TextField",
	component: TextField,
	args: {
		label: "Text field",
		labelTooltip: "This is a tooltip",
		isLabelVisible: true,
		name: "text_field",
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
} satisfies Meta<typeof TextField>;

export default meta;

export const Default: StoryObj<TextFieldProps> = {};

/** -----------------------------------------------------------------------------
 * EVENTS
 * ------------------------------------------------------------------------------- */

export const Events: StoryObj<TextFieldProps> = {
	args: {
		onFocus: () => alert("onFocus"),
	},
};

/** -----------------------------------------------------------------------------
 * STATES
 * ------------------------------------------------------------------------------- */

export const IsDisabled: StoryObj<TextFieldProps> = {
	args: {
		isDisabled: true,
	},
};

export const IsInvalid: StoryObj<TextFieldProps> = {
	args: {
		isInvalid: true,
	},
};

/** -----------------------------------------------------------------------------
 * SLOTS
 * ------------------------------------------------------------------------------- */

export const SlotLeftIcon: StoryObj<TextFieldProps> = {
	args: {
		slotLeftProps: {
			isClickable: false,
			children: <Icon icon={faLock} />,
		},
	},
};

export const SlotLeftButton: StoryObj<TextFieldProps> = {
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

export const SlotRightIcon: StoryObj<TextFieldProps> = {
	args: {
		slotRightProps: {
			isClickable: false,
			children: <Icon icon={faLock} />,
		},
	},
};

export const SlotRightButton: StoryObj<TextFieldProps> = {
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

export const SlotRightButtonIcon: StoryObj<TextFieldProps> = {
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

export const CopyableNoValue: StoryObj<TextFieldProps> = {
	args: {
		isCopyable: true,
		strCopied: "Copied to clipboard",
		strCopy: "Copy",
	},
};

export const CopyableDefaultValue: StoryObj<TextFieldProps> = {
	args: {
		defaultValue: "Copy me daddy",
		isCopyable: true,
		strCopied: "Copied to clipboard",
		strCopy: "Copy",
	},
};

export const CopyableControlledValue: StoryObj<TextFieldProps> = {
	args: {
		value: "Copy me daddy",
		isCopyable: true,
		strCopied: "Copied to clipboard",
		strCopy: "Copy",
	},
};

export const CopyableSlotRight: StoryObj<TextFieldProps> = {
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

export const ClearableControlledValue: StoryObj<TextFieldProps> = {
	name: "Clearable: Controlled value",
	args: {
		value: "Clear me daddy",

		isClearable: true,
		strClear: "Clear",

		onChange: (v: string) => alert(`New value: ${v}`),
	},
};
export const ClearableDefaultValue: StoryObj<TextFieldProps> = {
	name: "Clearable: Default value",
	args: {
		defaultValue: "Clear me daddy",

		isClearable: true,
		strClear: "Clear",

		onChange: (v: string) => alert(`New value: ${v}`),
	},
};

export const ClearableSlotRight: StoryObj<TextFieldProps> = {
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

/** -----------------------------------------------------------------------------
 * VISIBILITY FUNCTIONALITY
 * ------------------------------------------------------------------------------- */

export const VisibilityDefaultValue: StoryObj<TextFieldProps> = {
	args: {
		isVisibilityToggleable: true,
		isVisible: false,
		strHide: "Hide",
		strShow: "Show",

		defaultValue: "my-secret-password",
	},
};

export const VisibilitySlotRight: StoryObj<TextFieldProps> = {
	args: {
		isVisibilityToggleable: true,
		isVisible: false,
		strHide: "Hide",
		strShow: "Show",

		defaultValue: "my-secret-password",

		slotRightProps: {
			isClickable: false,
			children: <Icon icon={faLock} />,
		},
	},
};

/** -----------------------------------------------------------------------------
 * SLOT KITCHEN SINK
 * ------------------------------------------------------------------------------- */

export const SlotKitchenSink: StoryObj<TextFieldProps> = {
	args: {
		isVisibilityToggleable: true,
		isVisible: false,
		strHide: "Hide",
		strShow: "Show",

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
