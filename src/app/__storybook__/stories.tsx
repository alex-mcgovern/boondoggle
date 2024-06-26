import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { faker } from "@faker-js/faker";
import { faEllipsis } from "@fortawesome/pro-solid-svg-icons/faEllipsis";
import { faPerson } from "@fortawesome/pro-solid-svg-icons/faPerson";
import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";
import { faWallet } from "@fortawesome/pro-solid-svg-icons/faWallet";
import { useState } from "react";

import { App } from "..";
import { Button } from "../../button";
import { Icon } from "../../icon";
import { Menu } from "../../menu";
import { Popover } from "../../popover";
import { Table } from "../../table";
import { Tabs } from "../../tabs";

function SideNav() {
	return (
		<App.Nav.Root>
			<App.Nav.Header>
				<App.Nav.Org
					image={undefined}
					name="Acme Inc."
				/>
			</App.Nav.Header>
			<App.Nav.Section>
				<div className="flex gap-1">
					<Menu.Trigger>
						<App.Nav.Button
							appearance="secondary"
							className="grow"
							icon={faPlus}
						>
							Create a file
						</App.Nav.Button>
						<Popover placement="right top">
							<Menu.DropdownMenu>
								<Menu.Section>
									<Menu.Item>Create new document</Menu.Item>
									<Menu.Item>Create new folder</Menu.Item>
									<Menu.Item>Create a collection</Menu.Item>
								</Menu.Section>
								<Menu.Section>
									<Menu.SectionHeader>
										Import
									</Menu.SectionHeader>
									<Menu.Item>
										Import an existing file
									</Menu.Item>
									<Menu.Item>
										Import an existing folder
									</Menu.Item>
								</Menu.Section>
							</Menu.DropdownMenu>
						</Popover>
					</Menu.Trigger>
				</div>
			</App.Nav.Section>
			<App.Nav.Section>
				<App.Nav.Link
					href="https://boondoggle.design"
					icon={faPerson}
				>
					Users
				</App.Nav.Link>
				<App.Nav.Link
					href="https://boondoggle.design"
					icon={faWallet}
				>
					Accounts
				</App.Nav.Link>
			</App.Nav.Section>
		</App.Nav.Root>
	);
}

const meta = {
	component: App.Container,
	parameters: {
		layout: "fullscreen",
	},
	title: "Components/App",
} satisfies Meta<typeof App.Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithTabs: Story = {
	args: {
		children: (
			<>
				<SideNav />
				<App.Main.Root>
					<Tabs.Container>
						<App.Main.Header>
							<h1>Upload a file</h1>
							<Tabs.List center>
								<Tabs.Item id="a">Lorem ipsum</Tabs.Item>
								<Tabs.Item id="b">Dolores sit</Tabs.Item>
								<Tabs.Item id="c">Consectetur</Tabs.Item>
							</Tabs.List>
						</App.Main.Header>
						<App.Main.Content>
							<App.Focused>
								<Tabs.Content id="a">
									<Table.Root
										aria-label="Files"
										compact
									>
										<Table.Header>
											<Table.Column
												allowsSorting
												isRowHeader
												width="2fr"
											>
												User
											</Table.Column>

											<Table.Column width="1fr">
												Job type
											</Table.Column>
											<Table.Column width="1fr">
												Job area
											</Table.Column>
										</Table.Header>

										<Table.Body>
											{Array.from({ length: 25 }).map(
												(_, index) => {
													return (
														<Table.Row key={index}>
															<Table.Cell>
																{faker.person.fullName()}
															</Table.Cell>

															<Table.Cell>
																{faker.person.jobType()}
															</Table.Cell>
															<Table.Cell>
																{faker.person.jobArea()}
															</Table.Cell>
														</Table.Row>
													);
												},
											)}
										</Table.Body>
									</Table.Root>
								</Tabs.Content>
								<Tabs.Content id="b">
									<Table.Root
										aria-label="Files"
										compact
									>
										<Table.Header>
											<Table.Column
												allowsSorting
												isRowHeader
												width="2fr"
											>
												User
											</Table.Column>

											<Table.Column width="1fr">
												Job type
											</Table.Column>
											<Table.Column width="1fr">
												Job area
											</Table.Column>
										</Table.Header>

										<Table.Body>
											{Array.from({ length: 5 }).map(
												(_, index) => {
													return (
														<Table.Row key={index}>
															<Table.Cell>
																{faker.person.fullName()}
															</Table.Cell>
															<Table.Cell>
																{faker.person.jobType()}
															</Table.Cell>
															<Table.Cell>
																{faker.person.jobArea()}
															</Table.Cell>
														</Table.Row>
													);
												},
											)}
										</Table.Body>
									</Table.Root>
								</Tabs.Content>
								<Tabs.Content id="c">
									<Table.Root
										aria-label="Files"
										compact
									>
										<Table.Header>
											<Table.Column
												allowsSorting
												isRowHeader
												width="2fr"
											>
												User
											</Table.Column>

											<Table.Column width="1fr">
												Job type
											</Table.Column>
											<Table.Column width="1fr">
												Job area
											</Table.Column>
										</Table.Header>

										<Table.Body>
											{Array.from({ length: 5 }).map(
												(_, index) => {
													return (
														<Table.Row key={index}>
															<Table.Cell>
																{faker.person.fullName()}
															</Table.Cell>

															<Table.Cell>
																{faker.person.jobType()}
															</Table.Cell>
															<Table.Cell>
																{faker.person.jobArea()}
															</Table.Cell>
														</Table.Row>
													);
												},
											)}
										</Table.Body>
									</Table.Root>
								</Tabs.Content>
							</App.Focused>
						</App.Main.Content>
					</Tabs.Container>

					<App.Main.Footer>
						<Button
							appearance="secondary"
							className="ml-auto"
						>
							Prev
						</Button>
						<Button appearance="secondary">Next</Button>
					</App.Main.Footer>
				</App.Main.Root>
			</>
		),
	},
};

