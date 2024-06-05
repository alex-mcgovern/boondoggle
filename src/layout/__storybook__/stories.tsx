import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";
import { faCircleA } from "@fortawesome/pro-solid-svg-icons/faCircleA";
import { faGear } from "@fortawesome/pro-solid-svg-icons/faGear";
import { faPerson } from "@fortawesome/pro-solid-svg-icons/faPerson";
import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";
import { faUser } from "@fortawesome/pro-solid-svg-icons/faUser";
import { faWallet } from "@fortawesome/pro-solid-svg-icons/faWallet";

import { Layout } from "..";
import { MOCK_AVATAR } from "../../../mocks/mock_avatar";
import { Avatar } from "../../avatar";
import { Button } from "../../button";
import { Icon } from "../../icon";
import { Input } from "../../input";
import { Menu } from "../../menu";
import { Popover } from "../../popover";
import { SearchField } from "../../search-field";
import { Table } from "../../table";
import { Tabs } from "../../tabs";

function TopNav() {
    return (
        <Layout.TopNav>
            <Layout.TopNavLeft>
                <div className="flex gap-2 align-center">
                    <Icon
                        icon={faCircleA}
                        size="xl"
                    />
                    <div className="nowrap font-medium">Acme Inc.</div>
                </div>
            </Layout.TopNavLeft>
            <Layout.TopNavCenter>
                <SearchField className="w-100">
                    <Input />
                </SearchField>
            </Layout.TopNavCenter>

            <Layout.TopNavRight>
                <Menu.Trigger>
                    <Button
                        appearance="ghost"
                        data-testid="user-menu"
                        size="md"
                        square
                    >
                        <Avatar
                            name="Alex McGovern"
                            size={32}
                            src={MOCK_AVATAR}
                        />
                    </Button>
                    <Popover placement="bottom right">
                        <Menu.MenuDecorativeSection>
                            <Layout.UserMenuHeader
                                avatarSrc={MOCK_AVATAR}
                                name="Alex McGovern"
                                organization="Acme Inc."
                            />
                        </Menu.MenuDecorativeSection>

                        <Menu.DropdownMenu>
                            <Menu.Item icon={<Icon icon={faUser} />}>
                                Your profile
                            </Menu.Item>

                            <Menu.Item icon={<Icon icon={faGear} />}>
                                Settings
                            </Menu.Item>
                            <Menu.Item>Log out</Menu.Item>
                        </Menu.DropdownMenu>
                    </Popover>
                </Menu.Trigger>
            </Layout.TopNavRight>
        </Layout.TopNav>
    );
}

function SideNav() {
    return (
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
                                <Menu.Item>Create new document</Menu.Item>
                                <Menu.Item>Create new folder</Menu.Item>
                                <Menu.Item>Create a collection</Menu.Item>
                            </Menu.Section>
                            <Menu.Section>
                                <Menu.SectionHeader>Import</Menu.SectionHeader>
                                <Menu.Item>Import an existing file</Menu.Item>
                                <Menu.Item>Import an existing folder</Menu.Item>
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
    );
}

const meta = {
    component: Layout.Container,
    parameters: {
        layout: "fullscreen",
    },
    title: "Layout",
} satisfies Meta<typeof Layout.Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithTabs: Story = {
    args: {
        children: (
            <>
                <TopNav />
                <Layout.Body>
                    <SideNav />
                    <Layout.MainContentContainer>
                        <Tabs.Container>
                            <Layout.Header
                                backHref="/"
                                title="Upload a file"
                            >
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
};

export const WithTable: Story = {
    args: {
        children: (
            <>
                <TopNav />
                <Layout.Body>
                    <SideNav />
                    <Layout.MainContentContainer>
                        <Layout.Header title="Table view lorem ipsum">
                            <Button className="ml-auto">Action button</Button>
                        </Layout.Header>
                        <Layout.MainContent>
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
                        </Layout.MainContent>

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
};
