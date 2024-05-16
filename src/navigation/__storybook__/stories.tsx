import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";
import { faGear } from "@fortawesome/pro-solid-svg-icons/faGear";
import { faPerson } from "@fortawesome/pro-solid-svg-icons/faPerson";
import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";
import { faUser } from "@fortawesome/pro-solid-svg-icons/faUser";
import { faWallet } from "@fortawesome/pro-solid-svg-icons/faWallet";

import { Layout } from "..";
import { Icon } from "../../icon";
import { Menu } from "../../menu";
import { Popover } from "../../popover";

const meta = {
    args: {
        children: (
            <>
                <Layout.SideBar>
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

                    <Layout.Link
                        href=""
                        icon={faPerson}
                    >
                        Users
                    </Layout.Link>
                    <Layout.Link
                        href=""
                        icon={faWallet}
                    >
                        Accounts
                    </Layout.Link>

                    <Menu.Trigger>
                        <Layout.UserMenuTrigger
                            image={undefined}
                            name="Alex McGovern Smith"
                        />
                        <Popover placement="right bottom">
                            <Menu.MenuDecorativeSection>
                                <Layout.UserMenuHeader
                                    avatarSrc={undefined}
                                    name="Alex McGovern Smith"
                                    organization="Acme Inc."
                                />
                            </Menu.MenuDecorativeSection>
                            <Menu.DropdownMenu>
                                <Menu.Section>
                                    <Menu.SubMenuTrigger>
                                        <Menu.Item
                                            icon={<Icon icon={faGear} />}
                                        >
                                            Settings
                                        </Menu.Item>
                                        <Popover placement="right bottom">
                                            <Menu.DropdownMenu>
                                                <Menu.Item>General</Menu.Item>
                                                <Menu.Item>Team</Menu.Item>
                                                <Menu.Item>API keys</Menu.Item>
                                                <Menu.Item>Webhooks</Menu.Item>
                                            </Menu.DropdownMenu>
                                        </Popover>
                                    </Menu.SubMenuTrigger>

                                    <Menu.Item icon={<Icon icon={faUser} />}>
                                        Your profile
                                    </Menu.Item>
                                </Menu.Section>
                                <Menu.Section>
                                    <Menu.Item>Documentation</Menu.Item>
                                    <Menu.Item>Help center</Menu.Item>
                                    <Menu.Item>Status page</Menu.Item>
                                </Menu.Section>
                                <Menu.Section>
                                    <Menu.Item>Log out</Menu.Item>
                                </Menu.Section>
                            </Menu.DropdownMenu>
                        </Popover>
                    </Menu.Trigger>
                </Layout.SideBar>
                <Layout.MainContentContainer>
                    <Layout.FocusedColumn>
                        {faker.lorem.paragraphs(10)}
                    </Layout.FocusedColumn>
                </Layout.MainContentContainer>
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
