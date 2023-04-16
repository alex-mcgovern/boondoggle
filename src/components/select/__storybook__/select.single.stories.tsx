/* eslint-disable import/no-extraneous-dependencies */
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { jest } from "@storybook/jest";

import { SelectSingle } from "..";
import { LOREM } from "../../../../mocks/LOREM.mock";
import { Icon } from "../../icon";
import { mockSelectItems } from "../__mocks__/select.mock";

import type { SelectSingleProps } from "..";
import type { StoryFn, StoryObj } from "@storybook/react";

const ON_CHANGE = jest.fn();

const ITEMS = mockSelectItems();

export default {
  title: "React components/Select/Single",
  component: SelectSingle,
};

const SelectSingleTemplate: StoryFn<SelectSingleProps> = ({ ...rest }) => {
  return <SelectSingle {...rest} />;
};

export const SelectSingleDefault: StoryObj<SelectSingleProps> = {
  render: SelectSingleTemplate,
  args: {
    slotLeft: <Icon icon={faGlobeEurope} />,
    items: ITEMS,
    label: LOREM.label(),
    name: "country",
    onChange: ON_CHANGE,
  },
};
