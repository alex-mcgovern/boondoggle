import { faker } from "@faker-js/faker";
import { Meta, StoryObj } from "@storybook/react";
import { V2TabCount, V2TabList, V2TabPanel, V2Tabs } from ".";

const meta = {
	title: "Components/V2/Tabs",
	component: V2Tabs,
	args: {
		children: (
			<>
				<V2TabList
					items={[
						{
							id: "tab_1",
							label: "I am a link",
							href: "/",
						},
						{
							id: "tab_2",
							label: faker.lorem.words(2),
						},
						{
							id: "tab_3",
							label: faker.lorem.words(3),
						},
						{
							id: "tab_4",
							label: faker.lorem.words(2),
						},
						{
							id: "tab_5",
							label: faker.lorem.words(1),
						},
						{
							id: "tab_6",
							label: faker.lorem.words(2),
						},
						{
							id: "tab_7",
							label: faker.lorem.words(3),
						},
						{
							id: "tab_8",
							label: faker.lorem.words(2),
						},
						{
							id: "tab_9",
							label: faker.lorem.words(1),
						},
						{
							id: "tab_10",
							label: faker.lorem.words(2),
						},
					]}
				/>
				<V2TabPanel id="tab_1">{faker.lorem.paragraphs(5)}</V2TabPanel>
				<V2TabPanel id="tab_2">{faker.lorem.paragraphs(5)}</V2TabPanel>
				<V2TabPanel id="tab_3">{faker.lorem.paragraphs(5)}</V2TabPanel>
				<V2TabPanel id="tab_4">{faker.lorem.paragraphs(5)}</V2TabPanel>
				<V2TabPanel id="tab_5">{faker.lorem.paragraphs(5)}</V2TabPanel>
				<V2TabPanel id="tab_6">{faker.lorem.paragraphs(5)}</V2TabPanel>
				<V2TabPanel id="tab_7">{faker.lorem.paragraphs(5)}</V2TabPanel>
				<V2TabPanel id="tab_8">{faker.lorem.paragraphs(5)}</V2TabPanel>
				<V2TabPanel id="tab_9">{faker.lorem.paragraphs(5)}</V2TabPanel>
				<V2TabPanel id="tab_10">{faker.lorem.paragraphs(5)}</V2TabPanel>
			</>
		),
	},
} satisfies Meta<typeof V2Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTabCount: Story = {
	args: {
		children: (
			<>
				<V2TabList
					items={[
						{
							id: "tab_1",
							label: "I am a link",
							href: "/",
							slotRight: <V2TabCount count={1} />,
						},
						{
							id: "tab_2",
							label: faker.lorem.words(2),
							slotRight: <V2TabCount isLoading />,
						},
						{
							id: "tab_3",
							label: faker.lorem.words(3),
						},
					]}
				/>
				<V2TabPanel id="tab_1">{faker.lorem.paragraphs(5)}</V2TabPanel>
				<V2TabPanel id="tab_2">{faker.lorem.paragraphs(5)}</V2TabPanel>
				<V2TabPanel id="tab_3">{faker.lorem.paragraphs(5)}</V2TabPanel>
			</>
		),
	},
};
