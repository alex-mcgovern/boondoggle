import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";

import { Table } from "..";
import { Avatar } from "../../avatar";

function MockUserCell() {
    const name = faker.person.fullName();

    return (
        <div>
            <Avatar
                name={name}
                size={32}
            />
            <div>
                <div>{name}</div>
                <div>{faker.internet.email()}</div>
            </div>
        </div>
    );
}

const meta = {
    args: {},
    component: Table.Root,
    parameters: {
        layout: "padded",
    },
    render: (props) => {
        return (
            <>
                <Table.Root
                    aria-label="Files"
                    {...props}
                >
                    <Table.Header>
                        <Table.Column
                            allowsSorting
                            isRowHeader
                            width="2fr"
                        >
                            User
                        </Table.Column>

                        <Table.Column width="1fr">Job type</Table.Column>
                        <Table.Column width="1fr">Job area</Table.Column>
                    </Table.Header>

                    <Table.Body>
                        {Array.from({ length: 5 }).map((_, index) => {
                            return (
                                <Table.Row key={index}>
                                    <Table.Cell>
                                        <MockUserCell />
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
            </>
        );
    },
    title: "Components/Table",
} satisfies Meta<typeof Table.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const RowsAsLinks: Story = {
    render: (props) => {
        return (
            <>
                <Table.Root
                    aria-label="Files"
                    {...props}
                >
                    <Table.Header>
                        <Table.Column
                            isRowHeader
                            width={300}
                        >
                            User
                        </Table.Column>

                        <Table.Column width={150}>Job type</Table.Column>
                        <Table.Column width={150}>Job area</Table.Column>
                    </Table.Header>

                    <Table.Body>
                        {Array.from({ length: 5 }).map((_, index) => {
                            return (
                                <Table.Row
                                    href={faker.internet.url()}
                                    key={index}
                                >
                                    <Table.Cell>
                                        <MockUserCell />
                                    </Table.Cell>
                                    <Table.Cell>
                                        {faker.person.jobArea()}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {faker.person.jobTitle()}
                                    </Table.Cell>
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table.Root>
            </>
        );
    },
};
