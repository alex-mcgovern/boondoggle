/* eslint-disable import/no-extraneous-dependencies */
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { jest } from "@storybook/jest";

import { SelectMulti } from "..";
import { Icon } from "../../icon";
import { mockSelectItems } from "../__mocks__/select.mock";

import type { SelectMultiProps } from "../select.multi.comp";
import type { StoryFn, StoryObj } from "@storybook/react";

const ON_CHANGE = jest.fn();

const ITEMS = mockSelectItems();

export default {
  title: "React components/Select/Multi",
  component: SelectMulti,
};

const SelectMultiTemplate: StoryFn<SelectMultiProps> = ({ ...rest }) => {
  return <SelectMulti {...rest} />;
};

export const SelectMultiDefault: StoryObj<SelectMultiProps> = {
  render: SelectMultiTemplate,
  args: {
    slotLeft: <Icon icon={faGlobeEurope} />,
    items: ITEMS,
    label: "Single select",
    name: "country",
    onChange: ON_CHANGE,
  },
};
