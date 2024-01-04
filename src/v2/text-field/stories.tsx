import { faker } from "@faker-js/faker";
import { faLock, faRefresh } from "@fortawesome/pro-solid-svg-icons";
import { Meta, StoryObj } from "@storybook/react";
import { TextField, TextFieldProps } from ".";
import { Button } from "../button";
import { Icon } from "../icon";
import { ToastProvider } from "../toast";

const meta = {
	title: "Data entry/TextField",
	component: TextField,
	args: {
		label: { text: "Text field", tooltip: "This is a tooltip" },
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

const COPYABLE_ARGS: TextFieldProps["addonCopyButton"] = {
	strCopied: "Copied to clipboard",
	strCopy: "Copy",
};

export const CopyableDefaultValue: StoryObj<TextFieldProps> = {
	args: {
		defaultValue: faker.lorem.words(3),
		addonCopyButton: COPYABLE_ARGS,
	},
};

export const CopyableControlledValue: StoryObj<TextFieldProps> = {
	args: {
		value: faker.lorem.words(3),
		addonCopyButton: COPYABLE_ARGS,
	},
};

export const CopyableSlotRight: StoryObj<TextFieldProps> = {
	args: {
		value: faker.lorem.words(3),
		slotRightProps: {
			isClickable: false,
			children: <Icon icon={faLock} />,
		},
		addonCopyButton: COPYABLE_ARGS,
	},
};

/** -----------------------------------------------------------------------------
 * CLEARABLE FUNCTIONALITY
 * ------------------------------------------------------------------------------- */

const CLEARABLE_ARGS: TextFieldProps["addonClearButton"] = {
	strClear: "Clear",
};

export const ClearableNoValue: StoryObj<TextFieldProps> = {
	name: "Clearable: No value",
	args: {
		addonClearButton: CLEARABLE_ARGS,
	},
};
export const ClearableControlledValue: StoryObj<TextFieldProps> = {
	name: "Clearable: Controlled value",
	args: {
		value: faker.lorem.words(3),
		addonClearButton: CLEARABLE_ARGS,
	},
};
export const ClearableDefaultValue: StoryObj<TextFieldProps> = {
	name: "Clearable: Default value",
	args: {
		defaultValue: faker.lorem.words(3),
		addonClearButton: CLEARABLE_ARGS,
	},
};

export const ClearableSlotRight: StoryObj<TextFieldProps> = {
	name: "Clearable: Slot right",
	args: {
		defaultValue: faker.lorem.words(3),
		slotRightProps: {
			isClickable: false,
			children: <Icon icon={faLock} />,
		},
		addonClearButton: CLEARABLE_ARGS,
	},
};

/** -----------------------------------------------------------------------------
 * VISIBILITY FUNCTIONALITY
 * ------------------------------------------------------------------------------- */

const VISIBILITY_ARGS: TextFieldProps["addonVisibilityToggle"] = {
	isVisible: false,
	strHide: "Hide",
	strShow: "Show",
};

export const VisibilityDefaultValue: StoryObj<TextFieldProps> = {
	args: {
		defaultValue: "my-secret-password",
		addonVisibilityToggle: VISIBILITY_ARGS,
	},
};

export const VisibilityControlledValue: StoryObj<TextFieldProps> = {
	args: {
		value: "my-secret-password",
		addonVisibilityToggle: VISIBILITY_ARGS,
	},
};

export const VisibilitySlotRight: StoryObj<TextFieldProps> = {
	args: {
		addonVisibilityToggle: VISIBILITY_ARGS,
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

export const KitchenSink: StoryObj<TextFieldProps> = {
	args: {
		addonClearButton: CLEARABLE_ARGS,
		addonVisibilityToggle: VISIBILITY_ARGS,
		addonCopyButton: COPYABLE_ARGS,
		slotRightProps: {
			isClickable: false,
			children: <Icon icon={faLock} />,
		},
		slotLeftProps: {
			isClickable: false,
			children: <Icon icon={faLock} />,
		},
		defaultValue: faker.lorem.words(3),
		description: faker.lorem.words(3),
	},
};
