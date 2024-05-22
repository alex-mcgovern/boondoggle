import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";
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
                        <SearchField>
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
                            Org info goes here
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
                        <Layout.Header>
                            <h1>Title goes here</h1>
                            <Button className="ml-auto">Action</Button>
                        </Layout.Header>
                        <Layout.Focused>
                            {faker.lorem.paragraphs(10)}
                        </Layout.Focused>
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
