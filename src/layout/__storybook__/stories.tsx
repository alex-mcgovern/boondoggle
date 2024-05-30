import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";
import { faAngleLeft } from "@fortawesome/pro-solid-svg-icons/faAngleLeft";
import { faPerson } from "@fortawesome/pro-solid-svg-icons/faPerson";
import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";
import { faShapes } from "@fortawesome/pro-solid-svg-icons/faShapes";
import { faWallet } from "@fortawesome/pro-solid-svg-icons/faWallet";

import { Layout } from "..";
import { Button } from "../../button";
import { Icon } from "../../icon";
import { Input } from "../../input";
import { Menu } from "../../menu";
import { Popover } from "../../popover";
import { SearchField } from "../../search-field";
import { Table } from "../../table";
import { Tabs } from "../../tabs";

const meta = {
    args: {
        children: (
            <>
                <Layout.TopNav>
                    <Layout.TopNavLeft>
                        <div className="flex gap-2 align-center">
                            <Icon icon={faShapes} />
                            Logo
                        </div>
                    </Layout.TopNavLeft>
                    <Layout.TopNavCenter>
                        <SearchField className="w-100">
                            <Input />
                        </SearchField>
                    </Layout.TopNavCenter>

                    <Layout.TopNavRight>
                        <Layout.Link
                            href="https://boondoggle.design"
                            icon={faPerson}
                        >
                            Users
                        </Layout.Link>
                        <Layout.Link
                            href="https://boondoggle.design"
                            icon={faWallet}
                        >
                            Accounts
                        </Layout.Link>
                    </Layout.TopNavRight>
                </Layout.TopNav>
                <Layout.Body>
                    <Layout.SideBar>
                        <Layout.SideNavHeader>
                            <Layout.OrgDisplay
                                image={undefined}
                                name="Acme Inc."
                            />
                        </Layout.SideNavHeader>
                        <Layout.SideNavSection>
                            <Menu.Trigger>
                                <Layout.Button
                                    align="center"
                                    appearance="secondary"
                                    icon={faPlus}
                                >
                                    Create a file
                                </Layout.Button>
                                <Popover placement="right top">
                                    <Menu.DropdownMenu>
                                        <Menu.Section>
                                            <Menu.Item>
                                                Create new document
                                            </Menu.Item>
                                            <Menu.Item>
                                                Create new folder
                                            </Menu.Item>
                                            <Menu.Item>
                                                Create a collection
                                            </Menu.Item>
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
                        </Layout.SideNavSection>
                        <Layout.SideNavSection>
                            <Layout.Link
                                href="https://boondoggle.design"
                                icon={faPerson}
                            >
                                Users
                            </Layout.Link>
                            <Layout.Link
                                href="https://boondoggle.design"
                                icon={faWallet}
                            >
                                Accounts
                            </Layout.Link>
                        </Layout.SideNavSection>
                    </Layout.SideBar>
                    <Layout.MainContentContainer>
                        <Tabs.Container>
                            <Layout.Header>
                                <Button appearance="secondary">
                                    <Icon icon={faAngleLeft} />
                                </Button>
                                {/* <h1>Title goes here</h1> */}

                                <Tabs.List center>
                                    <Tabs.Item id="a">Lorem ipsum</Tabs.Item>
                                    <Tabs.Item id="b">Dolores sit</Tabs.Item>
                                    <Tabs.Item id="c">Consectetur</Tabs.Item>
                                </Tabs.List>
                            </Layout.Header>
                            <Layout.MainContent>
                                <Layout.Focused>
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
                                                {Array.from({ length: 5 }).map(
                                                    (_, index) => {
                                                        return (
                                                            <Table.Row
                                                                key={index}
                                                            >
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
                                                            <Table.Row
                                                                key={index}
                                                            >
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
                                                            <Table.Row
                                                                key={index}
                                                            >
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
                                </Layout.Focused>
                            </Layout.MainContent>
                        </Tabs.Container>

                        <Layout.Footer>
                            <Button
                                appearance="secondary"
                                className="ml-auto"
                            >
                                Prev
                            </Button>
                            <Button appearance="secondary">Next</Button>
                        </Layout.Footer>
                    </Layout.MainContentContainer>
                </Layout.Body>
            </>
        ),
    },
    component: Layout.Container,
    parameters: {
        layout: "fullscreen",
    },
    title: "Layout",
} satisfies Meta<typeof Layout.Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
