import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";
import { faHome } from "@fortawesome/pro-solid-svg-icons/faHome";
import { faPerson } from "@fortawesome/pro-solid-svg-icons/faPerson";
import { faWallet } from "@fortawesome/pro-solid-svg-icons/faWallet";

import {
    AppShell,
    CollapsibleSideNav,
    CollapsibleSideNavProvider,
    SideNavLink,
} from ".";
import { css } from "../css/index.css";

const meta = {
    args: {
        children: (
            <>
                <SideNavLink
                    className={css({ marginBottom: "space_1" })}
                    icon={faHome}
                    isCurrent
                >
                    Home
                </SideNavLink>
                <SideNavLink
                    className={css({ marginBottom: "space_1" })}
                    icon={faPerson}
                >
                    Customers
                </SideNavLink>
                <SideNavLink
                    className={css({ marginBottom: "space_1" })}
                    icon={faWallet}
                >
                    Accounts
                </SideNavLink>
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
