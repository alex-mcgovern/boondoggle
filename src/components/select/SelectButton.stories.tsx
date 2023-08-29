import { type StoryFn, type StoryObj } from "@storybook/react";
import { createRef, useCallback } from "react";

import { LOREM } from "../../../mocks/LOREM.mock";
import { Box } from "../box";
import { DialogModal } from "../dialog_modal";
import {
  SelectButton as StoryComp,
  type SelectButtonProps as StoryCompProps,
} from "./SelectButton";
import { mockSelectItems } from "./__mocks__/select.mock";

import type { Meta } from "@storybook/react";

const meta = {
  args: {
    buttonText: LOREM.button,
    id: LOREM.id(),
    items: mockSelectItems({}),
    name: LOREM.name(),
    onChange: (changes) => {
      alert(`onChange\n\n${JSON.stringify(changes.selectedItem, null, 2)}`);
    },
  },
  component: StoryComp,
  title: "Components/SelectButton",
} satisfies Meta<typeof StoryComp>;

export default meta;
type Story = StoryObj<typeof meta>;

/** ----------------------------------------------------------------------------- */

export const Default: Story = {};

/** ----------------------------------------------------------------------------- */

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

/** ----------------------------------------------------------------------------- */

export const SizeSm: Story = {
  args: {
    size: "sm",
  },
};
/** ----------------------------------------------------------------------------- */

export const SizeMd: Story = {
  args: {
    size: "md",
  },
};
/** ----------------------------------------------------------------------------- */

export const SizeLg: Story = {
  args: {
    size: "lg",
  },
};

/** ----------------------------------------------------------------------------- */

export const WithCustomButtonProps: Story = {
  args: {
    buttonProps: {
      appearance: "tertiary",
    },
  },
};

/** ----------------------------------------------------------------------------- */

export const WithItemsWithIcons: Story = {
  args: {
    items: mockSelectItems({ withIcon: true }),
  },
};

/** ----------------------------------------------------------------------------- */

export const WithButtonsAsItems: Story = {
  args: {
    items: mockSelectItems({
      onClick: () => {
        return alert("clicked");
      },
    }),
  },
};

/** ----------------------------------------------------------------------------- */

const WithDialogTriggerNodeAsItemTemplate: StoryFn<StoryCompProps> = (
  props: StoryCompProps
) => {
  const dialogRef = createRef<HTMLDialogElement>();

  const openDialog = useCallback(() => {
    dialogRef.current?.showModal();
  }, [dialogRef]);

  return (
    <>
      <DialogModal ref={dialogRef} title="test" width="lg">
        <Box>Hello</Box>
      </DialogModal>
      <Box marginLeft="auto">
        <StoryComp
          {...props}
          buttonText="Click me"
          items={[
            {
              as: "button",
              label: "test",
              onClick: openDialog,
              value: "test",
            },
          ]}
          name="select_button"
        />
      </Box>
    </>
  );
};

export const WithDialogTriggerNodeAsItem: Story = {
  render: WithDialogTriggerNodeAsItemTemplate,
};
