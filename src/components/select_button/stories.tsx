/* eslint-disable import/no-extraneous-dependencies */
import { createRef, useCallback } from "react";

import { SelectButton as StoryComp } from ".";
import { LOREM } from "../../../mocks/LOREM.mock";
import { Box } from "../box";
import { DialogModal } from "../dialog_modal";
import {
  mockSelectItems,
  mockSelectItemsAsButtons,
} from "../select/__mocks__/select.mock";

import type { SelectButtonProps as StoryCompProps } from ".";
import type { StoryFn, StoryObj } from "@storybook/react";

const ITEMS = mockSelectItems({});

const PROPS: StoryCompProps = {
  buttonText: LOREM.button,
  id: LOREM.id(),
  items: ITEMS,
  name: LOREM.name(),
  // onChange: () => {
  //   console.log("clicked");
  // },
};

export default {
  component: StoryComp,
  title: "Components/SelectButton",
};

const Template: StoryFn<StoryCompProps> = ({ ...rest }) => {
  return <StoryComp {...rest} />;
};

const PlacementTemplate: StoryFn<StoryCompProps> = ({ ...rest }) => {
  return (
    <Box display="flex" width="50%">
      <Box marginLeft="auto">
        <StoryComp {...rest} />
      </Box>
    </Box>
  );
};

export const Default: StoryObj<StoryCompProps> = {
  args: PROPS,
  render: Template,
};

export const ItemsAsButtons: StoryObj<StoryCompProps> = {
  args: { ...PROPS, items: mockSelectItemsAsButtons({ withIcon: true }) },
  render: Template,
};

export const Customisation: StoryObj<StoryCompProps> = {
  args: {
    ...PROPS,
    wrapperProps: { marginBottom: "space_6" },
  },
};

/** -----------------------------------------------------------------------------
 * Disabled
 * ------------------------------------------------------------------------------- */

export const Disabled: StoryObj<StoryCompProps> = {
  args: {
    ...PROPS,
    disabled: true,
  },
  render: Template,
};

/** -----------------------------------------------------------------------------
 * Slot left
 * ------------------------------------------------------------------------------- */

export const SlotLeft: StoryObj<StoryCompProps> = {
  args: {
    ...PROPS,
    items: mockSelectItems({ withIcon: true }),
  },
  render: Template,
};

/** -----------------------------------------------------------------------------
 * Placement bottom end
 * ------------------------------------------------------------------------------- */

export const PlacementBottomEnd: StoryObj<StoryCompProps> = {
  args: {
    ...PROPS,
    buttonText: "",
    placement: "bottom-end",
  },
  render: PlacementTemplate,
};

/** -----------------------------------------------------------------------------
 * Placement bottom center
 * ------------------------------------------------------------------------------- */

export const PlacementBottomCenter: StoryObj<StoryCompProps> = {
  args: {
    ...PROPS,
    buttonText: "",
    placement: "bottom-center",
  },
  render: PlacementTemplate,
};

export const ItemOnClick: StoryObj<StoryCompProps> = {
  args: {
    items: [
      {
        as: "button",
        label: "United Kingdom",
        onClick: () => {
          alert("clicked");
        },
        value: "uk",
      },
    ],
  },
  render: Template,
};

/** -----------------------------------------------------------------------------
 * With custom button props
 * ------------------------------------------------------------------------------- */

export const WithCustomButtonProps: StoryObj<StoryCompProps> = {
  args: {
    ...PROPS,
    buttonProps: {
      appearance: "tertiary",
      name: "select_button",
      size: "sm",
    },
  },
  render: Template,
};

/** -----------------------------------------------------------------------------
 * With dialog trigger node as item
 * ------------------------------------------------------------------------------- */

const WithDialogTriggerNodeAsItemTemplate: StoryFn<StoryCompProps> = ({
  ...rest
}) => {
  const dialogRef = createRef<HTMLDialogElement>();

  const openDialog = useCallback(() => {
    dialogRef.current?.showModal();
  }, [dialogRef]);

  return (
    <>
      <DialogModal height="lg" ref={dialogRef} title="test" width="lg">
        <Box>Hello</Box>
      </DialogModal>
      <Box marginLeft="auto">
        <StoryComp
          {...rest}
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

export const WithDialogTriggerNodeAsItem: StoryObj<StoryCompProps> = {
  render: WithDialogTriggerNodeAsItemTemplate,
};
