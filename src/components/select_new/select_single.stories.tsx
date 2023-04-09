/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable react/function-component-definition */
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { expect, jest } from "@storybook/jest";
import {
  fireEvent,
  userEvent,
  waitFor,
  within,
} from "@storybook/testing-library";
import React from "react";

import { Icon } from "../icon";
import { SelectSingle as StoryComponent } from "./select_single.component";

import type { SelectSingleProps as StoryComponentProps } from "./select_single.component";
import type { StoryFn } from "@storybook/react";

const ON_CHANGE = jest.fn();

const MOCK_SELECT_ITEMS = [
  { label: "United Kingdom", value: "uk" },
  { label: "France", value: "fr" },
];
const FIRST_ITEM = MOCK_SELECT_ITEMS[0];
const FIRST_ITEM_LABEL = FIRST_ITEM?.label || "";

export default {
  title: "Components/select/select_single",
  component: StoryComponent,
};

const Template: StoryFn<StoryComponentProps> = ({
  ...rest
}: StoryComponentProps) => {
  return <StoryComponent {...rest} />;
};

export const Default = {
  render: Template,

  args: {
    slotLeft: <Icon icon={faGlobeEurope} />,
    items: [
      { label: "United Kingdom", value: "uk" },
      { label: "France", value: "fr" },
    ],
    label: "Single select",
    name: "country",
    onSelectedItemChange: ON_CHANGE,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const combobox = canvas.getByRole("combobox");
    await userEvent.click(combobox);

    const firstItem = await canvas.findByText(FIRST_ITEM_LABEL);
    await userEvent.click(firstItem);

    /** Wait for lazy loaded components / images load in before asserting */
    await waitFor(() => {
      expect(ON_CHANGE).toHaveBeenCalledWith(
        expect.objectContaining({
          selectedItem: FIRST_ITEM,
        })
      );
    });
  },
};

export const Filterable = {
  render: Template,

  args: {
    slotLeft: faGlobeEurope,
    items: MOCK_SELECT_ITEMS,
    label: "Single select",
    name: "country",
    isFilterable: true,
    onSelectedItemChange: ON_CHANGE,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const combobox = canvas.getByRole("combobox");
    fireEvent.focus(combobox);

    await userEvent.type(combobox, FIRST_ITEM_LABEL);
    const firstItem = await canvas.findByText(FIRST_ITEM_LABEL);
    fireEvent.click(firstItem);

    /** Wait for lazy loaded components / images load in before asserting */
    await waitFor(() => {
      expect(ON_CHANGE).toHaveBeenCalledWith(
        expect.objectContaining({
          selectedItem: FIRST_ITEM,
        })
      );
    });
  },
};
