import React from "react";
import { V2Tab, V2TabList, V2TabPanel, V2Tabs } from ".";

import { Meta, StoryObj } from "@storybook/react";
import { faker } from "@faker-js/faker";

const meta = {
	title: "Components/V2/Tabs",
	component: V2Tabs,
	args: {
		children: (
			<>
				<V2TabList>
					<V2Tab id="tab_1">{faker.lorem.words(1)}</V2Tab>
					<V2Tab id="tab_2">{faker.lorem.words(2)}</V2Tab>
					<V2Tab id="tab_3">{faker.lorem.words(3)}</V2Tab>
					<V2Tab id="tab_4">{faker.lorem.words(2)}</V2Tab>
					<V2Tab id="tab_5">{faker.lorem.words(1)}</V2Tab>
					<V2Tab id="tab_6">{faker.lorem.words(2)}</V2Tab>
					<V2Tab id="tab_7">{faker.lorem.words(3)}</V2Tab>
					<V2Tab id="tab_8">{faker.lorem.words(2)}</V2Tab>
					<V2Tab id="tab_9">{faker.lorem.words(1)}</V2Tab>
					<V2Tab id="tab_10">{faker.lorem.words(2)}</V2Tab>
				</V2TabList>
				<V2TabPanel id="tab_1">{faker.lorem.paragraphs(1)}</V2TabPanel>
				<V2TabPanel id="tab_2">{faker.lorem.paragraphs(1)}</V2TabPanel>
				<V2TabPanel id="tab_3">{faker.lorem.paragraphs(1)}</V2TabPanel>
				<V2TabPanel id="tab_4">{faker.lorem.paragraphs(1)}</V2TabPanel>
				<V2TabPanel id="tab_5">{faker.lorem.paragraphs(1)}</V2TabPanel>
				<V2TabPanel id="tab_6">{faker.lorem.paragraphs(1)}</V2TabPanel>
				<V2TabPanel id="tab_7">{faker.lorem.paragraphs(1)}</V2TabPanel>
				<V2TabPanel id="tab_8">{faker.lorem.paragraphs(1)}</V2TabPanel>
				<V2TabPanel id="tab_9">{faker.lorem.paragraphs(1)}</V2TabPanel>
				<V2TabPanel id="tab_10">{faker.lorem.paragraphs(1)}</V2TabPanel>
			</>
		),
	},
} satisfies Meta<typeof V2Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
