import { faGlobeAfrica } from "@fortawesome/pro-solid-svg-icons";

import { SelectSingle as StoryComp } from ".";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { Icon } from "../../icon";
import {
	mockSelectItems,
	mockSelectItemsGrouped,
} from "../__mocks__/select.mock";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	args: {
		items: mockSelectItems({}),
		label: LOREM.label(),
		name: LOREM.name(),
		onChange: (selection) => {
			alert(`onChange\n\n${JSON.stringify(selection, null, 2)}`);
		},
		placeholder: LOREM.placeholder(),
		strClear: "Clear",
	},
	component: StoryComp,
	title: "Components/SelectSingle",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const InitialSelectedItem: Story = {
	args: {
		initialSelectedItem: mockSelectItems({})[0],
	},
};

export const InitialSelectedItemWithIsClearable: Story = {
	args: {
		initialSelectedItem: mockSelectItems({})[0],
		isClearable: true,
	},
};

export const Invalid: Story = {
	args: {
		errorMessage: LOREM.errorMessage(),
		invalid: true,
	},
};

export const IsClearable: Story = {
	args: {
		isClearable: true,
		strClear: "Clear",
	},
};

export const IsFilterable: Story = {
	args: {
		isFilterable: true,
		strClear: "Clear",
	},
};

export const Customisation: Story = {
	args: {
		wrapperProps: {
			background: "tint_default",
			border: "border_default",
			borderRadius: "lg",
			padding: "space_5",
			// width: "100%",
		},
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const SizeSm: Story = {
	args: {
		size: "sm",
	},
};

export const SizeMd: Story = {
	args: {
		size: "md",
	},
};

export const SizeLg: Story = {
	args: {
		size: "lg",
	},
};

export const WithButtonsAsItems: Story = {
	args: {
		items: mockSelectItems({
			onClick: () => {
				return alert("clicked");
			},
		}),
	},
};

export const WithShouldResetOnSelection: Story = {
	args: {
		isFilterable: true,
		shouldClearFilterOnSelection: true,
	},
};

export const WithItemsWithSelectedTrue: Story = {
	args: {
		items: [
			{
				isSelected: true,
				label: "United Kingdom",
				value: "uk",
			},
			{
				isSelected: false,
				label: "France",
				value: "fr",
			},
			{
				isSelected: false,
				label: "Germany",
				value: "de",
			},
		],
	},
};

export const WithItemsGrouped: Story = {
	args: {
		items: mockSelectItemsGrouped({}),
	},
};

export const WithItemAsLink: Story = {
	args: {
		items: [
			{
				as: "a",
				href: "https://www.google.com",
				label: "Link",
				value: "link",
			},
		],
	},
};

export const WithItemsGroupedIsFilterable: Story = {
	args: {
		isFilterable: true,
		items: mockSelectItemsGrouped({}),
	},
};

export const WithItemsGroupedSizeSm: Story = {
	args: {
		items: mockSelectItemsGrouped({}),
		size: "sm",
	},
};

export const WithItemsGroupedSizeLg: Story = {
	args: {
		items: mockSelectItemsGrouped({}),
		size: "sm",
	},
};

export const WithItemsWithSlotLeft: Story = {
	args: {
		items: mockSelectItems({ withIcon: true }),
	},
};

export const WithTags: Story = {
	args: {
		isFilterable: true,
		strClear: "Clear",
		items: mockSelectItems({ withTags: true }),
	},
};

export const WithSlotLeft: Story = {
	args: {
		slotLeft: <Icon icon={faGlobeAfrica} />,
	},
};

export const WithSlots: Story = {
	args: {
		slotRight: <Icon icon={faGlobeAfrica} />,
	},
};