function AppWithTable(args: ComponentProps<typeof App.Container>) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<App.Container {...args}>
				<App.Drawer.Root
					isOpen={isOpen}
					onOpenChange={setIsOpen}
				>
					<App.Drawer.Header title={"Drawer title"}>
						<App.Drawer.CloseButton />
					</App.Drawer.Header>
					<App.Drawer.Content>
						{faker.lorem.paragraphs(20)}
					</App.Drawer.Content>
				</App.Drawer.Root>
				<SideNav />
				<App.Main.Root>
					<App.Main.Header>
						<h1>All users</h1>
						<Button
							appearance="secondary"
							className="ml-auto"
							square
						>
							<Icon icon={faEllipsis} />
						</Button>
						<Button
							onPress={() => {
								setIsOpen(true);
							}}
						>
							Open drawer
						</Button>
					</App.Main.Header>
					<App.Main.Content>
						<App.Main.Toolbar>
							<Button appearance="secondary">Action 1</Button>
							<Button appearance="secondary">Action 2</Button>
						</App.Main.Toolbar>
						<Table.Root aria-label="Files">
							<Table.Header>
								<Table.Column
									allowsSorting
									isRowHeader
									width="2fr"
								>
									User
								</Table.Column>
								<Table.Column width="1fr">
									Job type
								</Table.Column>
								<Table.Column width="1fr">
									Job area
								</Table.Column>
							</Table.Header>
							<Table.Body>
								{Array.from({ length: 25 }).map((_, index) => {
									return (
										<Table.Row key={index}>
											<Table.Cell>
												{faker.person.fullName()}
											</Table.Cell>
											<Table.Cell>
												{faker.person.jobType()}
											</Table.Cell>
											<Table.Cell>
												{faker.person.jobArea()}
											</Table.Cell>
										</Table.Row>
									);
								})}
							</Table.Body>
						</Table.Root>
					</App.Main.Content>
					<App.Main.Footer>
						<Button
							appearance="secondary"
							className="ml-auto"
						>
							Prev
						</Button>
						<Button appearance="secondary">Next</Button>
					</App.Main.Footer>
				</App.Main.Root>
			</App.Container>
		</>
	);
}

export const WithTable: Story = {
	args: {
		children: null,
	},
	render: AppWithTable,
};
