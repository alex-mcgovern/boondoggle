import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";
import { faArrowRightArrowLeft } from "@fortawesome/pro-solid-svg-icons/faArrowRightArrowLeft";
import { faGear } from "@fortawesome/pro-solid-svg-icons/faGear";
import { faPerson } from "@fortawesome/pro-solid-svg-icons/faPerson";
import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";
import { faUser } from "@fortawesome/pro-solid-svg-icons/faUser";
import { faWallet } from "@fortawesome/pro-solid-svg-icons/faWallet";

import {
    AppShell,
    CollapsibleSideNav,
    CollapsibleSideNavProvider,
    SideNavButton,
    SideNavLink,
    SideNavUserMenuTrigger,
} from ".";
import { MOCK_AVATAR } from "../../mocks/mock_avatar";
import { Avatar } from "../avatar";
import { css } from "../css/index.css";
import { Icon } from "../icon";
import { MenuButton } from "../menu-button";

const meta = {
    args: {
        children: (
            <>
                {/* <SideNavLink
                    icon={faShapes}
                    isCurrent
                >
                    Home
                </SideNavLink> */}
                <MenuButton
                    items={[
                        {
                            children: [
                                {
                                    id: "payment",
                                    name: "Initiate a payment",
                                    slotLeft: (
                                        <Icon
                                            color="text_low_contrast"
                                            icon={faPlus}
                                        />
                                    ),
                                },
                                {
                                    id: "transactions",
                                    name: "All transactions",
                                },
                            ],
                            id: "payments",
                        },
                        {
                            children: [
                                {
                                    id: "create_batch_payment",
                                    name: "Create batch payment",
                                    slotLeft: (
                                        <Icon
                                            color="text_low_contrast"
                                            icon={faPlus}
                                        />
                                    ),
                                },
                                {
                                    id: "batch-payment",
                                    name: "All batch payments",
                                },
                            ],
                            id: "batch",
                            name: "Batch payment",
                        },
                        {
                            children: [
                                {
                                    id: "simulate-inbound-payment",
                                    name: "Simulate a payment",
                                },
                            ],
                            id: "sandbox",
                            name: "Sandbox",
                        },
                    ]}
                    placement="right top"
                >
                    <SideNavButton icon={faArrowRightArrowLeft}>
                        Payments
                    </SideNavButton>
                </MenuButton>
                <SideNavLink icon={faPerson}>Customers</SideNavLink>
                <SideNavLink icon={faWallet}>Accounts</SideNavLink>
                <div className={css({ marginTop: "auto" })}>
                    <MenuButton
                        items={[
                            {
                                children: [
                                    {
                                        id: "current_user",
                                        name: "Alex McGovern",
                                        slotLeft: (
                                            <Avatar
                                                imageSrc={MOCK_AVATAR}
                                                size={28}
                                            ></Avatar>
                                        ),
                                    },
                                ],
                                id: "section_user_name",
                            },
                            {
                                children: [
                                    {
                                        id: "org_name",
                                        name: "Acme Corp",
                                        slotLeft: (
                                            <Avatar
                                                firstName="Acme"
                                                size={16}
                                            />
                                        ),
                                    },
                                ],
                                id: "section_org_name",
                            },
                            {
                                children: [
                                    {
                                        id: "settings",
                                        name: "Settings",
                                        slotLeft: (
                                            <Icon
                                                color="text_low_contrast"
                                                icon={faGear}
                                            />
                                        ),
                                    },
                                    {
                                        id: "your_account",
                                        name: "Account",
                                        slotLeft: (
                                            <Icon
                                                color="text_low_contrast"
                                                icon={faUser}
                                            />
                                        ),
                                    },
                                ],
                                id: "section_manage",
                            },
                            {
                                children: [
                                    {
                                        id: "documentation",
                                        name: "Documentation",
                                    },
                                    {
                                        id: "help_center",
                                        name: "Help center",
                                    },
                                    {
                                        id: "status_page",
                                        name: "Status page",
                                    },
                                ],
                                id: "section_links",
                            },
                            {
                                children: [
                                    {
                                        id: "logout",
                                        name: "Log out",
                                    },
                                ],
                                id: "section_auth",
                            },
                        ]}
                        placement="right bottom"
                    >
                        <SideNavUserMenuTrigger
                            image={MOCK_AVATAR}
                            name="Alex McGovern"
                        />
                    </MenuButton>
                </div>
            </>
        ),
    },
    component: CollapsibleSideNav,
    parameters: {
        layout: "fullscreen",
    },
    render: (args) => {
        return (
            <CollapsibleSideNavProvider>
                <AppShell>
                    <CollapsibleSideNav {...args}></CollapsibleSideNav>
                    <main>{faker.lorem.paragraphs(10)}</main>
                </AppShell>
            </CollapsibleSideNavProvider>
        );
    },
    title: "CollapsibleSideNav",
} satisfies Meta<typeof CollapsibleSideNav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
