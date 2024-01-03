import { faArrowRight } from "@fortawesome/pro-solid-svg-icons/faArrowRight";
import { faLock } from "@fortawesome/pro-solid-svg-icons/faLock";
import { faRefresh } from "@fortawesome/pro-solid-svg-icons/faRefresh";
import { faTriangleCircleSquare } from "@fortawesome/pro-solid-svg-icons/faTriangleCircleSquare";
import type { Meta, StoryObj } from "@storybook/react";
import { Input as StoryComp } from ".";
import type { InputProps as StoryCompProps } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Icon } from "../../v2/icon";
import { Box } from "../box";
import { Button } from "../button";

const meta = {
	args: {
		name: LOREM.name(),
		placeholder: LOREM.placeholder(),
	},
	component: StoryComp,
	title: "Components/V1/Input",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: LOREM.label(),
		name: LOREM.name(),
	},
};

export const TypeDate: Story = {
	args: {
		label: LOREM.label(),
		name: LOREM.name(),
		type: "date",
	},
};

export const Invalid: Story = {
	args: {
		invalid: true,
		label: LOREM.label(),
		name: LOREM.name(),
	},
};

export const HasBorderFalse: Story = {
	args: {
		hasBorder: false,
		label: LOREM.label(),
		name: LOREM.name(),
	},
};

export const Description: Story = {
	args: {
		description: LOREM.text_lg,
		label: LOREM.label(),
		name: LOREM.name(),
	},
};

const TemplateColors = () => {
	return (
		<Box alignItems="center" display="flex" gap="space_6">
			<StoryComp
				colorOverlay="blue"
				name="blue"
				placeholder={LOREM.placeholder()}
				slotRight={<Icon icon={faTriangleCircleSquare} />}
			/>
			<StoryComp
				colorOverlay="red"
				name="red"
				placeholder={LOREM.placeholder()}
				slotRight={<Icon icon={faTriangleCircleSquare} />}
			/>
			<StoryComp
				colorOverlay="green"
				name="green"
				placeholder={LOREM.placeholder()}
				slotRight={<Icon icon={faTriangleCircleSquare} />}
			/>
			<StoryComp
				colorOverlay="amber"
				name="amber"
				placeholder={LOREM.placeholder()}
				slotRight={<Icon icon={faTriangleCircleSquare} />}
			/>
			<StoryComp
				colorOverlay="grey"
				name="grey"
				placeholder={LOREM.placeholder()}
				slotRight={<Icon icon={faTriangleCircleSquare} />}
			/>
		</Box>
	);
};

export const Colors: StoryObj<StoryCompProps> = {
	render: TemplateColors,
};

const TemplateSizes = (props: Omit<StoryCompProps, "name" | "placeholder">) => {
	return (
		<Box
			display="grid"
			gap="space_8"
			gridTemplateColumns="3x"
			marginBottom="space_8"
		>
			<StoryComp
				{...(props as StoryCompProps)}
				label="lg"
				name="lg"
				placeholder={LOREM.placeholder()}
				size="lg"
			/>
			<StoryComp
				{...(props as StoryCompProps)}
				label="md"
				name="md"
				placeholder={LOREM.placeholder()}
				size="md"
			/>
			<StoryComp
				{...(props as StoryCompProps)}
				label="sm"
				name="sm"
				placeholder={LOREM.placeholder()}
				size="sm"
			/>
		</Box>
	);
};

export const Sizes: Story = {
	render: TemplateSizes,
};

export const IsClearable: Story = {
	args: {
		isClearable: true,
		strClear: "Clear input",
	},
};

export const IsCopyable: Story = {
	args: {
		defaultValue: LOREM.text_md,
		isCopyable: true,
		readOnly: true,
		strCopied: "Copied",
		strCopy: "Copy",
	},
};

export const IsVisibilityToggleable: Story = {
	args: {
		defaultValue: LOREM.text_md,
		isVisibilityToggleable: true,
		isVisible: false,
		strHide: "Hide",
		strShow: "Show",
	},
};

const TemplateIsVisibilityToggleableAndIsCopyable = () => {
	return (
		<>
			<Box as="h3">Is visibility toggleable and is copyable</Box>

			<TemplateSizes
				defaultValue={LOREM.text_xxs}
				isCopyable
				isVisibilityToggleable
				isVisible={false}
			/>
		</>
	);
};

export const IsVisibilityToggleableAndIsCopyable: Story = {
	render: TemplateIsVisibilityToggleableAndIsCopyable,
};

export const StateHover: Story = {
	parameters: { pseudo: { hover: true } },
};

export const StateFocusVisible: Story = {
	parameters: { pseudo: { focusVisible: true } },
};

export const StateDisabled: Story = {
	args: { disabled: true },
};

export const StateReadOnly: Story = {
	args: { readOnly: true },
};

export const WithDefaultValue: Story = {
	args: {
		defaultValue: LOREM.text_md,
	},
};

export const With1SlotLeft: Story = {
	args: {
		slotLeft: <Icon icon={faArrowRight} />,
	},
};

export const With2SlotLeft: Story = {
	args: {
		slotLeft: (
			<>
				<Icon icon={faArrowRight} />
				<Icon icon={faArrowRight} />
			</>
		),
	},
};

export const With3SlotLeft: Story = {
	args: {
		slotLeft: (
			<>
				<Icon icon={faArrowRight} />
				<Icon icon={faArrowRight} />
				<Icon icon={faArrowRight} />
			</>
		),
	},
};

export const With1SlotRight: Story = {
	args: {
		slotRight: <Icon icon={faArrowRight} />,
	},
};

export const With1SlotRightWide: Story = {
	args: {
		slotRight: (
			<Button
				appearance="ghost"
				name="reset"
				size="sm"
				slotLeft={<Icon icon={faRefresh} />}
			>
				Reset
			</Button>
		),
	},
};

export const With1SlotRightIsCopyable: Story = {
	args: {
		isCopyable: true,
		readOnly: true,
		slotRight: <Icon icon={faLock} />,
		strCopied: "Copied",
		strCopy: "Copy",
	},
};

export const With2SlotRight: Story = {
	args: {
		slotRight: (
			<>
				<Icon icon={faArrowRight} />
				<Icon icon={faArrowRight} />
			</>
		),
	},
};

export const With3SlotRight: Story = {
	args: {
		slotRight: (
			<>
				<Icon icon={faArrowRight} />
				<Icon icon={faArrowRight} />
				<Icon icon={faArrowRight} />
			</>
		),
	},
};
