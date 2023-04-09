/* eslint-disable react/function-component-definition */
import { faGlobeEurope } from "@fortawesome/sharp-regular-svg-icons/faGlobeEurope";
import { expect, jest } from "@storybook/jest";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import React from "react";
import { mockSelectItems } from "~test/__mocks__/mockSelectItems";
import { StoryOnAllBackgrounds } from "~test/test_components/StoryOnAllBackgrounds";

import { SelectMultiple as StoryComponent } from "./select_multiple";

import type { SelectMultipleProps } from "./select_multiple";
import type { StoryWithDecorators } from "~types/storybook.types";

const ON_CHANGE = jest.fn();
const MOCK_SELECT_ITEMS = mockSelectItems();

const FIRST_ITEM = MOCK_SELECT_ITEMS[0];
const FIRST_ITEM_LABEL = FIRST_ITEM?.label || "";

const SECOND_ITEM = MOCK_SELECT_ITEMS[1];
const SECOND_ITEM_LABEL = SECOND_ITEM?.label || "";

const Template: StoryWithDecorators<SelectMultipleProps> = ({ ...rest }) => {
  return <StoryComponent {...rest} />;
};

/**
 * ------------------------------------------------------------------------------
 * Multi select
 * ------------------------------------------------------------------------------
 */

export const Default = Template.bind({});

Default.args = {
  slotLeft: faGlobeEurope,
  items: MOCK_SELECT_ITEMS,
  id: "select",
  label: "Multi select",
  name: "country",
  onChange: ON_CHANGE,
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(async () => {
    const combobox = canvas.getByRole("combobox");
    await userEvent.click(combobox);

    const firstItem = await canvas.findByText(FIRST_ITEM_LABEL);
    await userEvent.click(firstItem);

    const secondItem = await canvas.findByText(SECOND_ITEM_LABEL);
    await userEvent.click(secondItem);

    expect(ON_CHANGE).toHaveBeenCalledWith(
      expect.objectContaining({
        selectedItems: expect.arrayContaining([FIRST_ITEM, SECOND_ITEM]),
      })
    );

    await userEvent.click(firstItem);
    await userEvent.click(secondItem);

    expect(ON_CHANGE).toHaveBeenCalledWith(
      expect.objectContaining({
        selectedItems: [],
      })
    );
  });
};

/**
 * ------------------------------------------------------------------------------
 * Multi-select filterable
 * ------------------------------------------------------------------------------
 */

export const Filterable = Template.bind({});

Filterable.args = {
  slotLeft: faGlobeEurope,
  items: MOCK_SELECT_ITEMS,
  label: "Multi select",
  name: "country",
  isFilterable: true,
};

/*
 * ------------------------------------------------------------------------------
 * Transparent
 * ------------------------------------------------------------------------------
 */

export const Transparent = (args: SelectMultipleProps) => {
  return StoryOnAllBackgrounds<SelectMultipleProps>(Template, args);
};

Transparent.args = {
  slotLeft: faGlobeEurope,
  items: MOCK_SELECT_ITEMS,
  label: "Multiple select",
  name: "country",
  inputAppearance: "transparent",
};

/*
 * ------------------------------------------------------------------------------
 * Background
 * ------------------------------------------------------------------------------
 */

export const OnAllBackgrounds = (args: SelectMultipleProps) => {
  return StoryOnAllBackgrounds<SelectMultipleProps>(Template, args);
};

OnAllBackgrounds.args = {
  slotLeft: faGlobeEurope,
  items: MOCK_SELECT_ITEMS,
  label: "Multi select",
  name: "country",
};
