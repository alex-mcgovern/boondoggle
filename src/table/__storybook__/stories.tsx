import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

import { faker } from "@faker-js/faker";
import { useState } from "react";

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
    title: "Table",
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

function SortingTable(props: ComponentProps<typeof Table.Root>) {
    const [users, setUsers] = useState(() => {
        return Array.from({ length: 5 }).map(() => {
            return {
                email: faker.internet.email(),
                name: faker.person.fullName(),
            };
        });
    });

    const [sortDescriptor, setSortDescriptor] = useState<
        | { column: string | undefined; direction: "ascending" | "descending" }
        | undefined
    >();

    const sortNameAsc = () => {
        setSortDescriptor({ column: "name", direction: "ascending" });
        return setUsers((prev) => {
            return [...prev].sort((a, b) => a.name.localeCompare(b.name));
        });
    };

    const sortNameDesc = () => {
        setSortDescriptor({ column: "name", direction: "descending" });
        return setUsers((prev) => {
            return [...prev].sort((a, b) => a.name.localeCompare(b.name));
        });
    };

    const sortEmailAsc = () => {
        setSortDescriptor({ column: "email", direction: "ascending" });
        return setUsers((prev) => {
            return [...prev].sort((a, b) => a.email.localeCompare(b.email));
        });
    };

    const sortEmailDesc = () => {
        setSortDescriptor({ column: "email", direction: "descending" });
        return setUsers((prev) => {
            return [...prev].sort((a, b) => a.email.localeCompare(b.email));
        });
    };

    return (
        <Table.ResizableContainer>
            <Table.Root
                aria-label="Files"
                {...props}
                onSortChange={({ column, direction }) => {
                    switch (column) {
                        case "name": {
                            if (direction === "ascending") {
                                return sortNameAsc();
                            } else {
                                return sortNameDesc();
                            }
                        }
                        case "email": {
                            if (direction === "ascending") {
                                return sortEmailAsc();
                            } else {
                                return sortEmailDesc();
                            }
                        }
                        default: {
                            return null;
                        }
                    }
                }}
                sortDescriptor={sortDescriptor}
            >
                <Table.Header>
                    <Table.Column
                        allowsSorting
                        id="name"
                        isRowHeader
                    >
                        Name
                    </Table.Column>
                    <Table.Column
                        allowsSorting
                        id="email"
                    >
                        Email
                    </Table.Column>
                </Table.Header>

                <Table.Body>
                    {users.map((user, index) => {
                        return (
                            <Table.Row key={index}>
                                <Table.Cell>{user.name}</Table.Cell>
                                <Table.Cell>{user.email}</Table.Cell>
                            </Table.Row>
                        );
                    })}
                </Table.Body>
            </Table.Root>
        </Table.ResizableContainer>
    );
}

export const AllowsSorting: Story = {
    render: SortingTable,
};
