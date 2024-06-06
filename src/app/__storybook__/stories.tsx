import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";
import { faEllipsis } from "@fortawesome/pro-solid-svg-icons/faEllipsis";
import { faPerson } from "@fortawesome/pro-solid-svg-icons/faPerson";
import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";
import { faSearch } from "@fortawesome/pro-solid-svg-icons/faSearch";
import { faWallet } from "@fortawesome/pro-solid-svg-icons/faWallet";

import { App } from "..";
import { Button } from "../../button";
import { Icon } from "../../icon";
import { Menu } from "../../menu";
import { Popover } from "../../popover";
import { Table } from "../../table";
import { Tabs } from "../../tabs";

function SideNav() {
    return (
        <App.SideBar>
            <App.SideNavHeader>
                <App.OrgDisplay
                    image={undefined}
                    name="Acme Inc."
                />
            </App.SideNavHeader>
            <App.SideNavSection>
                <div className="flex gap-1">
                    <Menu.Trigger>
                        <App.Button
                            appearance="secondary"
                            className="grow"
                            icon={faPlus}
                        >
                            Create a file
                        </App.Button>
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
                    <Button
                        appearance="secondary"
                        square
                    >
                        <Icon icon={faSearch} />
                    </Button>
                </div>
            </App.SideNavSection>
            <App.SideNavSection>
                <App.Link
                    href="https://boondoggle.design"
                    icon={faPerson}
                >
                    Users
                </App.Link>
                <App.Link
                    href="https://boondoggle.design"
                    icon={faWallet}
                >
                    Accounts
                </App.Link>
            </App.SideNavSection>
        </App.SideBar>
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

export const WithTable: Story = {
    args: {
        children: (
            <>
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
                        <Button>Primary action</Button>
                    </App.Main.Header>
                    <App.Main.Content>
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
            </>
        ),
    },
};
