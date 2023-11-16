import { useState } from "react";

import { SelectMulti as StoryComp } from ".";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { Box } from "../../box/_components/Box";
import { mockSelectItems } from "../__mocks__/select.mock";

import type { Meta, StoryObj } from "@storybook/react";
import type { SelectItemShape } from "../types";

const ITEMS = mockSelectItems({});

const meta = {
	args: {
		errorMessage: LOREM.errorMessage(),
		items: ITEMS,
		label: LOREM.label(),
		name: LOREM.name(),
		// onChange: (selection) => {
		//     console.log(`onChange\n\n${JSON.stringify(selection, null, 2)}`);
		// },
		placeholder: LOREM.placeholder(),
	},
	component: StoryComp,
	title: "Components/SelectMulti",
} satisfies Meta<typeof StoryComp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Filterable: Story = {
	args: {
		isFilterable: true,
	},
};

export const InitialSelectedItems: Story = {
	args: {
		initialSelectedItems: [ITEMS[0]],
	},
};

export const Invalid: Story = {
	args: {
		invalid: true,
	},
};

export const ItemsWithIsSelectedTrue: Story = {
	args: {
		items: [
			{
				isSelected: true,
				label: "United Kingdom",
				value: "uk",
			},
			{
				isSelected: true,
				label: "France",
				value: "fr",
			},
			{
				isSelected: true,
				label: "Germany",
				value: "de",
			},
		],
	},
};

const ControlledTemplate = () => {
	const [selectedItems, setSelectedItems] = useState<
		Array<SelectItemShape<string>>
	>([]);

	return (
		<Box>
			<Box
				alignItems="center"
				display="flex"
				gap="space_2"
				marginBottom="space_4"
			>
				<button
					onClick={() => {
						return setSelectedItems([]);
					}}
					type="button"
				>
					Clear selected Items
				</button>
				<button
					onClick={() => {
						return setSelectedItems([ITEMS[0]]);
					}}
					type="button"
				>
					Set selected Items
				</button>
			</Box>
			<StoryComp
				items={ITEMS}
				name={LOREM.name()}
				placeholder={LOREM.placeholder()}
				selectedItems={selectedItems}
			/>
			{JSON.stringify(selectedItems)}
		</Box>
	);
};

export const Controlled: Story = {
	render: ControlledTemplate,
};

export const Customisation: Story = {
	args: {
		marginBottom: "none",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const OnChange: Story = {
	args: {
		onChange: (selectedItems) => {
			alert(JSON.stringify({ selectedItems }));
		},
	},
};

export const SelectedItemsToString: Story = {
	args: {
		selectedItemsToString: (
			selectedItems: Array<SelectItemShape<string>>,
		) => {
			if (selectedItems.length === 1) {
				return `${selectedItems.length} country selected`;
			}

			return `${selectedItems.length} countries selected`;
		},
	},
};

export const SlotLeft: Story = {
	args: {
		items: mockSelectItems({ withIcon: true }),
	},
};
