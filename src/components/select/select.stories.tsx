/* eslint-disable import/no-extraneous-dependencies */
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { jest } from "@storybook/jest";

import { SelectSingle } from ".";
import { Icon } from "../icon";
import { SelectMultiple } from "./select_multiple.component";

import type { SelectSingleProps } from ".";
import type { SelectMultipleProps } from "./select_multiple.component";
import type { StoryFn, StoryObj } from "@storybook/react";

const ON_CHANGE = jest.fn();

// const MOCK_SELECT_ITEMS = [
//   { label: "United Kingdom", value: "uk" },
//   { label: "France", value: "fr" },
// ];
// const FIRST_ITEM = MOCK_SELECT_ITEMS[0];
// const FIRST_ITEM_LABEL = FIRST_ITEM?.label || "";

export default {
  title: "React components/Select",
  component: SelectSingle,
};

const SelectSingleTemplate: StoryFn<SelectSingleProps> = ({ ...rest }) => {
  return <SelectSingle {...rest} />;
};
const SelectMultipleTemplate: StoryFn<SelectMultipleProps> = ({ ...rest }) => {
  return <SelectMultiple {...rest} />;
};

export const SelectSingleDefault: StoryObj<SelectSingleProps> = {
  render: SelectSingleTemplate,
  args: {
    slotLeft: <Icon icon={faGlobeEurope} />,
    items: [
      { label: "United Kingdom", value: "uk" },
      { label: "France", value: "fr" },
      { label: "Germany", value: "de" },
      { label: "Spain", value: "es" },
      { label: "Italy", value: "it" },
      { label: "Portugal", value: "pt" },
    ],
    label: "Single select",
    name: "country",
    onChange: ON_CHANGE,
  },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);

  //   const combobox = canvas.getByRole("combobox");
  //   await userEvent.click(combobox);

  //   const firstItem = await canvas.findByText(FIRST_ITEM_LABEL);
  //   await userEvent.click(firstItem);

  //   /** Wait for lazy loaded components / images load in before asserting */
  //   await waitFor(() => {
  //     expect(ON_CHANGE).toHaveBeenCalledWith(
  //       expect.objectContaining({
  //         selectedItem: FIRST_ITEM,
  //       })
  //     );
  //   });
  // },
};
export const SelectMultipleDefault: StoryObj<SelectMultipleProps> = {
  render: SelectMultipleTemplate,
  args: {
    slotLeft: <Icon icon={faGlobeEurope} />,
    items: [
      { label: "United Kingdom", value: "uk" },
      { label: "France", value: "fr" },
      { label: "Germany", value: "de" },
      { label: "Spain", value: "es" },
      { label: "Italy", value: "it" },
      { label: "Portugal", value: "pt" },
    ],
    label: "Single select",
    name: "country",
    onChange: ON_CHANGE,
  },
  // play: async ({ canvasElement }) => {
  //   const canvas = within(canvasElement);

  //   const combobox = canvas.getByRole("combobox");
  //   await userEvent.click(combobox);

  //   const firstItem = await canvas.findByText(FIRST_ITEM_LABEL);
  //   await userEvent.click(firstItem);

  //   /** Wait for lazy loaded components / images load in before asserting */
  //   await waitFor(() => {
  //     expect(ON_CHANGE).toHaveBeenCalledWith(
  //       expect.objectContaining({
  //         selectedItem: FIRST_ITEM,
  //       })
  //     );
  //   });
  // },
};

// const FIRST_ITEM = MOCK_SELECT_ITEMS[0];
// const FIRST_ITEM_LABEL = FIRST_ITEM?.label || "";

// const SECOND_ITEM = MOCK_SELECT_ITEMS[1];
// const SECOND_ITEM_LABEL = SECOND_ITEM?.label || "";

// /**
//  * -
//  * Multi select
//  * -
//  */
// export const SelectMulti = SelectSingleTemplate.bind({});

// SelectMulti.args = {
//   slotLeft: <Icon icon={faGlobeEurope} />,
//   items: MOCK_SELECT_ITEMS,
//   id: "select",
//   label: "Multi select",
//   name: "country",
//   onChange: ON_CHANGE,
// };

// SelectSingleDefault.play = async ({ canvasElement }) => {
//   const canvas = within(canvasElement);

//   await waitFor(async () => {
//     const combobox = canvas.getByRole("combobox");
//     await userEvent.click(combobox);

//     const firstItem = await canvas.findByText(FIRST_ITEM_LABEL);
//     await userEvent.click(firstItem);

//     const secondItem = await canvas.findByText(SECOND_ITEM_LABEL);
//     await userEvent.click(secondItem);

//     expect(ON_CHANGE).toHaveBeenCalledWith(
//       expect.objectContaining({
//         selectedItems: expect.arrayContaining([FIRST_ITEM, SECOND_ITEM]),
//       })
//     );

//     await userEvent.click(firstItem);
//     await userEvent.click(secondItem);

//     expect(ON_CHANGE).toHaveBeenCalledWith(
//       expect.objectContaining({
//         selectedItems: [],
//       })
//     );
//   });
// };

// /**
//  * -
//  * Multi-select filterable
//  * -
//  */
// export const Filterable = SelectSingleTemplate.bind({});

// Filterable.args = {
//   slotLeft: faGlobeEurope,
//   items: MOCK_SELECT_ITEMS,
//   label: "Multi select",
//   name: "country",
//   isFilterable: true,
// };

// // export const Filterable = {
// //   render: SelectSingleTemplate,

// //   args: {
// //     slotLeft: faGlobeEurope,
// //     items: MOCK_SELECT_ITEMS,
// //     label: "Single select",
// //     name: "country",
// //     isFilterable: true,
// //     onChange: ON_CHANGE,
// //   },

// //   play: async ({ canvasElement }) => {
// //     const canvas = within(canvasElement);

// //     const combobox = canvas.getByRole("combobox");
// //     fireEvent.focus(combobox);

// //     await userEvent.type(combobox, FIRST_ITEM_LABEL);
// //     const firstItem = await canvas.findByText(FIRST_ITEM_LABEL);
// //     fireEvent.click(firstItem);

// //     /** Wait for lazy loaded components / images load in before asserting */
// //     await waitFor(() => {
// //       expect(ON_CHANGE).toHaveBeenCalledWith(
// //         expect.objectContaining({
// //           selectedItem: FIRST_ITEM,
// //         })
// //       );
// //     });
// //   },
// // };
