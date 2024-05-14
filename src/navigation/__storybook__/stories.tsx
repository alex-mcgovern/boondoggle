import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";
import { faGear } from "@fortawesome/pro-solid-svg-icons/faGear";
import { faPerson } from "@fortawesome/pro-solid-svg-icons/faPerson";
import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";
import { faUser } from "@fortawesome/pro-solid-svg-icons/faUser";
import { faWallet } from "@fortawesome/pro-solid-svg-icons/faWallet";

import { Navigation } from "..";
import { Icon } from "../../icon";
import { Main } from "../../main";
import { Menu } from "../../menu";
import { Popover } from "../../popover";

const meta = {
    args: {
        children: (
            <>
                <Navigation.SideBar>
                    <Menu.Trigger>
                        <Navigation.Button
                            align="center"
                            appearance="secondary"
                            icon={faPlus}
                        >
                            Create a file
                        </Navigation.Button>
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

                    <Navigation.Link
                        href=""
                        icon={faPerson}
                    >
                        Users
                    </Navigation.Link>
                    <Navigation.Link
                        href=""
                        icon={faWallet}
                    >
                        Accounts
                    </Navigation.Link>

                    <Menu.Trigger>
                        <Navigation.UserMenuTrigger
                            image={undefined}
                            name="Alex McGovern Smith"
                        />
                        <Popover placement="right bottom">
                            <Menu.MenuDecorativeSection>
                                <Navigation.UserMenuHeader
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
                </Navigation.SideBar>
                <Navigation.MainContent>
                    <Main width="md">{faker.lorem.paragraphs(10)}</Main>
                </Navigation.MainContent>
            </>
        ),
    },
    component: Navigation.Container,
    parameters: {
        layout: "fullscreen",
    },
    title: "Navigation",
} satisfies Meta<typeof Navigation.Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
