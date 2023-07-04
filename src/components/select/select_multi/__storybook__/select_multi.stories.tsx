import { jest } from "@storybook/jest";
import { useState } from "react";

import { SelectMulti as StoryComp } from "../..";
import { LOREM } from "../../../../../mocks/LOREM.mock";
import { Box } from "../../../box";
import { mockSelectItems } from "../../__mocks__/select.mock";

import type { DropdownItemShape } from "../..";
import type { Meta, StoryObj } from "@storybook/react";

const ON_CHANGE = jest.fn();

const ITEMS = mockSelectItems({});

const meta = {
  args: {
    errorMessage: LOREM.errorMessage(),
    id: LOREM.id(),
    items: ITEMS,
    label: LOREM.label(),
    name: LOREM.name(),
    onChange: ON_CHANGE,
    placeholder: LOREM.placeholder(),
  },
  component: StoryComp,
  title: "React components/SelectMulti",
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

/** ----------------------------------------------------------------------------- */

const ControlledTemplate = () => {
  const [selectedItems, setSelectedItems] = useState<Array<DropdownItemShape>>(
    []
  );
  return (
    <Box>
      <Box
        alignItems="center"
        display="flex"
        gap="spacing_1"
        marginBottom="spacing_2"
      >
        <button
          type="button"
          onClick={() => {
            return setSelectedItems([]);
          }}
        >
          Clear selected Items
        </button>
        <button
          type="button"
          onClick={() => {
            return setSelectedItems([ITEMS[0]]);
          }}
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

/** ----------------------------------------------------------------------------- */

export const Customisation: Story = {
  args: {
    wrapperProps: {
      marginBottom: "spacing_3",
    },
  },
};

export const SlotLeft: Story = {
  args: {
    items: mockSelectItems({ withIcon: true }),
  },
};
