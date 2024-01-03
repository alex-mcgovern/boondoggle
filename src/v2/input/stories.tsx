import { faker } from "@faker-js/faker";
import { faLock, faRefresh } from "@fortawesome/pro-solid-svg-icons";
import { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
import { Button } from "../button";
import { Icon } from "../icon";
import { ToastProvider } from "../toast";
import { InputProps } from "./types";

const meta = {
	title: "Components/V2/Input",
	component: Input,
	parameters: {
		layout: "centered",
	},
	args: {
		label: faker.lorem.words(1),
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
} satisfies Meta<typeof Input>;

export default meta;

export const Default: StoryObj<InputProps> = {};

/** -----------------------------------------------------------------------------
 * EVENTS
 * ------------------------------------------------------------------------------- */

export const Events: StoryObj<InputProps> = {
	args: {
		onFocus: () => alert("onFocus"),
	},
};

/** -----------------------------------------------------------------------------
 * STATES
 * ------------------------------------------------------------------------------- */

export const IsDisabled: StoryObj<InputProps> = {
	args: {
		disabled: true,
	},
};

export const IsInvalid: StoryObj<InputProps> = {
	args: {
		invalid: true,
	},
};

/** -----------------------------------------------------------------------------
 * SLOTS
 * ------------------------------------------------------------------------------- */

export const SlotLeftIcon: StoryObj<InputProps> = {
	args: {
		slotLeftProps: {
			isClickable: false,
			children: <Icon icon={faLock} />,
		},
	},
};

export const SlotLeftButton: StoryObj<InputProps> = {
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

export const SlotRightIcon: StoryObj<InputProps> = {
	args: {
		slotRightProps: {
			isClickable: false,
			children: <Icon icon={faLock} />,
		},
	},
};

export const SlotRightButton: StoryObj<InputProps> = {
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

export const SlotRightButtonIcon: StoryObj<InputProps> = {
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

const COPYABLE_ARGS: InputProps["addonCopyButton"] = {
	strCopied: "Copied to clipboard",
	strCopy: "Copy",
};

export const CopyableDefaultValue: StoryObj<InputProps> = {
	args: {
		defaultValue: faker.lorem.words(3),
		addonCopyButton: COPYABLE_ARGS,
	},
};

export const CopyableControlledValue: StoryObj<InputProps> = {
	args: {
		value: faker.lorem.words(3),
		addonCopyButton: COPYABLE_ARGS,
	},
};

export const CopyableSlotRight: StoryObj<InputProps> = {
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

const CLEARABLE_ARGS: InputProps["addonClearButton"] = {
	strClear: "Clear",
};

export const ClearableNoValue: StoryObj<InputProps> = {
	name: "Clearable: No value",
	args: {
		addonClearButton: CLEARABLE_ARGS,
	},
};
export const ClearableControlledValue: StoryObj<InputProps> = {
	name: "Clearable: Controlled value",
	args: {
		value: faker.lorem.words(3),
		addonClearButton: CLEARABLE_ARGS,
	},
};
export const ClearableDefaultValue: StoryObj<InputProps> = {
	name: "Clearable: Default value",
	args: {
		defaultValue: faker.lorem.words(3),
		addonClearButton: CLEARABLE_ARGS,
	},
};

export const ClearableSlotRight: StoryObj<InputProps> = {
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

const VISIBILITY_ARGS: InputProps["addonVisibilityToggle"] = {
	isVisible: false,
	strHide: "Hide",
	strShow: "Show",
};

export const VisibilityDefaultValue: StoryObj<InputProps> = {
	args: {
		defaultValue: "my-secret-password",
		addonVisibilityToggle: VISIBILITY_ARGS,
	},
};

export const VisibilityControlledValue: StoryObj<InputProps> = {
	args: {
		value: "my-secret-password",
		addonVisibilityToggle: VISIBILITY_ARGS,
	},
};

export const VisibilitySlotRight: StoryObj<InputProps> = {
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
 * KITCHEN SINK
 * ------------------------------------------------------------------------------- */

export const KitchenSink: StoryObj<InputProps> = {
	args: {
		defaultValue: "my-secret-password",
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
	},
};
