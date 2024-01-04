// eslint-disable-next-line import/no-extraneous-dependencies
import { Faker, en } from "@faker-js/faker";
import { createColumnHelper } from "@tanstack/react-table";
import { Avatar } from "../../__DONE__avatar";
import { Pill } from "../../pill";
import { Box } from "../../__DONE__box";
const faker = new Faker({ locale: [en] });

faker.seed(42);

export type MockTableData = {
	email_address: string;
	first_name: string;
	last_name: string;
	balance: number;
	points: number;
	status: "active" | "inactive" | "invited";
};

/**
 * Generate a mock account column.
 */
export const mockColumn = (): MockTableData => {
	return {
		email_address: faker.internet.email(),
		first_name: faker.person.firstName(),
		last_name: faker.person.lastName(),
		status: faker.helpers.arrayElement(["active", "inactive", "invited"]),
		balance: faker.number.int(10000),
		points: faker.number.int(10),
	};
};

const columnHelper = createColumnHelper<MockTableData>();

export const COLUMNS = [
	columnHelper.accessor(
		(row) => {
			return `${row.first_name} ${row.last_name} ${row.email_address}`;
		},
		{
			cell: ({ row }) => {
				return (
					<Box alignItems="center" display="flex" gap="space_2">
						<Avatar
							firstName={row.original.first_name}
							lastName={row.original.last_name}
							size={32}
						/>
						<Box>
							<Box fontWeight="medium" fontStyle="bodySm">
								{row.original.first_name}{" "}
								{row.original.last_name}
							</Box>
							<Box color="text_low_contrast" fontStyle="bodySm">
								{row.original.email_address}
							</Box>
						</Box>
					</Box>
				);
			},
			header: () => {
				return "Team member";
			},
			id: "member",
		},
	),
	columnHelper.accessor("status", {
		cell: (info) => {
			return <Pill>{info.getValue()}</Pill>;
		},
		enableColumnFilter: true,
		filterFn: "multiSelect",
		header: () => {
			return "Status";
		},
	}),
	columnHelper.accessor("balance", {
		cell: (info) => {
			return info.getValue() / 100;
		},
		enableColumnFilter: true,
		header: "Balance",
	}),
	columnHelper.accessor("points", {
		cell: (info) => {
			return info.getValue();
		},
		enableColumnFilter: true,
		header: "Points",
	}),
];
