import type { Meta, StoryObj } from "@storybook/react";

import { faker } from "@faker-js/faker";

import { Cell, Column, Row, Table, TableBody, TableHeader } from "..";
import { Avatar } from "../../avatar";
import { Box } from "../../box";
import { css } from "../../css/index.css";

function MockUserCell() {
    const name = faker.person.fullName();

    return (
        <Box
            alignItems="center"
            display="flex"
            gap="space_3"
        >
            <Avatar
                name={name}
                size={32}
            />
            <Box flexShrink="0">
                <Box
                    fontStyle="bodySm"
                    fontWeight="medium"
                >
                    {name}
                </Box>
                <Box
                    color="text_low_contrast"
                    fontStyle="bodySm"
                >
                    {faker.internet.email()}
                </Box>
            </Box>
        </Box>
    );
}

const meta = {
    args: {},
    component: Table,
    parameters: {
        layout: "padded",
    },
    render: (props) => {
        return (
            <>
                <Table
                    aria-label="Files"
                    className={css({ width: "100%" })}
                    {...props}
                >
                    <TableHeader>
                        <Column
                            isRowHeader
                            width="2fr"
                        >
                            User
                        </Column>

                        <Column width="1fr">Job type</Column>
                        <Column width="1fr">Job area</Column>
                    </TableHeader>

                    <TableBody>
                        {Array.from({ length: 5 }).map((_, index) => {
                            return (
                                <Row key={index}>
                                    <Cell>
                                        <MockUserCell />
                                    </Cell>

                                    <Cell>{faker.person.jobType()}</Cell>
                                    <Cell>{faker.person.jobArea()}</Cell>
                                </Row>
                            );
                        })}
                    </TableBody>
                </Table>
            </>
        );
    },
    title: "Components/Table",
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const RowsAsLinks: Story = {
    render: (props) => {
        return (
            <>
                <Table
                    aria-label="Files"
                    {...props}
                >
                    <TableHeader>
                        <Column
                            isRowHeader
                            width={300}
                        >
                            User
                        </Column>

                        <Column width={150}>Job type</Column>
                        <Column width={150}>Job area</Column>
                    </TableHeader>

                    <TableBody>
                        {Array.from({ length: 5 }).map((_, index) => {
                            return (
                                <Row
                                    href={faker.internet.url()}
                                    key={index}
                                >
                                    <Cell>
                                        <MockUserCell />
                                    </Cell>
                                    <Cell>{faker.person.jobArea()}</Cell>
                                    <Cell>{faker.person.jobTitle()}</Cell>
                                </Row>
                            );
                        })}
                    </TableBody>
                </Table>
            </>
        );
    },
};
